'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Calendar } from 'lucide-react';
import { FINAL_CTA_DATA } from '@/data/edunexusLandingData';

interface EdunexusConversionCtaProps {
  onOpenDemo: (interest?: string) => void;
}

export function EdunexusConversionCta({ onOpenDemo }: EdunexusConversionCtaProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transform Campus Administration</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {FINAL_CTA_DATA.headline}
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {FINAL_CTA_DATA.supportingCopy}
        </p>

        {/* Dual Conversion CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={FINAL_CTA_DATA.primaryCta.href}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>{FINAL_CTA_DATA.primaryCta.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={() => onOpenDemo('Final Conversion CTA')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>{FINAL_CTA_DATA.secondaryCta.label}</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
          {FINAL_CTA_DATA.badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
