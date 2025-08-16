import { SupportedLang } from "@/types/lang";

const AboutPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang; country: string }>;
}) => {
  const { lang, country } = await params;

  // const hero: HeroBannerData = await getLangData(lang, "screen/about/hero");

  return <div className="bg-white"></div>;
};

export default AboutPage;
