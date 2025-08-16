"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface PanelsCommunitiesProps {
  data: {
    title: string;
    weHandle: string[];
    youGet: string[];
  };
}

const PanelsCommunities: React.FC<PanelsCommunitiesProps> = ({ data }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title={data.title} className="mb-12 text-center" />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-blue-50 p-6 rounded-lg border border-blue-200"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              We handle:
            </h3>
            <ul className="space-y-3">
              {data.weHandle.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-green-50 p-6 rounded-lg border border-green-200"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              You get:
            </h3>
            <ul className="space-y-3">
              {data.youGet.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PanelsCommunities;
