import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Telescope } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <header className="bg-slate-800">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-yellow-300">EduStar</Link>
            <div className="space-x-4">
              <Link href="/explore" className="hover:text-yellow-300">Explore</Link>
              <Link href="/create" className="hover:text-yellow-300">Create</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-yellow-300">Welcome to EduStar</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore the universe and create your own constellations in this interactive NASA Space App Challenge project.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Link href="/explore">
                Start Exploring <Telescope className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-slate-900">
              <Link href="/create">
                Create Your Sky <Star className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-slate-800 p-6 rounded-lg border border-indigo-500">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Explore Constellations</h2>
            <p className="mb-4">Discover unique constellations created by users from around the world. Learn about different perspectives of the night sky.</p>
            <Button asChild variant="secondary" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Link href="/explore">View Constellations</Link>
            </Button>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg border border-indigo-500">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">Create Your Own Sky</h2>
            <p className="mb-4">Use our interactive tool to design your own constellations. Share your creations with the EduStar community.</p>
            <Button asChild variant="secondary" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Link href="/create">Start Creating</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-300">About the NASA Space App Challenge</h2>
          <p className="text-center max-w-2xl mx-auto">
            EduStar is a project developed for the NASA Space App Challenge, aiming to inspire and educate users about astronomy and space exploration through interactive constellation creation and exploration.
          </p>
        </div>
      </main>

      <footer className="bg-slate-800 text-slate-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 EduStar. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-yellow-300 mr-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-yellow-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}