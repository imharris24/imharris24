import AboutHero from "./about-hero"
import StatsSection from "./stats-section"
import JourneyTimeline from "./journey-timeline"
import CoreValues from "./core-values"
import AboutTestimonial from "./about-testimonial"
import JoinTeam from "./join-team"

export const metadata = {
    title: {
        default: 'About Us | iMarketing - Who We Are',
        template: '%s | iMarketing Digital Agency',
    },
    description: 'Learn about iMarketing, a leading digital marketing agency committed to client success through innovation, transparency, and measurable results.',
    keywords: [
        'about iMarketing',
        'digital marketing team',
        'company mission',
        'marketing leadership',
        'our story',
        'marketing experts',
        'agency background',
        'company values',
        'brand vision',
        'team of professionals',
    ],
    authors: [{ name: 'iMarketing Software Development Team', url: 'https://imarketing.com' }],
    creator: 'PeachX Technologies',
    publisher: 'iMarketing Private Limited',
    metadataBase: new URL('https://imarketing.com'),
    alternates: {
        canonical: '/about-us',
        languages: {
            'en-US': '/en-US/about-us',
        },
    },
    openGraph: {
        title: 'About Us | iMarketing - Digital Experts with Purpose',
        description: 'Discover the people and principles behind iMarketing. Learn how our values and expertise help businesses grow online.',
        url: 'https://imarketing.com/about-us',
        siteName: 'iMarketing',
        images: [
            {
                url: 'https://imarketing.com/og-about.jpg',
                width: 1200,
                height: 630,
                alt: 'iMarketing Team Photo',
            },
            {
                url: 'https://imarketing.com/og-about-alt.jpg',
                width: 800,
                height: 600,
                alt: 'Digital Agency Story',
            }
        ],
        locale: 'en_US',
        type: 'website',
        publishedTime: '2025-01-01T00:00:00.000Z',
        modifiedTime: '2025-01-01T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us | Meet the iMarketing Team',
        description: 'We’re a team of passionate digital marketers, strategists, and creatives dedicated to growing your business online.',
        images: ['https://imarketing.com/twitter-about.jpg'],
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
            url: 'https://imarketing.com/about-us',
            should_fallback: true,
        },
    },
    category: 'digital marketing services',
};

export default function AboutUsPage() {
    return (
        <main className="min-h-scree px-4 
 md:px-6 
 lg:px-8 
 xl:px-12 
   2xl:px-16 
   3xl:px-20 
   4xl:px-24">
            <AboutHero />
            <StatsSection />
            <JourneyTimeline />
            <CoreValues />
            <AboutTestimonial />
            <JoinTeam />
        </main>
    );
}
