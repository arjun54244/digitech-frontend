"use client"

import React, { Suspense, useRef, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from "three"

const Model = React.memo(function Model({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: any) {
  const { scene } = useGLTF(modelPath)
  const ref = useRef<THREE.Group>(null!)

  const clonedScene = useMemo(() => scene.clone(), [scene])

  return (
    <primitive
      ref={ref}
      object={clonedScene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  )
})

export default function ThreeModelViewer({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true,
  className,
}: any) {
  return (
    <div className={className}>
      <Canvas
        frameloop="demand"
        dpr={[1, 1.5]}
        camera={{ position: [0, 1, 4], fov: 45 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        <Suspense fallback={null}>
          <Model
            modelPath={modelPath}
            scale={scale}
            position={position}
            rotation={rotation}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
          autoRotate={autoRotate}
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  )
}