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
                    // Initial state: keep the original position if needed.
                    loadingBox.position.set(0, 0, 0);
                    loadingBox.scale.set(2, 2, 2);

                    // Animate both rotation and upward movement.
                    GSAP.to(loadingBox.rotation, {
                        y: Math.PI * 2,
                        duration: 2,
                        repeat: -1,
                        ease: 'none',
                    });

                    // Animate the box upward to y = 2 over 1 second.
                    GSAP.to(loadingBox.position, {
                        y: 2, 
                        duration: 1,
                        ease: 'back.out(2)',
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
                            const sequences = [['room_p0', 'carpet_p1', 'lamp_p1'], ['cabinet_p1', 'desk_p1'], ['shelf_p1']];

                            // Adjust this value to control how high above each object starts
                            const offset = 3;
                            let delay = 0;

                            sequences.forEach((sequence) => {
                                sequence.forEach((objectName) => {
                                    const object = experience.world.room.roomChildren[objectName];
                                    if (object && !platformObjects.includes(objectName)) {
                                        // Save the original (final) Y position
                                        const finalY = object.position.y;
                                        // Set the initial state: scale 0 and position offset upward
                                        object.scale.set(0, 0, 0);
                                        object.position.y = finalY + offset;

                                        // Animate scale to full size
                                        roomTl.to(
                                            object.scale,
                                            {
                                                x: 1,
                                                y: 1,
                                                z: 1,
                                                duration: 0.7,
                                                ease: 'power3.out',
                                                delay: delay,
                                            },
                                            'same',
                                        );

                                        delay += 0.05;
                                    }
                                });
                                delay += 0.15;
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
                                x: 0,
                                y: 0,
                                z: 0,
                                duration: 0.8,
                                ease: 'power2.out',
                            },
                            '+=0.2',
                        )
                        .to(
                            loadingBox.position,
                            {
                                y: -2,
                                duration: 0.8,
                                ease: 'back.out(2)',
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
