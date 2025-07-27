import { Brain } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 bg-primary rounded-lg">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">AI Companion</span>
          </div>
          <p className="text-gray-400 text-center">
            Empowering personal growth with Visit My Goals, Alternate Me, and Personal AI companions
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">© 2024 AI Companion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
