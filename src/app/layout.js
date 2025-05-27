import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import Header from '@/components/custom/header';
import Footer from '@/components/custom/footer';

// Configure Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'iMarketing - Digital Growth Experts',
    template: '%s | iMarketing Digital Agency',
  },
  description: 'Full-service digital marketing agency driving measurable results through SEO, PPC, web design & social media marketing. Boost conversions with our data-driven strategies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}