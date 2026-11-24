'use client';

import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  FileText,
  CreditCard,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  School,
  Search,
  Filter,
  Download,
  MoreVertical,
  Check,
} from 'lucide-react';
import { SHOWCASE_HEADER, PRODUCT_SHOWCASE_TABS, ShowcaseTab } from '@/data/edunexusLandingData';

interface EdunexusProductShowcaseProps {
  onOpenDemo: (interest?: string) => void;
}

export function EdunexusProductShowcase({ onOpenDemo }: EdunexusProductShowcaseProps) {
  const [activeTabId, setActiveTabId] = useState<string>('directory');

  const currentTab = PRODUCT_SHOWCASE_TABS.find((t) => t.id === activeTabId) || PRODUCT_SHOWCASE_TABS[0];

  const getTabIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-4 h-4" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'FileText':
        return <FileText className="w-4 h-4" />;
      case 'CreditCard':
        return <CreditCard className="w-4 h-4" />;
      case 'Calendar':
        return <Calendar className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="showcase" className="py-20 md:py-28 bg-slate-900 text-white border-b border-slate-800 scroll-mt-20 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{SHOWCASE_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {SHOWCASE_HEADER.heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {SHOWCASE_HEADER.subheading}
          </p>
        </div>

        {/* Tab Selector Toolbar */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {PRODUCT_SHOWCASE_TABS.map((tab) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md scale-102'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{getTabIcon(tab.icon)}</span>
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            LARGE ENTERPRISE DASHBOARD MOCKUP
           ========================================================================= */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Top Browser Window Header */}
          <div className="bg-slate-900 px-4 sm:px-6 py-3.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="ml-3 hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/90 text-xs font-mono text-slate-300 border border-slate-700">
                <School className="w-3.5 h-3.5 text-indigo-400" />
                <span>edunexus.cloud/app/{currentTab.id}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2.5 py-0.5 rounded-md font-mono">
                {currentTab.badge}
              </span>
              <button
                onClick={() => onOpenDemo(`Showcase: ${currentTab.name}`)}
                className="px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Inner Interactive Table & Workspace */}
          <div className="p-4 sm:p-8">
            
            {/* View Sub-Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span>{currentTab.name} Console</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-normal">
                    Reconciled &amp; Live
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">{currentTab.description}</p>
              </div>

              {/* Summary KPIs for This Tab */}
              <div className="flex items-center gap-3">
                {currentTab.previewData.summaryStats.map((stat, sIdx) => (
                  <div key={sIdx} className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block">{stat.label}</span>
                    <span className="text-sm font-bold text-white font-mono">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter and Action Bar */}
            <div className="flex items-center justify-between py-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-slate-500" />
                  <input
                    type="text"
                    readOnly
                    value="Filter live records..."
                    className="pl-8 pr-3 py-1 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-400 cursor-default w-48 sm:w-60"
                  />
                </div>
                <button className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Sort by Date</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white">
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Table Display */}
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 bg-slate-900/80">
                    {currentTab.previewData.headers.map((head, hIdx) => (
                      <th key={hIdx} className="p-3.5 font-semibold text-xs tracking-wider uppercase">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-200">
                  {currentTab.previewData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-800/40 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3.5">
                          {cIdx === row.length - 1 ? (
                            <span
                              className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                                String(cell).toLowerCase().includes('active') ||
                                String(cell).toLowerCase().includes('paid') ||
                                String(cell).toLowerCase().includes('normal') ||
                                String(cell).toLowerCase().includes('accepted')
                                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                                  : String(cell).toLowerCase().includes('warning') ||
                                    String(cell).toLowerCase().includes('overdue')
                                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                  : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                              }`}
                            >
                              {cell}
                            </span>
                          ) : cIdx === 0 ? (
                            <span className="font-mono text-indigo-300 font-bold text-xs">{cell}</span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Telemetry Note */}
            <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>All records protected by enterprise encryption and automatic audit logs.</span>
              </span>

              <button
                onClick={() => onOpenDemo(`Custom Demo: ${currentTab.name}`)}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Request customized institutional configuration</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
