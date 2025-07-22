"use client";

import HeroBanner from "@/components/layouts/hero-banner";
import {
  FieldworkExcellenceData,
  HeroBannerData,
  HowWeAddValueData,
  OurStoryData,
  SupportedLang,
  WhyChooseUsData,
} from "@/types/lang";
import getLangData from "@/lib/translator/getLangData";
import Story from "@/components/screens/about/story";
import WeAddValue from "@/components/screens/about/we-add-value";
import FieldworkExcellence from "@/components/screens/about/fieldwork-excellence";
import WhyChooseUs from "@/components/screens/about/why-choose-us";

const AboutPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const hero: HeroBannerData = await getLangData(lang, "screen/about/hero");
  const story: OurStoryData = await getLangData(lang, "screen/about/story");
  const weAddValue: HowWeAddValueData = await getLangData(
    lang,
    "screen/about/we-add-value"
  );
  const fieldworkExcellence: FieldworkExcellenceData = await getLangData(
    lang,
    "screen/about/fieldwork-excellence"
  );
  const whyChooseUs: WhyChooseUsData = await getLangData(
    lang,
    "screen/about/why-choose-us"
  );

  return (
    <div className="bg-white">
      <HeroBanner data={hero} />

      {/* Our Story */}
      <Story data={story} />

      {/* How We Add Value */}
      <WeAddValue data={weAddValue} />

      {/* Fieldwork Excellence */}
      <FieldworkExcellence data={fieldworkExcellence} />

      {/* Why Choose Us */}
      <WhyChooseUs data={whyChooseUs} />
    </div>
  );
};

export default AboutPage;
