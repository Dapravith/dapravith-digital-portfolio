
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedParticles = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      temp.set([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20
      ], i * 3);
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const ThreeJSFooterAnimation = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <AnimatedParticles />
      </Canvas>
    </div>
  );
};

export default ThreeJSFooterAnimation;
