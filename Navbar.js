import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">TechSolutions</Link>
        
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <Link href="/services" className="hover:text-blue-400">Services</Link>
          <Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 p-4">
            <div className="flex flex-col space-y-4">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
