"use client";
import React from "react";
import { motion } from "motion/react";
import { SupportedLang } from "@/types/lang";

interface ContactSectionProps {
  lang: SupportedLang;
}

const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <section className="py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform your market strategy?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get in touch with our research experts to discuss how we can help
              your business make data-driven decisions.
            </p>
            {/* Contact info blocks... */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a message
            </h3>
            <form className="space-y-4">{/* Form fields here */}</form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
