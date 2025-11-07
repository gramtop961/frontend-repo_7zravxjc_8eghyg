import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-700 text-xs font-medium mb-4">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            Seamless digital payments
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
            Flow through payments with speed, trust, and absolute clarity.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            FlowPay brings modern, secure payments together with real-time insights. Send, spend, and see your money—beautifully organized and always under control.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-blue-200 hover:opacity-95 transition"
            >
              Get Started
            </a>
            <a href="#features" className="text-slate-700 hover:text-slate-900 text-sm font-medium">Explore features</a>
          </div>
        </div>
        <div className="relative h-[320px] sm:h-[420px] md:h-[520px] rounded-3xl bg-gradient-to-b from-sky-50 to-white border border-sky-100 shadow-[0_10px_40px_rgba(2,132,199,0.15)]">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-white/20 via-transparent to-white/10" />
        </div>
      </div>
      <div className="absolute -z-[1] inset-x-0 top-[-200px] blur-3xl">
        <div className="mx-auto h-72 w-[720px] rounded-full bg-gradient-to-r from-sky-200/40 via-blue-200/40 to-indigo-200/40" />
      </div>
    </section>
  );
}
