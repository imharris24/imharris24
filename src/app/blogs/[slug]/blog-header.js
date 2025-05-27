"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Share2, Bookmark } from "lucide-react"
import { useBlogData } from "@/hooks/use-blogs-data"

export default function BlogHeader({ slug }) {
    const { blog, isLoading, error } = useBlogData(slug)

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: blog.title,
                    text: blog.excerpt,
                    url: `${window.location.origin}/blogs/${slug}`
                })
            } else {
                // Fallback for browsers that don't support Web Share API
                await navigator.clipboard.writeText(`${window.location.origin}/blogs/${slug}`)
                alert('Link copied to clipboard!')
            }
        } catch (error) {
            console.error('Error sharing:', error)
        }
    }

    if (isLoading) {
        return (
            <section className="py-20 md:py-28">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading article...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (error || !blog) {
        return (
            <section className="py-20 md:py-28">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                        <p className="text-lg text-muted-foreground">The requested article could not be found.</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="py-20 md:py-28">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <Badge className="mb-4">{blog.category}</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-satoshi-black">{blog.title}</h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {blog.publishDate}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {blog.readTime}
                        </div>
                        <div>By {blog.author.name}</div>
                    </div>

                    <div className="flex justify-center gap-4 mb-8">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleShare}
                        >
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-lg overflow-hidden"
                >
                    <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-64 md:h-96 object-cover" />
                </motion.div>
            </div>
        </section>
    )
}