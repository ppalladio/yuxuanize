'use client';

import { Switch } from '@/components/ui/switch';
import ExperienceComponent from './components/Experience/ExperienceComponent';
import { Sun, Moon } from 'lucide-react';
import Loading from './components/Loading';
import { useState } from 'react';
import { BackgroundLines } from '@/components/ui/background-lines';
import Icons from '@/components/Icons';
import { RiBlenderFill } from 'react-icons/ri';
import Project from '@/components/Project';
import BlenderCollage from '@/components/BlenderCollage';

export default function Home() {
    const [started, setStarted] = useState(false);

    return (
        <main className="light-theme">
            <Loading started={started} onStarted={() => setStarted(true)} />

            <div className={`transition-opacity duration-500 ${started ? 'opacity-100' : 'opacity-0'}`}>
                <div className="fixed w-screen h-screen">
                    <ExperienceComponent onLoaded={() => setStarted(true)} />
                </div>

                <div className="w-full h-full z-30">
                    {/* TODO: theme toggle env.ts */}
                    {/* <div className=" fixed flex-row-center top-10 right-10 z-40">
                        <div className="flex-row-center ">
                            <Sun />
                        </div>
                        <Switch className="toggle-button" /> @theme.ts

                        <div className="moon-wrapper">
                            <Moon />
                        </div>
                    </div> */}
                    {/* finish todo */}
                    <div className="relative">
                        <section className=" w-full h-full">
                            <div className="hero-wrapper">
                                <div className="hero-main">
                                    <h1 className="text-[60px]">ft.Yuxuan Peng</h1>
                                    <p className="text-3xl"></p>
                                </div>
                                <div className="hero-second">
                                    <h1 className="text-3xl uppercase">
                                        Into my room
                                        <br />
                                    </h1>
                                </div>
                            </div>
                        </section>
                        <div className="h-[3000px] first-move"></div>
                        {/* first section */}
                        <section className="first-section relative w-[50%] py-[20rem] px-[4%] m-0 overflow-hidden bg-slate-400/95 mr-auto rounded-tr-[700px] rounded-br-[0px]  section">
                            <div className="section-intro-wrapper ">
                                <span className="text-red-600">
                                    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                                        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
                                            01 About
                                        </h2>
                                    </BackgroundLines>
                                    <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"></div>
                                </span>
                            </div>

                            <div className="relative px-[10%] py-[5%]">
                                <Icons classNames="flex flex-row items-center justify-between px-20" />
                                <h3 className="text-3xl font-bold mt-[5rem] tracking-widest">Nice to Meet you, I am Yuxuan</h3>
                                <p className="text-base mt-4 trading-wider white">
                                    I'm a Front End/Full Stack Developer, specializing in <strong>React</strong>
                                    and <strong>Next.js</strong>, with a focus on creating user-friendly and visually appealing interfaces. In
                                    addition to my core web development skills, I leverage design tools like Figma and Blender to bring interactive
                                    and immersive visuals to life.
                                </p>
                                <h3 className="text-3xl font-bold mt-[5rem] capitalize">I like art and DIY</h3>
                                <p className="text-base mt-4">
                                    Outside of programming, I pursue a wide range of creative interests—from ceramics and psychology to fashion and
                                    hands-on DIY projects.
                                </p>
                                <h3 className="text-3xl font-bold mt-[5rem] capitalize">A little secret</h3>
                                <p className="text-base mt-4">I used to study finance, and had a fashion business venture.</p>
                            </div>
                        </section>
                        <div className="h-[2000px] second-move"></div>
                        {/* second section */}
                        <section className="second-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-300/95 ml-auto rounded-tl-[700px] rounded-bl-[0px] text-slate-500 section">
                            <div className="section-detail-wrapper">
                                <h3 className="text-2xl font-bold mt-[5rem] capitalize flex-row-center">heading1</h3>
                                <Project
                                    headerText="Awal"
                                    descriptionText="language"
                                    imageSrc="/projects/awal-logo.jpg"
                                    leftBtnLink="https://github.com/CollectivaT-dev/awal-web"
                                    leftBtnText="Repo	&gt;"
                                    rightBtnLink="https://awaldigital.org/?lang=en"
                                    rightBtnText="Visit it &gt;"
                                />
                                <Project
                                    headerText="Unddd"
                                    descriptionText="fashion adventure"
                                    imageSrc="/projects/ecomm.png"
                                    leftBtnLink="https://github.com/ppalladio/e-comm-front"
                                    leftBtnText="Repo	&gt;"
                                    rightBtnLink="https://unddd.yuxuanize.com/"
                                    rightBtnText="Visit it &gt;"
                                />
                                <Project
                                    headerText="Reservation Getaway Clone"
                                    descriptionText="one of early projects"
                                    imageSrc="/projects/booking.png"
                                    leftBtnLink="https://github.com/ppalladio/fullstack-booking-website"
                                    leftBtnText="Repo	&gt;"
                                    rightBtnLink="https://bookin-demo.yuxuanize.com/"
                                    rightBtnText="Visit it &gt;"
                                />
                            </div>
                        </section>
                        <div className="h-[2000px] third-move"></div>
                        {/* third section */}
                        <section className="third-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-400 mr-auto rounded-tr-[700px] rounded-br-[0px] text-green-500 section">
                            

                            <div className="relative px-[10%] py-[5%]">
                                <h3 className="text-3xl font-bold mt-[5rem] capitalize">Inspirations are like tides</h3>
                               <BlenderCollage/>
                            </div>
                        </section>
                        <div className="h-[2000px] forth-move"></div>

                        {/* about section */}

                        {/* <section className="forth-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-700 ml-auto rounded-tl-[700px] rounded-bl-[0px] text-blue-500 section">
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
                        </section> */}
                    </div>
                </div>
            </div>
        </main>
    );
}
