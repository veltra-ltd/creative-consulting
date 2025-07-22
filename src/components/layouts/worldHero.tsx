"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import * as THREE from "three";
import { useRef, Suspense } from "react";

const WorldMap = () => {
  const mapRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(
    "https://images.weserv.nl/?url=eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg&w=2048"
  );

  useFrame(({ clock }) => {
    if (mapRef.current) {
      mapRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <mesh ref={mapRef}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        transparent
        opacity={0.9}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const DataPoints = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 500;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random();
  }

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
          array={positions}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={count}
          itemSize={3}
          array={colors}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  );
};

export const MarketResearchHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
      {/* 3D World Map Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <WorldMap />
            <DataPoints />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            enablePan={false}
          />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
        >
          <TypeAnimation
            sequence={[
              "Global Market Intelligence",
              1500,
              "Worldwide Consumer Insights",
              1500,
              "International Research Solutions",
              1500,
            ]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8"
        >
          <TypeAnimation
            sequence={[
              "Uncovering trends across 150+ countries",
              2000,
              "Cultural insights that drive global strategy",
              2000,
              "Actionable intelligence for international markets",
              2000,
            ]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Global Coverage
          </button>
          <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
            Request Market Report
          </button>
        </motion.div>
      </div>

      {/* Market Indicators */}
      <motion.div
        className="absolute bottom-10 left-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex justify-center gap-8 flex-wrap">
          {[
            { value: "150+", label: "Countries Covered" },
            { value: "95%", label: "Market Accuracy" },
            { value: "24/7", label: "Data Collection" },
            { value: "10K+", label: "Global Respondents" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">
                {item.value}
              </div>
              <div className="text-sm md:text-base text-blue-200">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
