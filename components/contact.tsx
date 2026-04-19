'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { FadeInLeft, FadeInRight } from './animations';

// Icons
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError('Name, Email aur Message zaroori hai!');
      return;
    }

    setLoading(true);
    setError('');

    const { error } = await supabase.from('contacts').insert([form]);

    if (error) {
      setError('Kuch galat hua! Dobara try karo.');
      setLoading(false);
      return;
    }

    setSuccess(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setLoading(false);
  };

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <FadeInLeft>
          <div className="text-center mb-16">
            <p className="text-purple-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Let's Build Something Great Together
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Have a project in mind? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </FadeInLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left — Contact Info (unchanged) */}
          <FadeInLeft delay={0.1}>
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <FiPhone />,
                  label: 'Phone',
                  value: '+91 XXXXX XXXXX',
                  bg: 'bg-purple-100',
                  link: 'tel:+91XXXXXXXXXX',
                },
                {
                  icon: <FaWhatsapp />,
                  label: 'WhatsApp',
                  value: 'Chat on WhatsApp',
                  bg: 'bg-green-100',
                  link: 'https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20connect%20with%20you',
                  isExternal: true,
                },
                {
                  icon: <MdEmail />,
                  label: 'Email',
                  value: 'example@gmail.com',
                  bg: 'bg-blue-100',
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
                  bg: 'bg-orange-100',
                  link: 'https://www.google.com/maps?q=Patna,Bihar',
                  isExternal: true,
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.link}
                  target={c.isExternal ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className={`${c.bg} w-14 h-14 rounded-xl flex items-center justify-center text-xl ${
                      c.label === 'WhatsApp' ? 'text-green-600' : 'text-purple-600'
                    } group-hover:scale-110 transition-all`}
                  >
                    {c.icon}
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                      {c.label}
                    </p>
                    <p className="text-gray-900 font-bold text-lg mt-0.5 group-hover:text-purple-600 transition">
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </FadeInLeft>

          {/* Right — Form */}
          <FadeInRight delay={0.2}>
            <div className="bg-white rounded-3xl p-8 shadow-lg">

              {success && (
                <div className="bg-green-50 border border-green-200 rounded-2xl px-5 py-4 mb-6 flex items-center gap-3">
                  <span className="text-2xl">✔️</span>
                  <div>
                    <p className="text-green-800 font-bold">Message Sent Successfully!</p>
                    <p className="text-green-600 text-sm">We'll contact you within 24 hours.</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl px-5 py-4 mb-6 flex items-center gap-3">
                  <span className="text-2xl">⚠️</span>
                  <p className="text-red-700 font-medium">{error}</p>
                </div>
              )}

              <div className="flex flex-col gap-5">

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 bg-white outline-none focus:border-purple-500 text-sm"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 bg-white outline-none focus:border-purple-500 text-sm"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 bg-white outline-none focus:border-purple-500 text-sm"
                />

                <textarea
                  placeholder="Your Message *"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="border-2 border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 bg-white outline-none focus:border-purple-500 text-sm resize-none"
                />

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-300 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>

                <p className="text-center text-gray-500 text-xs">
                  🔒 Your information is 100% secure.
                </p>

              </div>
            </div>
          </FadeInRight>

        </div>
      </div>
    </section>
  );
};

export default Contact;