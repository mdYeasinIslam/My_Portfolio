
import { Play, Plus } from "lucide-react"

export default function HeroCard() {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-black to-gray-900">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-px w-16 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        <div className="absolute right-1/4 top-1/3 h-px w-16 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
        <div className="absolute bottom-1/4 left-1/3 h-px w-16 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Build Your Awesome Platform
            </h1>
            <p className="max-w-lg text-base text-gray-400">
              From Studio is a digital studio that offers several services such as UX/UI Design to developers, we will
              provide the best service for those of you who use our services.
            </p>
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-indigo-600 px-8 hover:bg-indigo-700">Our Services</button>
              <button
              
                className="rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10"
              >
                <Play className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Content - Device Frame */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -right-4 top-4 z-10">
              <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none">
                <path d="M2 2L22 22M22 2L2 22" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
            <div className="absolute -right-2 bottom-4 z-10">
              <Plus className="h-8 w-8 text-gray-500" />
            </div>

            {/* Device Frame */}
            <div className="relative mx-auto max-w-md">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 p-1">
                <div className="absolute inset-0 rounded-xl border border-white/10" />
                <img
                  src="/myPic.png"
                  alt="Platform Preview"
                  
                  className="object-cover"
                  
                />
                {/* Frame Details */}
                <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-white/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

