"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Environment,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import { useRef, Suspense } from "react";

const ServiceIcons = () => {
  const groupRef = useRef<THREE.Group>(null);
  const images = [
    "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg", // Market Research
    "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg", // Data Analytics
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg", // Strategy
    "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg", // Digital
    "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg", // Customer
  ];

  const textures = useTexture(images);
  const icons = [
    { position: [0, 0, 0], size: 1, rotation: [0, 0, 0] },
    { position: [3, 1, -2], size: 0.8, rotation: [0.2, 0.4, 0] },
    { position: [-2, 2, 1], size: 0.7, rotation: [0.1, -0.3, 0.1] },
    { position: [2, -1, -1], size: 0.6, rotation: [-0.2, 0.1, 0.3] },
    { position: [-3, 0, 2], size: 0.9, rotation: [0.3, -0.2, -0.1] },
  ];

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {icons.map((icon, index) => (
        <Float
          key={index}
          speed={2 + index * 0.5}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh
            position={icon.position as [number, number, number]}
            rotation={icon.rotation as [number, number, number]}
          >
            <boxGeometry args={[icon.size, icon.size, icon.size]} />
            {textures[index] && (
              <>
                {[...Array(6)].map((_, i) => (
                  <meshStandardMaterial
                    key={i}
                    attach={`material-${i}`}
                    map={textures[index]}
                  />
                ))}
              </>
            )}
          </mesh>
        </Float>
      ))}
    </group>
  );
};

export default function Services3DIcons() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <ServiceIcons />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
      />
    </Canvas>
  );
}
