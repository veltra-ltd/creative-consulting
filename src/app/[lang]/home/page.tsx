import About from "@/components/screens/home/about";
import CaseStudies from "@/components/screens/home/case-studies";
import ClientsSection from "@/components/screens/home/clients-section";
import ContactSection from "@/components/screens/home/contact-section";
import HeroSlider from "@/components/screens/home/hero-slider";
// import IndustriesSection from "@/components/screens/home/industries-section";
import InsightsSection from "@/components/screens/home/insights-section";
import WorldMapSection from "@/components/screens/home/world-map";
import OurMethodology from "@/components/screens/home/our-methodology";
import Services from "@/components/screens/home/services";
import TeamSection from "@/components/screens/home/team-section";
import getLangData from "@/lib/translator/getLangData";
import {
  ClientsSectionProps,
  HomeAbout,
  HomeBlogPost,
  HomeCaseStudy,
  // HomeIndustriesSectionData,
  HomeMethodology,
  HomeTeamMember,
  ServicesSection,
  SlideData,
  SupportedLang,
} from "@/types/lang";
import { DataCollectionSection, ResearchClinicsSection } from "@/types/home";
import DataCollection from "@/components/screens/home/data-collection";
import ResearchClinics from "@/components/screens/home/research-clinics";

const home = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  // Existing data fetches
  const heroSlider: SlideData[] = await getLangData(
    lang,
    "screen/home/hero-slider"
  );
  const heroData: HomeAbout = await getLangData(lang, "screen/home/about");
  const servicesSection: ServicesSection = await getLangData(
    lang,
    "screen/home/services"
  );
  const clientsSection: ClientsSectionProps = await getLangData(
    lang,
    "screen/home/clients-data"
  );

  // New data fetches for additional sections
  const caseStudies: HomeCaseStudy[] = await getLangData(
    lang,
    "screen/home/case-studies"
  );
  const teamMembers: HomeTeamMember[] = await getLangData(
    lang,
    "screen/home/team"
  );
  const methodologies: HomeMethodology[] = await getLangData(
    lang,
    "screen/home/methodologies"
  );
  const blogPosts: HomeBlogPost[] = await getLangData(
    lang,
    "screen/home/blog-posts"
  );
  // const industriesData: HomeIndustriesSectionData = await getLangData(
  //   lang,
  //   "screen/home/industries"
  // );

  const data: DataCollectionSection = await getLangData(
    lang,
    "screen/home/data-collection"
  );
  const researchClinics: ResearchClinicsSection = await getLangData(
    lang,
    "screen/home/research-clinics"
  );

  return (
    <>
      <HeroSlider
        slides={heroSlider}
        autoSlideInterval={700}
        typingSpeed={200}
      />

      <About data={heroData} />
      <DataCollection data={data} />

      <Services data={servicesSection} />
      <ResearchClinics data={researchClinics} />

      {/* <IndustriesSection data={industriesData} /> */}

      <OurMethodology data={methodologies} />

      <CaseStudies data={caseStudies} />

      <ClientsSection data={clientsSection} />

      <WorldMapSection />
      <TeamSection data={teamMembers} />

      <InsightsSection posts={blogPosts} />

      <ContactSection lang={lang} />
    </>
  );
};

export default home;
