'use client';

import React, { useState } from 'react';
import {
  UserPlus,
  GraduationCap,
  Users,
  Award,
  DollarSign,
  Building,
  TrendingUp,
  Search,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  Shield,
  FileText,
  Calendar,
  CreditCard,
  Bell,
  Smartphone,
  ChevronRight,
} from 'lucide-react';
import { MODULES_HEADER, CAMPUS_MODULES_DATA, CampusModule } from '@/data/edunexusLandingData';

interface EdunexusModulesProps {
  onOpenDemo: (interest?: string) => void;
}

export function EdunexusModules({ onOpenDemo }: EdunexusModulesProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('admissions');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategory = CAMPUS_MODULES_DATA.find((cat) => cat.id === activeCategoryId) || CAMPUS_MODULES_DATA[0];

  // If search query is present, filter across all categories
  const filteredModules = searchQuery.trim()
    ? CAMPUS_MODULES_DATA.flatMap((cat) =>
        cat.modules.filter(
          (m) =>
            m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      )
    : activeCategory.modules;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserPlus':
        return <UserPlus className="w-4 h-4" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4" />;
      case 'Users':
        return <Users className="w-4 h-4" />;
      case 'Award':
        return <Award className="w-4 h-4" />;
      case 'DollarSign':
        return <DollarSign className="w-4 h-4" />;
      case 'Building':
        return <Building className="w-4 h-4" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="modules" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{MODULES_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {MODULES_HEADER.heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {MODULES_HEADER.subheading}
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter modules (e.g. Timetable, Fees)..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{filteredModules.length}</strong> institutional modules
          </span>
        </div>

        {/* Category Selector Tabs (when not searching) */}
        {!searchQuery && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
            {CAMPUS_MODULES_DATA.map((category) => {
              const isActive = activeCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className={isActive ? 'text-indigo-400' : 'text-slate-400'}>
                    {getCategoryIcon(category.icon)}
                  </span>
                  <span>{category.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      isActive ? 'bg-slate-800 text-indigo-300' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {category.modules.length}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Active Category Tagline Banner (when not searching) */}
        {!searchQuery && (
          <div className="mb-6 p-4 rounded-xl bg-white border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                {getCategoryIcon(activeCategory.icon)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{activeCategory.name} Suite</h4>
                <p className="text-xs text-slate-500 mt-0.5">{activeCategory.tagline}</p>
              </div>
            </div>

            <button
              onClick={() => onOpenDemo(`${activeCategory.name} Suite Walkthrough`)}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              <span>Schedule {activeCategory.name} Walkthrough</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Interactive Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <div
              key={module.id}
              className="rounded-2xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-indigo-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div>
                {/* Module Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors">
                    <Layers className="w-5 h-5" />
                  </div>
                  {module.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                      {module.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors">
                  {module.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {module.description}
                </p>

                {/* Features List */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Operations Managed:
                  </span>
                  <ul className="space-y-1.5">
                    {module.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">Institution-ready</span>
                <button
                  onClick={() => onOpenDemo(`Module: ${module.name}`)}
                  className="text-xs font-semibold text-slate-800 hover:text-indigo-600 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Request Module Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
