"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

interface ContactProps {
  data: {
    title: string;
    emails: {
      region: string;
      address: string;
    }[];
  };
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={data.title}
          className="mb-12 text-center"
          // titleClassName="text-white"
          // subtitleClassName="text-blue-200"
        />

        <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-lg backdrop-blur-sm">
          <div className="space-y-6">
            {data.emails.map((email, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-blue-500/30 pb-6 last:border-0 last:pb-0"
              >
                <h3 className="text-lg font-medium text-blue-100 mb-2">
                  {email.region}
                </h3>
                <a
                  href={`mailto:${email.address}`}
                  className="text-xl font-semibold text-white hover:text-blue-200 transition-colors"
                >
                  {email.address}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
