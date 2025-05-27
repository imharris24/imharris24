"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const serviceCategories = [
    {
        category: "Search Engine Optimization (SEO)",
        services: [
            "Keyword research & strategy",
            "On-page optimization",
            "Technical SEO audit",
            "Link building",
            "Local SEO",
            "SEO content creation",
        ],
    },
    {
        category: "Pay-Per-Click (PPC) Advertising",
        services: [
            "Google Ads management",
            "Facebook/Instagram ads",
            "LinkedIn advertising",
            "Display advertising",
            "Shopping campaigns",
            "Remarketing campaigns",
        ],
    },
    {
        category: "Social Media Marketing",
        services: [
            "Social media strategy",
            "Content creation & posting",
            "Community management",
            "Influencer marketing",
            "Social media advertising",
            "Social media analytics",
        ],
    },
    {
        category: "Content Marketing",
        services: [
            "Blog writing & management",
            "Video content creation",
            "Infographic design",
            "Email newsletters",
            "Case studies & whitepapers",
            "Content strategy development",
        ],
    },
    {
        category: "Email Marketing",
        services: [
            "Email campaign design",
            "Marketing automation",
            "List building & segmentation",
            "A/B testing",
            "Drip campaigns",
            "Email analytics",
        ],
    },
    {
        category: "Analytics & Reporting",
        services: [
            "Google Analytics setup",
            "Custom dashboard creation",
            "Performance reporting",
            "Conversion tracking",
            "ROI analysis",
            "Competitive analysis",
        ],
    },
]
export default function ServicesStep({ data, onDataChange }) {
    const [formData, setFormData] = useState({
        selectedServices: data.selectedServices || [],
        additionalServices: data.additionalServices || "",
        servicesPriority: data.servicesPriority || "",
    })

    const handleServiceChange = (service, checked) => {
        const updatedServices = checked
            ? [...formData.selectedServices, service]
            : formData.selectedServices.filter((s) => s !== service)
        const updatedData = { ...formData, selectedServices: updatedServices }
        setFormData(updatedData)
        onDataChange(updatedData)
    }

    const handleChange = (field, value) => {
        const updatedData = { ...formData, [field]: value }
        setFormData(updatedData)
        onDataChange(updatedData)
    }

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold mb-2 font-satoshi-black">Services You're Interested In</h3>
                <p className="text-muted-foreground">Select all the marketing services that align with your business goals.</p>
            </div>

            <div className="space-y-4">
                {serviceCategories.map((category) => (
                    <Card key={category.category}>
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg">{category.category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {category.services.map((service) => (
                                    <div key={service} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={service}
                                            checked={formData.selectedServices.includes(service)}
                                            onCheckedChange={(checked) => handleServiceChange(service, checked)}
                                        />
                                        <Label htmlFor={service} className="text-sm font-normal cursor-pointer">
                                            {service}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="space-y-2">
                <Label htmlFor="additionalServices">Additional Services or Custom Requirements</Label>
                <Textarea
                    id="additionalServices"
                    value={formData.additionalServices}
                    onChange={(e) => handleChange("additionalServices", e.target.value)}
                    placeholder="Describe any specific services or custom requirements not listed above..."
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="servicesPriority">Service Priority</Label>
                <Textarea
                    id="servicesPriority"
                    value={formData.servicesPriority}
                    onChange={(e) => handleChange("servicesPriority", e.target.value)}
                    placeholder="Which services are most important to start with? Any specific order of implementation?"
                    rows={3}
                />
            </div>
        </div>
    )
}
