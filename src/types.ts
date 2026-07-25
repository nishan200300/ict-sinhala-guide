export type TemplateType = 'saas' | 'agency' | 'ecommerce' | 'portfolio' | 'restaurant';

export type FontPairing = 'inter-sans' | 'playfair-serif' | 'space-mono' | 'jakarta-sans';

export type DeviceView = 'desktop' | 'tablet' | 'mobile';

export interface ColorPalette {
  id: string;
  name: string;
  primary: string;
  primaryHover: string;
  accent: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
}

export interface SectionConfig {
  id: string;
  type: 'hero' | 'features' | 'portfolio' | 'pricing' | 'products' | 'testimonials' | 'team' | 'contact' | 'footer';
  enabled: boolean;
  title: string;
  subtitle?: string;
  content?: Record<string, any>;
}

export interface WebsiteConfig {
  id: string;
  title: string;
  template: TemplateType;
  tagline: string;
  brandName: string;
  logoText: string;
  colorPalette: ColorPalette;
  isDarkMode: boolean;
  fontPairing: FontPairing;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
  sections: SectionConfig[];
  contactEmail: string;
  socialLinks: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
}
