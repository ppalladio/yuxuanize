import { Resources, Sizes, Time } from '@/lib/three-utils';
import GSAP from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import Camera from '../Camera';

GSAP.registerPlugin(ScrollTrigger);

export default class Controls {
    public experience: Experience;
    public scene: THREE.Scene;
    public sizes: Sizes;
    public resources: Resources;
    public time: Time;
    public tl!: any;
    public room!: THREE.Object3D;
    public firstMoveTimeline!: gsap.core.Timeline;
    public secondMoveTimeline!: gsap.core.Timeline;
    public thirdMoveTimeline!: gsap.core.Timeline;
    public forthMoveTimeline!: gsap.core.Timeline;
    public platformTimeline!: gsap.core.Timeline;
    public sections!: any;
    public camera: Camera;

    public screenMesh!: THREE.Object3D | null;
    public vinylPlayerMesh!: THREE.Object3D | null;
    public vinylRecord!: THREE.Object3D | null;

    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.experience.world.room.roomObject;
        this.camera = this.experience.camera;
        this.setScrollTrigger();
        this.screenMesh = this.experience.world.room.getMesh('screen');
        this.vinylPlayerMesh = this.experience.world.room.getMesh('player_glass');
    }

    setScrollTrigger() {
        // TODO deprecation warning
        ScrollTrigger.matchMedia({
            '(min-width: 1024px)': () => {
                // first section
                this.firstMoveTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.first-move',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).to(this.camera.orthographicCamera.position, {
                    x: () => {
                        return this.sizes.width * -0.001;
                    },
                });
                // second section tl

                this.secondMoveTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.second-move',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.room.position,
                        {
                            x: () => {
                                return -1;
                            },
                            z: () => {
                                return this.sizes.height * 0.012;
                            },
                        },
                        'same',
                    )
                    .to(
                        this.room.scale,
                        {
                            x: 1.4,
                            y: 1.4,
                            z: 1.4,
                        },
                        'same',
                    );

                // third section tl

                this.thirdMoveTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.third-move',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.room.position,
                        {
                            // move the room 'left'+ and 'right'-
                            x: -8,
                            // move the room 'up'+ and 'down'-
                            z: 20,
                        },
                        'same',
                    )
                    .to(
                        this.room.scale,
                        {
                            x: 2,
                            y: 2,
                            z: 2,
                        },
                        'same',
                    );

                // outro contact section tl
                this.forthMoveTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.forth-move',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.camera.orthographicCamera.position,
                        {
                            x: -8,
                            z: 25,
                        },
                        'same',
                    )
                    .to(
                        this.room.scale,
                        {
                            x: 0.3,
                            y: 0.3,
                            z: 0.3,
                        },
                        'same',
                    );
            },
            // hide model on scroll mobile <1024
            '(max-width: 1024px)': () => {
                // 1st section
                this.firstMoveTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.first-move',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.room.scale,
                        {
                            x: 0.6,
                            y: 0.6,
                            z: 0.6,
                        },
                        'same',
                    )
                    .to(
                        this.room.position,
                        {
                            z: 5,
                        },
                        'same',
                    );
                //2nd section
                this.secondMoveTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.second-move',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.room.scale,
                        {
                            x: 1.2,
                            y: 1.2,
                            z: 1.2,
                        },
                        'same',
                    )
                    .to(
                        this.room.position,
                        {
                            x: 2,
                            z: 10,
                        },
                        'same',
                    );
                //3rd section
                this.thirdMoveTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.third-move',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.room.scale,
                        {
                            x: 3,
                            y: 3,
                            z: 3,
                        },
                        'same',
                    )
                    .to(
                        this.room.position,
                        {
                            x: -12,
                            z: 30,
                        },
                        'same',
                    );
                //4th section
                this.forthMoveTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.forth-move',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                    .to(
                        this.room.scale,
                        {
                            x: 0.5,
                            y: 0.5,
                            z: 0.5,
                        },
                        'same',
                    )
                    .to(
                        this.room.position,
                        {
                            x: 0,
                            z: 2,
                        },
                        'same',
                    );
            },
            all: () => {
                this.platformTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.forth-move',
                        start: 'center center',
                    },
                });

                // Find and animate walkway first
                // const walkway = this.experience.world.room.getMesh('walkway');

                // if (walkway) {
                //     this.platformTimeline
                //         .to(
                //             walkway.scale,
                //             {
                //                 x: 1,
                //                 y: 1,
                //                 z: 1,
                //                 duration: 1,
                //             },
                //             'same',
                //         )
                //         .to(
                //             walkway.position,
                //             {
                //                 x: -2,
                //                 z: 4.29758,
                //                 duration: 1,
                //             },
                //             'same',
                //         );
                // }

                // const orderedObjects = ['mailbox', 'tile1', 'tile2', 'tile3', 'tile4', 'soil', 'flowers'];
                // const startDelay = 1.2;

                // orderedObjects.forEach((objectName, index) => {
                //     const object = this.experience.world.room.getMesh(objectName);

                //     if (object) {
                //         this.platformTimeline.to(object.scale, {
                //             x: 1,
                //             y: 1,
                //             z: 1,
                //             ease: 'back.out(2)',
                //             delay: 0.2,
                //             duration: 0.3,
                //         });
                //     }
                // });

                // const lampObjects = this.room.children.filter((child) => ['lamp', 'lamp_glass'].includes(child.name));

                // lampObjects.forEach((child) => {
                //     this.platformTimeline.to(
                //         child.scale,
                //         {
                //             x: 1,
                //             y: 1,
                //             z: 1,
                //             ease: 'back.out(2)',
                //             duration: 0.3,
                //         },
                //         startDelay + orderedObjects.length * 0.2,
                //     );
                // });
                this.sections = document.querySelectorAll('.section');
                this.sections.forEach((section: HTMLElement) => {
                    if (section.classList.contains('ml-auto')) {
                        GSAP.to(section, {
                            borderTopLeftRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: 'top bottom',
                                end: 'top top',
                                scrub: 0.6,
                            },
                        });
                        GSAP.to(section, {
                            borderBottomLeftRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: 'bottom bottom',
                                end: 'bottom top',
                                scrub: 0.6,
                            },
                        });
                    } else {
                        GSAP.to(section, {
                            borderTopRightRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: 'top bottom',
                                end: 'top top',
                                scrub: 0.6,
                            },
                        });
                        GSAP.to(section, {
                            borderBottomRightRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: 'bottom bottom',
                                end: 'bottom top',
                                scrub: 0.6,
                            },
                        });
                    }
                });
            },
        });
    }

    public update() {}
}
