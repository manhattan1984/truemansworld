"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Planet as PlanetThree } from "../../../components/Planet";
import earth from "../../../public/earth.jpeg";

const PlanetSystem = ({ texture }: { texture: string }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />

      <PlanetThree
        args={[0.2]}
        position={[0, 0, 0]}
        texture={texture}
        speed={1}
        slug=""
      />
      <Stars />
    </Canvas>
  );
};

const Planet = ({ planet }) => {
  return (
    <div className="h-screen w-screen bg-black">
      <PlanetSystem texture={earth.src} />
      <p>{planet.name}</p>
    </div>
  );
};

export default Planet;
