import Link from 'next/link';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import { FiGithub } from 'react-icons/fi';

interface Props {}
const IconGroup = (props: Props) => {
    return (
        <div className="flex flex-row items-center justify-center ">
            <Link href={''}>
                <CiLinkedin size={50} className="hover:text-purple-700 hover:ease-in-out  transition duration-300" />
            </Link>
            <Link href={''} className="mx-5">
                <FiGithub size={40} className="hover:text-yellow-400/95 hover:ease-in-out  transition duration-300" />
            </Link>
            <a href={`mailto:yuxuan.peng@pm.me`}>
                <CiMail size={50} className="hover:text-purple-700 hover:ease-in-out  transition duration-300" />
            </a>
        </div>
    );
};
export default IconGroup;
