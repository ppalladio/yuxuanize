
import { lazy, Suspense } from 'react';
import Loading from './loading';
const Hero = lazy(() => import('./components/Hero/Hero'));
const Projects = lazy(() => import('./components/Projects/Projects'));

export default function Home() {
    return (
        <div className="relative">
            <div className="paperOverlay"></div>
            <Suspense fallback={<Loading />}>
                <div className="h-screen">
                    <Hero></Hero>
                </div>
                <Projects></Projects>
            </Suspense>
        </div>
    );
}
