"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter } from "lucide-react"
import { useBlogData } from "@/hooks/use-blogs-data"

export default function BlogAuthor({ slug }) {
    const { blog, isLoading } = useBlogData(slug)

    if (isLoading) {
        return (
            <section className="py-20">
                <div className="container max-w-3xl mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading author info...</p>
                    </div>
                </div>
            </section>
        )
    }

    if (!blog) return null

    return (
        <section className="py-20">
            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card>
                        <CardContent className="p-8">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <img
                                    src={blog.author.image || "/placeholder.svg"}
                                    alt={blog.author.name}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">{blog.author.name}</h3>
                                    <p className="text-primary font-medium mb-4">{blog.author.role}</p>
                                    <p className="text-muted-foreground mb-6">{blog.author.bio}</p>
                                    <div className="flex gap-4">
                                        {blog.author.social.linkedin && (
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={blog.author.social.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <Linkedin className="h-4 w-4 mr-2" />
                                                    LinkedIn
                                                </a>
                                            </Button>
                                        )}
                                        {blog.author.social.twitter && (
                                            <Button variant="outline" size="sm" asChild>
                                                <a href={blog.author.social.twitter} target="_blank" rel="noopener noreferrer">
                                                    <Twitter className="h-4 w-4 mr-2" />
                                                    Twitter
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
