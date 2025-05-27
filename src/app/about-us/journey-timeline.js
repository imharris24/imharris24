"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Static journey data
const journeyMilestones = [
    {
        id: 1,
        year: "2019",
        title: "The Beginning",
        description: "iMarketing was founded with a vision to help businesses navigate the digital landscape.",
    },
    {
        id: 2,
        year: "2020",
        title: "First Major Client",
        description: "Secured our first enterprise client and expanded our team to 15 members.",
    },
    {
        id: 3,
        year: "2021",
        title: "International Expansion",
        description: "Opened our first international office in London, expanding our global footprint.",
    },
    {
        id: 4,
        year: "2022",
        title: "Service Expansion",
        description: "Added social media marketing and content creation to our service offerings.",
    },
    {
        id: 5,
        year: "2023",
        title: "50th Team Member",
        description: "Celebrated hiring our 50th team member and moved to a larger headquarters.",
    },
    {
        id: 6,
        year: "2024",
        title: "Digital Transformation",
        description: "Pivoted to fully remote operations and helped clients navigate the pandemic.",
    },
    {
        id: 7,
        year: "2025",
        title: "AI Integration",
        description: "Integrated AI-powered analytics into our service offerings for enhanced performance.",
    },
]

export default function JourneyTimeline() {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <motion.div
                    className="mx-auto mb-16 md:flex md:items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Our Journey</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">From humble beginnings to industry leadership, our journey has been defined by innovation, growth, and a
                        commitment to excellence.</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary hidden md:block" />

                    <div className="space-y-12">
                        {journeyMilestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                                    {/* Year bubble for desktop */}
                                    <div className="hidden md:flex w-1/2 justify-center">
                                        <div className="relative">
                                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10 border-2 border-foreground">
                                                <span className="text-foreground font-bold font-satoshi-black">{milestone.year}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full md:w-1/2 px-4">
                                        <Card className="overflow-hidden border-2 border-foreground pt-0 sm:pt-6" style={{
                                            boxShadow: `0 0.5em 0 var(--foreground)`
                                        }}>
                                            {/* Year bubble for mobile */}
                                            <div className="md:hidden bg-primary text-foreground font-satoshi-black border-b-2 border-foreground font-bold py-2 px-4 rounded-t-lg">
                                                {milestone.year}
                                            </div>
                                            <CardHeader>
                                                <CardTitle className="font-satoshi-black text-2xl">{milestone.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="">{milestone.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
