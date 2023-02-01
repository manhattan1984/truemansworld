"use client";
import * as THREE from "three";
import { OrbitControls, Stars, Text3D, useProgress } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import { TextureLoader } from "three";
import { Effects as EffectsComposer } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";
import planets from "../constants/planets";
import { Planet } from "./Planet";
import { animated, config, useSpring } from "@react-spring/three";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import helvetika from "three/examples/fonts/helvetiker_bold.typeface.json";

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

export function Sun() {
  const sunMap = useLoader(TextureLoader, "sun.jpeg");
  const meshRef = useRef(null);
  const [active, setActive] = useState(false);
  const router = useRouter();

  const { scale } = useSpring({
    scale: active ? 10 : 1,
    config: config.molasses,
  });

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
  });

  return (
    <>
      <animated.mesh
        scale={scale}
        ref={meshRef}
        onClick={() => {
          setActive(!active);
          router.push("/sun");
          console.log("I am the sun");
        }}
      >
        <sphereGeometry args={[1]} />
        <meshStandardMaterial
          toneMapped={false}
          emissiveIntensity={0.1}
          emissive={"yellow"}
          map={sunMap}
        />
      </animated.mesh>
      <Effects />
    </>
  );
}

export default function SolarSystem() {
  const { progress } = useProgress();
  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 10],
        }}
      >
        <Suspense
          fallback={
            <Text3D scale={[0.5, 0.5, 0.5]} font={helvetika}>
              Loading {progress}
            </Text3D>
          }
        >
          <ambientLight intensity={1} />
          <Sun />

          {planets.map((planet, index) => (
            <Planet {...planet} key={index} />
          ))}
          <OrbitControls />
          <Stars />
        </Suspense>
      </Canvas>
    </>
  );
}
