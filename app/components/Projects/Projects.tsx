'use client';

import ProjectCard from './ProjectCard';

interface Props {}
const Projects = (props: Props) => {
    return (
        <div className=" flex 2xl:flex-row flex-col items-center justify-center 2xl:justify-evenly ">
            <ProjectCard header="Project 1" description="This is project 1" imageUrl="" buttonText={['Button 1', 'Button 2']} />
            <ProjectCard header="Project 2" description="This is project 1" imageUrl="" buttonText={['Button 1', 'Button 2']} />
            <ProjectCard header="Project 3" description="This is project 1" imageUrl="" buttonText={['Button 1', 'Button 2']} />
        </div>
    );
};
export default Projects;
