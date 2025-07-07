
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedText = ({ text, position = [0, 0, 0] }: { text: string; position?: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.9}
          emissive="#1e40af"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
};

const ThreeJSLoadingText = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="text-4xl font-bold text-primary animate-pulse">
        {text}
      </div>
    </div>
  );
};

export default ThreeJSLoadingText;
