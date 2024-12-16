import * as THREE from 'three';
import Experience from '../../Experience/Experience';
import Room from './Room';
import { Resources, Sizes } from '@/lib/three-utils';
import Camera from '../Camera';
import Env from './Env';
import Controls from './Controls';
import Floor from './Floor';

export default class World {
    public experience: Experience;
    public environment!: Env;
    public controls!: Controls;
    public room!: Room;
    public resources: Resources;
    public camera: Camera;
    public sizes: Sizes;
    public canvas: HTMLCanvasElement;
	public floor!:Floor
    constructor(experience: Experience) {
        this.experience = experience;
        this.sizes = this.experience.sizes;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;
        this.resources.on('ready', () => {
            this.environment = new Env(experience);
			this.floor = new Floor(experience)
            this.controls = new Controls(experience);
            this.room = new Room(experience);
        });
    }
    public resize() {}
    public update() {
        if (this.room) this.room.update();
        if (this.controls) this.controls.update();
    }
}
