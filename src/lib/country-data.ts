import { CountryPageData } from "@/types/country";
import { SupportedLang } from "@/types/lang";

export async function getCountryData(
    country: string,
    lang: SupportedLang = "en"
): Promise<CountryPageData> {
    // In a real app, you would fetch this from an API
    // This is a mock implementation
    const capitalizedCountry = country.charAt(0).toUpperCase() + country.slice(1);
    console.log(capitalizedCountry);
    console.log(lang);

    return {
        hero: {
            title: `Market Research Excellence in ${capitalizedCountry}`,
            subtitle: `Creative Consulting: Your trusted partner for ${capitalizedCountry} market insights`,
            description: `We provide comprehensive market research solutions tailored for the ${capitalizedCountry} market, helping businesses make informed decisions with our deep local expertise and international standards.`,
            image: `/images/country/${country}.jpg`,
            ctaText: "Start Your Research Journey",
            ctaLink: "/contact"
        },
        overview: {
            heading: `Understanding ${capitalizedCountry} Market Dynamics`,
            text1: `Creative Consulting has been operating in ${capitalizedCountry} for over a decade, providing unparalleled market research services to both local and international clients.`,
            text2: `Our deep understanding of ${capitalizedCountry}'s unique market characteristics, consumer behavior, and regulatory environment makes us the ideal partner for your research needs.`,
            stats: [
                { value: "500+", label: "Projects Completed", icon: "📊" },
                { value: "98%", label: "Client Satisfaction", icon: "⭐" },
                { value: "50+", label: "Industries Covered", icon: "🏭" },
                { value: "24/7", label: "Support Available", icon: "🔧" }
            ],
            marketInsights: [
                {
                    title: "Consumer Behavior Analysis",
                    description: `Deep insights into ${capitalizedCountry} consumer preferences and purchasing patterns`,
                    icon: "👥"
                },
                {
                    title: "Competitive Intelligence",
                    description: `Comprehensive analysis of market competitors in ${capitalizedCountry}`,
                    icon: "🎯"
                },
                {
                    title: "Regulatory Compliance",
                    description: `Expert guidance on ${capitalizedCountry}'s regulatory landscape`,
                    icon: "⚖️"
                }
            ]
        },
        services: {
            heading: `Our Research Services in ${capitalizedCountry}`,
            subtitle: "Comprehensive market research solutions tailored for your business needs",
            services: [
                {
                    title: "Market Entry Strategy",
                    description: `Strategic guidance for entering the ${capitalizedCountry} market successfully`,
                    features: [
                        "Market size analysis",
                        "Competitive landscape assessment",
                        "Entry barrier identification",
                        "Go-to-market strategy development"
                    ],
                    icon: "🎯"
                },
                {
                    title: "Consumer Research",
                    description: `Understanding ${capitalizedCountry} consumer behavior and preferences`,
                    features: [
                        "Focus group discussions",
                        "In-depth interviews",
                        "Online surveys",
                        "Ethnographic studies"
                    ],
                    icon: "🔍"
                },
                {
                    title: "Brand & Product Testing",
                    description: `Test your brand and products in the ${capitalizedCountry} market`,
                    features: [
                        "Brand perception studies",
                        "Product concept testing",
                        "Packaging evaluation",
                        "Price sensitivity analysis"
                    ],
                    icon: "🧪"
                }
            ]
        },
        capabilities: {
            heading: `Our ${capitalizedCountry} Research Capabilities`,
            text: `We combine local market expertise with international research standards to deliver actionable insights for the ${capitalizedCountry} market.`,
            capabilities: [
                {
                    title: "Qualitative Research",
                    description: "In-depth understanding through interviews and focus groups",
                    percentage: 95,
                    icon: "💬"
                },
                {
                    title: "Quantitative Analysis",
                    description: "Statistical insights from large-scale surveys",
                    percentage: 92,
                    icon: "📈"
                },
                {
                    title: "Digital Analytics",
                    description: "Online behavior and social media sentiment analysis",
                    percentage: 88,
                    icon: "💻"
                },
                {
                    title: "Field Research",
                    description: "On-ground data collection and observation studies",
                    percentage: 90,
                    icon: "🚶"
                }
            ]
        },
        caseStudies: {
            heading: `Success Stories from ${capitalizedCountry}`,
            subtitle: "Real results from our market research projects",
            studies: [
                {
                    title: `Consumer Preference Study in ${capitalizedCountry}`,
                    client: "Global FMCG Company",
                    industry: "Consumer Goods",
                    description: `Comprehensive study to understand consumer preferences for household products in ${capitalizedCountry}`,
                    results: [
                        "25% increase in market share",
                        "Successful product launch",
                        "Enhanced brand positioning"
                    ],
                    image: `/images/case-studies/${country}-fmcg.jpg`
                },
                {
                    title: `Market Entry Strategy for ${capitalizedCountry}`,
                    client: "European Tech Startup",
                    industry: "Technology",
                    description: `Strategic research to guide market entry and expansion in ${capitalizedCountry}`,
                    results: [
                        "Successful market entry",
                        "50% faster time to market",
                        "Optimized pricing strategy"
                    ],
                    image: `/images/case-studies/${country}-tech.jpg`
                }
            ]
        },
        contact: {
            heading: `Connect with Our ${capitalizedCountry} Team`,
            text: `Ready to unlock market opportunities in ${capitalizedCountry}? Our local experts are here to help you succeed.`,
            office: {
                address: `Creative Consulting ${capitalizedCountry} Office, Business District, ${capitalizedCountry}`,
                phone: "+1-234-567-8900",
                email: `${country}@creativeconsulting.com`,
                hours: "Monday - Friday: 9:00 AM - 6:00 PM"
            },
            contactMethods: [
                {
                    type: "Phone",
                    value: "+1-234-567-8900",
                    icon: "📞"
                },
                {
                    type: "Email",
                    value: `${country}@creativeconsulting.com`,
                    icon: "📧"
                },
                {
                    type: "WhatsApp",
                    value: "+1-234-567-8900",
                    icon: "📱"
                }
            ]
        }
    };
}