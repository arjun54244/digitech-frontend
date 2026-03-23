"use client"

import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"

function Model(props: any) {
  const { scene } = useGLTF("/models/digital-marking-obj.glb")
  return <primitive object={scene} {...props} />
}

useGLTF.preload("/models/digital-marking-obj.glb")

function DigitalMarking({
  className,
}: {
  className?: string
}) {
  return (
    <div className={className}>
      <Canvas dpr={[1, 1.5]}  frameloop="demand" camera={{ position: [0, 1, 4], fov: 45 }} onWheel={(e) => e.stopPropagation()}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <Model scale={2.9} position={[0, 0, 0]} />
        </Suspense>

        <OrbitControls  enableZoom={false}
        enablePan={false}
        enableDamping={false}
        autoRotate
        autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  )
}

export default DigitalMarking;