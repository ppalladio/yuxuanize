'use client';

import { Switch } from '@/components/ui/switch';
import ExperienceComponent from './components/Experience/ExperienceComponent';
import { Sun, Moon } from 'lucide-react';
export default function Home() {
    return (
        <main className="light-theme">
            <div className="fixed w-screen h-screen">
                <ExperienceComponent />
            </div>
            <div className="w-full h-full z-30" data-test-id>
                <div className="fixed flex-row-center top-10 right-10 z-40">
                    <div className="flex-row-center ">
                        <Sun />
                    </div>
                    <Switch className="toggle-button" />

                    <div className="moon-wrapper">
                        <Moon />
                    </div>
                </div>
                <div className="relative">
                    <section className=" w-full h-full">
                        <div className="hero-wrapper">
                            <div className="hero-main">
                                <h1 className="text-[60px]">Yuxuan Peng</h1>
                                <p className="text-3xl">title</p>
                            </div>
                            <div className="hero-second">
                                <h1 className="text-3xl uppercase">
                                    Portfolio <br />
                                </h1>
                            </div>
                        </div>
                    </section>
                    <div className="h-[2000px] first-move"></div>
                    {/* first section */}
                    <section className="first-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-400 mr-auto rounded-tr-[200px] rounded-br-[0px]">
                        <div className="section-intro-wrapper ">
                            <span className="text-red-600">About 01</span>
                        </div>

                        <div className="relative px-[10%] py-[5%]">
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading1</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading2</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading3</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                        </div>
                    </section>
                    <div className="h-[2000px] second-move"></div>
                    {/* second section */}
                    <section className="second-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-700 ml-auto rounded-tl-[200px] rounded-bl-[0px] text-blue-500">
                        <div className="section-intro-wrapper text-blue-500">
                            <span className=" text-blue-500">Work 02</span>
                        </div>

                        <div className="section-detail-wrapper">
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading1</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading2</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading3</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                        </div>
                    </section>
                    <div className="h-[2000px] third-move"></div>
                    {/* third section */}
                    <section className="third-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-400 mr-auto rounded-tr-[200px] rounded-br-[0px] text-green-500">
                        <div className="section-intro-wrapper text-green-500">
                            <span className=" text-green-500">third sectiond</span>
                        </div>

                        <div className="relative px-[10%] py-[5%]">
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading1</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading2</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading3</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                        </div>
                    </section>
                    <div className="h-[2000px] forth-move"></div>
                    {/* about section */}

                    <section className="forth-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-700 ml-auto rounded-tl-[200px] rounded-bl-[0px] text-blue-500">
                        <div className="section-intro-wrapper text-green-500">
                            <span className=" text-green-500">forth sectiond</span>
                        </div>

                        <div className="relative px-[10%] py-[5%]">
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading1</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading2</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                            <h3 className="text-3xl font-bold mt-[5rem] capitalize">heading3</h3>
                            <p className="text-base mt-4 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur in ratione rem minima officiis perspiciatis
                                magni iste corrupti sequi, vel iusto nemo fuga itaque id, accusantium adipisci illum soluta?
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
