"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useBlogCategories } from "@/hooks/use-blogs-data"

export default function BlogCategories({ selectedCategory = "all", onCategorySelect }) {
    const { categories, isLoading } = useBlogCategories()

    if (isLoading) {
        return (
            <section className="py-20">
                <div className=" mx-auto">
                    <div className="text-center">
                        <p className="text-lg text-muted-foreground">Loading categories...</p>
                    </div>
                </div>
            </section>
        )
    }

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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
                    <p className="text-lg text-muted-foreground">Find articles that match your interests</p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.slug}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Badge
                                variant={selectedCategory === category.slug ? "default" : "secondary"}
                                className={`text-sm px-4 py-2 cursor-pointer transition-colors ${selectedCategory === category.slug
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-primary hover:text-primary-foreground"
                                    }`}
                                onClick={() => onCategorySelect(category.slug)}
                            >
                                {category.name} ({category.count})
                            </Badge>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
