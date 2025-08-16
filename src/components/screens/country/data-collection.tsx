"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface DataCollectionProps {
  data: {
    title: string;
    coverage: string;
    languages: string;
    qcCompliance: string;
    outputs: string[];
  };
}

const DataCollection: React.FC<DataCollectionProps> = ({ data }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title={data.title} className="mb-12 text-center" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-sm mb-8"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Coverage
            </h3>
            <p className="text-gray-600">{data.coverage}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Languages
              </h3>
              <p className="text-gray-600">{data.languages}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                QC & Compliance
              </h3>
              <p className="text-gray-600">{data.qcCompliance}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Outputs
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {data.outputs.map((output, index) => (
                <li key={index}>{output}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataCollection;
