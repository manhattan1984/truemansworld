"use client";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Planet as PlanetThree } from "../../../components/Planet";
import { PlanetType } from "../../../constants/planets";
import earth from "../../../public/earth.jpeg";

const PlanetSystem = ({ texture, name }: { texture: string; name: string }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />

      <PlanetThree
        name={name}
        args={[0.2]}
        position={[0, 0, 0]}
        texture={texture}
        speed={0.2}
        slug=""
      />
      <Stars />
      <OrbitControls />
    </Canvas>
  );
};

type PlanetDetailProps = {
  planet: PlanetType;
};

const PlanetDetail = ({ planet }: PlanetDetailProps) => {
  return (
    <div className="h-screen w-screen bg-black">
      <PlanetSystem texture={earth.src} name={planet.name} />
      <p>{planet.name}</p>
    </div>
  );
};

export default PlanetDetail;
