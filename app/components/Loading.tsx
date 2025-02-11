'use client';
import { useEffect, useState } from 'react';

interface LoadingProps {
    started: boolean;
    onStarted: () => void;
}

export default function Loading({ started, onStarted }: LoadingProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = prev + 1;
                if (newProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        onStarted();
                    }, 800);
                    return 100;
                }
                return newProgress;
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onStarted]);

    return (
        <div
            className={`fixed inset-0 z-50 flex-col-center bg-background transition-opacity duration-500 ${
                started ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
            <div className="w-full max-w-md px-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 overflow-hidden">
                    <div className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    );
}
