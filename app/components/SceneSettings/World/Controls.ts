import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import { Resources, Sizes, Time } from '@/lib/three-utils';

import Camera from '../Camera';

export default class Controls {
    public experience: Experience;
    public scene: THREE.Scene;
    public sizes: Sizes;
    public resources: Resources;
    public time: Time;

    public camera: Camera;

    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;

    
    }

    public update() {}
}
