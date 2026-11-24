import { randomBytes, randomInt } from 'crypto';

export type StudentTrack = 'AI' | 'CYBER' | 'GENERAL' | 'DATA' | 'CLOUD';

/**
 * Generates an immutable, collision-resistant EduNexus Student Identifier (NEXUS-ID).
 * Format: NEXUS-YYYY-XXXXXX (e.g. NEXUS-2026-8F4K29)
 */
export function generateTSID(year: number = new Date().getFullYear()): string {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // Base32 excluding ambiguous chars (0, O, 1, I)
  const bytes = randomBytes(6);
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars[bytes[i] % chars.length];
  }
  return `NEXUS-${year}-${code}`;
}

export const generateNexusID = generateTSID;

/**
 * Generates a domain-specific Identifier for specialized learning tracks:
 * - AI Track: NX-AXXX (e.g. NX-A104)
 * - Cyber Track: NX-CXXX (e.g. NX-C104)
 */
export function generateDomainTSID(track: StudentTrack = 'CYBER', numberOverride?: number): string {
  const num = numberOverride !== undefined ? numberOverride : randomInt(101, 999);
  if (track === 'AI') {
    return `NX-A${num}`;
  } else if (track === 'CYBER') {
    return `NX-C${num}`;
  }
  return generateTSID();
}

/**
 * Generates an immutable, unique Mentor ID.
 * Format: NX-MNT-XXXX (e.g. NX-MNT-4029)
 */
export function generateMentorTSID(numberOverride?: number): string {
  const num = numberOverride !== undefined ? numberOverride : randomInt(1001, 9999);
  return `NX-MNT-${num}`;
}

export function isValidTSID(tsId: string): boolean {
  if (!tsId) return false;
  const regex = /^(NEXUS-\d{4}-[2-9A-HJ-NP-Z]{6}|NX-A\d{3,4}|NX-C\d{3,4}|NX-MNT-\d{3,6}|TSE-\d{4}-[2-9A-HJ-NP-Z]{6}|TS-A\d{3,4}|TS-C\d{3,4}|TSE-AI-\d{3,4}|TSE-C-\d{3,4}|TS-MNT-\d{3,6})$/;
  return regex.test(tsId);
}
