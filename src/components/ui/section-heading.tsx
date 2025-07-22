"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-16 text-center ${className}`}
    >
      <h2
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text 
  bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-4
  animate-glossy-gradient"
      >
        {title}
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
    </motion.div>
  );
}
