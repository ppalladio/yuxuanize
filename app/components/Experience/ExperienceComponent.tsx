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

            // When resources are loaded, do final animation
            experience.resources.on('ready', () => {
                if (loadingBox) {
                    const tl = GSAP.timeline({
                        onComplete: () => {
                            if (loadingBox) {
                                // Hide loading box and disable interactions
                                loadingBox.visible = false;
                                loadingBox.traverse((child) => {
                                    // Disable raycasting interactions
                                    child.userData.interactive = false;
                                    if (child instanceof THREE.Mesh) {
                                        child.raycast = () => {}; // Empty raycast function
                                    }
                                });
                            }

                            // Show and enable interactions for the rest of the room
                            experience.world.room.roomObject.children.forEach((child) => {
                                if (child.name !== 'prerender_box') {
                                    GSAP.to(child.scale, {
                                        x: 1,
                                        y: 1,
                                        z: 1,
                                        duration: 0.7,
                                        ease: 'power2.out',
                                    });
                                    // Enable interactions for room objects
                                    child.userData.interactive = true;
                                }
                            });

                            // Enable room mouse interactions
                            experience.world.room.onMouseMove();
                            onLoaded();
                        },
                    });

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
