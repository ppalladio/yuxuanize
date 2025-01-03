'use client';
import ReactLenis from 'lenis/react';
import { FC, useRef } from 'react';

type LenisProviderProps = {
    children: React.ReactNode;
};
const LenisProvider: FC<LenisProviderProps> = ({ children }) => {
    const lenisRef = useRef(null);
    return (
        <ReactLenis ref={lenisRef} root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
};

export default LenisProvider;
