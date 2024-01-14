'use client';

import { Navbar } from '@/components/Navbar';
import Intro from './components/Intro';
import Work from './components/Work';
import Projects from './components/Work';

export default function HomepageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex flex-row items-center justify-end ">
                <Navbar />
				<div className='mr-[10rem]'></div>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <Intro />
                <Projects  />
                {children}
            </div>
        </>
    );
}
