import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div id="hero" className="bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:items-center min-h-screen px-6 md:px-16 py-12 gap-12">
        
        {/* Right Side - Image Circle */}
        <div className="w-full self-end md:self-auto">
          <div className="relative mx-auto w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px] group mt-12 md:mt-0">
            
            {/* Background Circle */}
            <div className="w-full h-full rounded-full bg-indigo-100 transition-colors duration-500 group-hover:bg-indigo-300 relative z-0 shadow-inner" />
            
            {/* Dots with subtle indigo shades */}
            <span className="absolute w-5 h-5 bg-indigo-400 rounded-full top-[-16px] left-1/3 -translate-x-1/2 z-0 group-hover:bg-indigo-600 transition duration-500"></span>
            <span className="absolute w-5 h-5 bg-indigo-400 rounded-full bottom-[-16px] left-[10%] z-0 group-hover:bg-indigo-600 transition duration-500"></span>
            <span className="absolute w-5 h-5 bg-indigo-400 rounded-full top-[20%] right-[-16px] z-0 group-hover:bg-indigo-600 transition duration-500"></span>
            <span className="absolute w-5 h-5 bg-indigo-400 rounded-full top-[40%] left-[-20px] z-0 group-hover:bg-indigo-600 transition duration-500"></span>
            
            {/* Overlapping Photo */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
              <img
                src="/me.png"
                alt="Ghewa Zaloum"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Left Side */}
        <div className="text-center md:text-left space-y-6 max-w-2xl mx-auto md:mx-0 self-start md:self-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hi, I'm <span className="text-indigo-700">Ghewa Zaloum</span>
          </h1>
          <p className="text-gray-700 text-lg">
            A passionate Front-End Developer building beautiful, responsive, and fast web interfaces using React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button className="px-6 py-3 text-base bg-indigo-700 text-white hover:bg-indigo-800 transition">
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3 text-base border-indigo-700 text-indigo-700 hover:bg-indigo-100 transition"
              asChild
            >
              <a href="https://drive.google.com/file/d/1FIsGmH8R3SxVBADbs-AyH9u1K8ZAtogV/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
