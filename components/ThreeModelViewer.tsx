
"use client"

import React, { Suspense, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from "three"

type ModelProps = {
  modelPath: string
  scale?: number | [number, number, number]
  position?: [number, number, number]
  rotation?: [number, number, number]
  autoRotate?: boolean
  className?: string
}

function Model({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  className
}: ModelProps) {
  const { scene } = useGLTF(modelPath)
  const ref = useRef<THREE.Group>(null!)
  const { pointer } = useThree()

  useFrame(() => {
    if (!ref.current) return

    // Smooth rotation toward cursor
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      pointer.x * 0.5,
      0.05
    )

    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -pointer.y * 0.3,
      0.05
    )
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  )
}

type ViewerProps = ModelProps & {
  autoRotate?: boolean
  className?: string
}

export default function ThreeModelViewer({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  className,
}: ViewerProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <Model
            modelPath={modelPath}
            scale={scale}
            position={position}
            rotation={rotation}
          />
        </Suspense>

        <OrbitControls enableZoom={false} autoRotate={autoRotate} autoRotateSpeed={2} />
      </Canvas>
    </div>
  )
}