"use client";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Sun } from "../../components/SolarSystem";

const SunSystem = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <Sun />
      <Stars />
      <OrbitControls autoRotate={true} autoRotateSpeed={0.5} />
    </Canvas>
  );
};

const TheSun = () => {
  return (
    <div className="h-screen w-screen">
      <SunSystem />
    </div>
  );
};

export default TheSun;
