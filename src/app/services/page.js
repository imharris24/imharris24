import ServicesCta from "./services-cta";
import ServicesGrid from "./services-grid";
import ServicesHero from "./services-hero";
import ServicesProcess from "./services-process";

export const metadata = {
    title: {
        default: 'Services | iMarketing - What We Do',
        template: '%s | iMarketing Digital Agency',
    },
    description: 'Explore iMarketing’s full suite of services: SEO, PPC, social media, web design, content marketing & more—crafted to grow your business.',
    keywords: [
        'iMarketing services',
        'SEO services',
        'PPC management',
        'social media marketing',
        'web design services',
        'content marketing',
        'email marketing',
        'e-commerce SEO',
        'digital advertising',
        'brand strategy',
    ],
    authors: [{ name: 'iMarketing Software Development Team', url: 'https://imarketing.com' }],
    creator: 'PeachX Technologies',
    publisher: 'iMarketing Private Limited',
    metadataBase: new URL('https://imarketing.com'),
    alternates: {
        canonical: '/services',
        languages: {
            'en-US': '/en-US/services',
        },
    },
    openGraph: {
        title: 'Services | iMarketing - Digital Marketing Solutions',
        description: 'From SEO & PPC to web design & social media, our services drive measurable growth for 500+ clients worldwide.',
        url: 'https://imarketing.com/services',
        siteName: 'iMarketing',
        images: [
            {
                url: 'https://imarketing.com/og-services.jpg',
                width: 1200,
                height: 630,
                alt: 'iMarketing Services Overview',
            },
            {
                url: 'https://imarketing.com/og-services-alt.jpg',
                width: 800,
                height: 600,
                alt: 'Digital Marketing Services',
            },
        ],
        locale: 'en_US',
        type: 'website',
        publishedTime: '2025-01-01T00:00:00.000Z',
        modifiedTime: '2025-01-01T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Services | iMarketing Digital Agency',
        description: 'Our end-to-end digital marketing services deliver an average 30% ROI increase for clients.',
        images: ['https://imarketing.com/twitter-services.jpg'],
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
            url: 'https://imarketing.com/services',
            should_fallback: true,
        },
    },
    category: 'digital marketing services',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <ServicesHero />
            <ServicesGrid />
            <ServicesProcess />
            <ServicesCta />
        </main>
    );
}
