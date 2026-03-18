"use client"

import { Canvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

function AvatarModel() {
  const { scene } = useGLTF("/models/avatar.glb")

  scene.scale.set(0.65, 0.65, 0.65)

  return <primitive object={scene} />
}

export default function Avatar() {
  return (
    <Canvas camera={{ position: [0, 1.6, 4.2] }}>
      <ambientLight intensity={1} />
      <AvatarModel />
    </Canvas>
  )
}