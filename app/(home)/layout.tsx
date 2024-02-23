'use client';
import { Projects } from '@/components/component/projects';
import Intro from './components/Intro';
import { SparklesCore } from '@/components/ui/sparkles';

export default function HomepageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // Flex container adjusted for center alignment on mobile
        <>
            {' '}
            <div className="relative w-full h-screen">
                <SparklesCore
                    background="transparent"
                    minSize={0.5}
                    maxSize={1.2}
                    particleDensity={20}
                    className="absolute top-0 left-0 w-full h-full"
                />
                <div className="flex flex-col items-stretch justify-around">
                    <Intro />
                    <Projects />
                    {children}
                </div>
            </div>
        </>
    );
}
