"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { CountryCaseStudiesData } from "@/types/country";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CountryCaseStudies({
  data,
  countryName,
}: {
  data: CountryCaseStudiesData;
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
    <section className="py-16 bg-gray-50" ref={ref}>
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
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {data.studies.map((study, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={variants}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {study.industry}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    {study.client}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <ul className="space-y-1 mb-4">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary-500 mr-2">✓</span>
                      <span className="text-gray-600">{result}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="text-primary-500 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Read case study
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
