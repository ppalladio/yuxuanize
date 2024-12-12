'use client';
import { useEffect, useRef } from 'react';
import Experience from './Experience';

export default function ExperienceComponent() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const experience = new Experience(canvasRef.current);

            return () => {
                window.removeEventListener('resize', () => {
                    experience.sizes.width = window.innerWidth;
                    experience.sizes.height = window.innerHeight;
                });
            };
        }
    }, []);

    return <canvas ref={canvasRef} />;
}
