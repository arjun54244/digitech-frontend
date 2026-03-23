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
    <Canvas
      dpr={[1, 1.5]}
      frameloop="demand"
      camera={{ position: [0, 1, 4], fov: 45 }}
    >
      <ambientLight intensity={1} />
      <AvatarModel />
    </Canvas>
  )
}
