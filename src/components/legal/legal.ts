// Shared types and company details for the legal pages (Privacy Policy, Terms of Service).

export type Lang = 'en' | 'ms';

/** A clause body is a sequence of paragraphs (strings) and bullet lists (string arrays). */
export type ClauseBlock = string | string[];

export interface Clause {
  id: string;
  title: string;
  body: ClauseBlock[];
}

export const COMPANY = {
  email: 'sales@nexus-aurora.com',
  phone: '+60 12 885 9759',
  phoneHref: '+60128859759',
  company: 'Nexus Aurora (M) Sdn Bhd (1659159-X)',
  address: 'Lot 3 Block C 1st Floor, Lorong Bunga Inai, Taman Land Breeze, 88200 Kota Kinabalu, Sabah, Malaysia',
};
