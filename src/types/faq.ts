import { HeroBannerData } from "./lang";

export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface MarketResearchFAQData {
    hero: HeroBannerData;
    faqs: FAQItem[];
    cta?: {
      title: string;
      description: string;
      button: {
        name: string;
        link: string;
      };
    };
  }