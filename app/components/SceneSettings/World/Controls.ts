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

    public camera: Camera;

    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.experience.world.room.roomObject;
        this.camera = this.experience.camera;
        this.setScrollTrigger();
    }

    setScrollTrigger() {
        // TODO deprecation warning
        ScrollTrigger.matchMedia({
            '(min-width: 960px)': () => {
                console.log('desktop');
                // first section
                this.firstMoveTimeline = GSAP.timeline({
                    scrollTrigger: {
                        trigger: '.first-move',
                        start: 'top top',
                        end: 'bottom bottom',
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                });
                this.firstMoveTimeline.to(this.room.position, {
                    x: () => {
                        console.log(this.room.position);
                        return this.sizes.width * 0.002;
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
                                // console.log(this.room.position);
                                return 1;
                            },

                            z: () => {
                                return this.sizes.height * 0.005;
                            },
                        },
                        'same',
                    )
                    .to(
                        this.room.scale,
                        {
                            x: 1.1,
                            y: 1.1,
                            z: 1.1,
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
                }).to(this.camera.orthographicCamera.position, {
					y: 1.5,
                    x: () => {
                        return this.sizes.width * 0.002;
                    },
                }); 
            },
            // hide model on scroll
            '(max-width: 960px)': () => {
                console.log('mobile');
            },
        });
    }
    public update() {}
}
