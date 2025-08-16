"use client";

// components/screens/ccsl-research/hero.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CCSLResearchHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    standards: string;
    imageUrl?: string;
  };
}

const CCSLResearchHero: React.FC<CCSLResearchHeroProps> = ({ data }) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            >
              {data.title}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl md:text-3xl font-semibold text-blue-200 mb-6"
            >
              {data.subtitle}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-6 max-w-2xl"
            >
              {data.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/10 p-4 rounded-lg border-l-4 border-blue-300"
            >
              <p className="text-blue-100">{data.standards}</p>
            </motion.div>
          </div>

          {data.imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:w-1/2"
            >
              <div className="relative h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={data.imageUrl}
                  alt={data.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CCSLResearchHero;
