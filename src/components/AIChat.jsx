import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Send, X } from 'lucide-react';

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI assistant. Ask me anything about PMO, Marketing, IT, Operations or CRM.' }
  ]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    // simple echo response for now
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: `You said: "${text}". I can route this to the right workspace or summarize it for you.` }
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Floating Voice Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="relative w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg focus:outline-none"
          aria-label="Open AI chat"
        >
          {/* Pulsing aura */}
          <motion.span
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 via-blue-400/30 to-orange-400/30 blur-md"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Breathing ring */}
          <motion.span
            className="absolute -inset-1 rounded-full border border-white/40"
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Mic icon */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <Mic size={20} />
          </motion.div>
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="w-[90vw] max-w-sm rounded-2xl overflow-hidden bg-zinc-900/95 backdrop-blur border border-white/10 shadow-2xl"
        >
          <div className="relative">
            {/* Header with animated voice aura behind icon */}
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-white text-black flex items-center justify-center overflow-visible">
                  <motion.span
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/25 via-blue-400/25 to-orange-400/25 blur"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <Mic size={18} className="relative z-10" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">AI Voice Assistant</div>
                  <div className="text-xs text-zinc-400">Online · Listening</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white p-1 rounded">
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="max-h-80 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] text-sm rounded-lg px-3 py-2 border ${
                      m.role === 'user'
                        ? 'bg-white text-black border-white'
                        : 'bg-white/5 text-white border-white/10'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
                  placeholder="Type a message…"
                  className="flex-1 bg-black/60 text-white placeholder-zinc-500 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                />
                <button
                  onClick={sendMessage}
                  className="inline-flex items-center justify-center rounded-lg bg-white text-black px-3 py-2 hover:bg-zinc-200"
                >
                  <Send size={16} />
                </button>
              </div>
              <div className="mt-2 text-[11px] text-zinc-500">
                Voice mode: press and hold the button to talk (demo visual only)
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
