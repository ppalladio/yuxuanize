import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import localFont from '@next/font/local';
const font = localFont({
    src: [
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-Air.ttf',
            style: 'normal',
            weight: '100',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-AirItalic.ttf',
            style: 'italic',
            weight: '100',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-Light.ttf',
            style: 'normal',
            weight: '200',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-LightItalic.ttf',
            style: 'italic',
            weight: '200',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-Livre.ttf',
            style: 'normal',
            weight: '300',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-Regular.ttf',
            style: 'normal',
            weight: '500',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-RegularItalic.ttf',
            style: 'italic',
            weight: '400',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-Medium.ttf',
            style: 'normal',
            weight: '500',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-MediumItalic.ttf',
            style: 'italic',
            weight: '500',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-Bold.ttf',
            style: 'normal',
            weight: '700',
        },
        {
            path: '../public/fonts/SangBleu/SangBleuSunrise-BoldItalic.ttf',
            style: 'italic',
            weight: '700',
			
        },
    ],
    variable: '--font-sangBleu',
});

export const Jalliya = localFont({
    src: [
        {
            path: '../public/fonts/Jalliya.ttf',
            style: 'normal',
        },
    ],
    variable: '--font-jalliya',
});
export const metadata: Metadata = {
    title: 'Yuxuan Peng',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                {/* <Border/> */}
                {children}
                <Analytics />
            </body>
        </html>
    );
}
