import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-plus-jakarta-sans',
});


export const metadata = {
  title: 'Assetlane',
  description: 'A real estate dashboard that helps agents and managers simplify operations, stay organized and move faster',
  icons: {
    icon: '/favicon.png'
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className={`${plusJakartaSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

