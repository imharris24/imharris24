"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import { motion } from "framer-motion"

// Dummy team data
const teamMembers = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO & Founder",
        bio: "Digital marketing expert with 10+ years of experience helping businesses grow online.",
        image: "/team/01.jpg",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "SEO Specialist",
        bio: "Passionate about helping businesses improve their search engine visibility and rankings.",
        image: "/team/01.jpg",
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Content Strategist",
        bio: "Creates compelling content strategies that engage audiences and drive conversions.",
        image: "/team/01.jpg",
    },
    {
        id: 4,
        name: "David Kim",
        role: "PPC Manager",
        bio: "Expert in creating and optimizing paid advertising campaigns across multiple platforms.",
        image: "/team/01.jpg",
    },
    {
        id: 5,
        name: "Jessica Patel",
        role: "Social Media Manager",
        bio: "Builds and manages social media strategies that increase engagement and brand awareness.",
        image: "/team/01.jpg",
    },
    {
        id: 6,
        name: "Robert Wilson",
        role: "Analytics Specialist",
        bio: "Data-driven marketer who transforms complex analytics into actionable insights.",
        image: "/team/01.jpg",
    },
]

export default function TeamSection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 md:flex md:items-center">
                    <h2 className="bg-primary w-fit p-2 rounded text-background text-3xl md:text-3xl font-bold mb-4 md:mb-0 font-satoshi-black">Meet Our Team</h2>
                    <p className="md:px-4 max-w-md mt-2 md:mt-0">
                        Our talented team of digital marketing experts is dedicated to helping your business succeed.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card
                                className="overflow-hidden h-full border-2 border-foreground"
                                style={{
                                    boxShadow: `0 0.5em 0 var(--foreground)`
                                }}
                            >
                                <div className="relative">
                                    {/* LinkedIn Icon */}
                                    <div className="absolute top-0 right-2 z-10">
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="rounded-full border-2 border-foreground bg-primary transition-colors hover:bg-accent"
                                        >
                                            <Linkedin className="h-5 w-5 text-foreground" />
                                            <span className="sr-only">LinkedIn</span>
                                        </Button>
                                    </div>

                                    {/* Top Section with Image and Name/Designation */}
                                    <div className="flex items-center gap-4 p-4">
                                        {/* Image */}
                                        <div className="w-32 h-32 rounded-full overflow-hidden relative">
                                            <div className="relative group w-full h-full">
                                                <img
                                                    src={member.image || "/placeholder.svg"}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
                                                <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
                                            </div>
                                        </div>

                                        {/* Name & Designation */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold font-satoshi-black">{member.name}</h3>
                                            <p className="text-primary font-medium text-base">{member.role}</p>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border border-foreground mx-4" />

                                    {/* Bio */}
                                    <CardContent className="pt-4">
                                        <p>{member.bio}</p>
                                    </CardContent>
                                </div>
                            </Card>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}
