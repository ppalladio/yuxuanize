'use client';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import IconGroup from '../IconGroup/IconGroup';
import { FlipWords } from '@/components/ui/flip-words';
import { motion } from 'framer-motion';
import { JetBrains_Mono, Dancing_Script, Pacifico, Pirata_One, Shadows_Into_Light } from 'next/font/google';

const words = [`Web Dev`, 'Marketing', 'Crypto', 'Ceramic', 'Pastry'];

const jetBrains_mono = JetBrains_Mono({ weight: '400', subsets: ['latin'] });
const dancing_script = Dancing_Script({ weight: '400', subsets: ['latin'] });
const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });
const pirata_one = Pirata_One({ weight: '400', subsets: ['latin'] });
const shadows_into_light = Shadows_Into_Light({ weight: '400', subsets: ['latin'] });

const wordColor = ['#8a4491', '#4B556C', '#305443', '#70801E', '#A97F23'];
const Hero = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center ">
                <TextHoverEffect text="Yuxuan" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-[80%] flex flex-row items-start relative text-[20px] lg:text-[60px] mt-[-2rem] lg:mt-[-6rem] font-semibold"
                >
                    <FlipWords words={words} wordFont={[jetBrains_mono, pirata_one, shadows_into_light, dancing_script, pacifico]} wordColor={wordColor} />
                </motion.div>
                <div className="mt-20">
                    <IconGroup />
                </div>
            </div>
        </div>
    );
};
export default Hero;
