'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const masterWrapRef = useRef(null);
    const panelWrapRef = useRef(null);
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
    const dotsRef = useRef<(HTMLDivElement | SVGSVGElement | null)[]>([]);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const slides = slidesRef.current;
        const container = panelWrapRef.current;
        const dots = dotsRef.current;
        let offsets: number[] = [];

        if (!slides || !container) return;

        // Set initial styles for each slide
        slides.forEach((slide, index) => {
            if (slide) {
                offsets.push(-slide.offsetTop);
            }
        });

        // Function to update active slide
        const updateActiveSlide = (index: number) => {
            setActiveSlide(index);
            dots.forEach((dot, i) => {
                if (dot) {
                    if (i === index) {
                        dot.setAttribute('class', 'dot fill-purple-400 stroke-yellow-600 stroke-[2px] ');
                    } else {
                        dot.setAttribute('class', 'dot stroke-black stroke-[2px]  fill-white');
                    }
                }
            });
        };

        // Function to animate to a specific slide
        const goToSlide = (index: number) => {
            gsap.to(container, {
                duration: 0.6,
                y: offsets[index],
                ease: 'power2.inOut',
                onComplete: () => updateActiveSlide(index),
            });
        };

        // Add click event listeners to dots
        dots.forEach((dot, index) => {
            if (dot) {
                dot.addEventListener('click', () => goToSlide(index));
            }
        });

        // Set up scroll trigger for each slide
        slides.forEach((slide, index) => {
            if (slide) {
                ScrollTrigger.create({
                    trigger: slide,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => updateActiveSlide(index),
                    onEnterBack: () => updateActiveSlide(index),
                });
            }
        });

        // Handle wheel events for smooth scrolling
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            const direction = e.deltaY > 0 ? 1 : -1;
            const newIndex = Math.max(0, Math.min(slides.length - 1, activeSlide + direction));
            if (newIndex !== activeSlide) {
                goToSlide(newIndex);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        // Cleanup
        return () => {
            window.removeEventListener('wheel', handleWheel);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [activeSlide]);

    return (
        <div id="masterWrap" ref={masterWrapRef}>
            <div className="paperOverlay"></div>
            <div id="panelWrap" ref={panelWrapRef}>
                {[Hero, About, Projects].map((Component, index) => (
                    <section
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            slidesRef.current[index] = el;
                        }}
                        className="relative h-screen"
                    >
                        <Component />
                        {index === [Hero, About, Projects].length - 1 ? (
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-red-500">- End -</div>
                        ) : (
                            <ScrollArrow />
                        )}
                    </section>
                ))}
            </div>
            <div className="dots">
                {[Hero, About, Projects].map((_, index) => (
                    <svg
                        key={index}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        className={`dot ${index === activeSlide ? 'fill-purple-400 stroke-yellow-600 stroke-[2px] ' : 'stroke-black stroke-[2px]  fill-white'}`}
                        ref={(el) => {
                            dotsRef.current[index] = el;
                        }}
                    >
                        <circle cx="8" cy="8" r="6" />
                    </svg>
                ))}
            </div>
        </div>
    );
}
