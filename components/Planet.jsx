import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Center, Text3D } from "@react-three/drei";
import helvetika from "three/examples/fonts/helvetiker_bold.typeface.json";

export const Planet = ({ position, args, texture, speed, slug, name }) => {
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
          router.push(slug ? `planets/${slug}` : "");
        }}
      >
        <sphereGeometry args={args} />
        <meshLambertMaterial map={textureMap} />
        <Center bottom>
          <Text3D scale={[0.5, 0.5, 0.5]} font={helvetika}>
            {name}
          </Text3D>
        </Center>
      </mesh>
      {/* <Text text={name} position={position} /> */}
    </group>
  );
};
