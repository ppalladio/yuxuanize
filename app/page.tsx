'use client';

import ExperienceComponent from './components/Experience/ExperienceComponent';

export default function Home() {
    return (
        <main className="">
            <div className="fixed w-screen h-screen">
                <ExperienceComponent />
            </div>
            <div className="w-full h-full z-30 " data-test-id>
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
                    <section className="first-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-400 mr-0 rounded-tr-[200px] rounded-br-[0px]">
                        <div className="section-intro-wrapper ">
                            <span className="text-red-600">About</span>
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
                    <div className="section-margin"></div>
                    <section className="second-section relative w-[50%] py-[1000px] px-[4%] m-0 overflow-hidden bg-slate-700 ml-0 rounded-tl-[200px] rounded-bl-[0px]">
                        <div className="section-intro-wrapper">
                            <span className="text-red-600">Work</span>
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
                </div>
            </div>
        </main>
    );
}
