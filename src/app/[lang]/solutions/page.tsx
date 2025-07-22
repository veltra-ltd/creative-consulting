// "use client";

// import React, { useRef, useEffect, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei";
// import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { motion } from "framer-motion";
// import * as THREE from "three";
// import { MarketResearchHero } from "@/components/layouts/worldHero";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// // Types
// type SolutionCardProps = {
//   icon: string;
//   title: string;
//   description: string;
//   features: string[];
//   imageUrl: string;
// };

// type SectionHeadingProps = {
//   title: string;
//   description: string;
// };

// type ProcessStepProps = {
//   step: string;
//   title: string;
//   description: string;
//   icon: string;
//   index: number;
// };

// // 3D Model Component
// const DataModel = () => {
//   // const model = useGLTF("/data_visualization.glb");
//   const model = useGLTF(
//     "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
//   );

//   const meshRef = useRef<THREE.Mesh>(null);

//   useFrame(({ clock }: { clock: THREE.Clock }) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
//     }
//   });

//   return (
//     <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
//       {React.createElement("primitive", {
//         ref: meshRef,
//         object: model.scene,
//         scale: 1.5,
//         position: [0, -1, 0],
//       })}
//     </Float>
//   );
// };

// // Animated Background Particles
// // const Particles = () => {
// //   const particlesRef = useRef<THREE.Points>(null);
// //   useThree();

// //   const particlesGeometry = new THREE.BufferGeometry();
// //   const particlesCnt = 1000;

// //   const posArray = new Float32Array(particlesCnt * 3);
// //   for (let i = 0; i < particlesCnt * 3; i++) {
// //     posArray[i] = (Math.random() - 0.5) * 10;
// //   }

// //   particlesGeometry.setAttribute(
// //     "position",
// //     new THREE.BufferAttribute(posArray, 3)
// //   );

// //   useFrame(() => {
// //     if (particlesRef.current) {
// //       particlesRef.current.rotation.x += 0.0005;
// //       particlesRef.current.rotation.y += 0.0005;
// //     }
// //   });

// //   return (
// //     <points ref={particlesRef}>
// //       <bufferGeometry attach="geometry" {...particlesGeometry} />
// //       <pointsMaterial
// //         size={0.02}
// //         color="#ffffff"
// //         transparent
// //         opacity={0.8}
// //         sizeAttenuation={true}
// //       />
// //     </points>
// //   );
// // };

// // Section Heading Component
// const SectionHeading: React.FC<SectionHeadingProps> = ({
//   title,
//   description,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true, margin: "-100px" }}
//       className="mb-16 text-center"
//     >
//       <h2 className="text-4xl md:text-5xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three mb-4">
//         {title}
//       </h2>
//       <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
//     </motion.div>
//   );
// };

// // Solution Card Component
// const SolutionCard: React.FC<SolutionCardProps> = ({
//   icon,
//   title,
//   description,
//   features,
//   imageUrl,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -10 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl h-full"
//     >
//       <div className="h-48 overflow-hidden">
//         <img
//           src={imageUrl}
//           alt={title}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <div className="p-8">
//         <div className="text-blue-600 text-4xl mb-4">{icon}</div>
//         <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
//         <p className="text-gray-600 mb-6">{description}</p>
//         <ul className="space-y-2">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-start">
//               <svg
//                 className="h-5 w-5 text-green-500 mr-2 mt-0.5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//               <span className="text-gray-700">{feature}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

// // Process Step Component
// const ProcessStep: React.FC<ProcessStepProps> = ({
//   step,
//   title,
//   description,
//   icon,
//   index,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className={`relative flex flex-col md:flex-row items-center ${
//         index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//       } mb-8`}
//     >
//       <div
//         className={`flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white text-2xl font-bold z-10 ${
//           index % 2 === 0 ? "md:mr-8" : "md:ml-8"
//         }`}
//       >
//         {step}
//       </div>
//       <div
//         className={`flex-grow mt-4 md:mt-0 ${
//           index % 2 === 0 ? "md:text-right" : "md:text-left"
//         }`}
//       >
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="text-3xl mb-2">{icon}</div>
//           <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
//           <p className="text-gray-600">{description}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const SolutionsPage: React.FC = () => {
//   const heroRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<THREE.Group>(null);
//   const controlsRef = useRef<OrbitControlsImpl | null>(null);

//   // Sample images from Pexels
//   const pexelsImages = {
//     marketResearch:
//       "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
//     socialResearch:
//       "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
//     politicalResearch:
//       "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg",
//     customResearch:
//       "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
//     dataAnalytics:
//       "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
//     surveyServices:
//       "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
//   };

//   useEffect(() => {
//     // GSAP animations for hero section
//     gsap.from(heroRef.current, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       ease: "power3.out",
//     });

//     // Scroll animations for 3D model
//     if (canvasRef.current) {
//       ScrollTrigger.create({
//         trigger: ".solutions-section",
//         start: "top center",
//         end: "bottom center",
//         onUpdate: (self) => {
//           if (canvasRef.current) {
//             canvasRef.current.rotation.y = self.progress * Math.PI * 2;
//           }
//         },
//       });
//     }

//     // Auto-rotate when not scrolling
//     let timeout: NodeJS.Timeout;
//     const resetAutoRotate = () => {
//       if (controlsRef.current) {
//         controlsRef.current.autoRotate = false;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//           if (controlsRef.current) controlsRef.current.autoRotate = true;
//         }, 3000);
//       }
//     };

//     window.addEventListener("scroll", resetAutoRotate);
//     return () => {
//       window.removeEventListener("scroll", resetAutoRotate);
//       clearTimeout(timeout);
//     };
//   }, []);

//   return (
//     <div className="bg-gray-50">
//       {/* Hero Section */}
//       {/* <section
//         ref={heroRef}
//         className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden"
//       >
//         <div className="absolute inset-0 z-0">
//           <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
//             <ambientLight intensity={0.5} />
//             <pointLight position={[10, 10, 10]} intensity={1} castShadow />
//             <spotLight
//               position={[10, 10, 10]}
//               angle={0.15}
//               penumbra={1}
//               intensity={1}
//               castShadow
//               shadow-mapSize-width={2048}
//               shadow-mapSize-height={2048}
//             />
//             <Suspense fallback={null}>
//               <DataModel />
//               <Environment preset="city" />
//               <Particles />
//             </Suspense>
//             <OrbitControls
//               ref={controlsRef}
//               enableZoom={false}
//               autoRotate
//               autoRotateSpeed={2}
//               enablePan={false}
//             />
//           </Canvas>
//         </div>

//         <div className="relative z-10 text-center px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-7xl font-bold text-white mb-6"
//           >
//             Transform Data Into Strategy
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
//           >
//             Unlock the power of your data with our comprehensive research and
//             analytics solutions
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Explore Solutions
//             </button>
//           </motion.div>
//         </div>

//         <div className="absolute bottom-10 left-0 right-0 flex justify-center">
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 2 }}
//           >
//             <svg
//               className="h-8 w-8 text-white"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </motion.div>
//         </div>
//       </section> */}

//       {/* <HeroSection /> */}
//       <MarketResearchHero />

//       {/* Solutions Grid Section */}
//       <section className="py-20 px-4 max-w-7xl mx-auto solutions-section">
//         <SectionHeading
//           title="Our Research Solutions"
//           description="Comprehensive services designed to transform complex data into clear, strategic advantages"
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <SolutionCard
//             icon="📊"
//             title="Market Research"
//             description="Detailed analysis of industry trends, consumer behavior, and competitive landscapes."
//             features={[
//               "Industry trend analysis",
//               "Consumer insights & segmentation",
//               "Competitive benchmarking",
//               "Market forecasting",
//             ]}
//             imageUrl={pexelsImages.marketResearch}
//           />

//           <SolutionCard
//             icon="👥"
//             title="Social Research"
//             description="Exploring cultural, demographic, and behavioral dimensions of society."
//             features={[
//               "Cultural trend analysis",
//               "Demographic segmentation",
//               "Behavior mapping",
//               "Impact assessment",
//             ]}
//             imageUrl={pexelsImages.socialResearch}
//           />

//           <SolutionCard
//             icon="🗳️"
//             title="Political Research"
//             description="Analyzing political sentiments, voting behaviors, and policy impacts."
//             features={[
//               "Public opinion polling",
//               "Electoral analysis",
//               "Policy impact research",
//               "Sentiment analysis",
//             ]}
//             imageUrl={pexelsImages.politicalResearch}
//           />

//           <SolutionCard
//             icon="🔍"
//             title="Custom Research"
//             description="Tailored methodologies to address your specific business challenges."
//             features={[
//               "Bespoke study design",
//               "Flexible methodologies",
//               "Integrated reporting",
//               "Client-centric approach",
//             ]}
//             imageUrl={pexelsImages.customResearch}
//           />

//           <SolutionCard
//             icon="📈"
//             title="Data Analytics"
//             description="Advanced analytics to uncover insights and drive strategic decisions."
//             features={[
//               "Predictive modeling",
//               "Big data analysis",
//               "Strategic planning",
//               "Performance metrics",
//             ]}
//             imageUrl={pexelsImages.dataAnalytics}
//           />

//           <SolutionCard
//             icon="📝"
//             title="Survey Services"
//             description="Comprehensive survey solutions from design to execution."
//             features={[
//               "Survey scripting",
//               "Multi-platform integration",
//               "Telephonic surveys",
//               "Fieldwork & data collection",
//             ]}
//             imageUrl={pexelsImages.surveyServices}
//           />
//         </div>
//       </section>

//       {/* 3D Data Visualization Section */}
//       <section className="py-32 bg-gray-100 relative overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <Canvas>
//             <ambientLight intensity={0.5} />
//             <pointLight position={[10, 10, 10]} />
//             <Suspense fallback={null}>
//               <DataModel />
//               <Environment preset="city" />
//             </Suspense>
//             <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
//           </Canvas>
//         </div>
//         <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-primary mb-6"
//           >
//             Interactive Data Visualization
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-xl text-primary/10 max-w-3xl mx-auto mb-8"
//           >
//             Explore your data in three dimensions for deeper insights and
//             understanding
//           </motion.p>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <SectionHeading
//           title="Our Research Process"
//           description="A structured approach to deliver actionable insights"
//         />

//         <div className="relative">
//           <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 -ml-0.5"></div>

//           <div className="space-y-12 md:space-y-0">
//             {[
//               {
//                 step: "1",
//                 title: "Define Objectives",
//                 description:
//                   "We collaborate with you to clearly define research goals and key questions.",
//                 icon: "🎯",
//               },
//               {
//                 step: "2",
//                 title: "Design Methodology",
//                 description:
//                   "Tailored research design selecting the most appropriate methods for your needs.",
//                 icon: "📝",
//               },
//               {
//                 step: "3",
//                 title: "Data Collection",
//                 description:
//                   "Rigorous execution using advanced tools and trained professionals.",
//                 icon: "🔍",
//               },
//               {
//                 step: "4",
//                 title: "Analysis & Insights",
//                 description:
//                   "Advanced analytics to uncover patterns and generate meaningful insights.",
//                 icon: "📊",
//               },
//               {
//                 step: "5",
//                 title: "Strategic Reporting",
//                 description:
//                   "Clear, actionable recommendations presented for decision-making.",
//                 icon: "📑",
//               },
//             ].map((item, index) => (
//               <ProcessStep key={item.step} {...item} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-6"
//           >
//             Ready to Transform Your Data Into Strategic Advantage?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-xl mb-8 max-w-3xl mx-auto"
//           >
//             Contact us today to discuss how our research solutions can empower
//             your business decisions.
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//               Get in Touch
//             </button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SolutionsPage;

import getLangData from "@/lib/translator/getLangData";
import {
  ProcessSectionData,
  // ProcessStepData,
  SolutionsGridData,
  SupportedLang,
} from "@/types/lang";
// import CtaSection from "@/components/screens/solutions/cta-section";
import ProcessSection from "@/components/screens/solutions/process-section";
// import DataVisualization from "@/components/screens/solutions/data-visualization";
import SolutionsGrid from "@/components/screens/solutions/solutions-grid";
// import { HeroSection } from "@/components/layouts/hero";
import { MarketResearchHero } from "@/components/layouts/worldHero";

const SolutionsPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;

  // Fetch all data needed for the solutions page
  // const heroData:SolutionHero  = await getLangData(lang, "screen/solutions/hero");
  const solutionsData: SolutionsGridData = await getLangData(
    lang,
    "screen/solutions/solutions"
  );
  const processData: ProcessSectionData = await getLangData(
    lang,
    "screen/solutions/process"
  );
  // const ctaData = await getLangData(lang, "screen/solutions/cta");

  return (
    <>
      {/* <HeroSection /> */}
      <MarketResearchHero />
      <SolutionsGrid data={solutionsData} />
      {/* <DataVisualization /> */}
      <ProcessSection data={processData} />
      {/* <CtaSection data={ctaData} lang={lang} /> */}
    </>
  );
};

export default SolutionsPage;
