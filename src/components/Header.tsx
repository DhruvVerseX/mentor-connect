import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            MentorConnect
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/mentors" className="text-gray-600 hover:from-purple-700">
              Mentors
            </Link>
            <Link href="/about" className="text-gray-600 hover:from-purple-700">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:from-purple-700">
              Contact
            </Link>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            Sign In
          </Button>
        </nav>
      </header>
  )
}

export default Header
