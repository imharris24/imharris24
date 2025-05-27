"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function BlogComments() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Join the Discussion</CardTitle>
                            <p className="text-muted-foreground">
                                Share your thoughts and insights about this article. We'd love to hear from you!
                            </p>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <Input id="name" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="comment" className="text-sm font-medium">
                                    Comment
                                </label>
                                <Textarea id="comment" placeholder="Share your thoughts..." rows={5} />
                            </div>
                            <Button>Post Comment</Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
