'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .single();

    router.push(profile?.role === 'owner' ? '/dashboard' : '/client');
    setLoading(false);
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500 text-white p-10">
        <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <h1 className="text-4xl font-extrabold mb-4 z-10">🚀 TechFast</h1>
        <p className="text-lg text-center max-w-sm z-10">
          Build, scale and grow your business with powerful IT solutions.
        </p>
        <div className="mt-10 text-sm opacity-80 z-10">
          ✨ Trusted by 1200+ clients
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6 bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Welcome Back 👋
          </h2>

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl mb-4 text-sm border border-red-100">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-5">

            {/* EMAIL */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-900 bg-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-400" />
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                className="w-full border border-gray-200 rounded-xl pl-11 pr-12 py-3 text-gray-900 bg-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition"
              />
              <button
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-4 text-gray-400 hover:text-purple-600 transition-colors"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full border-2 border-purple-600 text-purple-600 bg-transparent hover:bg-purple-600 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-60"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                'Login →'
              )}
            </button>

          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-center mt-5 text-sm">
            <span className="text-gray-400 cursor-pointer hover:text-purple-600 transition-colors">
              Forgot password?
            </span>
            <span className="text-gray-400">
              New user?{' '}
              <span className="text-purple-600 cursor-pointer hover:underline font-semibold">
                Sign Up
              </span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}