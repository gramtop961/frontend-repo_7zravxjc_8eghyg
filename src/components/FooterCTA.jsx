import React from 'react';

export default function FooterCTA() {
  return (
    <section id="cta" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-100 bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 p-8 sm:p-12 text-center shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Experience payments that feel effortless
          </h3>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Create your FlowPay account and start moving money with speed and clarity. No clutter—just focus and control.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-slate-800 transition"
            >
              Create free account
            </a>
            <a href="#features" className="text-slate-700 hover:text-slate-900 text-sm font-medium">
              See how it works
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} FlowPay. All rights reserved.</p>
      </div>
    </section>
  );
}
