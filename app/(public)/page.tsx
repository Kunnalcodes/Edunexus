import { getSession } from '@/lib/auth/session';
import { FaqJsonLd } from '@/components/seo/JsonLd';
import { GuestClearanceBanner } from '@/components/sections/landing/GuestClearanceBanner';
import { EdunexusLandingClient } from '@/components/sections/edunexus/EdunexusLandingClient';
import { EDUNEXUS_FAQS } from '@/data/edunexusLandingData';

export const dynamic = 'force-dynamic';

export default async function PublicHomePage({
  searchParams,
}: {
  searchParams?: Promise<{ notice?: string }>;
}) {
  const session = await getSession();
  const params = searchParams ? await searchParams : {};
  const isGuestPending = Boolean(
    session &&
      (session.role === 'STUDENT' || session.role === 'GUEST') &&
      !session.isDashboardAccessGranted
  );
  const showNotice = Boolean(params.notice || isGuestPending);

  const formattedFaqs = EDUNEXUS_FAQS.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Search Engine Rich Snippet Schema for FAQs */}
      <FaqJsonLd faqs={formattedFaqs} />

      {/* Guest Explorer Clearance Banner (if applicable) */}
      {showNotice && <GuestClearanceBanner session={session} />}

      {/* Edunexus Unified Enterprise Landing Page */}
      <EdunexusLandingClient />
    </div>
  );
}
