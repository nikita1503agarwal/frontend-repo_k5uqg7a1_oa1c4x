import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        onSuccess({ email });
      } else {
        setError('Please enter your credentials.');
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-black text-white grid md:grid-cols-2">
      {/* Left: animated brand panel */}
      <div className="relative hidden md:flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-black" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 flex flex-col items-center gap-6 p-10"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, rotate: 0 }}
              animate={{ scale: [0.95, 1, 0.95], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-64 h-64 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_80px_rgba(255,255,255,0.08)] flex items-center justify-center"
            >
              {/* Infinity logo (custom SVG) */}
              <svg width="140" height="80" viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 40C10 24 22 12 38 12c20 0 32 28 32 28s12 28 32 28c16 0 28-12 28-28"
                  stroke="url(#grad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="140" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
            <motion.div
              className="absolute -inset-6 rounded-3xl bg-white/5 blur-2xl"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight">LexCore Portal</h2>
            <p className="text-zinc-400 mt-1">Modern workspace for your firm</p>
          </div>
        </motion.div>
        {/* Subtle grid lines */}
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Right: form panel */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h1 className="text-2xl font-semibold">Sign in to LexCore</h1>
            <p className="text-sm text-zinc-400 mt-1">Use any email and password to continue</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="you@lexcore.com"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="••••••••"
                />
              </div>
              {error && <div className="text-sm text-red-400">{error}</div>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black rounded-lg py-2 font-medium hover:bg-zinc-200 transition-colors disabled:opacity-60"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
