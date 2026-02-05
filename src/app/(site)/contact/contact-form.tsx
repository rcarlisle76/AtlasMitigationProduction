"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"

type ServiceType =
  | "water-damage"
  | "fire-damage"
  | "mold"
  | "storm"
  | "emergency"
  | "commercial"
  | "other"

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  serviceType: ServiceType | ""
  urgency: "emergency" | "urgent" | "standard" | ""
  message: string
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  serviceType: "",
  urgency: "",
  message: "",
}

const serviceTypes = [
  { value: "water-damage", label: "Water Damage" },
  { value: "fire-damage", label: "Fire Damage" },
  { value: "mold", label: "Mold Remediation" },
  { value: "storm", label: "Storm Damage" },
  { value: "emergency", label: "Emergency Service" },
  { value: "commercial", label: "Commercial Restoration" },
  { value: "other", label: "Other" },
]

const urgencyOptions = [
  { value: "emergency", label: "Emergency (Need help NOW)" },
  { value: "urgent", label: "Urgent (Within 24 hours)" },
  { value: "standard", label: "Standard (Just getting a quote)" },
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Simulate form submission
    // In production, this would send to an API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormData(initialFormData)
    } catch {
      setError("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h3 className="mt-4 text-xl font-bold text-green-900">
            Thank You for Contacting Us!
          </h3>
          <p className="mt-2 text-green-700">
            We&apos;ve received your message and will respond shortly.
          </p>
          <p className="mt-4 text-sm text-green-600">
            For emergencies, please call us directly at{" "}
            <a
              href="tel:+14048083677"
              className="font-bold underline hover:no-underline"
            >
              (404) 808-3677
            </a>
          </p>
          <Button
            className="mt-6"
            variant="outline"
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Email */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Full Name <span className="text-atlas-accent">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email Address <span className="text-atlas-accent">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Phone & Address */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium"
              >
                Phone Number <span className="text-atlas-accent">*</span>
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="(404) 555-0123"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium"
              >
                Property Address
              </label>
              <Input
                id="address"
                name="address"
                type="text"
                placeholder="123 Main St, Acworth, GA"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Service Type & Urgency */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="serviceType"
                className="mb-2 block text-sm font-medium"
              >
                Service Needed <span className="text-atlas-accent">*</span>
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:h-10 md:text-sm"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="">Select a service...</option>
                {serviceTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="urgency"
                className="mb-2 block text-sm font-medium"
              >
                How Urgent? <span className="text-atlas-accent">*</span>
              </label>
              <select
                id="urgency"
                name="urgency"
                required
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:h-10 md:text-sm"
                value={formData.urgency}
                onChange={handleChange}
              >
                <option value="">Select urgency...</option>
                {urgencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium"
            >
              Tell Us About Your Situation{" "}
              <span className="text-atlas-accent">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Please describe the damage, when it occurred, and any other relevant details..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              <span className="text-atlas-accent">*</span> Required fields
            </p>
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto sm:min-w-[200px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-muted-foreground">
            By submitting this form, you agree to be contacted by Atlas
            Mitigation regarding your restoration needs. We respect your privacy
            and will never share your information with third parties.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
