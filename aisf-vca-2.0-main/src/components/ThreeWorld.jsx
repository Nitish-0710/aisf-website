import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Particles() {
  const meshRef = useRef();
  const scrollRef = useRef(0);

  // Track scroll
  useMemo(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 200; i++) {
      temp.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20,
      ]);
    }
    return temp;
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = scrollRef.current * 0.0005;
    }
  });

  return (
    <group ref={meshRef}>
      {particles.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#ff2a2a" emissive="#8b0000" />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <Particles />
    </>
  );
}

export default function ThreeWorld() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <Scene />
    </Canvas>
  );
}