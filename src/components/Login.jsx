import React, { useState } from 'react';

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    // Simple demo auth: accept any non-empty credentials
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
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-semibold">Sign in to LexCore</h1>
          <p className="text-sm text-zinc-400 mt-1">Secure access to the internal portal</p>
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
  );
}
