'use client';
import { useEffect, useRef, useState, useCallback, lazy } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';
import { Fan, Flower, Sparkle } from 'lucide-react';
import Footer from './components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);
const sections = [lazy(() => import('./components/Hero/Hero')), lazy(() => import('./components/About/About')), lazy(() => import('./components/Projects/Projects'))];
export default function Home() {
    const masterWrapRef = useRef(null);
    const panelWrapRef = useRef(null);
    const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
    const dotsRef = useRef<(HTMLDivElement | SVGSVGElement | null)[]>([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const updateActiveSlide = useCallback((index: number) => {
        setActiveSlide(index);
        dotsRef.current.forEach((dot, i) => {
            if (dot) {
                if (i === index) {
                    dot.setAttribute('class', 'dot fill-purple-400 stroke-yellow-600 stroke-[2px] ');
                } else {
                    dot.setAttribute('class', 'dot stroke-black stroke-[2px]  fill-white');
                }
            }
        });
    }, []);

    const goToSlide = useCallback(
        (index: number) => {
            if (isScrolling || !panelWrapRef.current) return;
            setIsScrolling(true);
            const offsets = slidesRef.current.map((slide) => (slide ? -slide.offsetTop : 0));
            gsap.to(panelWrapRef.current, {
                duration: 0.6,
                y: offsets[index],
                ease: 'power2.inOut',
                onComplete: () => {
                    updateActiveSlide(index);
                    setIsScrolling(false);
                },
            });
        },
        [isScrolling, updateActiveSlide],
    );

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (isScrolling) return;
            const direction = e.deltaY > 0 ? 1 : -1;
            const newIndex = Math.max(0, Math.min(slidesRef.current.length - 1, activeSlide + direction));
            if (newIndex !== activeSlide) {
                goToSlide(newIndex);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [activeSlide, isScrolling, goToSlide]);

    useEffect(() => {
        slidesRef.current.forEach((slide, index) => {
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
    }, [updateActiveSlide]);

    return (
        <div id="masterWrap" ref={masterWrapRef}>
            <div className="paperOverlay"></div>
            <div id="panelWrap" ref={panelWrapRef}>
                {sections.map((Component, index) => (
                    <section
                        key={index}
                        ref={(el: HTMLDivElement | null) => {
                            slidesRef.current[index] = el;
                        }}
                        className="relative h-screen"
                    >
                        <Component />
                        {index === sections.length - 1 ? (
                         <Footer/>
                        ) : (
                            <ScrollArrow />
                        )}
                    </section>
                ))}
            </div>
            <div className="dots">
                {sections.map((_, index) => (
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
