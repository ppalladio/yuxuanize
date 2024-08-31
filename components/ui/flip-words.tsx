'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NextFont } from 'next/dist/compiled/@next/font';
import { Roboto } from 'next/font/google';
const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const FlipWords = ({ words, duration = 3000, className, wordColor, wordFont }: { words: string[]; duration?: number; className?: string; wordColor?: string[]; wordFont?: NextFont[] }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    // thanks for the fix Julian - https://github.com/Julian-AT
    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);
    useEffect(() => {
        if (!isAnimating) {
            const timer = setTimeout(() => {
                startAnimation();
            }, duration);
            return () => clearTimeout(timer); // Clear timeout on unmount
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: -40, 
                    filter: 'blur(8px)',
                    scale: 2, 
                    position: 'absolute', 
                }}
                className={cn('z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2', className)}
                key={currentWord}
            >
                {words.map((word, wordIndex) => {
                    // console.log(`Current word index: ${wordIndex}`); // Log the word index
                    const isCurrentWord = word === currentWord; // Check if this is the current word
                    return (
                        <motion.span
                            key={word + wordIndex}
                            initial={{ opacity: isCurrentWord ? 1 : 0, y: isCurrentWord ? 0 : 10, filter: 'blur(8px)' }}
                            animate={{ opacity: isCurrentWord ? 1 : 0, y: isCurrentWord ? 0 : 10, filter: 'blur(0px)' }}
                            transition={{
                                delay: wordIndex * 0.3,
                                duration: 0.3,
                            }}
                            className={`absolute left-0 top-0 whitespace-nowrap ${className} ` + (wordFont?.[wordIndex]?.className ?? roboto.className)}
                            style={{ color: wordColor?.[wordIndex] ?? 'white' }}
                        >
                            {word.split('').map((letter, letterIndex) => (
                                <motion.span
                                    key={word + letterIndex}
                                    initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    transition={{
                                        delay: wordIndex * 0.3 + letterIndex * 0.05,
                                        duration: 0.2,
                                    }}
                                    className={'inline-block'}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            <span className="inline-block">&nbsp;</span>
                        </motion.span>
                    );
                })}
            </motion.div>
        </AnimatePresence>
    );
};
