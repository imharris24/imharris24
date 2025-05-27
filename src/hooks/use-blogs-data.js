"use client"

import { useState, useEffect, useMemo } from "react"

// Static blog data
const blogsData = [
    {
        id: "future-of-digital-marketing",
        title: "The Future of Digital Marketing: AI and Automation Trends for 2024",
        excerpt:
            "Discover how artificial intelligence and automation are reshaping the digital marketing landscape and what it means for your business strategy.",
        content: `
      <p>The digital marketing landscape is evolving at an unprecedented pace, with artificial intelligence and automation leading the charge. As we move through 2024, businesses must adapt to these technological advances to stay competitive and relevant.</p>
      
      <h2>The Rise of AI in Marketing</h2>
      <p>Artificial intelligence is no longer a futuristic concept—it's here and transforming how we approach digital marketing. From predictive analytics to personalized content creation, AI is enabling marketers to deliver more targeted and effective campaigns than ever before.</p>
      
      <h3>Key AI Applications in 2024</h3>
      <ul>
        <li>Predictive customer behavior analysis</li>
        <li>Automated content generation and optimization</li>
        <li>Real-time personalization at scale</li>
        <li>Intelligent chatbots and customer service automation</li>
        <li>Dynamic pricing and inventory management</li>
      </ul>
      
      <h2>Automation: The New Marketing Backbone</h2>
      <p>Marketing automation has evolved beyond simple email sequences. Today's automation platforms integrate across multiple channels, creating seamless customer journeys that adapt in real-time based on user behavior and preferences.</p>
      
      <p>The most successful businesses in 2024 are those that have embraced automation not as a replacement for human creativity, but as an amplifier of it. By automating repetitive tasks, marketers can focus on strategy, creativity, and building meaningful relationships with their audience.</p>
      
      <h2>Preparing Your Business for the Future</h2>
      <p>To stay competitive in this rapidly evolving landscape, businesses need to start implementing AI and automation strategies now. This doesn't mean completely overhauling your current approach—it means strategically integrating these technologies where they can have the most impact.</p>
    `,
        category: "Trends",
        readTime: "8 min read",
        publishDate: "March 15, 2024",
        author: {
            name: "Sarah Johnson",
            role: "CEO & Digital Marketing Strategist",
            bio: "Sarah is a digital marketing expert with over 10 years of experience helping businesses grow online. She specializes in AI-driven marketing strategies and has helped hundreds of companies achieve remarkable growth through innovative digital solutions.",
            image: "/team/01.jpg",
            social: {
                linkedin: "https://linkedin.com/in/sarahjohnson",
                twitter: "https://twitter.com/sarahjohnson",
            },
        },
        image: "https://www.skema.edu/sites/default/files/styles/wide/public/2024-05/header-msc-1500x1200-050.jpg?itok=rVwZzF7R",
        tags: ["AI", "Automation", "Digital Marketing", "Trends", "2024"],
        featured: true,
        relatedPosts: ["seo-guide-2024", "social-media-roi", "content-marketing-strategy"],
    },
    {
        id: "seo-guide-2024",
        title: "Complete SEO Guide for 2024: Strategies That Actually Work",
        excerpt:
            "Master the latest SEO techniques and algorithm updates to boost your website's visibility and drive organic traffic.",
        content: `
      <p>Search Engine Optimization continues to be one of the most effective ways to drive organic traffic to your website. However, SEO strategies that worked in the past may not be as effective today. This comprehensive guide covers the latest SEO techniques that actually work in 2024.</p>
      
      <h2>Understanding Google's Latest Algorithm Updates</h2>
      <p>Google's algorithm updates in 2024 have placed even greater emphasis on user experience, content quality, and technical performance. The key is to focus on creating valuable content that genuinely helps your audience while ensuring your website provides an excellent user experience.</p>
      
      <h2>Technical SEO Fundamentals</h2>
      <p>Technical SEO forms the foundation of your search visibility. Key areas to focus on include:</p>
      <ul>
        <li>Core Web Vitals optimization</li>
        <li>Mobile-first indexing compliance</li>
        <li>Schema markup implementation</li>
        <li>Site speed optimization</li>
        <li>SSL certificate and security</li>
      </ul>
      
      <h2>Content Strategy for SEO Success</h2>
      <p>Content remains king in SEO, but the approach has evolved. Focus on creating comprehensive, authoritative content that addresses user intent and provides genuine value. Topic clusters and pillar pages are particularly effective for building topical authority.</p>
    `,
        category: "SEO",
        readTime: "12 min read",
        publishDate: "March 10, 2024",
        author: {
            name: "Michael Chen",
            role: "SEO Specialist",
            bio: "Michael is passionate about helping businesses improve their search engine visibility and rankings. With 8 years of experience in SEO, he has helped numerous companies achieve first-page rankings for competitive keywords.",
            image: "/team/01.jpg",
            social: {
                linkedin: "https://linkedin.com/in/michaelchen",
            },
        },
        image: "https://www.skema.edu/sites/default/files/styles/wide/public/2024-05/header-msc-1500x1200-050.jpg?itok=rVwZzF7R",
        tags: ["SEO", "Google", "Algorithm", "Organic Traffic", "Rankings"],
        featured: false,
        relatedPosts: ["future-of-digital-marketing", "content-marketing-strategy", "analytics-insights"],
    },
    {
        id: "social-media-roi",
        title: "Measuring Social Media ROI: Metrics That Matter",
        excerpt:
            "Learn how to track and measure the real impact of your social media marketing efforts with actionable metrics and KPIs.",
        content: `
      <p>Measuring social media ROI remains one of the biggest challenges for marketers. While likes and followers are easy to track, they don't always translate to business value. This guide will help you identify and measure the metrics that actually matter for your business.</p>
      
      <h2>Beyond Vanity Metrics</h2>
      <p>While engagement metrics like likes, shares, and comments provide valuable insights into content performance, they shouldn't be your only focus. True ROI measurement requires connecting social media activities to business outcomes.</p>
      
      <h2>Key Metrics to Track</h2>
      <ul>
        <li>Conversion rate from social media traffic</li>
        <li>Customer acquisition cost via social channels</li>
        <li>Lifetime value of social media customers</li>
        <li>Brand awareness and sentiment metrics</li>
        <li>Lead generation and quality scores</li>
      </ul>
      
      <h2>Setting Up Proper Tracking</h2>
      <p>To accurately measure social media ROI, you need proper tracking systems in place. This includes UTM parameters, conversion tracking, and attribution modeling to understand the customer journey across touchpoints.</p>
    `,
        category: "Social Media",
        readTime: "6 min read",
        publishDate: "March 8, 2024",
        author: {
            name: "Emily Rodriguez",
            role: "Social Media Strategist",
            bio: "Emily creates compelling social media strategies that engage audiences and drive conversions. She has managed social media campaigns for brands across various industries, consistently delivering measurable results.",
            image: "/team/01.jpg",
            social: {
                linkedin: "https://linkedin.com/in/emilyrodriguez",
                twitter: "https://twitter.com/emilyrodriguez",
            },
        },
        image: "https://www.skema.edu/sites/default/files/styles/wide/public/2024-05/header-msc-1500x1200-050.jpg?itok=rVwZzF7R",
        tags: ["Social Media", "ROI", "Analytics", "Metrics", "KPIs"],
        featured: false,
        relatedPosts: ["analytics-insights", "future-of-digital-marketing", "email-marketing-trends"],
    },
    {
        id: "content-marketing-strategy",
        title: "Building a Content Marketing Strategy That Converts",
        excerpt:
            "Create compelling content that engages your audience and drives meaningful conversions with this comprehensive strategy guide.",
        content: `
      <p>Content marketing is more than just creating blog posts and hoping for the best. A successful content marketing strategy requires careful planning, audience understanding, and a clear path from awareness to conversion.</p>
      
      <h2>Understanding Your Audience</h2>
      <p>Before creating any content, you need to deeply understand your target audience. This includes their pain points, preferences, content consumption habits, and where they are in the buyer's journey.</p>
      
      <h2>Content Types That Convert</h2>
      <p>Different content types serve different purposes in the conversion funnel:</p>
      <ul>
        <li>Educational blog posts for awareness</li>
        <li>Case studies for consideration</li>
        <li>Product demos for decision-making</li>
        <li>Customer testimonials for trust-building</li>
        <li>How-to guides for problem-solving</li>
      </ul>
      
      <h2>Distribution and Promotion</h2>
      <p>Creating great content is only half the battle. You need a solid distribution strategy to ensure your content reaches the right audience at the right time through the right channels.</p>
    `,
        category: "Content Marketing",
        readTime: "10 min read",
        publishDate: "March 5, 2024",
        author: {
            name: "David Kim",
            role: "Content Marketing Manager",
            bio: "David is expert in creating and optimizing content marketing campaigns across multiple channels. His data-driven approach to content creation has helped businesses increase their lead generation by an average of 200%.",
            image: "/team/01.jpg",
            social: {
                linkedin: "https://linkedin.com/in/davidkim",
            },
        },
        image: "https://www.skema.edu/sites/default/files/styles/wide/public/2024-05/header-msc-1500x1200-050.jpg?itok=rVwZzF7R",
        tags: ["Content Marketing", "Strategy", "Conversions", "Audience", "Distribution"],
        featured: false,
        relatedPosts: ["seo-guide-2024", "email-marketing-trends", "future-of-digital-marketing"],
    },
    {
        id: "ppc-optimization",
        title: "PPC Campaign Optimization: Advanced Techniques for Better ROI",
        excerpt:
            "Take your paid advertising to the next level with these proven optimization strategies that maximize ROI and reduce costs.",
        content: `
      <p>Pay-per-click advertising can be incredibly effective when done right, but many businesses struggle to achieve optimal ROI from their campaigns. This guide covers advanced optimization techniques that can significantly improve your PPC performance.</p>
      
      <h2>Keyword Strategy Optimization</h2>
      <p>Effective keyword strategy goes beyond basic keyword research. It involves understanding search intent, utilizing negative keywords effectively, and continuously refining your keyword list based on performance data.</p>
      
      <h2>Ad Copy Testing and Optimization</h2>
      <p>Your ad copy is crucial for attracting clicks and conversions. Implement systematic A/B testing for headlines, descriptions, and calls-to-action to identify what resonates best with your audience.</p>
      
      <h2>Landing Page Alignment</h2>
      <p>The connection between your ads and landing pages is critical for conversion success. Ensure message match, optimize for mobile, and create clear conversion paths.</p>
    `,
        category: "PPC",
        readTime: "8 min read",
        publishDate: "March 3, 2024",
        author: {
            name: "Jessica Patel",
            role: "PPC Manager",
            bio: "Jessica builds and manages social media strategies that increase engagement and brand awareness. Her creative approach to social media has helped brands grow their online communities and drive meaningful customer relationships.",
            image: "/team/01.jpg",
            social: {
                linkedin: "https://linkedin.com/in/jessicapatel",
            },
        },
        image: "https://www.skema.edu/sites/default/files/styles/wide/public/2024-05/header-msc-1500x1200-050.jpg?itok=rVwZzF7R",
        tags: ["PPC", "Google Ads", "Optimization", "ROI", "Paid Advertising"],
        featured: false,
        relatedPosts: ["analytics-insights", "seo-guide-2024", "social-media-roi"],
    },
    {
        id: "email-marketing-trends",
        title: "Email Marketing Trends: What's Working in 2024",
        excerpt:
            "Discover the latest email marketing trends and best practices for higher engagement, better deliverability, and increased conversions.",
        content: `
      <p>Email marketing continues to be one of the highest ROI marketing channels, but the strategies that work are constantly evolving. Here are the key trends and best practices that are driving success in 2024.</p>
      
      <h2>Personalization at Scale</h2>
      <p>Modern email marketing goes far beyond using the recipient's name. Advanced personalization includes behavioral triggers, dynamic content, and AI-powered recommendations based on user preferences and actions.</p>
      
      <h2>Interactive Email Elements</h2>
      <p>Interactive elements like polls, surveys, carousels, and accordion menus are increasing engagement rates significantly. These elements allow subscribers to engage with your content without leaving their inbox.</p>
      
      <h2>Privacy-First Approach</h2>
      <p>With increasing privacy regulations and changes to email tracking, successful email marketers are adopting privacy-first strategies that build trust while still delivering personalized experiences.</p>
    `,
        category: "Email Marketing",
        readTime: "7 min read",
        publishDate: "March 1, 2024",
        author: {
            name: "Robert Wilson",
            role: "Email Marketing Specialist",
            bio: "Robert transforms complex analytics into actionable insights that drive business growth. His expertise in data analysis and reporting has helped companies optimize their marketing strategies and improve ROI across all channels.",
            image: "/team/01.jpg",
            social: {
                linkedin: "https://linkedin.com/in/robertwilson",
            },
        },
        image: "https://www.skema.edu/sites/default/files/styles/wide/public/2024-05/header-msc-1500x1200-050.jpg?itok=rVwZzF7R",
        tags: ["Email Marketing", "Personalization", "Automation", "Privacy", "Engagement"],
        featured: false,
        relatedPosts: ["content-marketing-strategy", "social-media-roi", "analytics-insights"],
    },
    {
        id: "analytics-insights",
        title: "Google Analytics 4: Advanced Insights and Reporting",
        excerpt:
            "Unlock the full potential of GA4 with advanced tracking and reporting techniques that provide actionable business insights.",
        content: `
      <p>Google Analytics 4 represents a significant shift in how we track and analyze user behavior. This guide will help you leverage GA4's advanced features to gain deeper insights into your marketing performance and customer journey.</p>
      
      <h2>Understanding GA4's Event-Based Model</h2>
      <p>Unlike Universal Analytics, GA4 uses an event-based data model that provides more flexibility in tracking user interactions. Learn how to set up custom events and parameters for better data collection.</p>
      
      <h2>Advanced Reporting Techniques</h2>
      <p>GA4 offers powerful reporting capabilities including:</p>
      <ul>
        <li>Custom exploration reports</li>
        <li>Funnel analysis</li>
        <li>Cohort analysis</li>
        <li>Path analysis</li>
        <li>Attribution modeling</li>
      </ul>
      
      <h2>Connecting GA4 to Business Outcomes</h2>
      <p>The key to successful analytics is connecting data to business outcomes. Learn how to set up conversion tracking, calculate ROI, and create reports that drive actionable insights.</p>
    `,
        category: "Analytics",
        readTime: "15 min read",
        publishDate: "February 28, 2024",
        author: {
            name: "Sarah Johnson",
            role: "CEO & Digital Marketing Strategist",
            bio: "Sarah is a digital marketing expert with over 10 years of experience helping businesses grow online. She specializes in AI-driven marketing strategies and has helped hundreds of companies achieve remarkable growth through innovative digital solutions.",
            image: "/team/01.jpg",
            social: {
                linkedin: "https://linkedin.com/in/sarahjohnson",
                twitter: "https://twitter.com/sarahjohnson",
            },
        },
        image: "https://www.skema.edu/sites/default/files/styles/wide/public/2024-05/header-msc-1500x1200-050.jpg?itok=rVwZzF7R",
        tags: ["Analytics", "Google Analytics", "GA4", "Reporting", "Data Analysis"],
        featured: false,
        relatedPosts: ["ppc-optimization", "seo-guide-2024", "social-media-roi"],
    },
    {
        id: "local-seo-strategies",
        title: "Local SEO Strategies for Small Businesses",
        excerpt:
            "Dominate local search results and attract more customers in your area with these proven local SEO techniques.",
        content: `
      <p>For small businesses, local SEO can be the difference between thriving and struggling. This comprehensive guide covers everything you need to know about optimizing your online presence for local search.</p>
      
      <h2>Google My Business Optimization</h2>
      <p>Your Google My Business profile is the foundation of local SEO. Ensure your profile is complete, accurate, and regularly updated with posts, photos, and customer interactions.</p>
      
      <h2>Local Citation Building</h2>
      <p>Consistent NAP (Name, Address, Phone) information across online directories is crucial for local search rankings. Focus on quality directories relevant to your industry and location.</p>
      
      <h2>Review Management</h2>
      <p>Online reviews significantly impact local search rankings and customer decisions. Develop a systematic approach to encouraging and managing customer reviews.</p>
    `,
        category: "SEO",
        readTime: "9 min read",
        publishDate: "February 25, 2024",
        author: {
            name: "Michael Chen",
            role: "SEO Specialist",
            bio: "Michael is passionate about helping businesses improve their search engine visibility and rankings. With 8 years of experience in SEO, he has helped numerous companies achieve first-page rankings for competitive keywords.",
            image: "/team/01.jpg",
            social: {
                linkedin: "/team/01.jpg",
            },
        },
        image: "https://www.skema.edu/sites/default/files/styles/wide/public/2024-05/header-msc-1500x1200-050.jpg?itok=rVwZzF7R",
        tags: ["Local SEO", "Small Business", "Google My Business", "Citations", "Reviews"],
        featured: false,
        relatedPosts: ["seo-guide-2024", "content-marketing-strategy", "social-media-roi"],
    },
]

// Generate categories from blog data
const generateCategories = (blogs) => {
    const categoryMap = new Map()

    blogs.forEach((blog) => {
        categoryMap.set(blog.category, (categoryMap.get(blog.category) || 0) + 1)
    })

    const categories = [{ name: "All", count: blogs.length, slug: "all" }]

    categoryMap.forEach((count, name) => {
        categories.push({
            name,
            count,
            slug: name.toLowerCase().replace(/\s+/g, "-"),
        })
    })

    return categories
}

// Hook to get all blogs with optional filtering and searching
export function useBlogsData(searchQuery, categoryFilter) {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const filteredBlogs = useMemo(() => {
        let filtered = blogsData

        // Apply category filter
        if (categoryFilter && categoryFilter !== "all") {
            filtered = filtered.filter((blog) => blog.category.toLowerCase().replace(/\s+/g, "-") === categoryFilter)
        }

        // Apply search filter
        if (searchQuery && searchQuery.trim()) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(
                (blog) =>
                    blog.title.toLowerCase().includes(query) ||
                    blog.excerpt.toLowerCase().includes(query) ||
                    blog.content.toLowerCase().includes(query) ||
                    blog.tags.some((tag) => tag.toLowerCase().includes(query)) ||
                    blog.author.name.toLowerCase().includes(query),
            )
        }

        return filtered
    }, [searchQuery, categoryFilter])

    useEffect(() => {
        // Simulate API call delay
        const timer = setTimeout(() => {
            setBlogs(filteredBlogs)
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [filteredBlogs])

    return { blogs, isLoading }
}

// Hook to get a specific blog by slug
export function useBlogData(slug) {
    const [blog, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            const foundBlog = blogsData.find((b) => b.id === slug)
            if (foundBlog) {
                setBlog(foundBlog)
                setError(null)
            } else {
                setBlog(null)
                setError("Blog post not found")
            }
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [slug])

    return { blog, isLoading, error }
}

// Hook to get featured blog
export function useFeaturedBlog() {
    const [featuredBlog, setFeaturedBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            const featured = blogsData.find((blog) => blog.featured) || blogsData[0]
            setFeaturedBlog(featured)
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    return { featuredBlog, isLoading }
}

// Hook to get related blogs
export function useRelatedBlogs(blogId, limit = 3) {
    const [relatedBlogs, setRelatedBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentBlog = blogsData.find((b) => b.id === blogId)
            if (currentBlog && currentBlog.relatedPosts) {
                const related = blogsData.filter((b) => currentBlog.relatedPosts.includes(b.id)).slice(0, limit)
                setRelatedBlogs(related)
            }
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [blogId, limit])

    return { relatedBlogs, isLoading }
}

// Hook to get blog categories
export function useBlogCategories() {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCategories(generateCategories(blogsData))
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    return { categories, isLoading }
}
