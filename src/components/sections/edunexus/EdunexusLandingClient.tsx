'use client';

import React, { useState } from 'react';
import { EdunexusHero } from './EdunexusHero';
import { EdunexusTrustStrip } from './EdunexusTrustStrip';
import { EdunexusSolutions } from './EdunexusSolutions';
import { EdunexusModules } from './EdunexusModules';
import { EdunexusCampusWorkflow } from './EdunexusCampusWorkflow';
import { EdunexusRoleShowcase } from './EdunexusRoleShowcase';
import { EdunexusWhySection } from './EdunexusWhySection';
import { EdunexusProductShowcase } from './EdunexusProductShowcase';
import { EdunexusFaq } from './EdunexusFaq';
import { EdunexusConversionCta } from './EdunexusConversionCta';
import { EdunexusDemoModal } from './EdunexusDemoModal';

export function EdunexusLandingClient() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoInterest, setDemoInterest] = useState<string>('Edunexus Institutional Demo');

  const handleOpenDemo = (interest?: string) => {
    setDemoInterest(interest || 'Edunexus Institutional Demo');
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section with Live Dashboard Mockup & Floating Cards */}
      <EdunexusHero onOpenDemo={handleOpenDemo} />

      {/* 2. Trust & Impact Strip: 4 Key Capability Indicators */}
      <EdunexusTrustStrip />

      {/* 3. Our Solutions: AI Intelligence, Campus Automation, Enterprise Architecture */}
      <EdunexusSolutions onOpenDemo={handleOpenDemo} />

      {/* 4. Everything Your Institution Needs: 7-Category Interactive Module Hub */}
      <EdunexusModules onOpenDemo={handleOpenDemo} />

      {/* 5. How Edunexus Connects the Campus: 9-Stage Connected Lifecycle Flow */}
      <EdunexusCampusWorkflow onOpenDemo={handleOpenDemo} />

      {/* 6. Designed for Every Role: 4 Role-Specific Workspaces & Live Previews */}
      <EdunexusRoleShowcase onOpenDemo={handleOpenDemo} />

      {/* 7. Why Edunexus: Less Complexity, More Meaningful Education (Comparison) */}
      <EdunexusWhySection onOpenDemo={handleOpenDemo} />

      {/* 8. Dedicated Product Showcase: Interactive Data Tables & System Modules */}
      <EdunexusProductShowcase onOpenDemo={handleOpenDemo} />

      {/* 9. FAQ Section: Accordion Answers to Core Institutional Questions */}
      <EdunexusFaq onOpenDemo={handleOpenDemo} />

      {/* 10. Final Conversion Section: High-Contrast Closing Call to Action */}
      <EdunexusConversionCta onOpenDemo={handleOpenDemo} />

      {/* Global Interactive Institutional Demo Request Modal */}
      <EdunexusDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        initialInterest={demoInterest}
      />
    </div>
  );
}
