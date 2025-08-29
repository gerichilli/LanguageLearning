import { Quicksand, Playwrite_CA, Source_Code_Pro, Merriweather } from 'next/font/google';

export const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const playwriteCA = Playwrite_CA({
  weight: ['300', '400'],
  variable: '--font-cursive',
  display: 'swap',
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-ipa',
  display: 'swap',
});
