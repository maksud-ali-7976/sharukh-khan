'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-200 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.jpeg" alt="Shahrukh 11 Logo" width={60} height={50}  />
            </Link>
          </div>
          <div className='text-2xl text-black  font-sans font-bold' >
            <h3>Shahrukh 11</h3>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#about" className="hover:text-gray-400">About</a>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-2">
          <Link href="#projects" className="block hover:text-gray-400">Home</Link>
          <Link href="#" className="block hover:text-gray-400">About</Link>
          <Link href="#" className="block hover:text-gray-400">Projects</Link>
          <Link href="#" className="block hover:text-gray-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
