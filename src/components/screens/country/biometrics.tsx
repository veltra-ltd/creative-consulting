"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface BiometricsProps {
  data: {
    title: string;
    description: string;
    methods: string[];
    outputs: string[];
  };
}

const Biometrics: React.FC<BiometricsProps> = ({ data }) => {
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

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Methods
              </h3>
              <ul className="space-y-3">
                {data.methods.map((method, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{method}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Outputs
              </h3>
              <ul className="space-y-3">
                {data.outputs.map((output, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">{output}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biometrics;
