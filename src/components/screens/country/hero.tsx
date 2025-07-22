"use client";

import { HeroBannerData } from "@/types/country";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function CountryHero({
  data,
  countryName,
}: {
  data: HeroBannerData;
  countryName: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div
          ref={ref}
          className="md:w-1/2 mb-10 md:mb-0"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <h2
            className="text-2xl md:text-3xl text-primary-300 mb-6"
            dangerouslySetInnerHTML={{ __html: data.subtitle }}
          />
          <p
            className="text-lg mb-8"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <Link
            href={data.ctaLink}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            {data.ctaText}
          </Link>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={data.image}
            alt={`${countryName} market research`}
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
