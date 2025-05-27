"use client"

import { motion } from "framer-motion"
import { useBlogData } from "@/hooks/use-blogs-data"

export default function BlogContent({ slug }) {
    const { blog, isLoading } = useBlogData(slug)

    if (isLoading) {
        return (
            <section className="py-20">
                <div className="container max-w-3xl mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading content...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (!blog) return null

    return (
        <section className="py-20">
            <div className="container max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </div>
        </section>
    )
}
