'use client';
import { Projects } from '@/components/component/projects';
import Intro from './components/Intro';
import Works from './components/Works';

export default function HomepageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // Flex container adjusted for center alignment on mobile
        <div className="flex flex-col items-stretch justify-around">
                <Intro />
                <Projects />
            {children}
        </div>
    );
}
