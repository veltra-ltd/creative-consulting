"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface HowWeWorkProps {
  data: {
    title: string;
    steps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
}

const HowWeWork: React.FC<HowWeWorkProps> = ({ data }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title={data.title} className="mb-12 text-center" />

        <div className="space-y-8 max-w-4xl mx-auto">
          {data.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl">
                  {step.step}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
