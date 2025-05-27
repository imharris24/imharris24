"use client"

import { useState, useEffect } from "react"


// Static services data
const servicesData = [
    {
        id: "seo",
        title: "Search Engine Optimization",
        subtitle: "Dominate Search Results",
        description: "Increase your website's visibility and drive organic traffic with our comprehensive SEO strategies.",
        longDescription:
            "Our SEO services help businesses improve their search engine rankings, drive more organic traffic, and increase online visibility. We use proven strategies including keyword research, on-page optimization, technical SEO, and link building to deliver sustainable results.",
        icon: "search",
        features: [
            "Comprehensive keyword research and strategy",
            "On-page SEO optimization",
            "Technical SEO audit and fixes",
            "High-quality link building",
            "Local SEO optimization",
            "Content optimization and creation",
            "Competitor analysis",
            "Monthly performance reporting",
        ],
        benefits: [
            "Higher search engine rankings",
            "Increased organic traffic",
            "Better user experience",
            "Long-term sustainable results",
            "Improved brand credibility",
            "Higher conversion rates",
        ],
        process: [
            {
                step: "01",
                title: "SEO Audit & Analysis",
                description:
                    "Comprehensive analysis of your website's current SEO performance and identification of opportunities.",
                duration: "1-2 weeks",
            },
            {
                step: "02",
                title: "Strategy Development",
                description: "Create a customized SEO strategy based on your business goals and competitive landscape.",
                duration: "1 week",
            },
            {
                step: "03",
                title: "Implementation",
                description: "Execute on-page optimizations, technical fixes, and content improvements.",
                duration: "2-4 weeks",
            },
            {
                step: "04",
                title: "Monitoring & Optimization",
                description: "Continuous monitoring, reporting, and optimization to improve rankings and traffic.",
                duration: "Ongoing",
            },
        ],
        pricing: {
            startingPrice: "$2,500/month",
            priceRange: "$2,500 - $10,000/month",
            factors: [
                "Website size and complexity",
                "Industry competitiveness",
                "Target keywords and locations",
                "Current SEO status",
                "Desired timeline for results",
            ],
        },
        results: [
            {
                metric: "150%",
                label: "Average Traffic Increase",
                description: "Average organic traffic increase within 6 months",
            },
            {
                metric: "85%",
                label: "Keyword Ranking Improvement",
                description: "Percentage of target keywords ranking on page 1",
            },
            {
                metric: "200%",
                label: "Lead Generation Growth",
                description: "Average increase in qualified leads from organic search",
            },
        ],
        faqs: [
            {
                question: "How long does it take to see SEO results?",
                answer:
                    "SEO is a long-term strategy. You can expect to see initial improvements in 3-4 months, with significant results typically appearing in 6-12 months. The timeline depends on your industry competitiveness and current website status.",
            },
            {
                question: "Do you guarantee first page rankings?",
                answer:
                    "While we cannot guarantee specific rankings due to search engine algorithm changes, we do guarantee improved visibility, increased organic traffic, and better search performance based on our proven strategies.",
            },
            {
                question: "What's included in your SEO service?",
                answer:
                    "Our SEO service includes keyword research, on-page optimization, technical SEO, content optimization, link building, local SEO (if applicable), and monthly reporting with actionable insights.",
            },
        ],
        relatedServices: ["ppc", "content-marketing", "analytics"],
    },
    {
        id: "ppc",
        title: "Pay-Per-Click Advertising",
        subtitle: "Instant Traffic & Conversions",
        description: "Drive immediate results with targeted PPC campaigns across Google, Facebook, and other platforms.",
        longDescription:
            "Our PPC advertising services deliver immediate traffic and conversions through strategic paid campaigns. We manage Google Ads, Facebook Ads, LinkedIn Ads, and other platforms to maximize your ROI and reach your target audience effectively.",
        icon: "target",
        features: [
            "Google Ads campaign management",
            "Facebook and Instagram advertising",
            "LinkedIn advertising campaigns",
            "Display and remarketing campaigns",
            "Shopping campaigns for e-commerce",
            "Landing page optimization",
            "A/B testing and optimization",
            "Conversion tracking and analytics",
        ],
        benefits: [
            "Immediate traffic and results",
            "Precise audience targeting",
            "Measurable ROI",
            "Budget control and flexibility",
            "Quick campaign adjustments",
            "Detailed performance insights",
        ],
        process: [
            {
                step: "01",
                title: "Campaign Strategy",
                description: "Develop comprehensive PPC strategy based on your goals, audience, and budget.",
                duration: "1 week",
            },
            {
                step: "02",
                title: "Campaign Setup",
                description: "Create and configure campaigns, ad groups, keywords, and targeting settings.",
                duration: "1-2 weeks",
            },
            {
                step: "03",
                title: "Launch & Monitor",
                description: "Launch campaigns and closely monitor performance, making initial optimizations.",
                duration: "1 week",
            },
            {
                step: "04",
                title: "Optimize & Scale",
                description: "Continuous optimization, testing, and scaling of successful campaigns.",
                duration: "Ongoing",
            },
        ],
        pricing: {
            startingPrice: "$1,500/month",
            priceRange: "$1,500 - $15,000/month",
            factors: [
                "Monthly ad spend budget",
                "Number of platforms and campaigns",
                "Industry competition level",
                "Campaign complexity",
                "Management and optimization needs",
            ],
        },
        results: [
            {
                metric: "300%",
                label: "Average ROI",
                description: "Average return on investment for PPC campaigns",
            },
            {
                metric: "45%",
                label: "Cost Reduction",
                description: "Average reduction in cost per acquisition",
            },
            {
                metric: "180%",
                label: "Conversion Increase",
                description: "Average increase in conversions within 3 months",
            },
        ],
        faqs: [
            {
                question: "How quickly can I see results from PPC?",
                answer:
                    "PPC campaigns can start driving traffic immediately after launch. You'll typically see initial results within 24-48 hours, with optimized performance developing over 2-4 weeks as we gather data and refine targeting.",
            },
            {
                question: "What's the minimum budget for PPC advertising?",
                answer:
                    "We recommend a minimum monthly ad spend of $1,000 for Google Ads and $500 for social media platforms. This allows for sufficient data collection and meaningful testing to optimize campaign performance.",
            },
            {
                question: "Do you manage campaigns on all platforms?",
                answer:
                    "Yes, we manage campaigns across Google Ads, Facebook, Instagram, LinkedIn, Microsoft Ads, and other relevant platforms based on where your target audience is most active.",
            },
        ],
        relatedServices: ["seo", "social-media", "analytics"],
    },
    {
        id: "social-media",
        title: "Social Media Marketing",
        subtitle: "Build Your Brand Community",
        description: "Build your brand presence and engage with your audience across social platforms.",
        longDescription:
            "Our social media marketing services help businesses build strong brand communities, increase engagement, and drive conversions through strategic content creation, community management, and social advertising across all major platforms.",
        icon: "users",
        features: [
            "Social media strategy development",
            "Content creation and curation",
            "Community management",
            "Social media advertising",
            "Influencer marketing campaigns",
            "Social media analytics and reporting",
            "Brand reputation management",
            "Cross-platform integration",
        ],
        benefits: [
            "Increased brand awareness",
            "Higher customer engagement",
            "Improved customer loyalty",
            "Direct customer communication",
            "Enhanced brand reputation",
            "Increased website traffic",
        ],
        process: [
            {
                step: "01",
                title: "Strategy & Planning",
                description: "Develop comprehensive social media strategy aligned with your brand and business goals.",
                duration: "1-2 weeks",
            },
            {
                step: "02",
                title: "Content Creation",
                description: "Create engaging content calendar with posts, graphics, and videos for each platform.",
                duration: "Ongoing",
            },
            {
                step: "03",
                title: "Community Management",
                description: "Actively engage with your audience, respond to comments, and build relationships.",
                duration: "Daily",
            },
            {
                step: "04",
                title: "Analytics & Optimization",
                description: "Monitor performance, analyze engagement, and optimize strategy for better results.",
                duration: "Monthly",
            },
        ],
        pricing: {
            startingPrice: "$1,200/month",
            priceRange: "$1,200 - $8,000/month",
            factors: [
                "Number of social platforms",
                "Content creation requirements",
                "Posting frequency",
                "Community management level",
                "Paid social advertising budget",
            ],
        },
        results: [
            {
                metric: "250%",
                label: "Engagement Increase",
                description: "Average increase in social media engagement",
            },
            {
                metric: "180%",
                label: "Follower Growth",
                description: "Average growth in qualified followers",
            },
            {
                metric: "120%",
                label: "Website Traffic",
                description: "Increase in website traffic from social media",
            },
        ],
        faqs: [
            {
                question: "Which social media platforms should my business be on?",
                answer:
                    "The best platforms depend on your target audience and business type. We analyze your audience demographics and behavior to recommend the most effective platforms, typically including Facebook, Instagram, LinkedIn, Twitter, and TikTok.",
            },
            {
                question: "How often should we post on social media?",
                answer:
                    "Posting frequency varies by platform and audience. Generally, we recommend 1-2 posts per day on Facebook and Instagram, 3-5 tweets per day on Twitter, and 2-3 posts per week on LinkedIn. We customize this based on your audience engagement patterns.",
            },
            {
                question: "Do you create all the content or do we need to provide it?",
                answer:
                    "We handle all content creation including graphics, captions, and video content. However, we may occasionally request product photos, behind-the-scenes content, or company updates from you to maintain authenticity.",
            },
        ],
        relatedServices: ["content-marketing", "ppc", "analytics"],
    },
    {
        id: "content-marketing",
        title: "Content Marketing",
        subtitle: "Engage & Convert with Content",
        description: "Create valuable content that attracts, engages, and converts your target audience.",
        longDescription:
            "Our content marketing services focus on creating valuable, relevant content that attracts your target audience, builds trust, and drives profitable customer action. From blog posts to video content, we develop comprehensive content strategies that support your business goals.",
        icon: "edit",
        features: [
            "Content strategy development",
            "Blog writing and management",
            "Video content creation",
            "Infographic design",
            "Email newsletter content",
            "Case studies and whitepapers",
            "Social media content",
            "Content distribution and promotion",
        ],
        benefits: [
            "Increased brand authority",
            "Higher search engine rankings",
            "More qualified leads",
            "Improved customer education",
            "Enhanced brand trust",
            "Long-term asset building",
        ],
        process: [
            {
                step: "01",
                title: "Content Audit & Strategy",
                description: "Analyze existing content and develop comprehensive content strategy aligned with business goals.",
                duration: "1-2 weeks",
            },
            {
                step: "02",
                title: "Content Planning",
                description: "Create detailed content calendar with topics, formats, and distribution channels.",
                duration: "1 week",
            },
            {
                step: "03",
                title: "Content Creation",
                description: "Produce high-quality content including writing, design, and video production.",
                duration: "Ongoing",
            },
            {
                step: "04",
                title: "Distribution & Promotion",
                description: "Distribute content across channels and promote for maximum reach and engagement.",
                duration: "Ongoing",
            },
        ],
        pricing: {
            startingPrice: "$2,000/month",
            priceRange: "$2,000 - $12,000/month",
            factors: [
                "Content volume and frequency",
                "Content types and complexity",
                "Research and expertise required",
                "Design and video production needs",
                "Distribution and promotion scope",
            ],
        },
        results: [
            {
                metric: "200%",
                label: "Organic Traffic Growth",
                description: "Average increase in organic website traffic",
            },
            {
                metric: "150%",
                label: "Lead Generation",
                description: "Increase in qualified leads from content",
            },
            {
                metric: "85%",
                label: "Engagement Rate",
                description: "Average content engagement rate improvement",
            },
        ],
        faqs: [
            {
                question: "What types of content do you create?",
                answer:
                    "We create various content types including blog posts, articles, infographics, videos, podcasts, case studies, whitepapers, social media content, email newsletters, and interactive content based on your audience preferences and business goals.",
            },
            {
                question: "How do you ensure content aligns with our brand voice?",
                answer:
                    "We start with a comprehensive brand voice and style guide development. Our team studies your existing content, interviews key stakeholders, and creates detailed guidelines to ensure all content maintains consistency with your brand personality and messaging.",
            },
            {
                question: "How do you measure content marketing success?",
                answer:
                    "We track various metrics including website traffic, engagement rates, lead generation, conversion rates, social shares, time on page, and brand awareness metrics. We provide detailed monthly reports showing how content contributes to your business objectives.",
            },
        ],
        relatedServices: ["seo", "social-media", "email-marketing"],
    },
    {
        id: "email-marketing",
        title: "Email Marketing",
        subtitle: "Nurture & Convert Leads",
        description: "Nurture leads and drive conversions with personalized email campaigns.",
        longDescription:
            "Our email marketing services help businesses build stronger relationships with their audience through strategic email campaigns, automation sequences, and personalized messaging that drives engagement and conversions.",
        icon: "mail",
        features: [
            "Email strategy development",
            "Campaign design and creation",
            "Marketing automation setup",
            "List building and segmentation",
            "A/B testing and optimization",
            "Drip campaign creation",
            "Newsletter management",
            "Performance analytics and reporting",
        ],
        benefits: [
            "Higher customer retention",
            "Increased sales and revenue",
            "Better customer relationships",
            "Automated lead nurturing",
            "Improved customer lifetime value",
            "Cost-effective marketing channel",
        ],
        process: [
            {
                step: "01",
                title: "Strategy & Setup",
                description: "Develop email marketing strategy and set up automation platforms and integrations.",
                duration: "1-2 weeks",
            },
            {
                step: "02",
                title: "List Building & Segmentation",
                description: "Implement list building strategies and segment audiences for targeted messaging.",
                duration: "1 week",
            },
            {
                step: "03",
                title: "Campaign Creation",
                description: "Design and create email campaigns, automation sequences, and templates.",
                duration: "2-3 weeks",
            },
            {
                step: "04",
                title: "Launch & Optimize",
                description: "Launch campaigns, monitor performance, and continuously optimize for better results.",
                duration: "Ongoing",
            },
        ],
        pricing: {
            startingPrice: "$800/month",
            priceRange: "$800 - $5,000/month",
            factors: [
                "Email list size",
                "Campaign frequency",
                "Automation complexity",
                "Design requirements",
                "Integration needs",
            ],
        },
        results: [
            {
                metric: "25%",
                label: "Average Open Rate",
                description: "Industry-leading email open rates",
            },
            {
                metric: "4.5%",
                label: "Click-Through Rate",
                description: "Above-average email click-through rates",
            },
            {
                metric: "320%",
                label: "ROI",
                description: "Average return on investment for email marketing",
            },
        ],
        faqs: [
            {
                question: "How do you build email lists without buying them?",
                answer:
                    "We use organic list building strategies including lead magnets, opt-in forms, content upgrades, webinars, and social media campaigns. We never recommend purchasing email lists as they typically have poor engagement and can harm deliverability.",
            },
            {
                question: "What email marketing platforms do you work with?",
                answer:
                    "We work with all major email marketing platforms including Mailchimp, Constant Contact, HubSpot, Klaviyo, ConvertKit, and others. We'll recommend the best platform based on your business needs and budget.",
            },
            {
                question: "How often should we send emails to our list?",
                answer:
                    "Email frequency depends on your audience and content type. Generally, we recommend 1-2 emails per week for newsletters, with additional promotional emails as needed. We test different frequencies to find what works best for your audience.",
            },
        ],
        relatedServices: ["content-marketing", "analytics", "social-media"],
    },
    {
        id: "analytics",
        title: "Analytics & Reporting",
        subtitle: "Data-Driven Insights",
        description: "Track performance and optimize your marketing strategies with data-driven insights.",
        longDescription:
            "Our analytics and reporting services provide comprehensive insights into your marketing performance, helping you make data-driven decisions that improve ROI and drive business growth through detailed tracking, analysis, and actionable recommendations.",
        icon: "bar-chart",
        features: [
            "Google Analytics setup and optimization",
            "Custom dashboard creation",
            "Conversion tracking implementation",
            "Performance reporting and analysis",
            "ROI and attribution modeling",
            "Competitive analysis",
            "Data visualization",
            "Actionable insights and recommendations",
        ],
        benefits: [
            "Better decision making",
            "Improved marketing ROI",
            "Clear performance visibility",
            "Optimized campaign performance",
            "Reduced wasted ad spend",
            "Strategic growth insights",
        ],
        process: [
            {
                step: "01",
                title: "Analytics Audit",
                description: "Comprehensive audit of current analytics setup and identification of tracking gaps.",
                duration: "1 week",
            },
            {
                step: "02",
                title: "Implementation & Setup",
                description: "Set up proper tracking, conversion goals, and custom dashboards for comprehensive monitoring.",
                duration: "1-2 weeks",
            },
            {
                step: "03",
                title: "Data Collection",
                description: "Allow sufficient time for data collection to establish baseline performance metrics.",
                duration: "2-4 weeks",
            },
            {
                step: "04",
                title: "Analysis & Reporting",
                description: "Regular analysis and reporting with actionable insights and optimization recommendations.",
                duration: "Monthly",
            },
        ],
        pricing: {
            startingPrice: "$1,000/month",
            priceRange: "$1,000 - $6,000/month",
            factors: [
                "Number of data sources",
                "Reporting complexity",
                "Custom dashboard requirements",
                "Analysis depth and frequency",
                "Integration needs",
            ],
        },
        results: [
            {
                metric: "40%",
                label: "ROI Improvement",
                description: "Average improvement in marketing ROI",
            },
            {
                metric: "60%",
                label: "Better Decision Making",
                description: "Improvement in data-driven decision accuracy",
            },
            {
                metric: "25%",
                label: "Cost Reduction",
                description: "Reduction in wasted marketing spend",
            },
        ],
        faqs: [
            {
                question: "What analytics tools do you use?",
                answer:
                    "We work with Google Analytics, Google Tag Manager, Facebook Analytics, LinkedIn Analytics, and various other platform-specific tools. We also use advanced tools like Google Data Studio, Tableau, and custom reporting solutions for comprehensive analysis.",
            },
            {
                question: "How often do you provide reports?",
                answer:
                    "We provide monthly comprehensive reports with key insights and recommendations. For active campaigns, we also offer weekly performance updates and real-time dashboard access so you can monitor progress anytime.",
            },
            {
                question: "Can you track ROI across all marketing channels?",
                answer:
                    "Yes, we implement multi-touch attribution modeling to track customer journeys across all marketing channels. This helps you understand which channels and campaigns are driving the best ROI and how they work together.",
            },
        ],
        relatedServices: ["seo", "ppc", "social-media"],
    },
]

// Hook to get all services
export function useServicesData() {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate API call delay
        const timer = setTimeout(() => {
            setServices(servicesData)
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    return { services, isLoading }
}

// Hook to get a specific service by slug
export function useServiceData(slug) {
    const [service, setService] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Simulate API call delay
        const timer = setTimeout(() => {
            const foundService = servicesData.find((s) => s.id === slug)
            if (foundService) {
                setService(foundService)
                setError(null)
            } else {
                setService(null)
                setError("Service not found")
            }
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [slug])

    return { service, isLoading, error }
}

// Hook to get related services
export function useRelatedServices(serviceId, limit = 3) {
    const [relatedServices, setRelatedServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentService = servicesData.find((s) => s.id === serviceId)
            if (currentService && currentService.relatedServices) {
                const related = servicesData.filter((s) => currentService.relatedServices.includes(s.id)).slice(0, limit)
                setRelatedServices(related)
            }
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [serviceId, limit])

    return { relatedServices, isLoading }
}
