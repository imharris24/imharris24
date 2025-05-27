"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Eye, Lock, Users, Cookie, FileText, Mail, Phone } from "lucide-react"

const privacyData = [
    {
        title: "1. Information We Collect",
        icon: <Eye className="h-6 w-6 text-primary" />,
        content: `
      <p>We collect information you provide directly to us, such as when you:</p>
      <ul>
        <li>Create an account or request a quote</li>
        <li>Subscribe to our newsletter or blog</li>
        <li>Contact us for support or inquiries</li>
        <li>Participate in surveys or promotions</li>
        <li>Use our services or website</li>
      </ul>
      
      <h4>Types of Information:</h4>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, company name, job title</li>
        <li><strong>Business Information:</strong> Industry, company size, marketing goals, budget information</li>
        <li><strong>Technical Information:</strong> IP address, browser type, device information, usage data</li>
        <li><strong>Marketing Data:</strong> Website analytics, campaign performance, customer behavior</li>
      </ul>
    `,
    },
    {
        title: "2. How We Use Your Information",
        icon: <Users className="h-6 w-6 text-primary" />,
        content: `
      <p>We use the information we collect to:</p>
      
      <h4>Provide Services:</h4>
      <ul>
        <li>Deliver digital marketing services as contracted</li>
        <li>Create and manage marketing campaigns</li>
        <li>Generate reports and analytics</li>
        <li>Provide customer support and account management</li>
      </ul>
      
      <h4>Improve Our Services:</h4>
      <ul>
        <li>Analyze usage patterns and service performance</li>
        <li>Develop new features and services</li>
        <li>Conduct research and analysis</li>
        <li>Optimize our website and user experience</li>
      </ul>
      
      <h4>Communicate With You:</h4>
      <ul>
        <li>Send service updates and important notices</li>
        <li>Respond to your inquiries and requests</li>
        <li>Send marketing communications (with your consent)</li>
        <li>Provide educational content and industry insights</li>
      </ul>
    `,
    },
    {
        title: "3. Information Sharing and Disclosure",
        icon: <Shield className="h-6 w-6 text-primary" />,
        content: `
      <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
      
      <h4>Service Providers:</h4>
      <ul>
        <li>Third-party platforms (Google, Facebook, LinkedIn) for campaign management</li>
        <li>Analytics and reporting tools</li>
        <li>Email marketing and communication platforms</li>
        <li>Cloud storage and hosting providers</li>
      </ul>
      
      <h4>Legal Requirements:</h4>
      <ul>
        <li>When required by law or legal process</li>
        <li>To protect our rights and property</li>
        <li>To ensure safety and security</li>
        <li>In connection with business transfers or mergers</li>
      </ul>
      
      <p>All third-party service providers are bound by confidentiality agreements and are required to protect your information.</p>
    `,
    },
    {
        title: "4. Data Security",
        icon: <Lock className="h-6 w-6 text-primary" />,
        content: `
      <p>We implement comprehensive security measures to protect your information:</p>
      
      <h4>Technical Safeguards:</h4>
      <ul>
        <li>SSL encryption for data transmission</li>
        <li>Secure cloud storage with encryption at rest</li>
        <li>Regular security audits and vulnerability assessments</li>
        <li>Multi-factor authentication for team access</li>
        <li>Firewall protection and intrusion detection</li>
      </ul>
      
      <h4>Administrative Safeguards:</h4>
      <ul>
        <li>Limited access to personal information on a need-to-know basis</li>
        <li>Regular employee training on data protection</li>
        <li>Confidentiality agreements with all team members</li>
        <li>Incident response procedures</li>
      </ul>
      
      <p>While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to protecting your data.</p>
    `,
    },
    {
        title: "5. Cookies and Tracking Technologies",
        icon: <Cookie className="h-6 w-6 text-primary" />,
        content: `
      <p>We use cookies and similar technologies to enhance your experience:</p>
      
      <h4>Types of Cookies:</h4>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for website functionality</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how you use our site</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
        <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
      </ul>
      
      <h4>Third-Party Tracking:</h4>
      <ul>
        <li>Google Analytics for website analytics</li>
        <li>Facebook Pixel for advertising optimization</li>
        <li>LinkedIn Insight Tag for professional targeting</li>
        <li>HubSpot for marketing automation</li>
      </ul>
      
      <p>You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>
    `,
    },
    {
        title: "6. Your Rights and Choices",
        icon: <FileText className="h-6 w-6 text-primary" />,
        content: `
      <p>You have the following rights regarding your personal information:</p>
      
      <h4>Access and Portability:</h4>
      <ul>
        <li>Request a copy of your personal information</li>
        <li>Receive your data in a portable format</li>
        <li>Understand how your information is being used</li>
      </ul>
      
      <h4>Correction and Updates:</h4>
      <ul>
        <li>Update or correct inaccurate information</li>
        <li>Add missing information to your profile</li>
        <li>Modify your communication preferences</li>
      </ul>
      
      <h4>Deletion and Restriction:</h4>
      <ul>
        <li>Request deletion of your personal information</li>
        <li>Restrict processing of your data</li>
        <li>Object to certain uses of your information</li>
      </ul>
      
      <h4>Marketing Communications:</h4>
      <ul>
        <li>Unsubscribe from marketing emails</li>
        <li>Opt out of promotional communications</li>
        <li>Manage your communication preferences</li>
      </ul>
      
      <p>To exercise these rights, please contact us using the information provided below.</p>
    `,
    },
    {
        title: "7. Data Retention",
        icon: <FileText className="h-6 w-6 text-primary" />,
        content: `
      <p>We retain your information for as long as necessary to:</p>
      <ul>
        <li>Provide our services to you</li>
        <li>Comply with legal obligations</li>
        <li>Resolve disputes and enforce agreements</li>
        <li>Improve our services and operations</li>
      </ul>
      
      <h4>Retention Periods:</h4>
      <ul>
        <li><strong>Active Clients:</strong> Duration of service agreement plus 7 years</li>
        <li><strong>Prospects:</strong> 3 years from last interaction</li>
        <li><strong>Marketing Data:</strong> 2 years from collection</li>
        <li><strong>Website Analytics:</strong> 26 months (Google Analytics default)</li>
        <li><strong>Financial Records:</strong> 7 years for tax and legal compliance</li>
      </ul>
      
      <p>After retention periods expire, we securely delete or anonymize your information unless longer retention is required by law.</p>
    `,
    },
    {
        title: "8. International Data Transfers",
        icon: <Shield className="h-6 w-6 text-primary" />,
        content: `
      <p>Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through:</p>
      
      <ul>
        <li>Standard Contractual Clauses approved by regulatory authorities</li>
        <li>Adequacy decisions by relevant data protection authorities</li>
        <li>Certification schemes and codes of conduct</li>
        <li>Binding corporate rules for intra-group transfers</li>
      </ul>
      
      <p>We work only with service providers that provide adequate protection for your personal information, regardless of their location.</p>
    `,
    },
    {
        title: "9. Children's Privacy",
        icon: <Users className="h-6 w-6 text-primary" />,
        content: `
      <p>Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16.</p>
      
      <p>If we become aware that we have collected personal information from a child under 16, we will:</p>
      <ul>
        <li>Delete the information immediately</li>
        <li>Not use the information for any purpose</li>
        <li>Not disclose the information to third parties</li>
        <li>Notify parents or guardians if required by law</li>
      </ul>
      
      <p>If you believe we have collected information from a child under 16, please contact us immediately.</p>
    `,
    },
    {
        title: "10. Changes to This Privacy Policy",
        icon: <FileText className="h-6 w-6 text-primary" />,
        content: `
      <p>We may update this Privacy Policy from time to time. When we do:</p>
      
      <ul>
        <li>We will post the updated policy on our website</li>
        <li>We will update the "Last Modified" date</li>
        <li>We will notify you of significant changes via email</li>
        <li>We will provide 30 days notice for material changes</li>
      </ul>
      
      <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.</p>
      
      <p>Your continued use of our services after changes become effective constitutes acceptance of the updated Privacy Policy.</p>
    `,
    },
]

export default function PrivacyContent() {
    return (
        <section className="py-20">
            <div className="container max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <div className="space-y-8">
                        {privacyData.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card>
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            {section.icon}
                                            <CardTitle className="text-xl">{section.title}</CardTitle>
                                        </div>
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
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        <Card className="bg-muted/30">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Contact Our Privacy Team</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">Questions about this Privacy Policy or your data rights?</p>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        <strong>Email:</strong> privacy@imarketing.com
                                    </p>
                                    <p>
                                        <strong>Phone:</strong> +1 (555) 123-4567
                                    </p>
                                    <p>
                                        <strong>Response Time:</strong> Within 48 hours
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-muted/30">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-bold">Data Protection Officer</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">For formal complaints or data protection concerns:</p>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        <strong>Email:</strong> dpo@imarketing.com
                                    </p>
                                    <p>
                                        <strong>Address:</strong> 123 Marketing St, Digital City, DC 10101
                                    </p>
                                    <p>
                                        <strong>Office Hours:</strong> Mon-Fri, 9 AM - 5 PM EST
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
