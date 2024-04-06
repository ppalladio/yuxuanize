'use client';
import Link from 'next/link';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { MdOutlineMail } from 'react-icons/md';
import { Separator } from '@/components/ui/separator';

const CvEn = () => {
    return (
        <div className="mx-auto font-[200]">
            {/* header */}
            <header className="my-auto flex flex-row justify-evenly items-center ">
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
            <div className="flex lg:flex-row flex-col lg:justify-evenly lg:items-center items-center justify-center my-10 mx-5">
                {/* group1 dev skills */}
                <div>
                    <div className="flex flex-row">
                        <Separator
                            className="h-auto px-[2px] mx-2 bg-slate-400"
                            orientation="vertical"
                        />
                        <div>
                            <h3 className="font-semibold text-xl capitalize">
                                Dev Toolkit
                            </h3>
                            <br />
                            <div className="grid grid-cols-2">
                                <span>
                                    <ul className="list-disc pl-5">
                                        <li>HTML/CSS/Tailwind</li>
                                        <li>Angular/RxJs/NgRx</li>
                                        <li>React/Next/Zustand/Zod</li>
                                        <li>Node/Express</li>
                                        <li>Jest/Cypress</li>
                                    </ul>
                                </span>
                                <span>
                                    <ul className="list-disc pl-5">
                                        <li>JavaScript/TypeScript</li>
                                        <li>Docker</li>
                                        <li>Git</li>
                                        <li>Adobe XD / Figma</li>
                                        <li>
                                            MySQL/MangoDB/Prisma/NeonDB/Aiven
                                        </li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section2 soft skills */}
                <div>
                    <div className="flex flex-row">
                        <Separator
                            className="h-auto px-[2px] mx-2 bg-slate-400"
                            orientation="vertical"
                        />
                        <div>
                            <h3 className="font-semibold text-xl capitalize pb-3">
                                soft skills
                            </h3>
                            <br />
                            <div className="grid grid-cols-2">
                                <span>
                                    <ul className="list-disc pl-5">
                                        <li>Problem-Solving</li>
                                        <li>Adaptability and Flexibility</li>
                                        <li>Time Management</li>
                                        <li>Critical Thinking</li>
                                    </ul>
                                </span>
                                <span>
                                    <ul className="list-disc pl-5">
                                        <li>Communication</li>
                                        <li>Collaboration</li>
                                        <li>Creativity and Innovation</li>
                                        <li>Self-Motivation and Learning</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Separator className="w-[80vw] text-center" />
            {/* labour */}
            <div className="flex flex-col my-10 mx-5 gap-y-3">
                <div>
                    <h2 className="text-2xl font-bold capitalize">
                        labour experiences
                    </h2>
                </div>
                {/* exp 1 */}
                <div>
                    <h3 className="text-xl font-[400] capitalize">
                        Full Stack Web Developer - Col·lectivaT
                    </h3>
                    <h4 className="text-sm text-gray-400">06/2023 - Current</h4>
                    <p>
                        <ol className="list-disc p-5 max-w-[80vw] whitespace-pre-wrap leading-7 tracking-wide font-[300] text-slate-200">
                            <li>
                                Successfully managed the complete development of
                                a translation website for marginalized
                                languages, including UX/UI design in Figma and
                                full-stack development with Next.js,
                                demonstrating significant self-learning and
                                problem-solving abilities.
                            </li>
                            <li>
                                Designing responsive and user-friendly
                                interfaces using Tailwind CSS, enhancing user
                                experience and site accessibility.
                            </li>
                            <li>
                                Developing a secure and efficient backend system
                                using Prisma and MongoDB, showcasing effective
                                decision-making in technology selection and data
                                management.
                            </li>
                            <li>
                                Implementing rigorous form data validation to
                                maintain frontend-backend data integrity,
                                reflecting a strong focus on quality and detail.
                            </li>
                            <li>
                                Optimized server-side operations by developing
                                and creating API in Next.js, improving data
                                processing and system performance.
                            </li>
                        </ol>
                    </p>
                </div>
                {/* exp2 */}
                <div>
                    <h3 className="text-xl font-[400] capitalize">
                        Community Manager - Mars Ecosystem{' '}
                    </h3>
                    <h4 className="text-sm text-gray-400">
                        09/2021 - 11/2023 ,Operational Manager / Human Resource
                    </h4>
                    <p>
                        <ol className="list-disc p-5 max-w-[80vw] whitespace-pre-wrap leading-7 tracking-wide font-[300] text-slate-200">
                            <li>
                                Planned and executed a successful online event
                                to promote a new product launch, resulting in
                                increased customer engagement and sales.
                            </li>
                            <li>
                                Proactively engaged with users to resolve
                                product issues and ensure high levels of
                                customer satisfaction and loyalty, utilizing
                                strong communication skills.
                            </li>
                            <li>
                                Strengthened communication and teamwork skills
                                by collaborating on various projects
                            </li>
                            <li>
                                Guided and supported new colleagues throughout
                                the onboarding process
                            </li>
                        </ol>
                    </p>
                </div>
                {/* exp3 */}
                <div>
                    <h3 className="text-xl font-[400] capitalize">
                        Business owner - Uncharteddd{' '}
                    </h3>
                    <h4 className="text-sm text-gray-400">09/2020 - 05/2021</h4>
                    <p className="max-w-[80vw] leading-7 tracking-wide font-[400] text-slate-200">
                        As the founder and team leader of a clothing brand
                        project, I successfully managed a team of five,
                        overseeing the entire development process from concept
                        to the pre-launch stage. Demonstrating adaptability, I
                        quickly acquired new skills in design, fabrication, and
                        marketing strategies, ensuring a smooth and efficient
                        project execution despite not launching the brand.
                    </p>
                    <p>
                        <ol className="list-disc p-5 max-w-[80vw] whitespace-pre-wrap leading-7 tracking-wide font-[300] text-slate-200">
                            <li>
                                Enhanced multitasking and decision-making
                                abilities by managing multiple roles in project
                                execution
                            </li>
                            <li>
                                Analyzed and reflected on past errors, such as
                                unnecessary expenses and redundant staffing,
                                leading to substantial personal and professional
                                growth
                            </li>
                        </ol>
                    </p>
                </div>
            </div>
            <Separator />
            {/* education */}
            <div className=" my-10 mx-5 space-y-5">
                <h2 className="text-2xl font-bold ">Education</h2>
                <div className="flex flex-col justify-center items-end lg:items-center lg:justify-evenly lg:flex-row space-x-5">
                    <span>
                        <h4>AWS Re/Start</h4>
                        <p className="text-gray-400 text-sm">
                            MigraCode, 2024/01 - Current
                        </p>
                    </span>
                    <span>
                        <h4>Data Science</h4>
                        <p className="text-gray-400 text-sm">
                            42 Barcelona, 2023/01 - Current
                        </p>
                    </span>
                    <span>
                        <h4>Data Science</h4>
                        <p className="text-gray-400 text-sm">
                            MigraCode, 2022/01 - 2022/09
                        </p>
                    </span>
                    <span>
                        <h4>Master of Finance</h4>
                        <p className="text-gray-400 text-sm">
                            Universitat Pompeu Fabra, 2017 - 2018
                        </p>
                    </span>

                    <span>
                        <h4>Master of Economic Analysis</h4>
                        <p className="text-gray-400 text-sm">
                            Universitat Autònoma de Barcelona, 2015 - 2017
                        </p>
                    </span>
                </div>
            </div>
            <Separator />
            {/* Language */}
            <div className=" my-10 mx-5 space-y-5 flex flex-col lg:flex-row lg:items-center lg:justify-evenly items-center justify-center">
                <span className="uppercase relative">
                    <h4>mandarin</h4>
                    <p className="absolute  text-2xl font-[700] top-2 left-4 text-gray-300">
                        Native
                    </p>
                </span>
                <span className="uppercase relative">
                    <h4>English</h4>
                    <p className="absolute  text-2xl font-[700] top-2 left-4 text-gray-300">
                        Bilingual
                    </p>
                </span>
                <span className="uppercase relative">
                    <h4>mandarin</h4>
                    <p className="absolute  text-2xl font-[700] top-2 left-4 text-gray-300">
                        Advan<span className="text-gray-500">ced/B2</span>
                    </p>
                </span>
            </div>
        </div>
    );
};
export default CvEn;
