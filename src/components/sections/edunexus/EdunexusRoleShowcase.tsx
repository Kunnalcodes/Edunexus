'use client';

import React, { useState } from 'react';
import {
  Shield,
  GraduationCap,
  Users,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  School,
  Check,
  ChevronRight,
  UserCheck,
} from 'lucide-react';
import { ROLES_HEADER, ROLE_EXPERIENCES, RoleExperience } from '@/data/edunexusLandingData';

interface EdunexusRoleShowcaseProps {
  onOpenDemo: (interest?: string) => void;
}

export function EdunexusRoleShowcase({ onOpenDemo }: EdunexusRoleShowcaseProps) {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState<number>(0);

  const activeRole = ROLE_EXPERIENCES[selectedRoleIndex];

  const getRoleIcon = (id: string) => {
    switch (id) {
      case 'admins':
        return <Shield className="w-5 h-5" />;
      case 'faculty':
        return <GraduationCap className="w-5 h-5" />;
      case 'students':
        return <Users className="w-5 h-5" />;
      case 'management':
        return <LineChart className="w-5 h-5" />;
      default:
        return <UserCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="roles" className="py-20 md:py-28 bg-slate-50/70 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{ROLES_HEADER.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {ROLES_HEADER.heading}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {ROLES_HEADER.subheading}
          </p>
        </div>

        {/* 4 Role Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-12">
          {ROLE_EXPERIENCES.map((item, idx) => {
            const isSelected = selectedRoleIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedRoleIndex(idx)}
                className={`p-4 rounded-2xl transition-all flex flex-col items-center justify-center text-center cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-102'
                    : 'bg-white text-slate-600 border-slate-200/90 hover:bg-slate-100 hover:text-slate-900 shadow-2xs'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {getRoleIcon(item.id)}
                </div>
                <span className="text-sm font-bold tracking-tight">{item.role}</span>
                <span
                  className={`text-[10px] mt-0.5 font-medium ${
                    isSelected ? 'text-indigo-300' : 'text-slate-400'
                  }`}
                >
                  Dedicated Workspace
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            DYNAMIC SPLIT PREVIEW & ROLE CAPABILITIES
           ========================================================================= */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Role Details & Key Capabilities */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                  {activeRole.role} Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-3">
                  {activeRole.tagline}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {activeRole.summary}
                </p>
              </div>

              {/* Role KPIs Ribbon */}
              <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                {activeRole.kpis.map((kpi, kIdx) => (
                  <div key={kIdx} className="text-center">
                    <span className="text-base sm:text-xl font-bold text-slate-900 block font-mono">
                      {kpi.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                      {kpi.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Key Capabilities */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Core Workflow Capabilities:
                </span>
                <ul className="space-y-2.5">
                  {activeRole.keyCapabilities.map((cap, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenDemo(`Role Workspace: ${activeRole.role}`)}
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-indigo-500/20 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>{activeRole.primaryAction}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Dynamic Visual Dashboard Mockup Based on Selected Role */}
            <div className="lg:col-span-6 bg-slate-900 rounded-2xl border border-slate-800 p-5 sm:p-6 text-white shadow-lg space-y-4">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    {activeRole.id}.edunexus.cloud
                  </span>
                </div>
                <span className="text-[11px] bg-slate-800 text-indigo-300 px-2 py-0.5 rounded font-mono">
                  {activeRole.role} Session
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white">{activeRole.mockupTitle}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{activeRole.mockupSubtitle}</p>
              </div>

              {/* Distinct Mockup UI Content Per Role */}
              {activeRole.id === 'admins' && (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <span className="text-slate-400 block text-[11px]">System Clearance</span>
                      <span className="text-emerald-400 font-bold font-mono">SUPER_ADMIN (Active)</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <span className="text-slate-400 block text-[11px]">Pending Approvals</span>
                      <span className="text-amber-400 font-bold font-mono">4 Applications Ready</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300 font-semibold border-b border-slate-700 pb-1.5">
                      <span>Module Health</span>
                      <span>Status</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Admissions Engine</span>
                      <span className="text-emerald-400">Synchronized</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Biometric Terminal Sync</span>
                      <span className="text-emerald-400">18 Readers Online</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Fee Gateway Webhook</span>
                      <span className="text-emerald-400">100% Delivery</span>
                    </div>
                  </div>
                </div>
              )}

              {activeRole.id === 'faculty' && (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <span className="text-slate-400 block text-[11px]">Today Schedule</span>
                      <span className="text-indigo-300 font-bold font-mono">3 Lectures &middot; 1 Lab</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <span className="text-slate-400 block text-[11px]">Attendance Logged</span>
                      <span className="text-emerald-400 font-bold font-mono">100% Up to Date</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300 font-semibold border-b border-slate-700 pb-1.5">
                      <span>Course Section</span>
                      <span>Class Avg</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Distributed Systems (CS-401)</span>
                      <span className="text-indigo-400 font-bold">88.4%</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Advanced Cloud Security Lab</span>
                      <span className="text-indigo-400 font-bold">92.1%</span>
                    </div>
                  </div>
                </div>
              )}

              {activeRole.id === 'students' && (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <span className="text-slate-400 block text-[11px]">Overall Attendance</span>
                      <span className="text-emerald-400 font-bold font-mono">96.4% (Eligible)</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <span className="text-slate-400 block text-[11px]">Current CGPA</span>
                      <span className="text-amber-400 font-bold font-mono">3.88 / 4.00</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300 font-semibold border-b border-slate-700 pb-1.5">
                      <span>Upcoming Deadlines</span>
                      <span>Due</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Cloud Security Lab Submission</span>
                      <span className="text-amber-400">Tomorrow, 5 PM</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>Mid-Term Examination Admit Card</span>
                      <span className="text-emerald-400">Downloaded</span>
                    </div>
                  </div>
                </div>
              )}

              {activeRole.id === 'management' && (
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <span className="text-slate-400 block text-[11px]">Gross Enrollment Growth</span>
                      <span className="text-emerald-400 font-bold font-mono">+12.4% YoY</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                      <span className="text-slate-400 block text-[11px]">Fee Collection Velocity</span>
                      <span className="text-blue-400 font-bold font-mono">96.2% Reconciled</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-800/60 border border-slate-700 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300 font-semibold border-b border-slate-700 pb-1.5">
                      <span>Campus Division</span>
                      <span>Target Achievement</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>School of Computing &amp; AI</span>
                      <span className="text-emerald-400 font-bold">104% (Target Exceeded)</span>
                    </div>
                    <div className="flex justify-between text-slate-400 text-[11px]">
                      <span>School of Management &amp; Analytics</span>
                      <span className="text-blue-400 font-bold">98% (On Track)</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800 flex items-center justify-between">
                <span>Role Security Level:</span>
                <span className="text-indigo-400 font-semibold">Enterprise RBAC + 2FA</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
