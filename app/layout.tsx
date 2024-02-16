import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cagatay Ucer Personal Website',
  description: 'This is my portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-2VLW7KEBEF" />
      </body>
    </html>
  );
}
