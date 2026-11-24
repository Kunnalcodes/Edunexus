'use client';

import React, { useState } from 'react';
import {
  HelpCircle,
  FileEdit,
  CheckCircle,
  BadgeCheck,
  BookOpen,
  Clock,
  ClipboardCheck,
  FileSpreadsheet,
  GraduationCap,
  ArrowRight,
  Sparkles,
  GitBranch,
  Building,
  Check,
} from 'lucide-react';
import { LIFECYCLE_HEADER, LIFECYCLE_STEPS, LifecycleStage } from '@/data/edunexusLandingData';

interface EdunexusCampusWorkflowProps {
  onOpenDemo: (interest?: string) => void;
}

export function EdunexusCampusWorkflow({ onOpenDemo }: EdunexusCampusWorkflowProps) {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const activeStage = LIFECYCLE_STEPS.find((s) => s.step === selectedStep) || LIFECYCLE_STEPS[0];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'HelpCircle':
        return <HelpCircle className="w-4 h-4" />;
      case 'FileEdit':
        return <FileEdit className="w-4 h-4" />;
      case 'CheckCircle':
        return <CheckCircle className="w-4 h-4" />;
      case 'BadgeCheck':
        return <BadgeCheck className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      case 'Clock':
        return <Clock className="w-4 h-4" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-4 h-4" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-4 h-4" />;
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <GitBranch className="w-3.5 h-3.5" />
            <span>{LIFECYCLE_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {LIFECYCLE_HEADER.heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {LIFECYCLE_HEADER.subheading}
          </p>
        </div>

        {/* =========================================================================
            INTERACTIVE STEPPER PROGRESS BAR (9 STAGES)
           ========================================================================= */}
        <div className="relative mb-12">
          
          {/* Horizontal Connecting Track on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          {/* Stepper Buttons */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 relative z-10">
            {LIFECYCLE_STEPS.map((stage) => {
              const isSelected = selectedStep === stage.step;
              const isPast = stage.step < selectedStep;

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStep(stage.step)}
                  className={`flex flex-col items-center p-2.5 rounded-xl transition-all cursor-pointer text-center group ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-md scale-105'
                      : isPast
                      ? 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                      : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200/80'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-1.5 transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : isPast
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isPast ? <Check className="w-4 h-4 text-emerald-600" /> : stage.step}
                  </div>

                  <span className="text-[11px] font-bold tracking-tight truncate w-full">
                    {stage.name}
                  </span>
                  <span className="text-[9px] text-slate-400 truncate w-full hidden sm:block">
                    {stage.department}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            ACTIVE STAGE DEEP DIVE INTERACTIVE DISPLAY
           ========================================================================= */}
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl overflow-hidden relative">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Stage Detail */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono font-bold">
                  Stage {activeStage.step} of 9
                </span>
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{activeStage.department}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeStage.name} Lifecycle Phase
              </h3>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStage.description}
              </p>

              {/* Connected Data Flow Box */}
              <div className="mt-6 p-4 rounded-xl bg-slate-800/90 border border-slate-700/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                  Automated Data Transfer to Next Phase:
                </span>
                <p className="text-xs text-slate-200 font-mono leading-relaxed">
                  {activeStage.dataTransferred}
                </p>
              </div>

              {/* Stepper Navigation Controls */}
              <div className="mt-8 flex items-center gap-3">
                <button
                  disabled={selectedStep === 1}
                  onClick={() => setSelectedStep((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                >
                  Previous Phase
                </button>

                <button
                  disabled={selectedStep === 9}
                  onClick={() => setSelectedStep((prev) => Math.min(9, prev + 1))}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenDemo(`Lifecycle Phase: ${activeStage.name}`)}
                  className="ml-auto text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4 cursor-pointer"
                >
                  Schedule Lifecycle Walkthrough
                </button>
              </div>
            </div>

            {/* Right Column: Visual Stage Telemetry Simulation */}
            <div className="lg:col-span-5 bg-slate-800/60 rounded-2xl border border-slate-700/80 p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Live Master Record Sync
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                  Zero Data Silos
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-700/60">
                  <span className="text-slate-400">Institutional ID</span>
                  <span className="font-mono text-indigo-300 font-bold">NX-2026-{activeStage.step}094</span>
                </div>

                <div className="flex justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-700/60">
                  <span className="text-slate-400">Executing Department</span>
                  <span className="font-semibold text-white">{activeStage.department}</span>
                </div>

                <div className="flex justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-700/60">
                  <span className="text-slate-400">Cross-Department Sync</span>
                  <span className="text-emerald-400 font-medium">Synchronized in &lt;10ms</span>
                </div>

                <div className="flex justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-700/60">
                  <span className="text-slate-400">Tamper-Proof Audit</span>
                  <span className="text-indigo-400 font-medium">Cryptographically Signed</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-700 flex items-center justify-between">
                <span>Next Lifecycle Trigger:</span>
                <span className="font-bold text-slate-200">
                  {selectedStep < 9 ? LIFECYCLE_STEPS[selectedStep].name : 'Alumni Network'}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
