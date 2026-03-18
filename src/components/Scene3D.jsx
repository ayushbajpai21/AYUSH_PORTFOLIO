import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Character3D } from './Character3D';

export const Scene3D = ({ cursorPosition }) => {
    return (
        <Canvas
            className="absolute inset-0 z-0"
            gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
            }}
        >
            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />

            {/* Lights */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#2563eb" />
            <pointLight position={[5, 5, 0]} intensity={0.3} color="#60a5fa" />

            {/* 3D Character */}
            <Character3D cursorPosition={cursorPosition} />

            {/* Subtle orbit controls (disabled for fixed view) */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
            />

            {/* Background particles/fog effect */}
            <fog attach="fog" args={['#020617', 10, 20]} />
        </Canvas>
    );
};
