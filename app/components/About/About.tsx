'use client';
import { motion, useInView } from 'framer-motion';
import { Dancing_Script, Pirata_One } from 'next/font/google';
import Image from 'next/image';
import { useRef } from 'react';
const dancing_script = Dancing_Script({ weight: '400', subsets: ['latin'] });

const About = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="min-h-screen flex-col-center">
            {' '}
            {/* Attach ref to a div */}
            {inView && ( // Render motion.div only if in view
                <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    initial={{ opacity: 0, y: 20 }}
                    className="my-6 border-2 border-gray-800 bg-gray-100 max-w-[80%] h-auto rounded-md mx-auto"
                >
                    <div className="p-5 flex flex-col items-start justify-center">
                        <h1 className={`${dancing_script.className} text-[60px] font-bold`}>Hi! I&apos;m Yuxuan</h1>
                        <span className="text-xl">
                            &#x2764; Coding, Design, Ceramics, Pastry, Fashion, and more. I&apos;ve worked on diverse projects, ranging from web development and community management to fashion and
                            business development.
                            <br />
                        </span>
                    </div>
                </motion.div>
            )}
        </div>
    );
};
export default About;
