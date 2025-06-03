'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export interface ContainerTextFlipProps {
    /** Array of words to cycle through in the animation */
    words?: string[];
    /** Time in milliseconds between word transitions */
    interval?: number;
    /** Additional CSS classes to apply to the container */
    className?: string;
    /** Additional CSS classes to apply to the text */
    textClassName?: string;
    /** Duration of the transition animation in milliseconds */
    animationDuration?: number;
    hoverDelayMs?: number;
}

export function ContainerTextFlip({
    words = ['better', 'modern', 'beautiful', 'awesome'],
    interval = 3000,
    className,
    textClassName,
    animationDuration = 700,
    hoverDelayMs = 300,
}: ContainerTextFlipProps) {
    const id = useId();
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [width, setWidth] = useState(100);
    const textRef = useRef<HTMLDivElement>(null);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const delayTimerRef = useRef<NodeJS.Timeout | null>(null);

    const updateWidthForWord = () => {
        if (textRef.current) {
            const textWidth = textRef.current.scrollWidth + 30;
            setWidth(textWidth);
        }
    };

    useEffect(() => {
        updateWidthForWord();
    }, [currentWordIndex]);
    const startFlipping = () => {
        delayTimerRef.current = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }, 1000); 
        }, hoverDelayMs);
    };

    const stopFlipping = () => {
        if (delayTimerRef.current) {
            clearTimeout(delayTimerRef.current);
            delayTimerRef.current = null;
        }
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };
    return (
        <motion.p
            layout
            layoutId={`words-here-${id}`}
            animate={{ width }}
            onMouseEnter={startFlipping}
            onMouseLeave={stopFlipping}
            transition={{ duration: animationDuration / 2000 }}
            className={cn('cursor-default', className)}
            key={words[currentWordIndex]}
        >
            <motion.div
                transition={{
                    duration: animationDuration / 1000,
                    ease: 'easeInOut',
                }}
                className={cn(' ', textClassName)}
                ref={textRef}
                layoutId={`word-div-${words[currentWordIndex]}-${id}`}
            >
                <motion.div className="inline-block">
                    {words[currentWordIndex].split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{
                                opacity: 0,
                                filter: 'blur(10px)',
                            }}
                            animate={{
                                opacity: 1,
                                filter: 'blur(0px)',
                            }}
                            transition={{
                                delay: index * 0.02,
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>
        </motion.p>
    );
}
