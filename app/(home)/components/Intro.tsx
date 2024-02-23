import { motion } from 'framer-motion';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import Image from 'next/image';
import Icons from '@/components/Icons';
import styles from '@/app/main.module.css';
import Typer from './Typer';
import { EvervaultCard, Icon } from '@/components/ui/evervault-card';
import { SparklesCore } from '@/components/ui/sparkles';

const Intro = () => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 992px)');
    return (
        <div className="w-full h-screen">
            {/* relative */}

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="border flex flex-col items-center justify-center mx-auto p-2 sm:p-4 relative max-w-xs sm:max-w-lg max-h-lg">
                    <Icon className="absolute h-6 w-6 -top-3 -left-3 " />
                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 " />
                    <Icon className="absolute h-6 w-6 -top-3 -right-3 " />
                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 " />
                    <EvervaultCard text="?" />
                    <section id="home" className={styles.sec_intro}>
                        <div className="z-30 basis-2/5 mt-2 md:mt-5 flex flex-col justify-center items-center p-10 sm:p-0">
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
                                className="flex-col items-center justify-center space-y-3 "
                            >
                                {' '}
                                <p className="text-3xl sm:text-5xl font-merriweather flex justify-center items-center xs:tracking-md">
                                    Yuxuan
                                    <br />{' '}
                                    <span className="text-[#78A1BB] xs:relative xs:text-deep-blue xs:font-semibold">
                                        Peng
                                    </span>{' '}
                                </p>
                                <Typer />
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
                    </section>
                </div>
            </div>
        </div>
    );
};
export default Intro;
