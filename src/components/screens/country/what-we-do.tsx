"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface WhatWeDoProps {
  data: {
    title: string;
    services: {
      title: string;
      description?: string;
      items?: string[];
    }[];
  };
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ data }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title={data.title} className="mb-12 text-center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-gray-600 mb-3">{service.description}</p>
              )}
              {service.items && (
                <ul className="text-gray-600 list-disc pl-5 space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
