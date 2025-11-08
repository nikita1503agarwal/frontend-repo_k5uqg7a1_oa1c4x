import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[52vh] md:h-[60vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">LexCore Internal Portal</h1>
            <p className="mt-3 text-zinc-300 md:text-lg">Unified workspace for PMO, Marketing, IT Support, Operations and CRM — modern, minimal and focused.</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    </section>
  );
}
