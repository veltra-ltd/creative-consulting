"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { List } from "@/components/ui/list";
import { JoinUsData } from "@/types/about";

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
    <section ref={ref} className="py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-4">
              {data.heading}
            </h2>
            <p className="text-gray-600 mb-6">{data.text}</p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              Opportunities Include:
            </h3>
            <List className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {data.opportunities.map((opp, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
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
            className="space-y-4"
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
              className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              {data.submitText}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
