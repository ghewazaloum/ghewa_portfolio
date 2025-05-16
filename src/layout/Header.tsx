'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
]

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 w-full fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-[#061492]">My Portfolio</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-[#061492]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-white/90 backdrop-blur-md p-6">
            <nav className="flex flex-col space-y-4 mt-6">
            {navItems.map((item) => (
                <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                    block
                    text-lg
                    font-semibold
                    text-gray-800
                    rounded-md
                    px-4
                    py-2
                    transition
                    hover:bg-[#061492]
                    hover:text-white
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#061492]
                    focus:ring-offset-2
                    focus:ring-offset-white
                "
                >
                {item.label}
                </a>
            ))}
            </nav>
        </SheetContent>
        </Sheet>

        </div>
      </div>
    </header>
  )
}
