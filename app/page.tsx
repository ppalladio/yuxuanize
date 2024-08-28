// import Hero from './components/Hero/Hero';
// import Projects from './components/Projects/Projects';
import { lazy, Suspense } from 'react';
import Loading from './loading';
const Hero = lazy(() => import('./components/Hero/Hero'));
const Projects = lazy(() => import('./components/Projects/Projects'));

export default function Home() {
    return (
        <Suspense fallback={<Loading />}>
            <div className="h-screen">
                <Hero></Hero>
            </div>
            <Projects></Projects>
        </Suspense>
    );
}
