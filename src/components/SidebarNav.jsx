import React from 'react';
import { Briefcase, Megaphone, Headset, Settings, Users } from 'lucide-react';

const items = [
  { key: 'PMO', label: 'PMO', icon: Briefcase },
  { key: 'Marketing', label: 'Marketing', icon: Megaphone },
  { key: 'IT Support', label: 'IT Support', icon: Headset },
  { key: 'Operation', label: 'Operation', icon: Settings },
  { key: 'CRM', label: 'CRM', icon: Users },
];

export default function SidebarNav({ active, onSelect }) {
  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 h-screen sticky top-0 bg-black border-r border-white/10">
      <div className="px-6 py-6 border-b border-white/10">
        <div className="text-xl font-semibold tracking-tight text-white">LexCore</div>
        <div className="text-xs text-zinc-400">Internal Portal</div>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {items.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              active === key
                ? 'bg-white text-black'
                : 'text-zinc-300 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon size={18} />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </nav>
      <div className="px-6 py-4 text-xs text-zinc-500 border-t border-white/10">© {new Date().getFullYear()} LexCore LLP</div>
    </aside>
  );
}
