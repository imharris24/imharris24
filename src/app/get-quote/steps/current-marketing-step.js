"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const currentChannels = [
    "Search Engine Optimization (SEO)",
    "Google Ads (PPC)",
    "Facebook/Instagram Advertising",
    "LinkedIn Marketing",
    "Email Marketing",
    "Content Marketing/Blogging",
    "Social Media Organic",
    "Print Advertising",
    "Radio/TV Advertising",
    "Direct Mail",
    "Networking/Referrals",
    "Trade Shows/Events",
    "None - Starting from scratch",
]

const marketingTeam = [
    "No dedicated marketing team",
    "1 part-time marketing person",
    "1 full-time marketing person",
    "2-5 marketing team members",
    "5+ marketing team members",
    "External agency/freelancers",
    "Mix of internal and external",
]

const currentPerformance = [
    "Very satisfied",
    "Somewhat satisfied",
    "Neutral",
    "Somewhat dissatisfied",
    "Very dissatisfied",
    "No current marketing to evaluate",
]

export default function CurrentMarketingStep({ data, onDataChange }) {
    const [formData, setFormData] = useState({
        currentChannels: data.currentChannels || [],
        monthlySpend: data.monthlySpend || "",
        marketingTeam: data.marketingTeam || "",
        currentPerformance: data.currentPerformance || "",
        whatWorking: data.whatWorking || "",
        whatNotWorking: data.whatNotWorking || "",
        previousAgencies: data.previousAgencies || "",
        competitors: data.competitors || "",
        marketingTools: data.marketingTools || "",
    })

    const handleChannelChange = (channel, checked) => {
        const updatedChannels = checked
            ? [...formData.currentChannels, channel]
            : formData.currentChannels.filter((c) => c !== channel)
        const updatedData = { ...formData, currentChannels: updatedChannels }
        setFormData(updatedData)
        onDataChange(updatedData)
    }

    const handleChange = (field, value) => {
        const updatedData = { ...formData, [field]: value }
        setFormData(updatedData)
        onDataChange(updatedData)
    }

    return (
        <div>
            <div className="space-y-6">
                <div>
                    <h3 className="text-2xl font-bold mb-2 font-satoshi-black">Current Marketing Situation</h3>
                    <p className="text-muted-foreground">
                        Tell us about your existing marketing efforts so we can build upon what's working and improve what isn't.
                    </p>
                </div>

                <div className="space-y-4">
                    <Label className="text-base font-semibold">Current Marketing Channels (Select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {currentChannels.map((channel) => (
                            <div key={channel} className="flex items-center space-x-2">
                                <Checkbox
                                    id={channel}
                                    checked={formData.currentChannels.includes(channel)}
                                    onCheckedChange={(checked) => handleChannelChange(channel, checked)}
                                />
                                <Label htmlFor={channel} className="text-sm font-normal cursor-pointer">
                                    {channel}
                                </Label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="monthlySpend">Current Monthly Marketing Spend</Label>
                        <Input
                            id="monthlySpend"
                            value={formData.monthlySpend}
                            onChange={(e) => handleChange("monthlySpend", e.target.value)}
                            placeholder="e.g., $5,000 or Not sure"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="marketingTeam">Current Marketing Team</Label>
                        <Select value={formData.marketingTeam} onValueChange={(value) => handleChange("marketingTeam", value)}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select team size" />
                            </SelectTrigger>
                            <SelectContent>
                                {marketingTeam.map((team) => (
                                    <SelectItem key={team} value={team}>
                                        {team}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="currentPerformance">How satisfied are you with current marketing performance?</Label>
                    <Select
                        value={formData.currentPerformance}
                        onValueChange={(value) => handleChange("currentPerformance", value)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select satisfaction level" />
                        </SelectTrigger>
                        <SelectContent>
                            {currentPerformance.map((performance) => (
                                <SelectItem key={performance} value={performance}>
                                    {performance}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="whatWorking">What's working well in your current marketing?</Label>
                    <Textarea
                        id="whatWorking"
                        value={formData.whatWorking}
                        onChange={(e) => handleChange("whatWorking", e.target.value)}
                        placeholder="Describe any marketing efforts that are generating good results..."
                        rows={3}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="whatNotWorking">What's not working or could be improved?</Label>
                    <Textarea
                        id="whatNotWorking"
                        value={formData.whatNotWorking}
                        onChange={(e) => handleChange("whatNotWorking", e.target.value)}
                        placeholder="Describe any marketing challenges or areas that need improvement..."
                        rows={3}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="competitors">Who are your main competitors?</Label>
                    <Textarea
                        id="competitors"
                        value={formData.competitors}
                        onChange={(e) => handleChange("competitors", e.target.value)}
                        placeholder="List your main competitors and what they're doing well in marketing..."
                        rows={3}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="marketingTools">Current Marketing Tools & Platforms</Label>
                    <Textarea
                        id="marketingTools"
                        value={formData.marketingTools}
                        onChange={(e) => handleChange("marketingTools", e.target.value)}
                        placeholder="List any marketing tools, platforms, or software you currently use (Google Analytics, CRM, email platform, etc.)"
                        rows={3}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="previousAgencies">Previous Agency Experience</Label>
                    <Textarea
                        id="previousAgencies"
                        value={formData.previousAgencies}
                        onChange={(e) => handleChange("previousAgencies", e.target.value)}
                        placeholder="Have you worked with marketing agencies before? What worked well or didn't work?"
                        rows={3}
                    />
                </div>
            </div>
        </div>
    )
}
