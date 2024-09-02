'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';

interface Props {}
const IconGroup = (props: Props) => {
    return (
        <motion.div className="flex flex-row items-center justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <Link href={'https://www.linkedin.com/in/yuxuanp/'} target="_blank">
                <CiLinkedin size={50} className="hover:text-purple-700 hover:ease-in-out  transition duration-300" />
            </Link>
            <Link href={'https://github.com/ppalladio'} className="mx-5" target="_blank">
                <FiGithub size={40} className="hover:text-yellow-400/95 hover:ease-in-out  transition duration-300" />
            </Link>
            <a href={`mailto:yuxuan.peng@pm.me`} target="_blank">
                <CiMail size={50} className="hover:text-purple-700 hover:ease-in-out  transition duration-300" />
            </a>
        </motion.div>
    );
};
export default IconGroup;
