'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  ArrowRight,
  ShieldCheck,
  ChevronUp,
  MapPin,
  ExternalLink,
  Sparkles,
  School,
  Github,
  Linkedin,
} from 'lucide-react';
import { FOOTER_CONFIG } from '@/data/edunexusLandingData';

interface EdunexusFooterProps {
  onOpenDemo?: (interest?: string) => void;
}

export function EdunexusFooter({ onOpenDemo }: EdunexusFooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1128] text-white border-t border-slate-800/90 pt-16 pb-12 font-sans relative overflow-hidden">
      
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter / Institutional Updates Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 shadow-lg">
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-base text-white tracking-tight">
                Stay Informed on Higher Education Trends &amp; EdTech Updates
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Receive our monthly institutional briefing on accreditation frameworks, automation, and campus governance.
              </p>
            </div>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto">
            <label htmlFor="edunexus-newsletter-email" className="sr-only">
              Official email address
            </label>
            <input
              id="edunexus-newsletter-email"
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="dean@university.edu"
              className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full sm:w-72"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* =========================================================================
            MAIN 4-COLUMN FOOTER GRID
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Brand Info & Mission (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-black tracking-wider text-xl text-white uppercase">
                {FOOTER_CONFIG.brand.name}
              </span>
              <span className="text-[10px] bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 px-2 py-0.5 rounded-sm font-semibold tracking-widest uppercase">
                CAMPUS ERP &middot; LMS
              </span>
            </Link>

            <p className="text-xs italic text-indigo-300 font-medium">
              &ldquo;{FOOTER_CONFIG.brand.tagline}&rdquo;
            </p>

            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              {FOOTER_CONFIG.brand.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/Kunnalcodes/Edunexus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 flex items-center justify-center transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <div className="text-[11px] text-slate-500 pl-2 border-l border-slate-800 font-mono">
                Academic Minor Project
              </div>
            </div>
          </div>

          {/* 4 Themed Columns: Platform, Institution, Explore, Connect */}
          {FOOTER_CONFIG.columns.map((col, idx) => (
            <div key={idx} className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                {col.title}
              </h5>
              <ul className="space-y-2">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.action === 'openDemoModal' ? (
                      <button
                        onClick={() => onOpenDemo?.(`Footer: ${link.label}`)}
                        className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                      >
                        {link.label}
                      </button>
                    ) : link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{FOOTER_CONFIG.copyright}</p>

          <div className="flex items-center gap-6">
            {FOOTER_CONFIG.legalLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="hover:text-slate-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
