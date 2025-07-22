import { List } from "@/components/ui/list";
import { ListItem } from "@/components/ui/list-item";
import { HowWeAddValueData } from "@/types/lang";
import React, { useRef } from "react";
import { FaChartLine } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  data: HowWeAddValueData;
};

const WeAddValue = ({ data }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const paragraphVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    }),
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold  text-transparent bg-clip-text 
  bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-4
  animate-glossy-gradient mb-4 scroll-m-20 tracking-tight transition-colors first:mt-0"
            variants={itemVariants}
          >
            {data.heading}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            dangerouslySetInnerHTML={{ __html: data.text }}
            variants={paragraphVariants}
          />
        </motion.div>

        <List className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {data.valueItems.map((item, index) => (
            <motion.div
              key={index}
              className="value-item"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <ListItem className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
                  <FaChartLine className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 scroll-m-20 tracking-tight">
                  {item.title.split("—")[0]}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </ListItem>
            </motion.div>
          ))}
        </List>
        <motion.p
          className="text-lg text-gray-600"
          initial={{ y: 30, opacity: 0 }}
          animate={controls}
          variants={paragraphVariants}
        >
          {data.tex2}
        </motion.p>
      </div>
    </section>
  );
};

export default WeAddValue;
