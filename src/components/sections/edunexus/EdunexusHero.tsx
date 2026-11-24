'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  CheckCircle2,
  FileText,
  TrendingUp,
  CreditCard,
  Calendar,
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  BarChart3,
  Search,
  Bell,
  ChevronRight,
  School,
  PlayCircle,
} from 'lucide-react';
import { HERO_DATA } from '@/data/edunexusLandingData';

interface EdunexusHeroProps {
  onOpenDemo: (interest?: string) => void;
}

export function EdunexusHero({ onOpenDemo }: EdunexusHeroProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'admissions' | 'finance'>('overview');

  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/80">
      {/* Subtle Background Geometric Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle Glow Spheres */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-96 -left-32 w-[340px] h-[340px] bg-blue-500/5 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-96 -right-32 w-[340px] h-[340px] bg-purple-500/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs hover:border-indigo-300 transition-all text-xs font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span className="font-semibold text-indigo-900">{HERO_DATA.announcement.badge}</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 hidden sm:inline">{HERO_DATA.announcement.text}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        {/* Hero Headline & Subheadline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
            One Connected Campus.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700">
              Infinite Possibilities.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            {HERO_DATA.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href={HERO_DATA.primaryCta.href}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-indigo-500/20 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>{HERO_DATA.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => onOpenDemo('Edunexus Institutional Demo')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 hover:border-slate-400 font-semibold text-sm sm:text-base transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 text-indigo-600" />
              <span>{HERO_DATA.secondaryCta.label}</span>
            </button>
          </div>

          {/* Quick Capability Badges */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 max-w-2xl mx-auto grid grid-cols-3 gap-2 sm:gap-6 text-center">
            {HERO_DATA.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-base sm:text-xl font-bold text-slate-900 tracking-tight">{metric.value}</span>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            HERO VISUAL: HIGH-FIDELITY PRODUCT SHOWCASE WITH REALISTIC DASHBOARD & FLOATING CARDS
           ========================================================================= */}
        <div className="mt-14 sm:mt-18 relative max-w-6xl mx-auto">
          
          {/* Main Dashboard Shell Frame */}
          <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-indigo-950/10 overflow-hidden">
            
            {/* Top Window Bar */}
            <div className="bg-slate-900 text-slate-300 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="ml-3 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 text-[11px] font-mono text-slate-300 border border-slate-700/60">
                  <School className="w-3 h-3 text-indigo-400" />
                  <span>apex-university.edunexus.cloud/console</span>
                </div>
              </div>

              {/* Interactive Dashboard Tabs */}
              <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-lg text-xs">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    activeTab === 'overview'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Campus Overview
                </button>
                <button
                  onClick={() => setActiveTab('admissions')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    activeTab === 'admissions'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Admissions
                </button>
                <button
                  onClick={() => setActiveTab('finance')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    activeTab === 'finance'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Fee Ledger
                </button>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <Bell className="w-4 h-4 cursor-pointer hover:text-white" />
                <div className="w-6 h-6 rounded-full bg-indigo-600/30 border border-indigo-400/40 text-indigo-300 text-[10px] font-bold flex items-center justify-center">
                  ED
                </div>
              </div>
            </div>

            {/* Dashboard Inner Workspace */}
            <div className="p-4 sm:p-6 bg-slate-50/70">
              
              {/* Secondary Navigation & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span>Institutional Command Center</span>
                    <span className="text-[11px] font-medium bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Live Telemetry
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Apex Central Campus &middot; Academic Year 2026-27 &middot; Term II
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2 w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="text"
                      readOnly
                      value="Search student, faculty, course ID..."
                      className="pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg w-52 sm:w-64 text-slate-400 cursor-default"
                    />
                  </div>
                  <span className="text-xs bg-indigo-50 border border-indigo-200 text-indigo-700 px-3 py-1.5 rounded-lg font-medium hidden md:inline">
                    Semester IV Active
                  </span>
                </div>
              </div>

              {/* Dynamic Content Based on Tab */}
              {activeTab === 'overview' && (
                <div className="mt-5 space-y-5">
                  {/* Metric Ribbon */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 mb-1">
                        <span className="text-xs font-semibold">Total Students</span>
                        <Users className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">18,420</div>
                      <span className="text-[11px] font-medium text-emerald-600">+12.4% vs last year</span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 mb-1">
                        <span className="text-xs font-semibold">Average Attendance</span>
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">94.8%</div>
                      <span className="text-[11px] font-medium text-blue-600">Across 144 Batches</span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 mb-1">
                        <span className="text-xs font-semibold">Fee Reconciliation</span>
                        <CreditCard className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">96.2%</div>
                      <span className="text-[11px] font-medium text-emerald-600">Zero manual disputes</span>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center justify-between text-slate-500 mb-1">
                        <span className="text-xs font-semibold">Academic Median</span>
                        <TrendingUp className="w-4 h-4 text-amber-600" />
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900">3.82 CGPA</div>
                      <span className="text-[11px] font-medium text-amber-600">Top decile percentile</span>
                    </div>
                  </div>

                  {/* Mid-Row Split: Activity Table & Faculty Roster */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    
                    {/* Live Department Schedule */}
                    <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200/90 p-4 shadow-2xs">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Active Department Timetable &amp; Utilization
                        </span>
                        <span className="text-[11px] text-indigo-600 font-semibold">Conflict-Free (0 Overlaps)</span>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="text-slate-500 border-b border-slate-100">
                              <th className="pb-2 font-medium">Slot</th>
                              <th className="pb-2 font-medium">Subject / Course</th>
                              <th className="pb-2 font-medium">Faculty</th>
                              <th className="pb-2 font-medium">Room</th>
                              <th className="pb-2 font-medium text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 text-slate-700">
                            <tr>
                              <td className="py-2.5 font-mono text-[11px] text-slate-500">09:00 - 10:30</td>
                              <td className="py-2.5 font-semibold text-slate-900">Distributed Systems (CS-401)</td>
                              <td className="py-2.5">Dr. Ramesh Kumar</td>
                              <td className="py-2.5">Hall A-101</td>
                              <td className="py-2.5 text-right"><span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 font-medium">In Session</span></td>
                            </tr>
                            <tr>
                              <td className="py-2.5 font-mono text-[11px] text-slate-500">10:45 - 12:15</td>
                              <td className="py-2.5 font-semibold text-slate-900">Cloud Security Architecture</td>
                              <td className="py-2.5">Er. Kunal Sharma</td>
                              <td className="py-2.5">Lab C-204</td>
                              <td className="py-2.5 text-right"><span className="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-blue-700 font-medium">Upcoming</span></td>
                            </tr>
                            <tr>
                              <td className="py-2.5 font-mono text-[11px] text-slate-500">01:15 - 02:45</td>
                              <td className="py-2.5 font-semibold text-slate-900">Neural Networks &amp; Deep Learning</td>
                              <td className="py-2.5">Prof. Priya Nair</td>
                              <td className="py-2.5">AI Lab B</td>
                              <td className="py-2.5 text-right"><span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-600 font-medium">Scheduled</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Operational Alerts Card */}
                    <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-2xs flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                            Campus Alerts
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        </div>
                        <div className="space-y-3">
                          <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-xs">
                            <span className="font-semibold text-indigo-950 block">Convocation 2026 Registration</span>
                            <span className="text-indigo-700 text-[11px]">840 degree applications verified.</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 text-xs">
                            <span className="font-semibold text-blue-950 block">Biometric Sync Status</span>
                            <span className="text-blue-700 text-[11px]">18 readers online across main block.</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-purple-50/60 border border-purple-100 text-xs">
                            <span className="font-semibold text-purple-950 block">Mid-Term Hall Tickets Released</span>
                            <span className="text-purple-700 text-[11px]">Automated QR check activated.</span>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => onOpenDemo('Edunexus Command Center')}
                        className="mt-4 text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1"
                      >
                        <span>Open full administrative module</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </div>
              )}

              {activeTab === 'admissions' && (
                <div className="mt-5 bg-white rounded-xl border border-slate-200/90 p-4 shadow-2xs">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Admissions Intake &amp; Merit Allocation (Fall 2026)
                    </span>
                    <span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded font-medium">
                      3,140 Inquiries Processed
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                      <span className="text-xs text-slate-500 font-medium">Total Inquiries</span>
                      <div className="text-lg font-bold text-slate-900 mt-0.5">3,140</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                      <span className="text-xs text-slate-500 font-medium">Offers Dispatched</span>
                      <div className="text-lg font-bold text-indigo-600 mt-0.5">1,280</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                      <span className="text-xs text-slate-500 font-medium">Seats Confirmed</span>
                      <div className="text-lg font-bold text-emerald-600 mt-0.5">890</div>
                    </div>
                  </div>
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="text-slate-500 border-b border-slate-100">
                        <th className="pb-2 font-medium">Application ID</th>
                        <th className="pb-2 font-medium">Candidate Name</th>
                        <th className="pb-2 font-medium">Target Program</th>
                        <th className="pb-2 font-medium">Merit Percentile</th>
                        <th className="pb-2 font-medium text-right">Offer Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="py-2 font-mono text-slate-500">ADM-26-9041</td>
                        <td className="py-2 font-semibold text-slate-900">Tanvi Mehta</td>
                        <td className="py-2">B.Tech Computer Science &amp; AI</td>
                        <td className="py-2">98.4 %ile</td>
                        <td className="py-2 text-right"><span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 font-medium">Offer Accepted</span></td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono text-slate-500">ADM-26-9042</td>
                        <td className="py-2 font-semibold text-slate-900">Aditya Joshi</td>
                        <td className="py-2">B.Tech Cybersecurity Engineering</td>
                        <td className="py-2">94.2 %ile</td>
                        <td className="py-2 text-right"><span className="px-2 py-0.5 rounded text-[10px] bg-blue-50 text-blue-700 font-medium">Offer Released</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'finance' && (
                <div className="mt-5 bg-white rounded-xl border border-slate-200/90 p-4 shadow-2xs">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Fee Collection &amp; Bank Reconciliation Engine
                    </span>
                    <span className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-medium">
                      96.2% Collected On-Schedule
                    </span>
                  </div>
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="text-slate-500 border-b border-slate-100">
                        <th className="pb-2 font-medium">Invoice #</th>
                        <th className="pb-2 font-medium">Student Name</th>
                        <th className="pb-2 font-medium">Component</th>
                        <th className="pb-2 font-medium">Amount</th>
                        <th className="pb-2 font-medium text-right">Payment Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr>
                        <td className="py-2 font-mono text-slate-500">INV-26-1044</td>
                        <td className="py-2 font-semibold text-slate-900">Aarav Patel</td>
                        <td className="py-2">Semester IV Tuition Fee</td>
                        <td className="py-2">₹ 65,000</td>
                        <td className="py-2 text-right"><span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 font-medium">Reconciled (UPI)</span></td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono text-slate-500">INV-26-1045</td>
                        <td className="py-2 font-semibold text-slate-900">Diya Sengupta</td>
                        <td className="py-2">Hostel &amp; Mess Accommodation</td>
                        <td className="py-2">₹ 42,000</td>
                        <td className="py-2 text-right"><span className="px-2 py-0.5 rounded text-[10px] bg-emerald-50 text-emerald-700 font-medium">Reconciled (Bank)</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </div>

          {/* =========================================================================
              FLOATING INTERACTIVE CARDS SURROUNDING THE PREVIEW
             ========================================================================= */}
          
          {/* Card 1: Attendance Sensor (Top Right Floating) */}
          <div className="hidden lg:flex items-center gap-3 absolute -top-6 -right-6 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10 z-20 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">Attendance Telemetry</span>
                <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.2 rounded font-medium border border-blue-200/60">Live</span>
              </div>
              <span className="text-base font-extrabold text-blue-600 block leading-tight">94.8% Average</span>
              <span className="text-[10px] text-slate-500">Parent shortfall notifications automatic</span>
            </div>
          </div>

          {/* Card 2: Admission Applications (Bottom Left Floating) */}
          <div className="hidden lg:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10 z-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 text-purple-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">Admissions Pipeline</span>
                <span className="text-[10px] bg-purple-50 text-purple-700 px-1.5 py-0.2 rounded font-medium border border-purple-200/60">82% Verified</span>
              </div>
              <span className="text-base font-extrabold text-slate-900 block leading-tight">3,140 Applicants</span>
              <span className="text-[10px] text-slate-500">Automated merit calculation</span>
            </div>
          </div>

          {/* Card 3: Fee Collection (Bottom Right Floating) */}
          <div className="hidden lg:flex items-center gap-3 absolute -bottom-6 -right-6 bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/10 z-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-900">Digital Fee Ledger</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.2 rounded font-medium border border-emerald-200/60">Audited</span>
              </div>
              <span className="text-base font-extrabold text-emerald-600 block leading-tight">96.2% Reconciled</span>
              <span className="text-[10px] text-slate-500">Zero reconciliation delays</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
