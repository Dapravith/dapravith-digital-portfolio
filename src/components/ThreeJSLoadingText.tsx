
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Float } from '@react-three/drei';
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
      <Center>
        <Text3D
          ref={meshRef}
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.8}
          height={0.1}
          position={position}
          curveSegments={12}
        >
          {text}
          <meshStandardMaterial 
            color="#3b82f6" 
            transparent 
            opacity={0.9}
            emissive="#1e40af"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Center>
    </Float>
  );
};

const ThreeJSLoadingText = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="w-full h-32">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} />
        <AnimatedText text={text} />
      </Canvas>
    </div>
  );
};

export default ThreeJSLoadingText;
