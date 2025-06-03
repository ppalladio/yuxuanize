import Icons from '@/components/Icons';
import StackIcon from '@/components/StackIcon';
import { BackgroundLines } from '@/components/ui/background-lines';
import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import Link from 'next/link';

const IntroSection = () => {
    return (
        <section className="first-section relative w-[50%] py-[20rem] px-[4%] m-0 overflow-hidden bg-slate-100/95 mr-auto rounded-tr-[700px] rounded-br-[500px]  section">
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
                    and <strong>Next.js</strong>, with a focus on creating user-friendly and visually appealing interfaces. In addition to my core web
                    development skills, I leverage design tools like Figma and Blender to bring interactive and immersive visuals to life.
                </p>
                <div className="flex flex-col gap-y-4">
                    <h3 className="text-3xl font-medium mt-[5rem] capitalize">Some of my stacks</h3>
                    <div className="flex items-start gap-2">
                        <StackIcon logo="react.svg" logoText="React" />
                        <StackIcon logo="next.svg" logoText="Next.js" />
                        <StackIcon logo="tailwind.svg" logoText="Tailwind" />
                        <StackIcon logo="python.svg" logoText="python" />
                        <StackIcon logo="aws.svg" logoText="AWS" />
                        <StackIcon logo="docker.jpeg" logoText="Docker" />
                        <StackIcon logo="playwright.png" logoText="Playwright" />
                    </div>
                    <div className="flex flex-row my-3">
                        A longer list, obviously, because&nbsp;
                        <ContainerTextFlip
                            hoverDelayMs={90}
                            words={[
                                "I'm endlessly curious and full of enthusiasm",
                                "I overcommit like it's an Olympic sport",
                                'My ADHD says sleep is optional, ideas are not',
                            ]}
                        />
                    </div>
                </div>
                <Link href="#3rd" onScroll={(e) => e.currentTarget.scrollIntoView({ behavior: 'smooth' })}>
                    <button className="px-5 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        More
                    </button>
                </Link>
            </div>
        </section>
    );
};
export default IntroSection;
