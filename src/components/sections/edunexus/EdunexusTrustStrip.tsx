'use client';

import React from 'react';
import { Building2, Layers, BarChart3, ShieldCheck, CheckCircle } from 'lucide-react';
import { TRUST_METRICS } from '@/data/edunexusLandingData';

export function EdunexusTrustStrip() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-indigo-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-purple-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section className="bg-slate-900 text-white py-12 border-y border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strip Grid of 4 Key Institutional Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/60 hover:bg-slate-800/80 hover:border-indigo-500/40 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800 text-indigo-400 border border-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {getIcon(metric.icon)}
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-400 block mb-1">
                  {metric.highlight}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">
                  {metric.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
