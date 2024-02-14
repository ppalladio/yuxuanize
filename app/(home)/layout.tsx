'use client';
import Intro from './components/Intro';
import Works from './components/Works';

export default function HomepageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // Flex container adjusted for center alignment on mobile
        <div className="flex flex-col items-center justify-center w-full h-full md:flex-row md:justify-center md:items-stretch">
            <div className="flex w-full justify-center items-center md:flex-1 md:max-w-[50%]">
                <Intro />
            </div>
            <div className="flex w-full justify-center items-center md:flex-1 md:max-w-[50%]">
                <Works />
            </div>
            {children}
        </div>
    );
}
