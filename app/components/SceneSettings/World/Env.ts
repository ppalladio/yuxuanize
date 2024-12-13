import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import { Resources } from '@/lib/three-utils';
export default class Env {
    public experience: Experience;
    public scene: THREE.Scene;
    public resources: Resources;

    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;
    }
    setModel() {}
}
