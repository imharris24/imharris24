"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const industries = [
    "E-commerce/Retail",
    "SaaS/Technology",
    "Healthcare",
    "Finance/Banking",
    "Real Estate",
    "Education",
    "Manufacturing",
    "Professional Services",
    "Non-profit",
    "Restaurant/Food",
    "Other",
]

const companySizes = [
    "Startup (1-10 employees)",
    "Small Business (11-50 employees)",
    "Medium Business (51-200 employees)",
    "Large Business (201-1000 employees)",
    "Enterprise (1000+ employees)",
]

export default function BusinessInfoStep({ data, onDataChange }) {
    const [formData, setFormData] = useState({
        companyName: data.companyName || "",
        website: data.website || "",
        industry: data.industry || "",
        companySize: data.companySize || "",
        description: data.description || "",
        location: data.location || "",
    })

    const handleChange = (field, value) => {
        const updatedData = { ...formData, [field]: value }
        setFormData(updatedData)
        onDataChange(updatedData)
    }

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold mb-2 font-satoshi-black">Tell us about your business</h3>
                <p className="text-muted-foreground">
                    Help us understand your company so we can create the perfect marketing strategy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleChange("companyName", e.target.value)}
                        placeholder="Your company name"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => handleChange("website", e.target.value)}
                        placeholder="https://yourwebsite.com"
                        type="url"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="industry">Industry *</Label>
                    <Select value={formData.industry} onValueChange={(value) => handleChange("industry", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                            {industries.map((industry) => (
                                <SelectItem key={industry} value={industry}>
                                    {industry}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size *</Label>
                    <Select value={formData.companySize} onValueChange={(value) => handleChange("companySize", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                            {companySizes.map((size) => (
                                <SelectItem key={size} value={size}>
                                    {size}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="location">Business Location</Label>
                    <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                        placeholder="City, State/Country"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Briefly describe what your business does, your products/services, and target market..."
                    rows={4}
                />
            </div>
        </div>
    )
}
