"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { useRelatedBlogs } from "@/hooks/use-blogs-data"

export default function RelatedBlogs({ slug }) {
    const { relatedBlogs, isLoading } = useRelatedBlogs(slug)

    if (isLoading) {
        return (
            <section className="py-20">
                <div className="container max-w-6xl mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading related articles...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (relatedBlogs.length === 0) return null

    return (
        <section className="py-20">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-satoshi-black">Related Articles</h2>
                    <p>Continue your learning journey</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedBlogs.map((blog, index) => (
                        <motion.div
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full group hover:shadow-lg transition-shadow duration-300 pt-0">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={blog.image || "/placeholder.svg"}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover transition-transform group-hover:scale-105 duration-300"
                                    />
                                    <Badge className="absolute top-4 left-4">{blog.category}</Badge>
                                </div>
                                <CardHeader className="pb-2">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {blog.publishDate}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {blog.readTime}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg line-clamp-2 font-satoshi-black">{blog.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary" asChild>
                                        <Link href={`/blogs/${blog.id}`}>
                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
