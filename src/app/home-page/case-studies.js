"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const caseStudies = [
    {
        id: 1,
        title: "E-commerce Revenue Growth",
        description: "Increased online sales by 150% for a retail brand through targeted SEO and PPC campaigns.",
    },
    {
        id: 2,
        title: "B2B Lead Generation",
        description:
            "Generated 200+ qualified leads per month for a SaaS company through content marketing and email campaigns.",
    },
    {
        id: 3,
        title: "Brand Awareness Campaign",
        description: "Increased social media engagement by 300% and grew the audience by 10,000 followers in 3 months.",
    },
]

export default function CaseStudies() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 md:flex md:items-center">
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Case Studies</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">See how we've helped businesses achieve remarkable results with our digital marketing strategies.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-foreground text-background rounded-2xl p-8 md:p-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-background">
                        {caseStudies.map((study, index) => (
                            <div key={study.id} className="pt-6 md:pt-0 md:px-6 first:pt-0 first:md:pl-0">
                                <h3 className="text-xl font-bold mb-4 font-satoshi-black">{study.title}</h3>
                                <p className="text-background mb-4">{study.description}</p>
                                <Button variant="link" className="p-0 h-auto text-accent hover:text-secondary transition-all">
                                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
