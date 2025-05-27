"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const termsData = [
    {
        title: "1. Acceptance of Terms",
        content: `
      <p>By accessing and using iMarketing's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
      
      <p>These Terms & Conditions apply to all visitors, users, and others who access or use our digital marketing services.</p>
    `,
    },
    {
        title: "2. Services Description",
        content: `
      <p>iMarketing provides digital marketing services including but not limited to:</p>
      <ul>
        <li>Search Engine Optimization (SEO)</li>
        <li>Pay-Per-Click (PPC) Advertising</li>
        <li>Social Media Marketing</li>
        <li>Content Marketing</li>
        <li>Email Marketing</li>
        <li>Analytics and Reporting</li>
      </ul>
      
      <p>All services are provided subject to availability and our current service offerings. We reserve the right to modify, suspend, or discontinue any service at any time.</p>
    `,
    },
    {
        title: "3. User Responsibilities",
        content: `
      <p>As a client of iMarketing, you agree to:</p>
      <ul>
        <li>Provide accurate and complete information about your business</li>
        <li>Respond to requests for information in a timely manner</li>
        <li>Comply with all applicable laws and regulations</li>
        <li>Not engage in any fraudulent or illegal activities</li>
        <li>Respect intellectual property rights</li>
        <li>Maintain the confidentiality of any login credentials provided</li>
      </ul>
      
      <p>You are responsible for all activities that occur under your account and for maintaining the security of your account information.</p>
    `,
    },
    {
        title: "4. Payment Terms",
        content: `
      <p>Payment terms are as follows:</p>
      <ul>
        <li>Monthly retainer fees are due in advance on the first of each month</li>
        <li>Project-based fees are due according to the payment schedule outlined in your service agreement</li>
        <li>Late payments may incur a 1.5% monthly service charge</li>
        <li>All fees are non-refundable unless otherwise specified in writing</li>
        <li>We reserve the right to suspend services for non-payment</li>
      </ul>
      
      <p>All prices are subject to change with 30 days written notice. Continued use of services after price changes constitutes acceptance of new pricing.</p>
    `,
    },
    {
        title: "5. Intellectual Property",
        content: `
      <p>Intellectual property rights are distributed as follows:</p>
      
      <h4>Client-Owned:</h4>
      <ul>
        <li>Your business name, trademarks, and existing brand materials</li>
        <li>Content you provide to us</li>
        <li>Final deliverables specifically created for your business</li>
      </ul>
      
      <h4>iMarketing-Owned:</h4>
      <ul>
        <li>Our proprietary methodologies and processes</li>
        <li>Template designs and frameworks</li>
        <li>Analytics tools and reporting systems</li>
        <li>General knowledge and experience gained</li>
      </ul>
      
      <p>You grant us a license to use your brand materials solely for the purpose of providing agreed-upon services.</p>
    `,
    },
    {
        title: "6. Confidentiality",
        content: `
      <p>Both parties agree to maintain confidentiality regarding:</p>
      <ul>
        <li>Business strategies and proprietary information</li>
        <li>Customer data and analytics</li>
        <li>Financial information</li>
        <li>Technical processes and methodologies</li>
      </ul>
      
      <p>This confidentiality obligation survives termination of our service agreement and continues indefinitely unless information becomes publicly available through no fault of the receiving party.</p>
    `,
    },
    {
        title: "7. Limitation of Liability",
        content: `
      <p>iMarketing's liability is limited as follows:</p>
      <ul>
        <li>Our total liability shall not exceed the amount paid by you for services in the 12 months preceding the claim</li>
        <li>We are not liable for indirect, incidental, or consequential damages</li>
        <li>We do not guarantee specific results from marketing campaigns</li>
        <li>We are not responsible for third-party platform changes or policies</li>
        <li>Force majeure events are excluded from liability</li>
      </ul>
      
      <p>Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.</p>
    `,
    },
    {
        title: "8. Service Level Agreements",
        content: `
      <p>We commit to the following service standards:</p>
      <ul>
        <li>Response to client inquiries within 24 hours during business days</li>
        <li>Monthly reporting delivered by the 5th of each month</li>
        <li>99% uptime for our monitoring and reporting systems</li>
        <li>Regular strategy reviews as outlined in your service agreement</li>
      </ul>
      
      <p>If we fail to meet these standards, we will work with you to address the issue and may provide service credits as appropriate.</p>
    `,
    },
    {
        title: "9. Termination",
        content: `
      <p>Either party may terminate services under the following conditions:</p>
      
      <h4>By Client:</h4>
      <ul>
        <li>30 days written notice for monthly retainer services</li>
        <li>Immediate termination for breach of contract by iMarketing</li>
        <li>Completion of project-based work as agreed</li>
      </ul>
      
      <h4>By iMarketing:</h4>
      <ul>
        <li>30 days written notice for any reason</li>
        <li>Immediate termination for non-payment or breach of contract</li>
        <li>Immediate termination for illegal or unethical client activities</li>
      </ul>
      
      <p>Upon termination, we will provide a final report and transfer any applicable assets as outlined in your service agreement.</p>
    `,
    },
    {
        title: "10. Governing Law",
        content: `
      <p>These terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.</p>
      
      <p>Any disputes arising from these terms or our services shall be resolved through:</p>
      <ul>
        <li>Good faith negotiation as the first step</li>
        <li>Mediation if negotiation fails</li>
        <li>Binding arbitration as the final step</li>
      </ul>
      
      <p>You agree to submit to the personal jurisdiction of the courts located in [Your City, State] for any actions not subject to arbitration.</p>
    `,
    },
    {
        title: "11. Changes to Terms",
        content: `
      <p>We reserve the right to modify these terms at any time. Changes will be effective when:</p>
      <ul>
        <li>Posted on our website with an updated "Last Modified" date</li>
        <li>Sent to you via email notification</li>
        <li>30 days have passed since notification</li>
      </ul>
      
      <p>Continued use of our services after changes constitutes acceptance of the new terms. If you disagree with changes, you may terminate services as outlined in Section 9.</p>
    `,
    },
]

export default function TermsContent() {
    return (
        <section className="py-20">
            <div className="container mx-auto max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="space-y-8">
                        {termsData.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-xl">{section.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div
                                            className="prose prose-sm max-w-none text-muted-foreground"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <Separator className="my-12" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <Card className="bg-accent/10">
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-bold mb-4 font-satoshi-black">Questions About These Terms?</h3>
                                <p className="text-muted-foreground mb-4">
                                    If you have any questions about these Terms & Conditions, please contact us:
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        <strong>Email:</strong> legal@imarketing.com
                                    </p>
                                    <p>
                                        <strong>Phone:</strong> +1 (555) 123-4567
                                    </p>
                                    <p>
                                        <strong>Address:</strong> 123 Marketing St, Digital City, DC 10101
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
