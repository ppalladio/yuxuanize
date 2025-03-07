import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import LenisProvider from './providers/LenisProvider';

const sangBleuSunrise = localFont({
    src: [
        // thin
        { path: '/fonts/SangBleuSunrise-Air.ttf', weight: '100', style: 'normal' },
        { path: '/fonts/SangBleuSunrise-AirItalic.ttf', weight: '100', style: 'italic' },
        // light
        { path: '/fonts/SangBleuSunrise-Light.ttf', weight: '300', style: 'normal' },
        { path: '/fonts/SangBleuSunrise-LightItalic.ttf', weight: '300', style: 'italic' },
        // normal
        { path: '/fonts/SangBleuSunrise-Regular.ttf', weight: '400', style: 'normal' },
        { path: '/fonts/SangBleuSunrise-RegularItalic.ttf', weight: '400', style: 'italic' },
        // medium
        { path: '/fonts/SangBleuSunrise-Medium.ttf', weight: '500', style: 'normal' },
        { path: '/fonts/SangBleuSunrise-MediumItalic.ttf', weight: '500', style: 'italic' },
        // bold
        { path: '/fonts/SangBleuSunrise-Bold.ttf', weight: '700', style: 'normal' },
        { path: '/fonts/SangBleuSunrise-BoldItalic.ttf', weight: '700', style: 'italic' },
    ],
    variable: '--font-sang-bleu-sunrise',
});

export const metadata: Metadata = {
    title: 'Yuxuanize',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={sangBleuSunrise.variable}>
            <body className="font-sangBleu">
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    );
}
