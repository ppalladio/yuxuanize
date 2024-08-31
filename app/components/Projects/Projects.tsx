'use client';

import { RiNextjsLine } from 'react-icons/ri';
import ProjectCard from './ProjectCard';
import { SiDocker, SiMongodb, SiPostgresql, SiPrisma, SiStripe, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { LuFramer } from 'react-icons/lu';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
interface Props {}
const Projects = (props: Props) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const inView1 = useInView(ref1, { once: true });
    const inView2 = useInView(ref2, { once: true });
    const inView3 = useInView(ref3, { once: true });
    return (
        <div className="flex 2xl:flex-row flex-col items-center justify-center 2xl:justify-evenly ">
            <motion.div ref={ref1} initial={{ opacity: 0, y: 50 }} animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 20 }} transition={{ duration: 0.8, delay: inView1 ? 0.5 : 0 }}>
                <ProjectCard
                    header="Awal"
                    description="Awal is a community-driven initiative to foster the Tamazight language in the digital realm."
                    imageUrl="/projects/awal-logo.jpg"
                    buttonText={['Button 1', 'Try it']}
                    link={'https://www.awaldigital.org'}
                    techStackIcons={[RiNextjsLine, LuFramer, SiPrisma, SiMongodb, SiTailwindcss, SiDocker]}
                />
            </motion.div>
            <motion.div ref={ref2} initial={{ opacity: 0, y: 50 }} animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }} transition={{ duration: 0.8, delay: inView2 ? 0.7 : 0 }}>
                <ProjectCard
                    header="E-comm and Personal Fashion Project"
                    description="A e-comm website with a collection of garments directed by me."
                    imageUrl="/projects/ecomm.png"
                    buttonText={['Button 1', 'Try it']}
                    link={'https://unddd.yuxuanize.com'}
                    techStackIcons={[RiNextjsLine, SiPrisma, SiTypescript, SiPostgresql, SiStripe]}
                />
            </motion.div>
            <motion.div ref={ref3} initial={{ opacity: 0, y: 50 }} animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }} transition={{ duration: 0.8, delay: inView3 ? 0.9 : 0 }}>
                <ProjectCard
                    header="A booking site clone"
                    description="A partial clone of booking site ☁️b*b"
                    imageUrl="/projects/booking.png"
                    buttonText={['Button 1', 'Try it']}
                    link={'https://bookin-demo.yuxuanize.com'}
                    techStackIcons={[RiNextjsLine, SiPrisma, SiTypescript, SiMongodb, SiTailwindcss]}
                />
            </motion.div>
        </div>
    );
};
export default Projects;
