"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { CountryCapabilitiesData } from "@/types/country";
import { useEffect, useRef } from "react";

export default function CountryCapabilities({
  data,
  countryName,
}: {
  data: CountryCapabilitiesData;
  countryName: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  console.log(countryName);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{data.text}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {data.capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg"
              variants={variants}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{capability.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {capability.description}
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary-500 h-2.5 rounded-full"
                  style={{ width: `${capability.percentage}%` }}
                ></div>
              </div>
              <div className="text-right mt-1 text-sm text-gray-500">
                {capability.percentage}% success rate
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
