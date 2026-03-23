"use client"
import * as THREE from "three"
import { useRef, useState, useEffect, Suspense } from "react"
import { Canvas, extend, useThree } from "@react-three/fiber"
import {
  MeshPortalMaterial,
  CameraControls,
  Gltf,
  Text,
  Preload,
  useCursor,
} from "@react-three/drei"
import { useRoute, useLocation } from "wouter"
import { easing, geometry } from "maath"
import dynamic from "next/dynamic"

extend(geometry)

const regular = "/fonts/Inter-Regular.woff"
const medium = "/fonts/Inter-Medium.woff"

// Lazy-load Canvas for first paint speed
export const LazyThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
      }}
    >
      Loading 3D scene…
    </div>
  ),
})

export default function ThreeScene() {
  return (
    <Canvas
      flat
      frameloop="demand" // Only render when needed
      dpr={[1, 1.5]}     // Reduce rendering cost on high DPI
      camera={{ fov: 75, position: [0, 0, 20] }}
      onWheel={(e) => e.stopPropagation()}
    >
      <color attach="background" args={["#0000"]} />

      <Suspense fallback={null}>
        <Frame
          id="01"
          name="pick\nles"
          author="Omar Faruq Tawsif"
          bg="#e4cdac"
          position={[-1.15, 0, 0]}
          rotation={[0, 0.5, 0]}
        >
          <Gltf
            src="models/pickles_3d_version_of_hyuna_lees_illustration-transformed.glb"
            scale={8}
            position={[0, -0.7, -2]}
          />
        </Frame>

        <Frame id="02" name="tea" author="Omar Faruq Tawsif">
          <Gltf
            src="models/fiesta_tea-transformed.glb"
            position={[0, -2, -3]}
          />
        </Frame>

        <Frame
          id="03"
          name="still"
          author="Omar Faruq Tawsif"
          bg="#d1d1ca"
          position={[1.15, 0, 0]}
          rotation={[0, -0.5, 0]}
        >
          <Gltf
            src="models/still_life_based_on_heathers_artwork-transformed.glb"
            scale={2}
            position={[0, -0.8, -4]}
          />
        </Frame>

        {/* Load Rig after idle to avoid blocking */}
        <IdleRig />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

// Idle-loaded camera controls to reduce first load TBT
function IdleRig() {
  const [loadRig, setLoadRig] = useState(false)
  useEffect(() => {
    const id = requestIdleCallback(() => setLoadRig(true))
    return () => cancelIdleCallback(id)
  }, [])
  return loadRig ? <Rig /> : null
}

function Frame({
  id,
  name,
  author,
  bg,
  width = 1,
  height = 1.618,
  children,
  ...props
}) {
  const portal = useRef()
  const [, setLocation] = useLocation()
  const [, params] = useRoute("/item/:id")
  const [hovered, hover] = useState(false)
  useCursor(hovered)

  // Update blend only when params.id changes
  useEffect(() => {
    if (portal.current) portal.current.blend = params?.id === id ? 1 : 0
  }, [params?.id])

  return (
    <group {...props}>
      {/* Text labels */}
      <Text
        font={medium}
        fontSize={0.3}
        anchorY="top"
        anchorX="left"
        lineHeight={0.8}
        position={[-0.375, 0.715, 0.01]}
        material-toneMapped={false}
      >
        {name}
      </Text>
      <Text
        font={regular}
        fontSize={0.1}
        anchorX="right"
        position={[0.4, -0.659, 0.01]}
        material-toneMapped={false}
      >
        /{id}
      </Text>
      <Text
        font={regular}
        fontSize={0.04}
        anchorX="right"
        position={[0.0, -0.677, 0.01]}
        material-toneMapped={false}
      >
        {author}
      </Text>

      {/* Mesh with portal */}
      <mesh
        name={id}
        onDoubleClick={(e) => (e.stopPropagation(), setLocation("/item/" + e.object.name))}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
          <color attach="background" args={[bg]} />
          {children}
        </MeshPortalMaterial>
      </mesh>
    </group>
  )
}

function Rig({
  position = new THREE.Vector3(0, 0, 2),
  focus = new THREE.Vector3(0, 0, 0),
}) {
  const { controls, scene } = useThree()
  const [, params] = useRoute("/item/:id")

  useEffect(() => {
    const active = scene.getObjectByName(params?.id)
    if (active) {
      active.parent.localToWorld(position.set(0, 0.5, 0.25))
      active.parent.localToWorld(focus.set(0, 0, -2))
    }
    controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
  }, [params?.id])

  return <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
}