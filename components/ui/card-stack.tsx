'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';

let interval: any;

type Card = {
    id: number;
    name: string;
    content: React.ReactNode;
    imageUrl: string;
};

export const CardStack = ({ items, offset, scaleFactor }: { items: Card[]; offset?: number; scaleFactor?: number }) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        startFlipping();
        return () => clearInterval(interval);
    }, []);

    const startFlipping = () => {
        interval = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards];
                newArray.unshift(newArray.pop()!);
                return newArray;
            });
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);
    };

    return (
        <div className="relative w-full max-w-[300px] h-[400px] mx-auto">
            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute dark:bg-black bg-white w-full h-[400px] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
                        style={{
                            transformOrigin: 'top center',
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR,
                            zIndex: cards.length - index,
                        }}
                    >
                        <h1 className="font-semibold text-xl text-neutral-600 dark:text-white">{card.name}</h1>
                        <div className="font-normal text-neutral-700 dark:text-neutral-200 text-sm flex-grow">{card.content}</div>
                        <div className="my-2 w-full h-40 relative">
                            <Image src={card.imageUrl} alt={card.name} layout="fill" className="rounded-lg object-cover" />
                        </div>
                        <div className="mt-2">
                            <p className="text-neutral-500 font-medium dark:text-white text-sm">{card.name}</p>
                        </div>
                    </motion.div>
                );
            })}
            <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center space-x-2">
                {items.map((_, index) => (
                    <Heart key={index} className={`w-5 h-5 transition duration-300 ${index === currentIndex ? 'fill-red-500/90 stroke-gray-700 stroke-2' : 'stroke-red-500 stroke-2 fill-white'}`} />
                ))}
            </div>
        </div>
    );
};
