"use client";
import * as THREE from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { TextureLoader } from "three";
import { Effects as EffectsComposer } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";
import planets from "../constants/planets";
import { Planet } from "./Planet";

extend({ UnrealBloomPass });

export const Effects = () => {
  const { size, scene, camera } = useThree();
  const aspect = useMemo(
    () => new THREE.Vector2(size.width, size.height),
    [size]
  );

  return (
    <EffectsComposer
      multisamping={8}
      renderIndex={1}
      disableGamma
      disableRenderPass
    >
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass attachArray="passes" args={[aspect, 0.4, 1, 0]} />
    </EffectsComposer>
  );
};

function Sun() {
  const sunMap = useLoader(TextureLoader, "sun.jpeg");
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
  });

  return (
    <>
      <mesh
        ref={meshRef}
        onClick={() => {
          console.log("I am the sun");
        }}
      >
        <pointLight color={"yellow"} position={[0, 0, 0]} intensity={1.2} />
        <sphereGeometry args={[1]} />
        <meshStandardMaterial
          toneMapped={false}
          emissiveIntensity={0.5}
          emissive={"yellow"}
          map={sunMap}
        />
      </mesh>
      <Effects />
    </>
  );
}

export default function SolarSystem() {
  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [0, 0, 10],
      }}
    >
      <ambientLight intensity={0.1} />
      <Sun />

      {planets.map((planet, index) => (
        <Planet {...planet} key={index} />
      ))}
      <OrbitControls />
      <Stars />
    </Canvas>
  );
}
