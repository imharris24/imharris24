"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const primaryGoals = [
    "Increase website traffic",
    "Generate more leads",
    "Boost online sales",
    "Improve brand awareness",
    "Enhance customer engagement",
    "Launch new product/service",
    "Expand to new markets",
    "Improve search rankings",
    "Increase social media presence",
    "Build email list",
]

const targetAudiences = [
    "B2B (Business to Business)",
    "B2C (Business to Consumer)",
    "Both B2B and B2C",
    "Government/Public Sector",
    "Non-profit Organizations",
]

const priorities = ["High Priority", "Medium Priority", "Low Priority", "Not Sure"]

export default function MarketingGoalsStep({ data, onDataChange }) {
    const [formData, setFormData] = useState({
        primaryGoals: data.primaryGoals || [],
        targetAudience: data.targetAudience || "",
        audienceDescription: data.audienceDescription || "",
        currentChallenges: data.currentChallenges || "",
        successMetrics: data.successMetrics || "",
        priority: data.priority || "",
    })

    const handleGoalChange = (goal, checked) => {
        const updatedGoals = checked
            ? [...formData.primaryGoals, goal]
            : formData.primaryGoals.filter((g) => g !== goal)
        const updatedData = { ...formData, primaryGoals: updatedGoals }
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
                <h3 className="text-2xl font-bold mb-2 font-satoshi-black">Marketing Goals & Objectives</h3>
                <p className="text-muted-foreground">
                    Help us understand what you want to achieve with your marketing efforts.
                </p>
            </div>

            <div className="space-y-4">
                <Label className="text-base font-semibold">Primary Marketing Goals (Select all that apply)</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {primaryGoals.map((goal) => (
                        <div key={goal} className="flex items-center space-x-2">
                            <Checkbox
                                id={goal}
                                checked={formData.primaryGoals.includes(goal)}
                                onCheckedChange={(checked) => handleGoalChange(goal, checked)}
                            />
                            <Label htmlFor={goal} className="text-sm font-normal cursor-pointer">
                                {goal}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="targetAudience">Target Audience Type</Label>
                    <Select value={formData.targetAudience} onValueChange={(value) => handleChange("targetAudience", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select target audience" />
                        </SelectTrigger>
                        <SelectContent>
                            {targetAudiences.map((audience) => (
                                <SelectItem key={audience} value={audience}>
                                    {audience}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="priority">Project Priority</Label>
                    <Select value={formData.priority} onValueChange={(value) => handleChange("priority", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select priority level" />
                        </SelectTrigger>
                        <SelectContent>
                            {priorities.map((priority) => (
                                <SelectItem key={priority} value={priority}>
                                    {priority}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="audienceDescription">Target Audience Description</Label>
                <Textarea
                    id="audienceDescription"
                    value={formData.audienceDescription}
                    onChange={(e) => handleChange("audienceDescription", e.target.value)}
                    placeholder="Describe your ideal customers (demographics, interests, pain points, etc.)"
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="currentChallenges">Current Marketing Challenges</Label>
                <Textarea
                    id="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={(e) => handleChange("currentChallenges", e.target.value)}
                    placeholder="What marketing challenges are you currently facing?"
                    rows={3}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="successMetrics">How do you measure success?</Label>
                <Textarea
                    id="successMetrics"
                    value={formData.successMetrics}
                    onChange={(e) => handleChange("successMetrics", e.target.value)}
                    placeholder="What metrics or KPIs are most important to your business?"
                    rows={3}
                />
            </div>
        </div>
    )
}
