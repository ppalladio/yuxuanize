import { motion } from 'framer-motion';
import Image from 'next/image';

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
            <Image src={`/projects/${projectTitle}.jpg`} alt={projectTitle} width={500} height={500}/>
        </motion.div>
    );
};

// import LineGradient from '../components/LineGradient';
const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
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
                        <span className="text-red">PRO</span>
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
            <div className="flex justify-center">
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
                        title="awal logo"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis auctor semper. Vivamus vitae maximus purus. Sed eget ligula tellus. Maecenas ipsum tellus,"
                    />
                    <Work
                        title="Project 2"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis auctor semper. Vivamus vitae maximus purus. Sed eget ligula tellus. Maecenas ipsum tellus,"
                    />
                    {/* ROW 2 */}
                    {/* <Work title="Project 3" />
                    <Work title="Project 4" />
                    <Work title="Project 5" /> */}
                    {/* ROW 3 */}
                    {/* <Work title="Project 6" />
                    <Work title="Project 7" /> 
					<Work title="Project 1" /> */}
                </motion.div>
            </div>
        </section>
    );
};
export default Projects;
