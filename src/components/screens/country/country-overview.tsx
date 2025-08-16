"use client";

import React from "react";
import { motion } from "framer-motion";
import { CCSLCountryData } from "@/types/country";
import SectionHeading from "@/components/ui/section-heading";

interface CountryOverviewProps {
  data: CCSLCountryData;
}

const CountryOverview: React.FC<CountryOverviewProps> = ({ data }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={`Our Coverage in ${data.name}`}
          //   subtitle="Local Expertise, Global Standards"
          className="mb-12 text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Coverage
            </h3>
            <p className="text-gray-600">{data.coverage}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Languages
            </h3>
            <p className="text-gray-600">{data.languages}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Quality Control
            </h3>
            <p className="text-gray-600">{data.qcProcess}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              Field Offices
            </h3>
            <ul className="text-gray-600 list-disc pl-5">
              {data.fieldOffices.map((office, index) => (
                <li key={index}>{office}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CountryOverview;
