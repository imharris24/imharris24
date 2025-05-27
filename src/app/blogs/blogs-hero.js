"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"


export default function BlogsHero({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch(searchQuery)
    }

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-satoshi-black">
                        Digital Marketing Insights & Strategies
                    </h1>
                    <p className="mb-8 max-w-2xl mx-auto">
                        Stay ahead of the curve with our latest insights, tips, and strategies for digital marketing success. Learn
                        from industry experts and grow your business.
                    </p>

                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search articles..."
                                className="pl-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Button type="submit">Search</Button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
