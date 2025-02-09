// import { EventEmitter } from 'events';
// import Experience from './Experience/Experience';
// import { Resources, Sizes } from '@/lib/three-utils';
// import Camera from './SceneSettings/Camera';
// import * as THREE from 'three';
// import GSAP from 'gsap';
// import World from './SceneSettings/World/World';
// import { ScrollTrigger } from 'gsap/all';

// GSAP.registerPlugin(ScrollTrigger);

// export default class Preloader extends EventEmitter {
//     public experience: Experience;
//     public sizes: Sizes;
//     public scene: THREE.Scene;
//     public resources: Resources;
//     public room!: THREE.Object3D;
//     public tl!: gsap.core.Timeline;
//     public tlSecond!: gsap.core.Timeline;
//     public roomChildren: any;
//     public device: string;
//     private readonly onScrollHandler: (e: WheelEvent) => void;
//     public camera: Camera;
//     public world: World;

//     constructor(experience: Experience) {
//         super();
//         this.experience = experience;
//         this.sizes = this.experience.sizes;
//         this.scene = this.experience.scene;
//         this.resources = this.experience.resources;
//         this.camera = this.experience.camera;
//         this.world = this.experience.world;
//         this.device = this.sizes.device;
//         this.onScrollHandler = this.onScroll.bind(this);
//         this.sizes.on('switchdevice', (device: string) => {
//             this.device = device;
//         });
//         this.world.on('worldready', () => {
//             this.setAsset();
//             this.playIntro();
//         });
//     }

//     public setAsset() {
//         this.room = this.experience.world.room.roomObject;
//         this.roomChildren = this.experience.world.room.roomChildren;
//     }
//     //* first intro
//     public firstIntro() {
//         return new Promise((resolve) => {
//             this.tl = GSAP.timeline();
//             if (this.device === 'desktop') {
//                 this.tl
//                     .to(
//                         this.roomChildren.prerender_box.scale,
//                         {
//                             x: 1.4,
//                             y: 1.4,
//                             z: 1.4,
//                             ease: 'back.out(2.5)',
//                             duration: 2,
//                         },
//                         'same',
//                     )
//                     .to(
//                         this.roomChildren.prerender_box.position,
//                         {
//                             x: -8,
//                             ease: 'power1.out',
//                             duration: 0.7,
//                             onComplete: resolve,
//                         },
//                         'same',
//                     );
//             } else {
//                 this.tl
//                     .to(
//                         this.roomChildren.prerender_box.scale,
//                         {
//                             x: 1.4,
//                             y: 1.4,
//                             z: 1.4,
//                             ease: 'back.out(2.5)',
//                             duration: 2,
//                         },
//                         'same',
//                     )
//                     // TODO : the movement is reversed room.position
//                     .to(
//                         this.roomChildren.prerender_box.position,
//                         {
//                             z: -5,
//                             ease: 'power1.out',
//                             duration: 0.7,
//                             onComplete: resolve,
//                         },
//                         'same',
//                     );
//             }
//         });
//     }
//     public async playIntro() {
//         await this.firstIntro();
//         window.addEventListener('wheel', this.onScrollHandler);
//     }

//     // * second intro
//     public secondIntro() {
//         return new Promise((resolve) => {
//             this.tlSecond = GSAP.timeline({
//                 scrollTrigger: {
//                     trigger: '.first-move',
//                     start: 'top top',
//                     end: 'bottom bottom',
//                     scrub: 0.6,
//                     invalidateOnRefresh: true,
//                 }
//             });
//             if (this.device === 'desktop') {
//                 this.tl
//                     .to(
//                         this.room.position,
//                         {
//                             x: 0,
//                             y: 0,
//                             z: 0,
//                             ease: 'power1.out',
//                             duration: 2,
//                         },
//                         'same',
//                     )
//                     .to(
//                         this.roomChildren.prerender_box.rotation,
//                         {
//                             y: 2 * Math.PI + Math.PI / 2,
//                             duration: 2,
						
//                         },
//                         'same',
//                     )
//                     .to(
//                         this.roomChildren.prerender_box.scale,
//                         {
//                             x: 5,
//                             y: 5,
//                             z: 5,
						
//                             duration: 5,
//                         },
//                         'same',
//                     )
//                 //     .to(
//                 //         this.camera.orthographicCamera.position,
//                 //         {
//                 //             y: 5.2,
//                 //             duration: 2,
//                 //         },
//                 //         'same',
//                 //     )
//                     .to(
//                         this.roomChildren.prerender_box.position,
//                         {
//                             x: 0,
//                             y: 4.62552,
//                             z: 0.840302,
						
//                             duration: 2,
//                         },
//                         'same',
//                     );
//             } else {
//                 this.tlSecond.to(this.room.position, {
//                     x: 0,
//                     y: 0,
//                     z: 0,
//                     ease: 'power1.out',
//                     duration: 2,
//                     onComplete: resolve,
//                 });
//             }
//         });
//     }
//     public async playSecondIntro() {
//         await this.secondIntro();
//     }

//     public onScroll(e: WheelEvent) {
//         if (e.deltaY > 0) {
//             window.removeEventListener('wheel', this.onScrollHandler);
//             console.log('scroll');
//             this.playSecondIntro();
//         }
//     }
//     public resize() {}
// }
