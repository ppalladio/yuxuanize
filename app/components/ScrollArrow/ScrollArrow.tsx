'use client';
import { motion } from 'framer-motion';

const ScrollArrow = () => {
    return (
        <motion.div animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.8 }} initial={{ opacity: 0, y: 20 }}  className="arrow mb-5">
            <span></span>
            <span></span>
            <span></span>
        </motion.div>
    );
};
export default ScrollArrow;
