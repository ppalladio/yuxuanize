import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LenisProvider from './providers/LenisProvider';

const inter = Inter({ subsets: ['latin'] });

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
        <html lang="en">
            <body className={inter.className + 'px-10'}>
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    );
}
