'use client';

import React from 'react';
import {
  Database,
  GitBranch,
  Eye,
  FolderLock,
  Smartphone,
  HeartHandshake,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { WHY_EDUNEXUS_HEADER, WHY_EDUNEXUS_FEATURES } from '@/data/edunexusLandingData';

interface EdunexusWhySectionProps {
  onOpenDemo: (interest?: string) => void;
}

export function EdunexusWhySection({ onOpenDemo }: EdunexusWhySectionProps) {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-600" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-blue-600" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-purple-600" />;
      case 'FolderLock':
        return <FolderLock className="w-5 h-5 text-emerald-600" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="why-edunexus" className="py-20 md:py-28 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{WHY_EDUNEXUS_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {WHY_EDUNEXUS_HEADER.heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {WHY_EDUNEXUS_HEADER.subheading}
          </p>
        </div>

        {/* Comparison Grid: Traditional vs Edunexus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_EDUNEXUS_FEATURES.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-50/70 border border-slate-200/90 p-6 flex flex-col justify-between hover:border-indigo-300 hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getFeatureIcon(item.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200/80 font-mono">
                    {item.impactBadge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                {/* Split Comparison Cards */}
                <div className="mt-5 space-y-3">
                  
                  {/* Traditional Fragmented Approach */}
                  <div className="p-3 rounded-xl bg-rose-50/50 border border-rose-200/60 text-xs">
                    <div className="flex items-center gap-1.5 text-rose-700 font-bold mb-1">
                      <XCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>Traditional Legacy Approach</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      {item.traditional}
                    </p>
                  </div>

                  {/* Edunexus Connected Approach */}
                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/70 text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
                      <span>The Edunexus Way</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed text-[11px] font-medium">
                      {item.edunexus}
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom Micro Action */}
              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 text-[11px]">Validated Outcome</span>
                <button
                  onClick={() => onOpenDemo(`Pillar: ${item.title}`)}
                  className="font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
