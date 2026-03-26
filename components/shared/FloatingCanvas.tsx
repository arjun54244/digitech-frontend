"use client"

import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { FloatingParticles } from "./FloatingParticles"
import { FloatingModel } from "./FloatingModel"

interface FloatingCanvasProps {
    showParticles?: boolean
    showModel?: boolean
    particleColor?: string
    modelColor?: string
    cameraPosition?: [number, number, number]
}

export default function FloatingCanvas({
    showParticles = true,
    showModel = false,
    particleColor = "#a5b4fc",
    modelColor = "#8b5cf6",
    cameraPosition = [0, 0, 10]
}: FloatingCanvasProps) {
    return (
        <div className="absolute inset-0 pointer-events-none -z-10 h-full w-full">
            <Canvas camera={{ position: cameraPosition, fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                {/* We use preset environments like 'city' or 'sunset' if they look better, or just use lights */}
                <Environment preset="night" />

                {showParticles && <FloatingParticles count={150} color={particleColor} />}
                {showModel && <FloatingModel color={modelColor} />}
            </Canvas>
        </div>
    )
}
