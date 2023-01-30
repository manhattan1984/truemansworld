import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Planet = ({ position, args, texture, speed, slug }) => {
  const meshRef = useRef(null);
  const groupRef = useRef(null);
  const router = useRouter();

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.01 * speed;
    groupRef.current.rotation.z += 0.01 * speed;
  });

  const textureMap = useLoader(TextureLoader, texture);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh
        ref={meshRef}
        position={position}
        onClick={() => {
          console.log(`I am ${texture}`);
          router.push(`planets/${slug}`);
        }}
      >
        <sphereGeometry args={args} />
        <meshLambertMaterial map={textureMap} />
      </mesh>
    </group>
  );
};
