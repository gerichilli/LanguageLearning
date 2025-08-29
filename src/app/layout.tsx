import type { Metadata } from 'next';

import { quicksand, playwriteCA, sourceCodePro, merriweather } from '@/lib/fonts';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${playwriteCA.variable} ${sourceCodePro.variable} ${merriweather.variable} bg-[#eeeedd] min-h-screen`}
      >
        <div className="px-8 md:px-16">{children}</div>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'Books App',
  description: 'Vocabulary book viewer',
};
