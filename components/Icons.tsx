import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Icons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <Link
                href="https://github.com/ppalladio"
                className="hover:opacity-50 hover:text-purple-700 transition duration-500"
                target="_blank"
            >
                <Github width={30} />
            </Link>
            <Link
                href="https://www.linkedin.com/in/yuxuanpeng/"
                className="hover:text-purple-700 transition duration-500"
                target="_blank"
            >
                <Linkedin width={30} />
            </Link>

            <Link
                href="mailto:yuxuan.peng@pm.me"
                className="hover:opacity-50 hover:text-purple-700 transition duration-500"
                target="_blank"
            >
                <Mail width={30} />
            </Link>
        </div>
    );
};
export default Icons;
