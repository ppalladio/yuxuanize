import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import { Resources, Sizes, Time } from '@/lib/three-utils';
import GSAP from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Camera from '../Camera';
import { invalidate } from '@react-three/fiber';

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
    public vinylRecordLabel!: THREE.Object3D | null;

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
        this.vinylRecord = this.experience.world.room.getMesh('vinyl_record');

        this.vinylRecordLabel = this.experience.world.room.getMesh('vinyl_record')!.children[0];
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
                // TODO adjust the height so the move would be slower

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
                                return this.sizes.height * 0.007;
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
                            z: 11,
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
                            z: 23,
                        },
                        'same',
                    )
                    .to(
                        this.room.scale,
                        {
                            x: 0.9,
                            y: 0.9,
                            z: 0.9,
                        },
                        'same',
                    );
            },
            // hide model on scroll
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
                }).to(this.room.scale, {
                    x: 0.6,
                    y: 0.6,
                    z: 0.6,
                });
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
                            z: 2,
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
                            x: 1.5,
                            y: 1.5,
                            z: 1.5,
                        },
                        'same',
                    )
                    .to(
                        this.room.position,
                        {
                            x: -4,
                            z: 5,
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
                            x: 1.2,
                            y: 1.2,
                            z: 1.2,
                        },
                        'same',
                    )
                    .to(
                        this.room.position,
                        {
                            x: 4,
                            z: -7,
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
                const walkway = this.room.children.find((child) => child.name === 'walkway');
                if (walkway) {
                    this.platformTimeline.to(
                        walkway.position,
                        {
                            x: -1.69728,
                            z:5.29758 ,
                            duration: 1,
                        },
                        0.2,
                    );
                }

                const orderedObjects = ['mailbox', 'tile1', 'tile2', 'tile3', 'tile4', 'soil', 'flowers'];
                const startDelay = 1.2;

                orderedObjects.forEach((objectName, index) => {
                    const object = this.room.children.find((child) => child.name === objectName);
                    if (object) {

                        this.platformTimeline.to(
                            object.scale,
                            {
                                x: 1,
                                y: 1,
                                z: 1,
                                ease: 'back.out(2)',
                                duration: 0.3,
                            },
                            startDelay + index * 0.2,
                        )
                    }
                });

                const lampObjects = this.room.children.filter((child) => ['lamp', 'lamp_glass'].includes(child.name));

                lampObjects.forEach((child) => {
                    this.platformTimeline.to(
                        child.scale,
                        {
                            x: 1,
                            y: 1,
                            z: 1,
                            ease: 'back.out(2)',
                            duration: 0.3,
                        },
                        startDelay + orderedObjects.length * 0.2,
                    );
                });
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
