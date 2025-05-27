"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const budgetRanges = [
    "Under $2,000/month",
    "$2,000 - $5,000/month",
    "$5,000 - $10,000/month",
    "$10,000 - $25,000/month",
    "$25,000 - $50,000/month",
    "Over $50,000/month",
    "Project-based pricing preferred",
    "Not sure yet",
]

const timelines = [
    "ASAP (Within 1 week)",
    "Within 1 month",
    "Within 2-3 months",
    "Within 6 months",
    "No specific timeline",
    "Still planning",
]

const contractPreferences = [
    "Monthly retainer",
    "Project-based",
    "Performance-based",
    "Hybrid approach",
    "Open to recommendations",
]

export default function BudgetTimelineStep({ data, onDataChange }) {
    const [formData, setFormData] = useState({
        budgetRange: data.budgetRange || "",
        timeline: data.timeline || "",
        contractPreference: data.contractPreference || "",
        budgetFlexibility: data.budgetFlexibility || "",
        budgetNotes: data.budgetNotes || "",
        expectedROI: data.expectedROI || "",
    })

    const handleChange = (field, value) => {
        const updatedData = { ...formData, [field]: value }
        setFormData(updatedData)
        onDataChange(updatedData)
    }

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold mb-2 font-satoshi-black">Budget & Timeline</h3>
                <p className="text-muted-foreground">
                    Help us understand your budget expectations and project timeline to create the best proposal.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="budgetRange">Monthly Marketing Budget Range</Label>
                    <Select value={formData.budgetRange} onValueChange={(value) => handleChange("budgetRange", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                            {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                    {range}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="timeline">When do you want to start?</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                            {timelines.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>
                                    {timeline}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-3">
                <Label className="text-base font-semibold">Preferred Contract Structure</Label>
                <RadioGroup
                    value={formData.contractPreference}
                    onValueChange={(value) => handleChange("contractPreference", value)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                    {contractPreferences.map((preference) => (
                        <div key={preference} className="flex items-center space-x-2">
                            <RadioGroupItem value={preference} id={preference} />
                            <Label htmlFor={preference} className="text-sm font-normal cursor-pointer">
                                {preference}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            <div className="space-y-3">
                <Label className="text-base font-semibold">Budget Flexibility</Label>
                <RadioGroup
                    value={formData.budgetFlexibility}
                    onValueChange={(value) => handleChange("budgetFlexibility", value)}
                    className="space-y-2"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fixed" id="fixed" />
                        <Label htmlFor="fixed" className="text-sm font-normal cursor-pointer">
                            Fixed budget - cannot exceed the range selected
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="flexible" id="flexible" />
                        <Label htmlFor="flexible" className="text-sm font-normal cursor-pointer">
                            Flexible - willing to invest more for better results
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="roi-based" id="roi-based" />
                        <Label htmlFor="roi-based" className="text-sm font-normal cursor-pointer">
                            ROI-based - budget depends on expected returns
                        </Label>
                    </div>
                </RadioGroup>
            </div>

            <div className="space-y-2">
                <Label htmlFor="expectedROI">Expected ROI or Success Metrics</Label>
                <Textarea
                    id="expectedROI"
                    value={formData.expectedROI}
                    onChange={(e) => handleChange("expectedROI", e.target.value)}
                    placeholder="What return on investment do you expect? Any specific targets or metrics?"
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="budgetNotes">Additional Budget Notes</Label>
                <Textarea
                    id="budgetNotes"
                    value={formData.budgetNotes}
                    onChange={(e) => handleChange("budgetNotes", e.target.value)}
                    placeholder="Any additional information about your budget, constraints, or special considerations?"
                    rows={3}
                />
            </div>
        </div>
    )
}
