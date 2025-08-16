"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface AnalyticalServicesProps {
  data: {
    title: string;
    techniques: string[];
    visualization: string[];
    deliverables: string[];
  };
}

const AnalyticalServices: React.FC<AnalyticalServicesProps> = ({ data }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title={data.title} className="mb-12 text-center" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Techniques
            </h3>
            <ul className="space-y-2">
              {data.techniques.map((item, index) => (
                <li key={index} className="text-gray-600">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Visualization
            </h3>
            <ul className="space-y-2">
              {data.visualization.map((item, index) => (
                <li key={index} className="text-gray-600">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Deliverables
            </h3>
            <ul className="space-y-2">
              {data.deliverables.map((item, index) => (
                <li key={index} className="text-gray-600">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticalServices;
