import getLangData from "@/lib/translator/getLangData";
import {
  ProcessSectionData,
  // ProcessStepData,
  SolutionsGridData,
  SupportedLang,
} from "@/types/lang";
// import CtaSection from "@/components/screens/solutions/cta-section";
import ProcessSection from "@/components/screens/solutions/process-section";
// import DataVisualization from "@/components/screens/solutions/data-visualization";
import SolutionsGrid from "@/components/screens/solutions/solutions-grid";
// import { HeroSection } from "@/components/layouts/hero";
import { MarketResearchHero } from "@/components/layouts/worldHero";

const SolutionsPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  // Fetch all data needed for the solutions page
  // const heroData:SolutionHero  = await getLangData(lang, "screen/solutions/hero");
  const solutionsData: SolutionsGridData = await getLangData(
    lang,
    "screen/solutions/solutions"
  );
  const processData: ProcessSectionData = await getLangData(
    lang,
    "screen/solutions/process"
  );
  // const ctaData = await getLangData(lang, "screen/solutions/cta");

  return (
    <>
      {/* <HeroSection /> */}
      <MarketResearchHero />
      <SolutionsGrid data={solutionsData} />
      {/* <DataVisualization /> */}
      <ProcessSection data={processData} />
      {/* <CtaSection data={ctaData} lang={lang} /> */}
    </>
  );
};

export default SolutionsPage;
