// types/home.ts
// import { SupportedLang } from "@/types/lang";

export interface HeroSectionData {
    title: string;
    subtitle: string;
    ctaButton: string;
    stats: Array<{
        value: string;
        label: string;
    }>;
}

export interface ServiceCardData {
    icon: string;
    title: string;
    description: string;
}

export interface ServicesSectionData {
    title: string;
    subtitle: string;
    services: ServiceCardData[];
}

export interface TestimonialData {
    name: string;
    position: string;
    company: string;
    content: string;
    avatar: string;
}

export interface TestimonialsSectionData {
    title: string;
    testimonials: TestimonialData[];
}

export interface CaseStudyData {
    title: string;
    industry: string;
    challenge: string;
    solution: string;
    result: string;
    image: string;
}

export interface CaseStudiesSectionData {
    title: string;
    subtitle: string;
    caseStudies: CaseStudyData[];
}

export interface CtaSectionData {
    title: string;
    subtitle: string;
    ctaButton: string;
}