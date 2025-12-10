export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  price?: string;
  duration?: string;
  image: string;
  icon?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Partner {
  id: number;
  name: string;
  logoUrl?: string; // Using text for now if logo unavailable
}