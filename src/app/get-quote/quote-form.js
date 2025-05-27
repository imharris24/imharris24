"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight } from "lucide-react"
import BusinessInfoStep from "./steps/business-info-step"
import ContactInfoStep from "./steps/contact-info-step"
import MarketingGoalsStep from "./steps/marketing-goals-step"
import ServicesStep from "./steps/services-step"
import BudgetTimelineStep from "./steps/budget-timeline-step"
import CurrentMarketingStep from "./steps/current-marketing-step"
import ReviewStep from "./steps/review-step"
import ThankYouStep from "./steps/thank-you-step"

const steps = [
    { id: 1, title: "Business Info", component: BusinessInfoStep },
    { id: 2, title: "Contact Details", component: ContactInfoStep },
    { id: 3, title: "Marketing Goals", component: MarketingGoalsStep },
    { id: 4, title: "Services Needed", component: ServicesStep },
    { id: 5, title: "Budget & Timeline", component: BudgetTimelineStep },
    { id: 6, title: "Current Marketing", component: CurrentMarketingStep },
    { id: 7, title: "Review", component: ReviewStep },
    { id: 8, title: "Complete", component: ThankYouStep },
]

// Validation functions for each step
const validateStep = (stepNumber, formData) => {
    switch (stepNumber) {
        case 1: // Business Info
            return !!(formData.companyName && formData.industry && formData.companySize)
        case 2: // Contact Info
            return !!(formData.firstName && formData.lastName && formData.email && formData.role)
        case 3: // Marketing Goals
            return !!(formData.primaryGoals && formData.primaryGoals.length > 0)
        case 4: // Services
            return !!(formData.selectedServices && formData.selectedServices.length > 0)
        case 5: // Budget & Timeline
            return !!(formData.budgetRange && formData.timeline)
        case 6: // Current Marketing
            return !!(formData.currentChannels && formData.currentChannels.length > 0)
        case 7: // Review
            return true // Review step doesn't need validation
        default:
            return true
    }
}

export default function QuoteForm() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [validationErrors, setValidationErrors] = useState([])

    const progress = ((currentStep - 1) / (steps.length - 1)) * 100

    const handleNext = () => {
        // Validate current step before proceeding
        if (!validateStep(currentStep, formData)) {
            const errorMessages = getValidationErrors(currentStep, formData)
            setValidationErrors(errorMessages)
            return
        }

        setValidationErrors([])
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrevious = () => {
        setValidationErrors([])
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleStepData = (stepData) => {
        setFormData({ ...formData, ...stepData })
        // Clear validation errors when user updates data
        setValidationErrors([])
    }

    const handleSubmit = () => {
        // Log the complete form data
        console.log("=== QUOTE FORM SUBMISSION ===")
        console.log("Complete Form Data:", formData)
        console.log("Form Data JSON:", JSON.stringify(formData, null, 2))
        console.log("Submission Time:", new Date().toISOString())
        console.log("==============================")

        // Here you would typically send the data to your backend
        // Example API call:
        // try {
        //   const response = await fetch('/api/quote-requests', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(formData)
        //   })
        //   const result = await response.json()
        //   console.log('Submission result:', result)
        // } catch (error) {
        //   console.error('Submission error:', error)
        // }

        setIsSubmitted(true)
        setCurrentStep(steps.length)
    }

    // Get specific validation error messages
    const getValidationErrors = (stepNumber, data) => {
        const errors = []

        switch (stepNumber) {
            case 1:
                if (!data.companyName) errors.push("Company name is required")
                if (!data.industry) errors.push("Industry selection is required")
                if (!data.companySize) errors.push("Company size is required")
                break
            case 2:
                if (!data.firstName) errors.push("First name is required")
                if (!data.lastName) errors.push("Last name is required")
                if (!data.email) errors.push("Email address is required")
                if (!data.role) errors.push("Your role is required")
                break
            case 3:
                if (!data.primaryGoals || data.primaryGoals.length === 0) {
                    errors.push("Please select at least one marketing goal")
                }
                break
            case 4:
                if (!data.selectedServices || data.selectedServices.length === 0) {
                    errors.push("Please select at least one service")
                }
                break
            case 5:
                if (!data.budgetRange) errors.push("Budget range is required")
                if (!data.timeline) errors.push("Timeline is required")
                break
            case 6:
                if (!data.currentChannels || data.currentChannels.length === 0) {
                    errors.push("Please select your current marketing channels")
                }
                break
        }

        return errors
    }

    const CurrentStepComponent = steps[currentStep - 1]?.component

    if (isSubmitted && currentStep === steps.length) {
        return (
            <section className="py-20">
                <div className="container mx-auto max-w-4xl">
                    <ThankYouStep />
                </div>
            </section>
        )
    }

    return (
        <section className="py-20">
            <div className="container mx-auto max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Card className="overflow-hidden">
                        <CardHeader className="bg-muted/30">
                            <div className="flex items-center justify-between mb-4">
                                <CardTitle className="text-2xl">
                                    Step {currentStep} of {steps.length - 1}
                                </CardTitle>
                                <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
                            </div>
                            <Progress value={progress} className="w-full" />
                            <div className="hidden md:flex justify-between text-xs text-muted-foreground mt-2">
                                {steps.slice(0, -1).map((step) => (
                                    <span key={step.id} className={`${currentStep >= step.id ? "text-primary font-medium" : ""}`}>
                                        {step.title}
                                    </span>
                                ))}
                            </div>
                        </CardHeader>

                        <CardContent className="p-8">
                            {/* Validation Errors */}
                            {validationErrors.length > 0 && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <h4 className="text-red-800 font-medium mb-2">Please fix the following errors:</h4>
                                    <ul className="text-red-700 text-sm space-y-1">
                                        {validationErrors.map((error, index) => (
                                            <li key={index} className="flex items-center">
                                                <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                                                {error}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {CurrentStepComponent && (
                                        <CurrentStepComponent
                                            data={formData}
                                            onDataChange={handleStepData}
                                            onNext={handleNext}
                                            onPrevious={handlePrevious}
                                            onSubmit={handleSubmit}
                                            isFirstStep={currentStep === 1}
                                            isLastStep={currentStep === steps.length - 1}
                                        />
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8 pt-6 border-t">
                                <Button
                                    variant="outline"
                                    onClick={handlePrevious}
                                    disabled={currentStep === 1}
                                    className="flex items-center gap-2"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Previous
                                </Button>

                                {currentStep === steps.length - 1 ? (
                                    // Submit button on review step
                                    <Button onClick={handleSubmit} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                                        Submit Quote Request
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                ) : (
                                    // Next button for all other steps
                                    <Button onClick={handleNext} className="flex items-center gap-2">
                                        Next
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
