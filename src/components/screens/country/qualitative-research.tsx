"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { CCSLResearchSection } from "@/types/country";
interface QualitativeResearchProps {
  data: CCSLResearchSection;
}

const QualitativeResearch: React.FC<QualitativeResearchProps> = ({ data }) => {
  return (
    <section className="py-16 bg-white">
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
              className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>

              {service.applications && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Applications:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {service.applications.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}

              {service.deliverables && (
                <div className="mt-4">
                  <h4 className="font-medium text-gray-800 mb-2">
                    Deliverables:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {service.deliverables.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitativeResearch;
