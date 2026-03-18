import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const Character3D = () => {
    const globeRef = useRef();
    const pointsRef = useRef();
    const radarRingRef = useRef();

    // Generate dots for the globe (Radar Map)
    const particleCount = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(particleCount * 3);
        const radius = 2.5;
        for (let i = 0; i < particleCount; i++) {
            // Uniform sphere distribution
            const phi = Math.acos(-1 + (2 * i) / particleCount);
            const theta = Math.sqrt(particleCount * Math.PI) * phi;

            pos[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
            pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
            pos[i * 3 + 2] = radius * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        if (globeRef.current) {
            // Automatic rotation - Global Radar Effect
            globeRef.current.rotation.y = time * 0.15;
        }

        if (radarRingRef.current) {
            // Radar sweeping effect
            radarRingRef.current.rotation.x = -Math.PI / 2;
            radarRingRef.current.rotation.z = -time * 1.5;
            // Pulse scale
            const scale = 2.5 + Math.sin(time * 3) * 0.05;
            radarRingRef.current.scale.set(scale, scale, 1);
        }
    });

    return (
        <group scale={[1, 1, 1]}>
            <group ref={globeRef}>
                {/* The Dot Grid Globe */}
                <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
                    <PointMaterial
                        transparent
                        color="#3b82f6"
                        size={0.03}
                        sizeAttenuation={true}
                        depthWrite={false}
                        opacity={0.6}
                    />
                </Points>

                {/* Wireframe inner sphere for structure */}
                <mesh>
                    <sphereGeometry args={[2.45, 24, 24]} />
                    <meshBasicMaterial color="#1e3a8a" wireframe transparent opacity={0.1} />
                </mesh>
            </group>

            {/* Radar Scanner Ring */}
            <group rotation={[Math.PI / 2, 0, 0]}> {/* Tilt to align with equator initially? Or just animate separate */}
                {/* Using a separate mesh for the sweep line */}
                <mesh ref={radarRingRef}>
                    <ringGeometry args={[2.5, 2.6, 64]} />
                    <meshBasicMaterial
                        color="#60a5fa"
                        transparent
                        opacity={0.3}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </group>

            {/* Decorative Outer Rings - Static relative to globe rotation */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[3.2, 0.005, 16, 100]} />
                <meshBasicMaterial color="#1e40af" transparent opacity={0.2} />
            </mesh>
            <mesh rotation={[-Math.PI / 3, 0, 0]}>
                <torusGeometry args={[3.2, 0.005, 16, 100]} />
                <meshBasicMaterial color="#1e40af" transparent opacity={0.2} />
            </mesh>
        </group>
    );
};
