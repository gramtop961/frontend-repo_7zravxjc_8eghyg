import React from 'react';
import { Shield, LineChart, Wallet, Tags } from 'lucide-react';

const features = [
  {
    title: 'Smart Insights',
    description:
      'Understand spending patterns and cash flow at a glance with clean visual analytics.',
    icon: LineChart,
    accent: 'from-sky-400 to-blue-600',
  },
  {
    title: 'Budget Forecasting',
    description:
      'Predict upcoming expenses and plan ahead with intelligent projections.',
    icon: Wallet,
    accent: 'from-indigo-400 to-blue-600',
  },
  {
    title: 'Expense Categorization',
    description:
      'Automatic labeling that keeps your transactions neat and searchable.',
    icon: Tags,
    accent: 'from-cyan-400 to-sky-600',
  },
  {
    title: 'Secure Payments',
    description:
      'Protected with multi-layer encryption and real-time fraud monitoring.',
    icon: Shield,
    accent: 'from-blue-500 to-indigo-700',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Powerful features, minimalist by design
          </h2>
          <p className="mt-3 text-slate-600">
            Tools that help you move money with confidence while keeping the interface clean and calm.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${f.accent} text-white flex items-center justify-center shadow-md shadow-blue-200`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
