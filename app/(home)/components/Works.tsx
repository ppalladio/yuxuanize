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
import { cn } from '@/utils/cn';
import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento';
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from '@tabler/icons-react';
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
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        title: 'The Dawn of Innovation',
        description:
            'Explore the birth of groundbreaking ideas and inventions.',
        header: <Skeleton />,
        className: 'col-span-1 md:col-span-2',
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Digital Revolution',
        description: 'Dive into the transformative power of technology.',
        header: <Skeleton />,
        className: 'md:col-span-1',
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Art of Design',
        description: 'Discover the beauty of thoughtful and functional design.',
        header: <Skeleton />,
        className: 'md:col-span-1',
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: 'The Power of Communication',
        description:
            'Understand the impact of effective communication in our lives.',
        header: <Skeleton />,
        className: 'md:col-span-2',
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
const Works = () => {
    // const isAboveLgScreen = useMediaQuery('(min-width: 1024px)');
    // const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
    return (
        <section
            id="projects"
            className="flex flex-col items-center justify-center"
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

            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};
export default Works;
