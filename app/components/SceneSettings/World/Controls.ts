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
            '(min-width: 960px)': () => {
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
                        return this.sizes.width * -0.002;
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
                                return -2.5;
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
                            x: -8,
                            z: 15,
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
                    )
                     
            },
            // hide model on scroll
            '(max-width: 960px)': () => {
                console.log('mobile');
            },
        });
    }
    public update() {}
}
