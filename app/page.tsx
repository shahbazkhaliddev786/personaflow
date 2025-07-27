import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Sparkles, Zap, Heart } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function HomePage() {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Goal-Oriented Planning",
      description: "Get personalized roadmaps tailored to your aspirations and current situation.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Alternate Realities",
      description: "Explore different versions of yourself based on past decisions and choices.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Personal Understanding",
      description: "AI that truly knows you - your traits, experiences, and adapts to your mood.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-primary/5">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your Personal
              <span className="text-primary block animate-bounce-gentle">AI Companion</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your potential with three powerful AI assistants designed to understand, guide, and inspire your
              personal journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/chatbots">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 rounded-full group animate-pulse-glow"
                >
                  Explore AI Companions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 rounded-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                >
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Three Unique AI Experiences</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each AI companion is designed for a specific aspect of your personal growth and self-discovery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Meet Your AI Companions?</h2>
          <p className="text-xl text-gray-600 mb-8">Start your journey of self-discovery and personal growth today.</p>
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-4 rounded-full group">
              Begin Your Journey
              <Brain className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About AI Companion</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                We believe that everyone deserves personalized guidance on their journey of self-discovery and growth.
                Our AI companions are designed to understand your unique context, aspirations, and challenges.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're planning your next career move, exploring alternate life paths, or seeking a deeper
                understanding of yourself, our three specialized AI companions are here to support you every step of the
                way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">1M+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Conversations</h4>
                    <p className="text-sm text-gray-600">Meaningful interactions daily</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">50K+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Users</h4>
                    <p className="text-sm text-gray-600">Growing community worldwide</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">24/7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Availability</h4>
                    <p className="text-sm text-gray-600">Always here when you need us</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">99%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Satisfaction</h4>
                    <p className="text-sm text-gray-600">User satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Mission & Values */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  To democratize personal growth by making intelligent, empathetic AI guidance accessible to everyone,
                  helping individuals unlock their potential and navigate life's complexities with confidence.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 font-medium">Privacy-first approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 font-medium">Personalized experiences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 font-medium">Continuous learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-700 font-medium">Ethical AI development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Footer */}
      <Footer />
    </div>
  )
}
