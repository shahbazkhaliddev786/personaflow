import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navigation from '@/components/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Companion - Your Personal AI Journey',
  description: 'Discover your potential with three powerful AI assistants designed to understand, guide, and inspire your personal journey.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
