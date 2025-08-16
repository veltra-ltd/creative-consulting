"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import {
  FaUserCheck,
  FaLaptop,
  FaUserGraduate,
  FaComments,
} from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  FaUserCheck: <FaUserCheck className="w-8 h-8 text-blue-600" />,
  FaLaptop: <FaLaptop className="w-8 h-8 text-blue-600" />,
  FaUserGraduate: <FaUserGraduate className="w-8 h-8 text-blue-600" />,
  FaComments: <FaComments className="w-8 h-8 text-blue-600" />,
};

interface WhyChooseUsProps {
  data: {
    title: string;
    points: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ data }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title={data.title} className="mb-12 text-center" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{iconMap[point.icon]}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {point.title}
                </h3>
              </div>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
