import React from 'react';
import { UserPlus, Link as LinkIcon, Send } from 'lucide-react';

const steps = [
  {
    title: 'Create your account',
    description: 'Sign up with your email in seconds and set up secure authentication.',
    icon: UserPlus,
  },
  {
    title: 'Link your bank',
    description: 'Connect accounts securely to sync balances and transactions.',
    icon: LinkIcon,
  },
  {
    title: 'Start transacting',
    description: 'Send and receive payments instantly with full visibility.',
    icon: Send,
  },
];

export default function Onboarding() {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Get started in three simple steps</h2>
          <p className="mt-3 text-slate-600">A guided flow that keeps you moving with zero friction.</p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold text-slate-500">Step {i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
