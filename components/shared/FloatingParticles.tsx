"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function FloatingParticles({
    count = 100,
    color = "#a5b4fc"
}: {
    count?: number
    color?: string
}) {
    const mesh = useRef<THREE.InstancedMesh>(null!)
    const dummy = useMemo(() => new THREE.Object3D(), [])

    // Generate random positions and velocities
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 20
            const y = (Math.random() - 0.5) * 20
            const z = (Math.random() - 0.5) * 20
            const speed = 0.01 + Math.random() * 0.02
            // Add slight offset for anti-gravity feel
            const offset = Math.random() * Math.PI * 2
            temp.push({ x, y, z, speed, offset })
        }
        return temp
    }, [count])

    useFrame((state) => {
        if (!mesh.current) return
        particles.forEach((particle, i) => {
            // Simulate anti-gravity floating
            const t = state.clock.getElapsedTime() + particle.offset

            // Gentle orbit and vertical movement
            dummy.position.set(
                particle.x + Math.sin(t * particle.speed) * 2,
                particle.y + Math.cos(t * particle.speed * 0.8) * 3,
                particle.z + Math.sin(t * particle.speed * 0.5) * 2
            )

            // Gentle rotation
            dummy.rotation.x = t * particle.speed
            dummy.rotation.y = t * particle.speed * 0.5

            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.6}
                roughness={0.2}
                metalness={0.8}
                emissive={color}
                emissiveIntensity={0.2}
            />
        </instancedMesh>
    )
}
