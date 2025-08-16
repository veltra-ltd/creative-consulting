"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface EngagementModelsProps {
  data: {
    title: string;
    models: string[];
  };
}

const EngagementModels: React.FC<EngagementModelsProps> = ({ data }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title={data.title} className="mb-12 text-center" />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {model.split(":")[0]}
              </h3>
              <p className="text-gray-600">{model.split(":")[1]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
