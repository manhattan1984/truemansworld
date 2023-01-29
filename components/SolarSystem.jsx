import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";

function Planet({ position, args, texture }) {
  const meshRef = useRef(null);
  const groupRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.01;
    groupRef.current.rotation.z += 0.01;
  });

  const textureMap = useLoader(TextureLoader, texture);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={args} />
        <meshLambertMaterial map={textureMap} />
      </mesh>
    </group>
  );
}

function Sun() {
  const sunMap = useLoader(TextureLoader, "sun.jpeg");
  const meshRef = useRef(null);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5]} />
      <meshLambertMaterial map={sunMap} />
    </mesh>
  );
}

export default function SolarSystem() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={0.8} />
      <Sun />

      <Planet texture={"mercury.png"} args={[0.2]} position={[1, 1, 0]} />
      <OrbitControls />
    </Canvas>
  );
}
