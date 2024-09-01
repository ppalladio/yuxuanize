'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const About = () => {
    const ref = useRef(null);  
    const inView = useInView(ref, { once: true });  

    return (
        <div ref={ref} className='min-h-screen flex-col-center'>
            {' '}
            {/* Attach ref to a div */}
            {inView && ( // Render motion.div only if in view
                <motion.div animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} initial={{ opacity: 0, y: 20 }} className="my-6 bg-gray-800 w-[90%] rounded-md mx-auto">
                    <div className="text-gray-200 p-5">cotent</div>
                </motion.div>
            )}
        </div>
    );
};
export default About;
