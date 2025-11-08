import React from 'react';
import { LogOut, Search } from 'lucide-react';

export default function TopBar({ onLogout }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <span className="text-sm md:text-base text-zinc-300">Welcome back</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
            <Search size={16} className="text-zinc-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder-zinc-500"
            />
          </div>
          <button onClick={onLogout} className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
