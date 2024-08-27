import { TracingBeam } from '@/components/ui/tracing-beam';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';

export default function Home() {
    return (
		<>
        <div className="h-screen">
            <Hero></Hero>
        </div>
		<Projects></Projects>
		</>
    );
}
