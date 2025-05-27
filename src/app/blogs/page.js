"use client"

import { useState } from "react"
import BlogsHero from "./blogs-hero"
import FeaturedBlog from "./featured-blog"
import BlogsGrid from "./blogs-grid"
import BlogCategories from "./blog-categories"
import BlogNewsletter from "./blog-newsletter"

export default function BlogsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    const handleSearch = (query) => {
        setSearchQuery(query)
        setSelectedCategory("all")
    }

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
        setSearchQuery("")
    }

    return (
        <main className="min-h-screen px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
            <BlogsHero onSearch={handleSearch} />
            {!searchQuery && selectedCategory === "all" && <FeaturedBlog />}
            <BlogsGrid searchQuery={searchQuery} categoryFilter={selectedCategory} />
            {/* <BlogCategories selectedCategory={selectedCategory} onCategorySelect={handleCategorySelect} />
            <BlogNewsletter /> */}
        </main>
    )
}
