'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Tech Stack', id: 'techstack' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
          <span className="text-2xl font-bold text-gray-900">🚀 TechFast</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-gray-700 hover:text-purple-600 font-medium transition duration-200 relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">

          {/* 🔥 UNIQUE LOGIN BUTTON */}
          <Link
            href="/login"
            className="relative px-6 py-2 rounded-full font-semibold text-purple-600 border border-purple-300 overflow-hidden group transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-white transition">
              Login →
            </span>

            {/* Glow Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>

            {/* Border Glow */}
            <span className="absolute inset-0 rounded-full border border-purple-400 group-hover:border-transparent"></span>
          </Link>

          {/* Get In Touch */}
          <button
            onClick={() => scrollTo('contact')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="text-gray-700 hover:text-purple-600 font-medium text-left"
            >
              {item.label}
            </button>
          ))}

          {/* Mobile Login */}
          <Link
            href="/login"
            className="text-center px-6 py-3 rounded-full font-semibold border border-purple-400 text-purple-600 hover:bg-purple-600 hover:text-white transition"
          >
            Login →
          </Link>

          <button
            onClick={() => scrollTo('contact')}
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;