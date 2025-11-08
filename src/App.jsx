import React, { useState } from 'react';
import Hero from './components/Hero';
import SidebarNav from './components/SidebarNav';
import TopBar from './components/TopBar';
import SectionContent from './components/SectionContent';
import Login from './components/Login';
import AIChat from './components/AIChat';

function App() {
  const [user, setUser] = useState(null);
  const [active, setActive] = useState('PMO');

  if (!user) {
    return <Login onSuccess={setUser} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar onLogout={() => setUser(null)} />
      <Hero />
      <div className="flex">
        <SidebarNav active={active} onSelect={setActive} />
        <main className="flex-1 min-h-[40vh]">
          <SectionContent active={active} />
        </main>
      </div>
      {/* Floating AI Chat with animated voice icon */}
      <AIChat />
    </div>
  );
}

export default App;
