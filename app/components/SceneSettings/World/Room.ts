import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import { Resources } from '@/lib/three-utils';
import { GLTFParser } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
export interface RoomProps {
    animation: [];
    assets: {};
    cameras: [];
    parser: GLTFParser;
    scene: THREE.Group;
    scenes: [THREE.Group];
    userData: {};
}
export default class Room {
    public experience: Experience;
    public scene: THREE.Scene;
    public resources: Resources;
    public lerp: {
        current: number;
        target: number;
        ease: number;
    };
    public rotation!: number;
    public room: RoomProps;
    public roomObject: THREE.Object3D;
    constructor(experience: Experience) {
        this.experience = experience;
        this.scene = this.experience.scene;

        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.roomObject = this.room.scene;
        this.lerp = {
            current: 0,
            target: 0,
            ease: 0.1,
        };
        this.setModel();
        this.onMouseMove();
    }
    setModel() {
        this.roomObject.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;
            // console.log(child);
            if (child instanceof THREE.Group) {
                child.children.forEach((groupChild) => {
                    groupChild.castShadow = true;
                    groupChild.receiveShadow = true;
                });
            }
            // play video
            if (child.name === 'screen') {
                (child as THREE.Mesh).material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
            }
            if (child.name === 'player_glass') {
                (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                    metalness: 0, // non-metallic object
                    roughness: 0, // highly polished surface, can adjust to add frosting
                    transmission: 1.0, // opacity while maintaining lightning
                    thickness: 2,
                    reflectivity: 0,
                    anisotropy: 1.0,
                });
            }
            if (child.name === 'vinyl_record') {
		
                if (child.children[0].name === 'label') (
					console.log(child.children[0]),
					child.children[0] as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
					metalness: 1,
					color:'red'

				});
            }
            if (child.name === 'cup') {
                (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                    metalness: 0, // non-metallic object
                    roughness: 0, // highly polished surface, can adjust to add frosting
                    transmission: 1.0, // opacity while maintaining lightning
                    thickness: 2,
                    reflectivity: 0,
                    anisotropy: 1.0,
                });
            }

            if (child.name === 'walkwayGlass') {
                // console.log(`${child.name} position:`, {
                // 	x: child.position.x,
                // 	y: child.position.y,
                // 	z: child.position.z
                // });
                (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                    emissive: 'white',
                    roughness: 0,
                    transmission: 1,
                    opacity: 0.5,
                    emissiveIntensity: 1,
                });
            }
        });
        this.roomObject.scale.set(0.3, 0.3, 0.3);
        this.scene.add(this.roomObject);
    }
    public onMouseMove() {
        window.addEventListener('mousemove', (e) => {
            this.rotation = (e.clientX - window.innerWidth / 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.1;
        });
    }
    public getMesh(meshName: string) {
        return this.roomObject.children.find((child) => child.name === meshName) || null;
    }
    public update() {
        this.lerp.current = gsap.utils.interpolate(this.lerp.current, this.lerp.target, this.lerp.ease);
        this.roomObject.rotation.y = this.lerp.current;
    }
}
