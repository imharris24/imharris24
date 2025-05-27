"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { useBlogsData } from "@/hooks/use-blogs-data"
import { useState, useEffect } from "react"

export default function BlogsGrid({ searchQuery, categoryFilter, showLoadMore = true }) {
    const { blogs, isLoading } = useBlogsData(searchQuery, categoryFilter)
    const [visibleCount, setVisibleCount] = useState(6)

    // Reset visible count when search or filter changes
    useEffect(() => {
        setVisibleCount(6)
    }, [searchQuery, categoryFilter])

    if (isLoading) {
        return (
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading articles...</p>
                    </div>
                </div>
            </section>
        )
    }

    const visibleBlogs = blogs.slice(0, visibleCount)

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-satoshi-black">
                        {searchQuery ? `Search Results for "${searchQuery}"` : "Latest Articles"}
                    </h2>
                    <p>
                        {blogs.length === 0
                            ? "No articles found matching your criteria"
                            : `${blogs.length} article${blogs.length !== 1 ? "s" : ""} found`}
                    </p>
                </motion.div>

                {blogs.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleBlogs.map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <Card className="h-full pt-0 group hover:shadow-lg transition-shadow duration-300">
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
                                            <h3 className="text-xl font-bold line-clamp-2 font-satoshi-black">{blog.title}</h3>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">By {blog.author.name}</span>
                                                <Button variant="ghost" className="p-0 h-auto font-semibold group-hover:text-primary" asChild>
                                                    <Link href={`/blogs/${blog.id}`}>
                                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {showLoadMore && blogs.length > visibleCount && (
                            <div className="flex justify-center mt-12">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    onClick={() => setVisibleCount(prev => prev + 6)}
                                >
                                    Load More Articles
                                </Button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground mb-4">
                            No articles found. Try adjusting your search or browse our categories.
                        </p>
                        <Button variant="outline" asChild>
                            <Link href="/blogs">View All Articles</Link>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}