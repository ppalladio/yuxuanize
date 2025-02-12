import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import { Resources } from '@/lib/three-utils';
import GSAP from 'gsap';
export default class Env {
    public experience: Experience;
    public scene: THREE.Scene;
    public resources: Resources;
    public sunlight!: THREE.DirectionalLight;
    public ambientLight!: THREE.AmbientLight;
    public pointlight!: THREE.PointLight;
    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;

        this.setSunlight();
    }
    setSunlight() {
        this.sunlight = new THREE.DirectionalLight('rgb(227, 218, 202)', 1);
        this.sunlight.castShadow = true;
        this.sunlight.shadow.camera.far = 20;
        this.sunlight.shadow.mapSize.set(1024, 1024);
        this.sunlight.shadow.normalBias = 0.05;

        this.sunlight.position.set(-3, 7, 5);

        this.scene.add(this.sunlight);

        this.ambientLight = new THREE.AmbientLight('rgb(227, 218, 202)', 2);
        // console.log('set', this.sunlight.intensity, this.ambientLight.intensity);
        this.scene.add(this.ambientLight);
    }
    public switchTheme(theme: string) {
        if (theme === 'dark') {
            GSAP.to(this.sunlight.color, { r: 0 / 255, g: 0 / 255, b: 0 / 255 });
            GSAP.to(this.ambientLight.color, { r: 0 / 255, g: 0 / 255, b: 0 / 255 });
        } else {
            GSAP.to(this.sunlight.color, { r: 227, g: 218, b: 202 });
            GSAP.set(this.sunlight, { intensity: 0.9 / 100 });
            GSAP.to(this.ambientLight.color, { r: 227, g: 218, b: 202 });
            GSAP.set(this.ambientLight, { intensity: 0.9 / 100 });
        }
    }
}
