"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ThankYouStep() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
        >
            <div className="flex justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
            </div>

            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-satoshi-black">Thank You!</h2>
                <p className="max-w-2xl mx-auto">
                    Your custom quote request has been submitted successfully. Our team will review your information and prepare a
                    personalized marketing proposal for your business.
                </p>
            </div>

            <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
                    <div className="space-y-4 text-left">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary font-bold text-sm">1</span>
                            </div>
                            <div>
                                <h4 className="font-medium">Review & Analysis</h4>
                                <p className="text-sm text-muted-foreground">
                                    Our team will analyze your requirements and research your industry and competitors.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary font-bold text-sm">2</span>
                            </div>
                            <div>
                                <h4 className="font-medium">Custom Proposal</h4>
                                <p className="text-sm text-muted-foreground">
                                    We'll create a detailed proposal with strategy, timeline, and transparent pricing.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary font-bold text-sm">3</span>
                            </div>
                            <div>
                                <h4 className="font-medium">Consultation Call</h4>
                                <p className="text-sm text-muted-foreground">
                                    We'll schedule a call to discuss the proposal and answer any questions.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="bg-accent/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-4">Expected Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                        <Mail className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-medium">Email Confirmation</div>
                        <div className="text-muted-foreground">Within 1 hour</div>
                    </div>
                    <div className="text-center">
                        <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-medium">Custom Proposal</div>
                        <div className="text-muted-foreground">Within 24-48 hours</div>
                    </div>
                    <div className="text-center">
                        <Phone className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-medium">Consultation Call</div>
                        <div className="text-muted-foreground">Within 3-5 days</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                    <Link href="/">Return to Homepage</Link>
                </Button>
            </div>

            <p className="text-sm">
                Questions? Contact us at{" "}
                <a href="mailto:info@imarketing.com" className="text-primary hover:underline">
                    info@imarketing.com
                </a>{" "}
                or{" "}
                <a href="tel:+15551234567" className="text-primary hover:underline">
                    +1 (555) 123-4567
                </a>
            </p>
        </motion.div>
    )
}
