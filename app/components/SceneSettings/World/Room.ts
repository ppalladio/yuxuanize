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

            if (child.name !== 'prerender_box') {
                child.scale.set(0, 0, 0);
            } else {
                child.scale.set(1, 1, 1);
                child.position.set(0, 0, 0);
                child.castShadow = false;
                child.receiveShadow = false;
            }
            if (child instanceof THREE.Group) {
				
                child.children.forEach((groupChild) => {
                    groupChild.castShadow = true;
                    groupChild.receiveShadow = true;
                });
            }

            const objects = [
                'screen',
                'player_glass',
                'cup',
                'walkway',
                'mailbox',
                'tile1',
                'tile2',
                'tile3',
                'tile4',
                'soil',
                'flowers',
                'lamp',
                'lamp_glass',
                'walkwayGlass',
            ];

            objects.forEach((name) => {
                const obj = this.getMesh(name);
				
                if (!obj) return;

                switch (name) {
                    case 'screen':
                        (obj as THREE.Mesh).material = new THREE.MeshBasicMaterial({
                            map: this.resources.items.screen,
                        });
                        child.castShadow = false;
                        break;
                    case 'player_glass':
                    case 'cup':
                        (obj as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                            metalness: 0,
                            roughness: 0,
                            transmission: 1.0,
                            thickness: 2,
                            reflectivity: 0,
                            anisotropy: 1.0,
                        });
                        break;

                    case 'walkway':
                        obj.position.set(0.905773, 0.150638, 2.61832);
                        break;

                    case 'mailbox':
                    case 'tile1':
                    case 'tile2':
                    case 'tile3':
                    case 'tile4':
                    case 'soil':
                    case 'flowers':
                    case 'lamp':
                    case 'lamp_glass':
                        obj.scale.set(0, 0, 0);
                        break;

                    case 'walkwayGlass':
                        (obj as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                            emissive: 'white',
                            roughness: 0,
                            transmission: 1,
                            opacity: 0.5,
                            emissiveIntensity: 1,
                        });
                        break;
                }
            });

            this.roomObject.scale.set(0.3, 0.3, 0.3);
			
            this.roomChildren[child.name] = child;
        });

        this.scene.add(this.roomObject);
    }
    private readonly handleMouseMove = (e: MouseEvent) => {
        if (!this.roomChildren.prerender_box.visible) {
            this.rotation = (e.clientX - window.innerWidth / 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.1;
        }
    };
    public onMouseMove() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    public findObjectByName(root: THREE.Object3D, name: string): THREE.Object3D | null {
        // Check current node
        if (root.name.toLowerCase().includes(name.toLowerCase())) {
            return root;
        }
        // Recurse through children
        for (const child of root.children) {
            const found = this.findObjectByName(child, name);
            if (found) return found;
        }
        return null;
    }

    public getMesh(name: string) {
        return this.findObjectByName(this.roomObject, name);
    }
    public update() {
        this.lerp.current = gsap.utils.interpolate(this.lerp.current, this.lerp.target, this.lerp.ease);
        this.roomObject.rotation.y = this.lerp.current;
    }
}
