'use client';

import { RiNextjsLine } from 'react-icons/ri';
import ProjectCard from './ProjectCard';
import { SiDocker, SiMongodb, SiPostgresql, SiPrisma, SiStripe, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { LuFramer } from 'react-icons/lu';

interface Props {}
const Projects = (props: Props) => {
    return (
        <div className=" flex 2xl:flex-row flex-col items-center justify-center 2xl:justify-evenly ">
            <ProjectCard
                header="Awal"
                description="Awal is a community-driven initiative to foster the Tamazight language in the digital realm."
                imageUrl="/projects/awal-logo.jpg"
                buttonText={['Button 1', 'Try it']}
                link={'https://www.awaldigital.org'}
                techStackIcons={[RiNextjsLine, LuFramer, SiPrisma, SiMongodb, SiTailwindcss, SiDocker]}
            />
            <ProjectCard
                header="E-comm and Personal Fashion Project"
                description="A e-comm website with a collection of garments directed by me."
                imageUrl="/projects/ecomm.png"
                buttonText={['Button 1', 'Try it']}
                link={'https://unddd.yuxuanize.com'}
                techStackIcons={[RiNextjsLine, SiPrisma, SiTypescript, SiPostgresql, SiStripe]}
            />
            <ProjectCard
                header="A booking site clone"
                description="A partial clone of booking site ☁️b*b"
                imageUrl="/projects/booking.png"
                buttonText={['Button 1', 'Try it']}
                link={'https://bookin-demo.yuxuanize.com'}
                techStackIcons={[RiNextjsLine, SiPrisma, SiTypescript, SiMongodb, SiTailwindcss]}
            />
        </div>
    );
};
export default Projects;
