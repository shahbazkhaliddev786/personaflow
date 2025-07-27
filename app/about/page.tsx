"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Users, Zap, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Technology",
      description:
        "Powered by cutting-edge artificial intelligence to provide intelligent and contextual conversations.",
    },
    {
      icon: Users,
      title: "Multiple Personas",
      description: "Create and customize different AI personalities to match your specific needs and preferences.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience instant responses with our optimized AI infrastructure built for speed and reliability.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are secure and private. We prioritize data protection and user privacy.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-founder",
      image: "/placeholder-user.jpg",
      description: "Former AI researcher at Google with 10+ years in machine learning.",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-founder",
      image: "/placeholder-user.jpg",
      description: "Ex-OpenAI engineer specializing in conversational AI systems.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "/placeholder-user.jpg",
      description: "Product strategist with expertise in user experience and AI interfaces.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent">
                AI Companion
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing how people interact with artificial intelligence by creating personalized,
              intelligent companions that understand and adapt to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At AI Companion, we believe that artificial intelligence should be personal, intuitive, and genuinely
                helpful. Our mission is to bridge the gap between complex AI technology and everyday human needs.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We're building a future where AI companions understand context, remember preferences, and provide
                meaningful assistance across all aspects of life.
              </p>
              <Link href="/signup">
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 group">
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-600/20 rounded-2xl blur-3xl"></div>
                <img
                  src="/placeholder.svg?height=400&width=600&text=AI+Technology"
                  alt="AI Technology"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform combines advanced AI capabilities with user-centric design to deliver an unparalleled
              conversational experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're a passionate team of AI researchers, engineers, and designers committed to creating the future of
              human-AI interaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience the Future?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying personalized AI conversations that adapt to their unique
            needs and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
