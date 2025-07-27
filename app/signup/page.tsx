"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Brain, Eye, EyeOff, Check, AlertCircle, CheckCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { register } = useAuth()
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Clear message when user starts typing
    if (message) setMessage(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const result = await register(formData.name, formData.email, formData.password)

    if (result.success) {
      setMessage({ type: "success", text: result.message })
      // Navigate to chatbots page on success
      setTimeout(() => {
        router.push("/chatbots")
      }, 1500)
    } else {
      setMessage({ type: "error", text: result.message })
    }

    setIsLoading(false)
  }

  const benefits = [
    "Access to all 3 AI companions",
    "Personalized roadmaps and insights",
    "Secure data storage",
    "24/7 AI availability",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-primary/5">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <Card className="shadow-2xl border-0 animate-fade-in">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary rounded-full animate-pulse-glow">
                  <Brain className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">Join AI Companion</CardTitle>
              <p className="text-gray-600 mt-2">Create your account and start your journey</p>
            </CardHeader>

            <CardContent>
              {message && (
                <div
                  className={`mb-6 p-4 rounded-lg flex items-center space-x-2 ${
                    message.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {message.type === "success" ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertCircle className="h-5 w-5" />
                  )}
                  <span className="text-sm">{message.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-12 border-gray-200 focus:border-primary focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="h-12 border-gray-200 focus:border-primary focus:ring-primary pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700">What you'll get:</p>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="#" className="text-primary hover:text-primary/80">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-primary hover:text-primary/80">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-lg font-medium rounded-full"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                      Creating account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
