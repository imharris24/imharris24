"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const roles = [
    "CEO/Founder",
    "Marketing Director/Manager",
    "Business Owner",
    "Operations Manager",
    "Sales Manager",
    "Other",
]

const preferredContact = ["Email", "Phone", "Video Call", "In-Person Meeting"]


export default function ContactInfoStep({ data, onDataChange }) {
    const [formData, setFormData] = useState({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        phone: data.phone || "",
        role: data.role || "",
        preferredContact: data.preferredContact || "",
        bestTimeToCall: data.bestTimeToCall || "",
    })

    const handleChange = (field, value) => {
        const updatedData = { ...formData, [field]: value }
        setFormData(updatedData)
        onDataChange(updatedData)
    }

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold mb-2 font-satoshi-black">Contact Information</h3>
                <p className="text-muted-foreground">How can we reach you to discuss your custom marketing solution?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        placeholder="Your first name"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        placeholder="Your last name"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                        type="email"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        type="tel"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="role">Your Role *</Label>
                    <Select value={formData.role} onValueChange={(value) => handleChange("role", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                            {roles.map((role) => (
                                <SelectItem key={role} value={role}>
                                    {role}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                    <Select value={formData.preferredContact} onValueChange={(value) => handleChange("preferredContact", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="How should we contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                            {preferredContact.map((method) => (
                                <SelectItem key={method} value={method}>
                                    {method}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bestTimeToCall">Best Time to Contact You</Label>
                    <Input
                        id="bestTimeToCall"
                        value={formData.bestTimeToCall}
                        onChange={(e) => handleChange("bestTimeToCall", e.target.value)}
                        placeholder="e.g., Weekdays 9 AM - 5 PM EST, Mornings only, etc."
                    />
                </div>
            </div>
        </div>
    )
}
