"use client";

import { motion } from "framer-motion";
import { CCSLContent, CountryService } from "@/types/country";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function Main({
  data,
  countryData,
}: {
  data: CCSLContent;
  countryData: CountryService;
}) {
  // Replace (countryName) with actual country name from countryData
  const replaceCountryName = (text: string) => {
    return text.replace(/\(countryName\)/g, countryData.title);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Country Specific Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-16"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          {countryData.title}
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6"
        >
          {countryData.heading}
        </motion.h2>
        <motion.ul
          variants={containerVariants}
          className="space-y-4 mb-8 list-disc pl-5"
        >
          {countryData.list.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </motion.ul>
      </motion.section>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-10"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {replaceCountryName(data.hero.heading)}
        </h2>
        <p
          className="text-lg text-gray-700 mb-6"
          dangerouslySetInnerHTML={{
            __html: replaceCountryName(data.hero.paragraph),
          }}
        />
        <p
          className="text-gray-600 italic"
          dangerouslySetInnerHTML={{ __html: data.hero.focusText }}
        />
      </motion.section>

      {/* Why Choose Us Section */}
      <SectionWithAnimation
        title={replaceCountryName(data.whyClientChoose.heading)}
        items={data.whyClientChoose.list}
        className="mb-16"
      />

      {/* What We Do Section */}
      <SectionWithAnimation
        title={data.whatWeDo.heading}
        items={data.whatWeDo.list}
        className="mb-16"
      />

      {/* How We Work Section */}
      <SectionWithAnimation
        title={data.howWeWork.heading}
        items={data.howWeWork.list}
        className="mb-16"
      />

      {/* Research Solutions Section */}
      {data.OurResearch.list && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            {data.OurResearch.heading}
          </motion.h2>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {data.OurResearch.list.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-blue-600">{item}</h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* Quantitative Research */}
      <SectionWithAnimation
        title={data.QuantitativeResearch.heading}
        items={data.QuantitativeResearch.list}
        className="mb-16"
      />

      {/* Qualitative Research */}
      <SectionWithAnimation
        title={data.QualitativeResearch.heading}
        items={data.QualitativeResearch.list}
        className="mb-16"
      />

      {/* Panels & Communities */}
      <SectionWithAnimation
        title={data.PanelsCommunities.heading}
        subTitle={data.PanelsCommunities.subHeading}
        items={data.PanelsCommunities.list}
        className="mb-16"
      />

      {/* Contact Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SectionWithAnimation
          title={data.GetTouchBangladesh.heading}
          items={data.GetTouchBangladesh.list}
          className="bg-blue-50 p-6 rounded-lg"
        />
        <SectionWithAnimation
          title={data.GetTouchOtherCountries.heading}
          items={data.GetTouchOtherCountries.list}
          className="bg-indigo-50 p-6 rounded-lg"
        />
      </div>
    </div>
  );
}
function SectionWithAnimation({
  title,
  subTitle,
  items,
  className = "",
}: {
  title: string;
  subTitle?: string;
  items?: string[]; // Made items optional
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={className}
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl font-bold text-gray-900 mb-4"
      >
        {title}
      </motion.h2>
      {subTitle && (
        <motion.p
          variants={itemVariants}
          className="text-gray-600 mb-6"
          dangerouslySetInnerHTML={{ __html: subTitle }}
        />
      )}
      {items &&
        items.length > 0 && ( // Added check for items existence
          <motion.ul
            variants={containerVariants}
            className="space-y-3 list-disc pl-5"
          >
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </motion.ul>
        )}
    </motion.section>
  );
}
