import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 shadow-md shadow-blue-200" />
          <span className="text-xl font-semibold tracking-tight text-slate-900">FlowPay</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <a href="#how" className="text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
          <a href="#cta" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 shadow-sm hover:bg-slate-800 transition-colors"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
