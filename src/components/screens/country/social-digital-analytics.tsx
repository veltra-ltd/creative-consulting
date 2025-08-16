"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface SocialDigitalAnalyticsProps {
  data: {
    title: string;
    description: string;
    useCases: string[];
  };
}

const SocialDigitalAnalytics: React.FC<SocialDigitalAnalyticsProps> = ({
  data,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title={data.title} className="mb-12 text-center" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <p className="text-lg text-gray-600">{data.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Use-cases
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-700">{useCase}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialDigitalAnalytics;
