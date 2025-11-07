import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Onboarding from './components/Onboarding';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Onboarding />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
