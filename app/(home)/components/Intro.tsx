import { motion } from 'framer-motion';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import Image from 'next/image';
import Icons from '@/components/Icons';
import styles from '@/app/main.module.css'
import Typer from './Typer';
interface IntroProps {
    setSelectedPage: (page: string) => void;
}
const Intro: React.FC<IntroProps> = () => {
    const isAboveMediumScreen = useMediaQuery('(min-width: 992px)');
    return (
        <section
            id="home"
            className={styles.sec_intro}
        >
            {/* image  */}
            {/* <div className="md:order-2 flex justify-center   z-30">
                //! need to adjust the img and z-index
                {isAboveMediumScreen ? (
                    <div className="relative z-0 ml-20 ">
                        <Image
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src=""
                        />
                    </div>
                ) : (
                    <Image
                        src=""
                        alt="profile"
                        className="hover:filter hover:saturate-200 transition duration-500 z-20 w-full max-w-[400px] md:max-w-[600px] "
                    />
                )}
            </div> */}
            {/*//@ main */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32 flex-col justify-center items-center">
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
					className='flex-col items-center justify-center space-y-3'
                >
                    <p className="text-6xl font-merriweather text-slate-500 text-start md:text-center xs:tracking-md">
                        Yuxuan <br />
                        <span
                            className="text-slate-900 xs:relative xs:text-deep-blue xs:font-semibold xs:tracking-md
						"
                        >
                            Peng
                        </span>
                    </p>
					<div >
						
						<Typer/>
					</div>
                    <p className="mt-10 mb-7 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </motion.div>

                {/* cta  */}
                {/* 
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="flex mt-5 justify-center md:justify-start"
                >
                    <AnchorLink
                        className="bg-gradient-btn text-zinc-50 rounded-[2px] px-7 py-3 font-semibold hover:bg-green hover:text-white transition duration-500"
                        onClick={() => setSelectedPage('contact')}
                        href="#contact"
                    >
                        Contact
                    </AnchorLink>
                    <AnchorLink
            className="rounded-r-sm bg-gradient-btn py-1 px-1 "
            onClick={() => setSelectedPage('contact')}
            href="#contact"
        >
            <div className="bg-red hover:text-red transition duration-500 w-full h-full items-center flex justify-center font-merriweather px-10">
                talk
            </div>
        </AnchorLink>
                </motion.div> */}

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
					className='flex-col items-center justify-center space-y-3'
                >
                    <Icons />
                </motion.div>
            </div>
        </section>
    );
};
export default Intro;
