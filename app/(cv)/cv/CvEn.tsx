'use client';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';

const CvEn = () => {
    return (
        <div className="flex flex-col justify-center items-center font-[200]">
            {/* header */}
            <header className="my-auto flex justify-around items-center ">
                <h1 className="font-semibold text-3xl  text-gray-300">
                    Yuxuan Peng
                </h1>
                <div className="grid grid-cols-2 gap-3 ">
                    <div>
                        <div>
                            <Link
                                href={'https://github.com/ppalladio'}
                                scroll={false}
                                target="_blank"
                            >
                                <SiGithub className="m-1 " />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href={'https://www.linkedin.com/in/yuxuanpeng/'}
                                scroll={false}
                                target="_blank"
                            >
                                <SiLinkedin className="m-1" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link
                                href={'mailto:yuxuan.peng@pm.me'}
                                scroll={false}
                                target="_blank"
                            >
                                <MdOutlineMail className="m-1" />
                            </Link>
                        </div>
                        <div>d</div>
                    </div>
                </div>
            </header>
            {/* labor	 */}
            <Separator className="w-[80vw] text-center" />
        </div>
    );
};
export default CvEn;
