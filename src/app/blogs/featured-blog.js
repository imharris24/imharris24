"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { useFeaturedBlog } from "@/hooks/use-blogs-data"

export default function FeaturedBlog() {
    const { featuredBlog, isLoading } = useFeaturedBlog()

    if (isLoading) {
        return (
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading featured article...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (!featuredBlog) return null

    return (
        <section className="py-20">
            <div className=" mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-satoshi-black">Featured Article</h2>
                    <p>Our most popular and insightful content</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="overflow-hidden py-0">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-64 lg:h-auto">
                                <img
                                    src={featuredBlog.image || "/placeholder.svg"}
                                    alt={featuredBlog.title}
                                    className="w-full h-full object-cover"
                                />
                                <Badge className="absolute top-4 left-4">{featuredBlog.category}</Badge>
                            </div>
                            <CardContent className="p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {featuredBlog.publishDate}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {featuredBlog.readTime}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-satoshi-black">{featuredBlog.title}</h3>
                                <p className="text-muted-foreground mb-6">{featuredBlog.excerpt}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">By {featuredBlog.author.name}</span>
                                    <Button asChild>
                                        <Link href={`/blogs/${featuredBlog.id}`}>
                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
