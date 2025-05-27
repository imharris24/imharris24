"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function JoinTeam() {
    return (
        <section className="py-20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary/5 rounded-2xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-satoshi-black">Join Our Team</h2>
                            <p className="mb-6">
                                We're always looking for talented individuals who are passionate about digital marketing and want to
                                make a difference. Join our team of experts and grow your career in a supportive and innovative
                                environment.
                            </p>
                            <div className="space-y-4">
                                <p>
                                    We offer competitive salaries, flexible working arrangements, continuous learning opportunities, and a
                                    collaborative culture that values diversity and inclusion.
                                </p>
                                <Button size="lg" asChild>
                                    <a href="mailto:careers@imarketing.pk" target="_blank" rel="noopener noreferrer">
                                        View Open Positions
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-64 lg:h-auto">
                            <img
                                src="/svg/join.svg"
                                alt="Join Our Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}