'use client';

import React from 'react';
import {
  BrainCircuit,
  Workflow,
  Network,
  Check,
  TrendingUp,
  ShieldCheck,
  BarChart,
  ArrowRight,
  GitBranch,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import { SOLUTIONS_HEADER, SOLUTIONS_DATA } from '@/data/edunexusLandingData';

interface EdunexusSolutionsProps {
  onOpenDemo: (interest?: string) => void;
}

export function EdunexusSolutions({ onOpenDemo }: EdunexusSolutionsProps) {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{SOLUTIONS_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {SOLUTIONS_HEADER.heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {SOLUTIONS_HEADER.description}
          </p>
        </div>

        {/* 3 Visually Distinctive Enterprise Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: AI-Powered Institutional Intelligence */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group">
            <div>
              {/* Pillar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/80">
                  {SOLUTIONS_DATA[0].badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors">
                {SOLUTIONS_DATA[0].title}
              </h3>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {SOLUTIONS_DATA[0].description}
              </p>

              {/* Visual Mockup 1: Analytics & Trend Insight Card */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 pb-2 border-b border-slate-100">
                  <span className="flex items-center gap-1.5 text-indigo-700">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Predictive Retention Radar</span>
                  </span>
                  <span className="text-emerald-600 font-mono text-[11px]">98.4% Accuracy</span>
                </div>
                
                {/* Visual Chart Bars Mockup */}
                <div className="space-y-2 pt-1">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>Curriculum Attainment Index</span>
                      <span className="font-semibold text-slate-900">92%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                      <span>At-Risk Student Intervention</span>
                      <span className="font-semibold text-slate-900">14 Flagged</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: '28%' }} />
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span>Audit report ready for NAAC/NIRF</span>
                  <span className="font-semibold text-indigo-600">Generated</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-2.5">
                {SOLUTIONS_DATA[0].keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-5 border-t border-slate-200">
              <button
                onClick={() => onOpenDemo('AI Institutional Intelligence')}
                className="w-full py-2.5 px-4 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <span>Inspect Intelligence Engine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: End-to-End Campus Automation */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group">
            <div>
              {/* Pillar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Workflow className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80">
                  {SOLUTIONS_DATA[1].badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors">
                {SOLUTIONS_DATA[1].title}
              </h3>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {SOLUTIONS_DATA[1].description}
              </p>

              {/* Visual Mockup 2: Connected Lifecycle Flow Diagram */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 pb-2 border-b border-slate-100">
                  <span className="flex items-center gap-1.5 text-blue-700">
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>Automated Process Pipeline</span>
                  </span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded font-semibold font-mono">
                    75% Less Admin
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-medium pt-1">
                  <div className="p-2 rounded-lg bg-blue-50/70 border border-blue-100 text-blue-900">
                    <span className="font-bold block">1. Admissions</span>
                    <span>Direct PRN Sync</span>
                  </div>
                  <div className="p-2 rounded-lg bg-indigo-50/70 border border-indigo-100 text-indigo-900">
                    <span className="font-bold block">2. Academics</span>
                    <span>Zero Overlaps</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50/70 border border-emerald-100 text-emerald-900">
                    <span className="font-bold block">3. Degrees</span>
                    <span>1-Click Mint</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span>Parent alerts on shortfalls</span>
                  <span className="font-semibold text-emerald-600">Automated</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-2.5">
                {SOLUTIONS_DATA[1].keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-5 border-t border-slate-200">
              <button
                onClick={() => onOpenDemo('Campus Automation Workflows')}
                className="w-full py-2.5 px-4 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <span>Explore Workflow Automations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Connected. Flexible. Institution-Ready. */}
          <div className="flex flex-col justify-between rounded-2xl bg-slate-50/70 border border-slate-200/90 p-6 sm:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group">
            <div>
              {/* Pillar Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Network className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                  {SOLUTIONS_DATA[2].badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors">
                {SOLUTIONS_DATA[2].title}
              </h3>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {SOLUTIONS_DATA[2].description}
              </p>

              {/* Visual Mockup 3: Multi-Campus Architecture Diagram */}
              <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800 pb-2 border-b border-slate-100">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Multi-Department Security Matrix</span>
                  </span>
                  <span className="font-mono text-emerald-600 text-[11px]">99.99% Uptime</span>
                </div>

                <div className="space-y-1.5 text-[11px] pt-1">
                  <div className="flex items-center justify-between p-1.5 bg-slate-50 rounded border border-slate-100">
                    <span className="font-medium text-slate-700">Central University Node</span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.2 rounded font-mono">Master DB</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-indigo-50/50 rounded border border-indigo-100">
                    <span className="font-medium text-indigo-900">Engineering &amp; Technology Faculty</span>
                    <span className="text-[10px] bg-indigo-100 text-indigo-800 px-1.5 py-0.2 rounded">Synchronized</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 bg-purple-50/50 rounded border border-purple-100">
                    <span className="font-medium text-purple-900">Medical &amp; Allied Sciences</span>
                    <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.2 rounded">Synchronized</span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100 flex items-center justify-between">
                  <span>Role-based access &amp; audit trails</span>
                  <span className="font-semibold text-indigo-600">Zero-Trust</span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-6 space-y-2.5">
                {SOLUTIONS_DATA[2].keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-5 border-t border-slate-200">
              <button
                onClick={() => onOpenDemo('Institution-Ready Architecture')}
                className="w-full py-2.5 px-4 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <span>Review Enterprise Security</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
