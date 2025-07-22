"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { CountryOverviewData } from "@/types/country";
import { useEffect, useRef } from "react";

export default function CountryOverview({
  data,
  countryName,
}: {
  data: CountryOverviewData;
  countryName: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  console.log(countryName);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: data.text1 }}
          />
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto mt-4"
            dangerouslySetInnerHTML={{ __html: data.text2 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {data.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center"
              variants={variants}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold text-primary-500 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {data.marketInsights.map((insight, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              variants={variants}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-3xl mb-4">{insight.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
              <p className="text-gray-600">{insight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
