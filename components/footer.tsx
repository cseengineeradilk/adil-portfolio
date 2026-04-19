'use client';
import { useState } from 'react'; 
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      
      {/* Newsletter */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold mb-1">
              Sign Up Our Newsletter
            </h3>
            <p className="text-gray-400 text-sm">
              We Offer An Informative Monthly Technology Newsletter.
            </p>
          </div>

          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-gray-900 px-6 py-3 rounded-l-full w-full md:w-80 outline-none text-sm"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-r-full font-semibold text-sm transition-all duration-200 whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">🚀 TechFast</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="flex gap-3">
            {['f', 'X', '▶', 'in'].map((icon) => (
              <button
                key={icon}
                className="w-10 h-10 rounded-lg border border-gray-700 hover:border-purple-600 hover:bg-purple-600 text-gray-400 hover:text-white font-bold text-sm flex items-center justify-center transition-all duration-200"
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
          <ul className="flex flex-col gap-3">
            {[
              'Digital Marketing',
              'Web Development',
              'Startup Solutions',
              'SEO Optimization',
              'App Optimization',
            ].map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 hover:underline text-sm transition-all duration-200 cursor-pointer"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Useful Links</h4>
          <ul className="flex flex-col gap-3">
            {[
              'About Us',
              'Case Study',
              'Contact Us',
              'Privacy Policy',
              'Terms & Conditions',
            ].map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-400 hover:underline text-sm transition-all duration-200 cursor-pointer"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">Contact Info</h4>

          <ul className="flex flex-col gap-4">
  {[
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      link: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      link: 'https://wa.me/91 XXXXX XXXXX',
      isExternal: true,
    },
    {
      icon: <MdEmail />,
      label: 'Email',
      value: 'example@gmail.com',
      link:
        typeof window !== 'undefined' &&
        /Mobi|Android/i.test(navigator.userAgent)
          ? 'mailto:example@gmail.com'
          : 'https://mail.google.com/mail/?view=cm&fs=1&to=example@gmail.com',
      isExternal: true,
    },
    {
      icon: <IoLocationOutline />,
      label: 'Address',
      value: 'PhulwariSharif, Patna, Bihar',
      link: 'https://www.google.com/maps?q=Patna,Bihar',
      isExternal: true,
    },
  ].map((c) => (
    <li key={c.label} className="flex items-start gap-3 group">
      
      <span className="text-purple-400 text-xl mt-1 transition-all duration-200 group-hover:scale-110">
        {c.icon}
      </span>

      <div>
        <p className="text-white font-semibold text-sm">{c.label}</p>

        <a
          href={c.link}
          target={c.isExternal ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className="text-gray-400 text-sm hover:text-purple-400 hover:underline transition-all duration-200 cursor-pointer"
        >
          {c.value}
        </a>
      </div>
    </li>
  ))}
</ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 TechFast. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;