"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { List } from "@/components/ui/list";
import { JoinUsData } from "@/types/about";
// import RainbowButton from "@/components/3d/rainbow-button";

const JoinUs = ({ data }: { data: JoinUsData }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] },
    },
    hidden: { opacity: 0, y: 50 },
  };

  return (
    <section ref={ref} className="sm:py-12 py-7 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            className="text-center sm:mb-8 mb-5"
          >
            <h2 className="sm:text-3xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-4">
              {data.heading}
            </h2>
            <p className="text-gray-600 mb-6 sm:text-base text-sm">
              {data.text}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.2 }}
            className="sm:mb-8 mb-5"
          >
            <h3 className="sm:text-xl text-base text-center font-semibold mb-4">
              Opportunities Include:
            </h3>
            <List className="grid grid-cols-1 md:grid-cols-2 sm:gap-4 gap-1 mb-6 sm:text-base text-sm">
              {data.opportunities.map((opp, index) => (
                <li key={index} className="flex justify-center">
                  <span className="text-primary mr-2 sm:block hidden">•</span>
                  <span>{opp}</span>
                </li>
              ))}
            </List>
          </motion.div>

          <motion.form
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.4 }}
            className="space-y-4 sm:p-8 p-4 bg-gray-50 rounded-lg shadow-xl"
          >
            {data.formFields.map((field, index) => (
              <div key={index} className="space-y-2">
                <label className="block text-gray-700">{field.label}</label>
                {field.type === "select" ? (
                  <select className="w-full p-2 border border-gray-300 rounded">
                    {field.options?.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field.type === "checkbox-group" ? (
                  <div className="flex flex-wrap gap-4">
                    {field.options?.map((option, i) => (
                      <label key={i} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        {option}
                      </label>
                    ))}
                  </div>
                ) : field.type === "textarea" ? (
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    rows={4}
                  />
                ) : field.type === "file" ? (
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                ) : (
                  <input
                    type={field.type}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-primary text-white sm:px-32 px-12 sm:py-3 py-2.5 flex justify-self-center rounded hover:bg-blue-700 transition"
            >
              {data.submitText}
            </button>
            {/* <RainbowButton className="sm:!w-[350] sm:!py-3 !py-[8px]" /> */}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
