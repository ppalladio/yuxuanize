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
    public camera: Camera;

    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.experience.world.room.roomObject;
        this.camera = this.experience.camera;
        this.setPath();
    }

    setPath() {
        // console.log(this.room);
        this.tl = GSAP.timeline();
        this.tl.to(this.room.position, {
            x: () => {
                return this.sizes.width * 0.002;
            },
            scrollTrigger: {
                trigger: '.first-move',
                markers: true,
                start: 'top',
                end: 'bottom bottom',
                scrub: 1,
                // TODO : Check model responsiveness on screen resize
                // invalidateOnRefresh: true
            },
        });
    }
    public update() {}
}
