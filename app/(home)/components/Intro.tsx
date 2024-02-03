import { motion } from 'framer-motion';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import Image from 'next/image';
import Icons from '@/components/Icons';
import styles from '@/app/main.module.css';
import Typer from './Typer';
import { SparklesCore } from '@/components/ui/SparklesCore';
interface IntroProps {
    setSelectedPage: (page: string) => void;
}
const particleParams = [
    { id: 'p1', density: 120, minSize: 0.6, maxSize: 1.4, color: '#fff' },
    { id: 'p2', density: 90, minSize: 0.5, maxSize: 1.3, color: '#fff' },
    { id: 'p3', density: 60, minSize: 0.4, maxSize: 1.2, color: '#fff' },
    { id: 'p4', density: 30, minSize: 0.3, maxSize: 1.1, color: '#fff' },
    { id: 'p5', density: 10, minSize: 0.2, maxSize: 1.0, color: '#fff' },
];
const Intro: React.FC<IntroProps> = () => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 992px)');
    return (
        <div className="h-screen">
            <div className="w-full absolute inset-0 flex flex-col items-center justify-center ">
                {particleParams.map((p) => (
                    <SparklesCore
                        key={p.id}
                        id={p.id}
                        background="transparent"
                        minSize={p.minSize}
                        maxSize={p.maxSize}
                        particleDensity={p.density}
                        className="w-full h-[20%] "
                        particleColor={p.color}
                    />
                ))}
            </div>
            <section id="home" className={styles.sec_intro}>
                {/* image  */}

                {/*//@ main */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32 flex flex-col justify-center items-center">
                    {/* Heading */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex-col items-center justify-center space-y-3"
                    >
                        <p className="text-6xl font-merriweather flex justify-center items-center xs:tracking-md">
                            Yuxuan
                            <br />{' '}
                            <span className="text-[#78A1BB] xs:relative xs:text-deep-blue xs:font-semibold">
                                Peng
                            </span>
                        </p>
                        <div>
                            <Typer />
                        </div>
                        <p className="mx-10 md:mx-5 text-sm md:text-[18px] leading-10 w-[70vw]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center justify-center space-y-3"
                    >
                        <Icons />
                    </motion.div>
                </div>
            </section>{' '}
        </div>
    );
};
export default Intro;
