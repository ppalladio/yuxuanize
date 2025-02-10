'use client';
import { useEffect, useRef } from 'react';
import Experience from './Experience';
import GSAP from 'gsap';
import * as THREE from 'three';

interface ExperienceComponentProps {
    onLoaded: () => void;
}

export default function ExperienceComponent({ onLoaded }: ExperienceComponentProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const experience = new Experience(canvasRef.current);
            let loadingBox: THREE.Object3D | null = null;

            // Initial loading animation
            experience.world.on('worldready', () => {
                loadingBox = experience.world.room.roomChildren.prerender_box;
                if (loadingBox) {
                    // Initial position and scale
                    loadingBox.scale.set(1, 1, 1);
                    loadingBox.position.set(0, 0, 0);

                    // Start rotating animation
                    GSAP.to(loadingBox.rotation, {
                        y: Math.PI * 2,
                        duration: 2,
                        repeat: -1,
                        ease: 'none',
                    });
                }
            });

            // Define platform objects that should only animate on scroll
            const platformObjects = ['walkway', 'tile1', 'tile2', 'tile3', 'tile4', 'soil', 'flowers', 'lamp', 'lamp_glass', 'mailbox'];

            // When resources are loaded, do final animation
            experience.resources.on('ready', () => {
                if (loadingBox) {
                    const tl = GSAP.timeline({
                        onComplete: () => {
                            if (loadingBox) {
                                loadingBox.visible = false;
                                loadingBox.traverse((child) => {
                                    child.userData.interactive = false;
                                    if (child instanceof THREE.Mesh) {
                                        child.raycast = () => {};
                                    }
                                });
                            }

                            // Create a new timeline for room objects animation
                            const roomTl = GSAP.timeline({
                                onComplete: () => {
                                    experience.world.room.onMouseMove();
                                    onLoaded();
                                },
                            });

                            // Define groups of objects to animate in sequence (excluding platform objects)
                            const sequences = [
                                ['room_g0', 'floor_g1', 'cabinet_g2'],

                                ['chair_g3', 'desk_g3', 'objects_s_g4'],
                            ];

                            let delay = 0;
                            sequences.forEach((sequence) => {
                                sequence.forEach((objectName) => {
                                    const object = experience.world.room.roomChildren[objectName];
                                    if (object && !platformObjects.includes(objectName)) {
                                        roomTl.to(object.scale, {
                                            x: 1,
                                            y: 1,
                                            z: 1,
                                            duration: 0.7,
                                            ease: 'power3.out',
                                            delay: delay,
                                        });
                                        delay += 0.05;
                                    }
                                });
                                delay += 0.2;
                            });

                            // Ensure platform objects start with scale 0
                            platformObjects.forEach((objectName) => {
                                const object = experience.world.room.roomChildren[objectName];
                                if (object) {
                                    object.scale.set(0, 0, 0);
                                }
                            });
                        },
                    });

                    // Prerender box exit animation
                    tl.to(loadingBox.rotation, {
                        y: Math.PI,
                        duration: 1.5,
                        ease: 'power2.inOut',
                    })
                        .to(
                            loadingBox.scale,
                            {
                                x: 30,
                                y: 30,
                                z: 30,
                                duration: 0.8,
                                ease: 'power2.in',
                            },
                            '+=0.2',
                        )
                        .to(
                            loadingBox.position,
                            {
                                y: -2,
                                duration: 0.8,
                                ease: 'power2.out',
                            },
                            '<',
                        )
                        .to(
                            loadingBox,
                            {
                                opacity: 0,
                                duration: 0.5,
                                ease: 'power2.in',
                            },
                            '<',
                        );
                }
            });

            return () => {
                window.removeEventListener('resize', () => {
                    experience.sizes.width = window.innerWidth;
                    experience.sizes.height = window.innerHeight;
                });
            };
        }
    }, [onLoaded]);

    return <canvas className="w-full h-full" ref={canvasRef} />;
}
