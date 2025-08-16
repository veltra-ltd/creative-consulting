"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { CCSLResearchSection } from "@/types/country";

interface QuantitativeResearchProps {
  data: CCSLResearchSection;
}

const QuantitativeResearch: React.FC<QuantitativeResearchProps> = ({
  data,
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-xl text-blue-600 font-medium">{data.subtitle}</p>
          )}
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {data.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              {service.methods && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 mb-2">Methods:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {service.methods.map((method, i) => (
                      <li key={i}>{method}</li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Add similar blocks for applications and deliverables */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuantitativeResearch;
