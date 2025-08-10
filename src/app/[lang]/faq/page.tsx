"use client";

import HeroBanner from "@/components/layouts/hero-banner";
import { SupportedLang } from "@/types/lang";
import getLangData from "@/lib/translator/getLangData";
import { motion } from "framer-motion";
import { MarketResearchFAQData } from "@/types/faq";
import CTA from "@/components/screens/faq/faq-cta";
import FAQSection from "@/components/screens/faq/faq-section";

const MarketResearchFAQPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  const pageData: MarketResearchFAQData = await getLangData(lang, "screen/faq");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <HeroBanner data={pageData.hero} />

      <FAQSection sections={pageData.sections} />

      {pageData.cta && <CTA data={pageData.cta} />}
    </motion.div>
  );
};

export default MarketResearchFAQPage;
