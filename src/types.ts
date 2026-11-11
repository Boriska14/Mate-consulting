export interface OfferPackage {
  id: string;
  name: string;
  subtitle: string;
  target: string;
  hourlyRate: string;
  hourlyRange: [number, number];
  monthlyHours: string;
  monthlyRange: [number, number];
  recommendedBudget: string;
  popular?: boolean;
  highlightColor?: string;
  badge?: string;
  objective: string;
  domains: {
    domain: string;
    details: string;
  }[];
  deliverables: string[];
}

export interface SpecialOffer {
  id: string;
  name: string;
  subtitle: string;
  target: string;
  hourlyRate: string;
  hourlyRange: [number, number];
  mode: string;
  objective: string;
  domains: {
    domain: string;
    details: string;
  }[];
  deliverables: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  companyType: 'freelance' | 'tpe' | 'pme' | 'artisan' | 'other';
  selectedOffer: string;
  monthlyVolumeHours: number;
  estimatedBudget: number;
  preferredDate?: string;
  preferredTimeSlot?: string;
  message: string;
}
