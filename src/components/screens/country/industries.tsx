"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface IndustriesProps {
  data: {
    title: string;
    list: string[];
  };
}

const Industries: React.FC<IndustriesProps> = ({ data }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title={data.title} className="mb-12 text-center" />

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {data.list.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
