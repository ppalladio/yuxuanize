'use client';

import { RiNextjsLine } from 'react-icons/ri';
import ProjectCard from './ProjectCard';
import { SiDocker, SiMongodb, SiPostgresql, SiPrisma, SiStripe, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { LuFramer } from 'react-icons/lu';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { CardStack } from '@/components/ui/card-stack';

const Projects = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const inView3 = useInView(ref3, { once: true });

    const projectCards = [
        {
            ref: ref1,
            inView: inView1,
            delay: 0.5,
            header: 'Awal',
            description: 'Awal is a community-driven initiative to foster the Tamazight language in the digital realm.',
            imageUrl: '/projects/awal-logo.jpg',
            link: ['https://github.com/ppalladio/awal-web', 'https://www.awaldigital.org'],
            techStackIcons: [RiNextjsLine, LuFramer, SiPrisma, SiMongodb, SiTailwindcss, SiDocker],
        },
        {
            ref: ref2,
            inView: inView2,
            delay: 0.7,
            header: 'E-comm and Personal Fashion Project',
            description: 'A e-comm website with a collection of garments directed by me.',
            imageUrl: '/projects/ecomm.png',
            link: ['https://github.com/ppalladio/e-comm', 'https://unddd.yuxuanize.com'],
            techStackIcons: [RiNextjsLine, SiPrisma, SiTypescript, SiPostgresql, SiStripe],
        },
        {
            ref: ref3,
            inView: inView3,
            delay: 0.9,
            header: 'A booking site clone',
            description: 'A partial clone of booking site ☁️b*b',
            imageUrl: '/projects/booking.png',
            link: ['https://github.com/ppalladio/fullstack-booking-website', 'https://bookin-demo.yuxuanize.com'],
            techStackIcons: [RiNextjsLine, SiPrisma, SiTypescript, SiMongodb, SiTailwindcss],
        },
    ];

    return (
        <>
            {/* Mobile layout */}
            <div className="flex flex-col items-center justify-center min-h-screen xl:hidden">
                <div className="w-full max-w-md ">
                    <CardStack
                        items={projectCards.map((card, index) => ({
                            id: index,
                            name: card.header,
                            imageUrl: card.imageUrl,
                            content: (
                                <div>
                                    <p>{card.description}</p>
                                    <div className="mt-4 space-x-2">
                                        {card.link.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-2 py-1 mb-10 text-xs font-bold text-white bg-black rounded-md dark:bg-white dark:text-black"
                                            >
                                                {i === 0 ? 'Github' : 'Try it'}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="flex mt-5">
                                        {card.techStackIcons.map((Icon, i) => (
                                            <Icon key={i} size={20} className="mr-1 text-neutral-500 dark:text-neutral-300" />
                                        ))}
                                    </div>
                                </div>
                            ),
                        }))}
                    />
                </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden xl:flex flex-row items-center justify-evenly section h-screen">
                {projectCards.map((card, index) => (
                    <motion.div
                        key={index}
                        ref={card.ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: card.inView ? 1 : 0, y: card.inView ? 0 : 20 }}
                        transition={{ duration: 0.8, delay: card.inView ? card.delay : 0 }}
                    >
                        <ProjectCard
                            header={card.header}
                            description={card.description}
                            imageUrl={card.imageUrl}
                            buttonText={['Github', 'Try it']}
                            links={card.link}
                            techStackIcons={card.techStackIcons}
                        />
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default Projects;
