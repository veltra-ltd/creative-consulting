export interface CountryPageData {
    hero: HeroBannerData;
    overview: CountryOverviewData;
    services: CountryServicesData;
    capabilities: CountryCapabilitiesData;
    caseStudies: CountryCaseStudiesData;
    contact: CountryContactData;
}

export interface HeroBannerData {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    ctaText: string;
    ctaLink: string;
}

export interface CountryOverviewData {
    heading: string;
    text1: string;
    text2: string;
    stats: {
        value: string;
        label: string;
        icon: string;
    }[];
    marketInsights: {
        title: string;
        description: string;
        icon: string;
    }[];
}

export interface CountryServicesData {
    heading: string;
    subtitle: string;
    services: {
        title: string;
        description: string;
        features: string[];
        icon: string;
    }[];
}

export interface CountryCapabilitiesData {
    heading: string;
    text: string;
    capabilities: {
        title: string;
        description: string;
        percentage: number;
        icon: string;
    }[];
}

export interface CountryCaseStudiesData {
    heading: string;
    subtitle: string;
    studies: {
        title: string;
        client: string;
        industry: string;
        description: string;
        results: string[];
        image: string;
    }[];
}

export interface CountryContactData {
    heading: string;
    text: string;
    office: {
        address: string;
        phone: string;
        email: string;
        hours: string;
    };
    contactMethods: {
        type: string;
        value: string;
        icon: string;
    }[];
}