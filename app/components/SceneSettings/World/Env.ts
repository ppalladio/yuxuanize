import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import { Resources } from '@/lib/three-utils';
export default class Env {
    public experience: Experience;
    public scene: THREE.Scene;
    public resources: Resources;
    public sunlight!: THREE.DirectionalLight;
    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;

        this.setSunlight();
    }
    setSunlight() {
        this.sunlight = new THREE.DirectionalLight(0xffffff, 1);
        this.sunlight.castShadow = true;
        this.sunlight.shadow.camera.far = 20;
        this.sunlight.shadow.mapSize.set(1024, 1024);
        this.sunlight.shadow.normalBias = 0.05;

        this.sunlight.position.set(5, 5, 5);
        this.scene.add(this.sunlight);
    }
}
