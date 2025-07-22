"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { CountryContactData } from "@/types/country";
import { useEffect, useRef } from "react";

export default function CountryContact({
  data,
  countryName,
}: {
  data: CountryContactData;
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
    <section className="py-16 bg-primary-500 text-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row gap-12"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="md:w-1/2"
            variants={variants}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">{data.heading}</h2>
            <p className="text-xl mb-8">{data.text}</p>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Office</h3>
              <p className="mb-2">{data.office.address}</p>
              <p className="mb-2">Phone: {data.office.phone}</p>
              <p className="mb-2">Email: {data.office.email}</p>
              <p>Hours: {data.office.hours}</p>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 bg-white rounded-lg p-8 text-gray-800"
            variants={variants}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ delay: 0.4 }}
        >
          {data.contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg flex items-center"
              variants={variants}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-3xl mr-4">{method.icon}</div>
              <div>
                <h3 className="font-semibold">{method.type}</h3>
                <p>{method.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
