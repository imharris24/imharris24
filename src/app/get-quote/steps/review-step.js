"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ReviewStep({ data }) {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold mb-2">Review Your Information</h3>
                <p className="text-muted-foreground">
                    Please review all the information below. You can go back to make changes if needed.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Business Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <span className="font-medium">Company:</span> {data.companyName || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Industry:</span> {data.industry || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Size:</span> {data.companySize || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Website:</span> {data.website || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Location:</span> {data.location || "Not provided"}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <span className="font-medium">Name:</span> {data.firstName} {data.lastName}
                        </div>
                        <div>
                            <span className="font-medium">Email:</span> {data.email}
                        </div>
                        <div>
                            <span className="font-medium">Phone:</span> {data.phone || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Role:</span> {data.role || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Preferred Contact:</span> {data.preferredContact || "Not provided"}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Marketing Goals</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div>
                            <span className="font-medium">Primary Goals:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {data.primaryGoals?.map((goal, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                        {goal}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="font-medium">Target Audience:</span> {data.targetAudience || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Priority:</span> {data.priority || "Not provided"}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Budget & Timeline</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div>
                            <span className="font-medium">Budget Range:</span> {data.budgetRange || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Timeline:</span> {data.timeline || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Contract Preference:</span> {data.contractPreference || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Budget Flexibility:</span> {data.budgetFlexibility || "Not provided"}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Selected Services</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {data.selectedServices?.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {service}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Current Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div>
                            <span className="font-medium">Current Channels:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {data.currentChannels?.map((channel, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                        {channel}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div>
                            <span className="font-medium">Monthly Spend:</span> {data.monthlySpend || "Not provided"}
                        </div>
                        <div>
                            <span className="font-medium">Team Size:</span> {data.marketingTeam || "Not provided"}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Separator />

            <div className="text-center">
                <p className="text-muted-foreground mb-4">
                    By submitting this form, you agree to receive a custom marketing proposal from our team.
                </p>
                <p className="text-sm text-muted-foreground">
                    Click "Submit Quote Request" below to send your information to our team.
                </p>
            </div>
        </div>
    )
}
