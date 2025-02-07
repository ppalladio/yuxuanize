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
    public roomChildren: { [key: string]: THREE.Object3D };
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
        this.roomChildren = {};
        this.setModel();
        this.onMouseMove();
    }
    setModel() {
        this.roomObject.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupChild) => {
                    groupChild.castShadow = true;
                    groupChild.receiveShadow = true;
                });
            }

            switch (child.name) {
                case 'screen':
                    (child as THREE.Mesh).material = new THREE.MeshBasicMaterial({
                        map: this.resources.items.screen,
                    });
                    break;

                case 'player_glass':
                case 'cup':
                    (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                        metalness: 0,
                        roughness: 0,
                        transmission: 1.0,
                        thickness: 2,
                        reflectivity: 0,
                        anisotropy: 1.0,
                    });
                    break;

                // case 'vinyl_record':
                // 	console.log(child.children)
                //     if (child.children[0].name === 'label') {
                //         (child.children[0] as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                //             metalness: 1,
                //             color: 'red',
                //         });
                //     }
                //     break;

                case 'walkway':
                    child.position.x = 1.20846;
                    child.position.z = 3.5;

                    break;

                // case 'mailbox':
                // case 'tile1':
                // case 'tile2':
                // case 'tile3':
                // case 'tile4':
                // case 'soil':
                // case 'flowers':
                // case 'lamp':
                // case 'lamp_glass':
                //     child.scale.set(0, 0, 0);
                //     break;

                case 'walkwayGlass':
                    (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                        emissive: 'white',
                        roughness: 0,
                        transmission: 1,
                        opacity: 0.5,
                        emissiveIntensity: 1,
                    });
                    break;
            }
            child.scale.set(0, 0, 0);
            if (child.name === 'prerender_box') {
                child.scale.set(1, 1, 1);
                child.position.set(0, 1, 0);
            }
            this.roomChildren[child.name] = child;
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
