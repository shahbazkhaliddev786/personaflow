"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ChatbotsPage() {
  const chatbots = [
    {
      id: "visit-my-goals",
      emoji: "🌟",
      name: "Visit My Goals",
      description:
        'Tell the AI your goal (e.g., "I want to become a UX Designer") and your current context (vacation, burnout, free evenings). It generates a personalized roadmap.',
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
      borderColor: "border-yellow-200",
    },
    {
      id: "alternate-me",
      emoji: "🌀",
      name: "Alternate Me",
      description:
        'AI creates alternate versions of you based on changed past decisions (e.g., "What if I pursued art instead of coding?").',
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
    {
      id: "personal-ai",
      emoji: "💖",
      name: "Personal AI",
      description:
        "Users define core traits, past experiences, fears, dreams, and habits. AI stores and uses this context in conversations. AI updates your plans based on current energy, mood, and schedule.",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
      borderColor: "border-red-200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-primary/5">
      <Navigation />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="text-primary block">AI Companion</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each AI companion offers a unique approach to personal growth and self-discovery. Select the one that
              resonates with your current needs.
            </p>
          </div>

          {/* Chatbot Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {chatbots.map((chatbot, index) => (
              <Link key={chatbot.id} href="/">
                <Card
                  className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 ${chatbot.borderColor} ${chatbot.bgColor} animate-fade-in overflow-hidden`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {chatbot.emoji}
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {chatbot.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 pb-8">
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">{chatbot.description}</p>

                    <div className="flex justify-center">
                      <Button
                        className={`bg-gradient-to-r ${chatbot.color} hover:shadow-lg text-white border-0 group-hover:scale-105 transition-all duration-300 rounded-full px-6`}
                      >
                        Start Conversation
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>

                  {/* Animated background effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${chatbot.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                </Card>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-lg text-gray-600 mb-6">
              Not sure which one to choose? Start with any companion and explore others later.
            </p>
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 bg-transparent"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
