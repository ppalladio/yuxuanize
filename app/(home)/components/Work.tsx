import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import useMediaQuery from '@/app/hooks/useMediaQuery';

interface ProjectProps {
    title: string;
    subtitle?: string;
}
const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};
export const Work: React.FC<ProjectProps> = ({ title, subtitle }) => {
    const projectTitle = title.split(' ').join('-').toLocaleLowerCase();
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 hover:backdrop-blur-md transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-merriweather">{title}</p>
                <p>{subtitle}</p>
            </div>
            <Image
                src={`/projects/${projectTitle}.jpg`}
                alt={projectTitle}
                width={500}
                height={500}
            />
        </motion.div>
    );
};

// import LineGradient from '../components/LineGradient';
const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const Projects = () => {
    const isAboveLgScreen = useMediaQuery('(min-width: 1024px)');
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
    return (
        <section
            id="projects"
            className="pt-48 pb-48 flex flex-col items-center justify-center"
        >
            {/* heading */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <div>
                    <p className="font-merriweather font-semibold text-4xl ">
                        <span className="text-red-200">PRO</span>
                        JECTS
                    </p>

                    <div className="flex justify-center mt-5">
                        {/* <LineGradient width="w-1/3" /> */}
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    mollis auctor semper. Vivamus vitae maximus purus. Sed eget
                    ligula tellus. Maecenas ipsum tellus, congue at volutpat
                    vitae, convallis eu turpis. Mauris interdum nibh sit amet
                    eleifend volutpat. Donec eu erat suscipit, auctor ligula et,
                    eleifend nisl.
                </p>
            </motion.div>

            {/* projects */}
            {/* //# grid view */}
            {/* <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    <div className="flex justify-center text-center items-center p-10 tbg-red max-w-[400px] max-h-[400px] text-2xl font-merriweather font-semibold">
                        TEXT
                    </div>
                    
                    <Work
                        title="Project 2"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis auctor semper. Vivamus vitae maximus purus. Sed eget ligula tellus. Maecenas ipsum tellus,"
                    />
                    ROW 2
                    <Work title="Project 3" />
                    <Work title="Project 4" />
                    <Work title="Project 5" />
                    ROW 3
                    <Work title="Project 6" />
                    <Work title="Project 7" /> 
					<Work title="Project 1" />
                </motion.div>
            </div> */}
            {/* //# carousel view */}

            {isAboveLgScreen ? (
                <Carousel
                    opts={{
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="max-w-[70vw]"
                >
                    <CarouselContent >
                        <CarouselItem >
                            <div>
                                <Card className='bg-slate-200 border-transparent'>
                                    <div className="flex flex-row items-center justify-center">
                                        <Image
                                            src={'/projects/awal-logo.jpg'}
                                            alt="awal"
                                            width={400}
                                            height={400}
                                            className="p-2 rounded-sm"
                                        />
                                        <p className="px-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Optio
                                            provident minus at nihil officiis
                                            cum, voluptas eaque. Veritatis
                                            beatae, praesentium, ab quis
                                            doloribus possimus ea aperiam
                                            delectus pariatur qui maxime.
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div>
                                <Card  className='bg-slate-200 border-transparent'>
                                    <div className="flex flex-row items-center justify-center max-w-[70vw]">
                                        <Image
                                            src={'/projects/awal-logo.jpg'}
                                            alt="awal"
                                            width={400}
                                            height={400}
                                            className="p-2 rounded-sm"
                                        />
                                        <p className="px-2">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Optio
                                            provident minus at nihil officiis
                                            cum, voluptas eaque. Veritatis
                                            beatae, praesentium, ab quis
                                            doloribus possimus ea aperiam
                                            delectus pariatur qui maxime.
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            ) : (
                <Carousel
                    opts={{
                        loop: true,
                    }}
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full max-w-xs"
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <Card className="rounded-sm">
                                    <Work
                                        title="awal logo"
                                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis auctor semper. Vivamus vitae maximus purus. Sed eget ligula tellus. Maecenas ipsum tellus,"
                                    />
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Work
                                            title="awal logo"
                                            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis auctor semper. Vivamus vitae maximus purus. Sed eget ligula tellus. Maecenas ipsum tellus,"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            )}
        </section>
    );
};
export default Projects;
