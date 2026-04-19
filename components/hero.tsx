'use client';
import Link from 'next/link';
import { FadeInLeft, FadeInRight, Float } from './animations';
import { FaCode, FaMobileAlt, FaPaintBrush, FaSearch, FaCloud, FaLock } from 'react-icons/fa';

const Hero = () => {
  const services = [
    {
      icon: <FaCode />,
      label: 'Web Dev',
      bg: 'bg-purple-100',
      text: 'text-purple-600',
    },
    {
      icon: <FaMobileAlt />,
      label: 'Mobile App',
      bg: 'bg-blue-100',
      text: 'text-blue-600',
    },
    {
      icon: <FaPaintBrush />,
      label: 'UI/UX Design',
      bg: 'bg-pink-100',
      text: 'text-pink-600',
    },
    {
      icon: <FaSearch />,
      label: 'SEO',
      bg: 'bg-green-100',
      text: 'text-green-600',
    },
    {
      icon: <FaCloud />,
      label: 'Cloud',
      bg: 'bg-yellow-100',
      text: 'text-yellow-600',
    },
    {
      icon: <FaLock />,
      label: 'Security',
      bg: 'bg-red-100',
      text: 'text-red-600',
    },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <FadeInLeft delay={0.1}>
          <p className="text-purple-600 font-semibold text-sm tracking-widest uppercase mb-4">
            IT Solutions & Technology Services
          </p>

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Web Design, Develop, Implement &{' '}
            <span className="text-purple-600">IT Solutions</span>
          </h1>

          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            We help businesses grow with cutting-edge technology solutions.
            From web development to digital marketing, we deliver results that matter.
          </p>

          <div className="flex gap-4 flex-wrap">

            {/* 🔥 Updated Learn More Button */}
            <Link
              href="#about"
              className="border-2 border-black text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-black hover:text-white"
            >
              Learn More
            </Link>

            <Link
              href="#services"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              Our Services
            </Link>

          </div>
        </FadeInLeft>

        {/* RIGHT */}
        <FadeInRight delay={0.3}>
          <Float>
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
                  <div className="grid grid-cols-2 gap-4">

                    {services.map((item, i) => (
                      <div
                        key={i}
                        className={`${item.bg} rounded-2xl p-5 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                      >
                        <div className={`text-3xl ${item.text}`}>
                          {item.icon}
                        </div>

                        <span className="text-sm font-semibold text-gray-800 text-center">
                          {item.label}
                        </span>
                      </div>
                    ))}

                  </div>
                </div>

                {/* Badges */}
                <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                  20+ Years ✨
                </div>

                <div className="absolute -bottom-4 -left-4 bg-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-20">
                  1200+ Projects 🚀
                </div>

              </div>
            </div>
          </Float>
        </FadeInRight>

      </div>
    </section>
  );
};

export default Hero;