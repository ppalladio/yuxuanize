'use client';

import Icons from '@/components/Icons';
import Project from '@/components/Project';
import { BackgroundLines } from '@/components/ui/background-lines';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import ExperienceComponent from './components/Experience/ExperienceComponent';
import Loading from './components/Loading';

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
                                <div className=" absolute left-0 md:bottom-[-50rem] bottom-[-45rem]">
                                    <h1 className="text-[50px] font-light italic">ft.Yuxuan Peng</h1>
                                    <p className="text-3xl"></p>
                                </div>
                                <div className="hero-second">
                                    <h1 className="text-[50px] uppercase font-normal ">Into my room</h1>
                                </div>
                            </div>
                        </section>
                        <div className="h-[3000px] first-move"></div>
                        {/* first section */}
                        <section className="first-section relative w-[50%] py-[20rem] px-[4%] m-0 overflow-hidden bg-slate-400/95 mr-auto rounded-tr-[700px] rounded-br-[0px]  section">
                            <div className="section-intro-wrapper ">
                                <span className="text-red-600">
                                    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                                        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-normal ">
                                            About
                                        </h2>
                                    </BackgroundLines>
                                    <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"></div>
                                </span>
                            </div>

                            <div className="relative px-[10%] py-[5%]">
                                <Icons classNames="flex flex-row items-center justify-between px-20" />
                                <h3 className="text-3xl  mt-[5rem] font-medium tracking-wide">Nice to Meet you, I am Yuxuan</h3>
                                <p className="text-base mt-4 trading-wide font-normal">
                                    I'm a Front End/Full Stack Developer, specializing in <strong>React </strong>
                                    and <strong>Next.js</strong>, with a focus on creating user-friendly and visually appealing interfaces. In
                                    addition to my core web development skills, I leverage design tools like Figma and Blender to bring interactive
                                    and immersive visuals to life.
                                </p>

                                <p className="text-base mt-4 trading-wide font-normal">
                                    Currently working as Fullstack developer for an aeronautic company, always interested in new projects or collabs.
                                </p>
                            </div>
                        </section>
                        <div className="h-[2000px] second-move"></div>
                        {/* second section */}
                        <section className="second-section relative w-[50%] py-[20rem] px-[4%] m-0 overflow-hidden bg-slate-300/95 ml-auto rounded-tl-[700px] rounded-bl-[0px]  section">
                            <div className="section-intro-wrapper">
                                <span className="text-red-600">
                                    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                                        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-normal ">
                                            Projects
                                        </h2>
                                    </BackgroundLines>
                                    <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"></div>
                                </span>
                            </div>
                            <Project
                                headerText="Awal"
                                descriptionText="Awal is a project that contributes to preserving and promoting the Tamazight language in the digital space by developing innovative tools that facilitate its use and dissemination."
                                imageSrc="/projects/awal-logo.jpg"
                                leftBtnLink="https://github.com/CollectivaT-dev/awal-web"
                                leftBtnText="Repo	&gt;"
                                rightBtnLink="https://awaldigital.org/?lang=en"
                                rightBtnText="Visit it &gt;"
                            />
                            <Project
                                headerText="Unddd"
                                descriptionText="my almost fashion company"
                                imageSrc="/projects/ecomm.png"
                                leftBtnLink="https://github.com/ppalladio/e-comm-front"
                                leftBtnText="Repo	&gt;"
                                rightBtnLink="https://unddd.yuxuanize.com/"
                                rightBtnText="Visit it &gt;"
                            />
                            <Project
                                headerText="AlmostBnb"
                                descriptionText="its not but its almost a bnb"
                                imageSrc="/projects/booking.png"
                                leftBtnLink="https://github.com/ppalladio/fullstack-booking-website"
                                leftBtnText="Repo	&gt;"
                                rightBtnLink="https://bookin-demo.yuxuanize.com/"
                                rightBtnText="Visit it &gt;"
                            />
                        </section>
                        <div className="h-[2000px] third-move"></div>
                        {/* third section */}
                        {/* <section className="third-section relative w-[50%] py-[20rem] px-[4%] m-0 overflow-hidden bg-slate-400 mr-auto rounded-tr-[700px] rounded-br-[0px] section">
                            <div className="third-intro-wrapper ">
                                <span className="text-red-600">
                                    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                                        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-normal ">
                                            Inspirations are like tides
                                        </h2>
                                    </BackgroundLines>
                                    <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center"></div>
                                </span>
                            </div>
                            <div className="relative px-[10%] py-[5%]">
                                <h1 className="text-3xl font-bold mt-[5rem] capitalize">Inspirations are like tides</h1>
                             <p>
								I like sci-fi and fantasy, so I often get inspired by the stories and visuals of these genres. i like hyperrealism 
							 </p>
                            </div>
                        </section> */}
                        {/* <section className="third-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-400 mr-auto rounded-tr-[700px] rounded-br-[0px] text-green-500 section">
                            

                            <div className="relative px-[10%] py-[5%]">
                                <h3 className="text-3xl font-bold mt-[5rem] capitalize">Inspirations are like tides</h3>
                               <BlenderCollage/>
                            </div>
                        </section> */}
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
