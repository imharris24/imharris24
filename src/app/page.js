import BrandMarquee from "./home-page/brand-marquee";
// import CaseStudies from "./home-page/case-studies";
import CtaSection from "./home-page/cta-section";
import Hero from "./home-page/hero";
import Services from "./home-page/services";
import TeamSection from "./home-page/team-section";
import WorkingProcess from "./home-page/working-process";
import Testimonials from "@/app/home-page/testimonials";
import ContactSection from "@/app/home-page/contact-section";

export const metadata = {
  title: {
    default: 'iMarketing - Home | Digital Growth Experts',
    template: '%s | iMarketing Digital Agency',
  },
  description: 'Full-service digital marketing agency driving measurable results through SEO, PPC, web design & social media marketing. Boost conversions with our data-driven strategies.',
  keywords: [
    'digital marketing agency',
    'SEO services',
    'social media marketing',
    'web design company',
    'PPC advertising',
    'content marketing strategy',
    'brand development',
    'email marketing solutions',
    'e-commerce SEO',
    'online reputation management',
    'local SEO services',
    'digital transformation',
    'lead generation'
  ],
  authors: [{ name: 'iMarketing Software Development Team', url: 'https://imarketing.com' }],
  creator: 'PeachX Technologies',
  publisher: 'iMarketing Private Limited',
  metadataBase: new URL('https://imarketing.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'iMarketing - Home | Digital Marketing Excellence',
    description: 'Transform your online presence with our award-winning digital marketing services. 500+ satisfied clients worldwide.',
    url: 'https://imarketing.com',
    siteName: 'iMarketing',
    images: [
      {
        url: 'https://imarketing.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'iMarketing Digital Agency Team',
      },
      {
        url: 'https://imarketing.com/og-home-alt.jpg',
        width: 800,
        height: 600,
        alt: 'Digital Marketing Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
    publishedTime: '2025-01-01T00:00:00.000Z',
    modifiedTime: '2025-01-01T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iMarketing - #1 Digital Marketing Agency',
    description: 'Proven strategies for SEO, social media & web design | 30% average ROI increase for clients',
    images: ['https://imarketing.com/twitter-home.jpg'],
    site: '@iMarketing',
    creator: '@iMarketingCEO',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  appleWebApp: {
    title: 'iMarketing',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
  appLinks: {
    web: {
      url: 'https://imarketing.com',
      should_fallback: true,
    },
  },
  category: 'digital marketing services',
};

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Services />
      <CtaSection />
      {/* <CaseStudies /> */}
      <WorkingProcess />
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}