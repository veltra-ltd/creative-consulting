import { CCSLCountryData, CCSLResearchPageData } from "@/types/country";


const countryDataMap: Record<string, CCSLCountryData> = {
    bangladesh: {
        name: "Bangladesh",
        coverage: "Dhaka + regional teams across Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Mymensingh, Rangpur",
        languages: "Bangla & regional dialects; English for B2B/HCP",
        qcProcess: "100% back-checks on critical items, random checks elsewhere, GPS/time-stamps, consented recordings, GDPR-aware processes; additional safeguards for child/youth research",
        fieldOffices: ["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Barishal", "Sylhet", "Mymensingh", "Rangpur"],
        imageUrl: "/images/bangladesh-map.jpg"
    },
    // Add other countries as needed
};

export const getCCSLResearchData = (country: string): CCSLResearchPageData => {
    const countryData = countryDataMap[country] || countryDataMap.bangladesh;

    return {
        hero: {
            title: `Market Research Company in ${countryData.name}`,
            subtitle: "Creative Consulting Services Limited (CCSL)",
            description: `A leading full-service market & social research and fieldwork partner in ${countryData.name} with operational coverage across APAC & GCC. We specialize in consumer, healthcare, B2B, automotive, financial services, FMCG, retail, and development/NGO research, delivering end-to-end qualitative and quantitative solutions.`,
            standards: "We follow the ICC/ESOMAR International Code for Market, Opinion & Social Research and Data Analytics. Participant consent, privacy, and multi-layer quality control are embedded in every project.",
            imageUrl: countryData.imageUrl
        },
        qualitativeResearch: {
            title: "Qualitative Research",
            services: [
                { title: "FGDs", description: "Explore attitudes, motivations, and behaviors." },
            ],
        },
        dataCollection: {
            title: "Data Collection",
            coverage: "Nationwide",
            languages: "Bangla, English",
            qcCompliance: "Strict QC & GDPR compliant",
            outputs: ["Raw Data", "Tabulations"],
        },
        panelsCommunities: {
            title: "Panels & Communities",
            weHandle: ["Recruitment", "Management"],
            youGet: ["Reliable insights", "Ongoing engagement"],
        },
        mobileResearch: {
            title: "Mobile Research",
            useCases: ["On-the-go surveys", "Diary studies"],
            toolkit: ["Mobile app", "SMS"],
            deliverables: ["Realtime dashboards", "Quick reports"],
        },
        biometrics: {
            title: "Biometrics",
            description: "Advanced neuromarketing tools.",
            methods: ["Eye-tracking", "EEG", "Facial coding"],
            outputs: ["Heatmaps", "Engagement metrics"],
        },
        analyticalServices: {
            title: "Analytical Services",
            techniques: ["Regression", "Segmentation"],
            visualization: ["Dashboards", "Infographics"],
            deliverables: ["Custom reports"],
        },
        socialDigitalAnalytics: {
            title: "Social & Digital Analytics",
            description: "Monitor digital conversations and behaviors.",
            useCases: ["Brand health", "Campaign effectiveness"],
        },
        researchPlatform: {
            title: "Research Platform",
            platforms: ["Custom online platform"],
            security: ["GDPR", "ISO 20252 compliance"],
        },
        industries: {
            title: "Industries We Serve",
            list: ["Healthcare", "FMCG", "Finance"],
        },
        engagementModels: {
            title: "Engagement Models",
            models: ["Project-based", "Retainer-based"],
        },

        whyChooseUs: {
            title: "Why Clients Choose Creative Consulting Services Limited (CCSL)",
            points: [
                {
                    title: "Strong field operations",
                    description: "Vetted recruiters, trained interviewers/moderators, centralized scheduling, secure data handling.",
                    icon: "FaUserCheck"
                },
                {
                    title: "Multi-mode, fit-for-purpose design",
                    description: "Survey, FGDs, IDIs, ethnography, CATI, CAWI, CAPI, online communities, mobile diaries.",
                    icon: "FaLaptop"
                },
                {
                    title: "Quality you can verify",
                    description: "Live monitoring, call/listen-backs and consented recordings, GPS/time-stamps, 100% critical back-checks.",
                    icon: "FaUserGraduate"
                },
                {
                    title: "Actionable outputs",
                    description: "Concise narratives, clear visuals, and prioritized recommendations—not just data dumps.",
                    icon: "FaComments"
                }
            ]
        },
        whatWeDo: {
            title: "What We Do",
            services: [
                {
                    title: "Quantitative Research",
                    items: ["CATI", "CAWI", "CAPI", "Online"]
                },
                {
                    title: "Qualitative Research",
                    items: ["FGDs", "IDIs", "Ethnography", "Online Qual", "Semiotics"]
                },
                // Add all other services...
            ]
        },
        howWeWork: {
            title: "How We Work (Concept → Completion)",
            steps: [
                {
                    step: "1",
                    title: "Brief & Objectives",
                    description: "Clarify the problem, KPIs, markets, and timelines."
                },
                // Add all other steps...
            ]
        },
        researchSolutions: {
            title: "Our Research Solution or Services",
            services: [
                "Advertising & Communication Research",
                "Brand & Equity Research",
                // Add all other services...
            ]
        },
        quantitativeResearch: {
            title: "Quantitative Research",
            subtitle: "CATI • CAWI • CAPI • Online",
            services: [
                {
                    title: "Purpose",
                    description: "Size markets, track KPIs, and validate decisions with statistical confidence."
                },
                // Add other quantitative research details...
            ]
        },
        // Include all other sections with their full text content...
        contact: {
            title: "Get in Touch",
            emails: country === 'bangladesh' ? [
                {
                    region: "For Bangladesh and across APAC & GCC",
                    address: "abu.sayeed@ccslbd.com"
                },
                {
                    region: "For other countries (all country except Bangladesh)",
                    address: "info@ccslbd.com"
                }
            ] : [
                {
                    region: `For ${countryData.name}`,
                    address: "info@ccslbd.com"
                }
            ]
        },
        countryData
    };
};