import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaBehance, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

interface IconsProps {
    classNames: string;
}
const Icons = ({ classNames }: IconsProps) => {
    return (
        <div className={classNames}>
            <Link href="https://github.com/ppalladio" target="_blank" className="hover:text-purple-300 hover:cursor-pointer duration-500 ">
                <FaGithub size={50} />
            </Link>
            <Link href="https://www.linkedin.com/in/yuxuanp/" target="_blank" className="hover:text-purple-300 hover:cursor-pointer duration-500 ">
                <FaLinkedin size={50} />
            </Link>
            <Link href="mailto:yuxuan.peng@pm.me" target="_blank" className="hover:text-purple-300 hover:cursor-pointer duration-500 ">
                <IoMdMail size={50} />
            </Link>
            {/* <Link href="mailto:yuxuan.peng@pm.me" target="_blank" className="hover:text-purple-300 hover:cursor-pointer duration-500 ">
                <FaBehance size={50} />
            </Link> */}
        </div>
    );
};
export default Icons;
