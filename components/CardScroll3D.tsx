"use client"

import * as THREE from "three"
import { useRef, useState } from "react"
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber"
import {
  Environment,
  ScrollControls,
  useScroll,
  useTexture,
} from "@react-three/drei"
import { easing } from "maath"
import "./card-utils"
import "./card-scroll3d.css"

type Props = {
  className?: string
}

export default function CardScroll3D({ className }: Props) {
  return (
    <Canvas
     dpr={[1, 1.5]}
  frameloop="demand"
      camera={{ position: [0, 1, 50], fov: 20 }}
      className={className}
      onWheel={(e) => e.stopPropagation()}
      style={{ background: "#aa7" }}
    >
      {/* Dark fog for depth */}
      <fog attach="fog" args={["#aa7", 8.5, 12]} />

      <ScrollControls pages={4} infinite>
        <Rig rotation={[0, 0, 0.15]}>
          <Carousel />
        </Rig>
        <Banner position={[0, 0, 0]} />
      </ScrollControls>

      <Environment preset="studio" background blur={0.5} />
    </Canvas>
  )
}

/* ---------------- Rig ---------------- */

function Rig(props: ThreeElements["group"]) {
  const ref = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * Math.PI * 2

    state.events.update()

    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    )

    state.camera.lookAt(0, 0, 0)
  })

  return <group ref={ref} {...props} />
}

/* ---------------- Carousel ---------------- */

function Carousel({ radius = 1.4, count = 8 }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <Card
          key={i}
          url={`/CardScroll3D/${(i % 10) + 1}.jpg`}
          position={[
            Math.sin((i / count) * Math.PI * 2) * radius,
            0,
            Math.cos((i / count) * Math.PI * 2) * radius,
          ]}
          rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
        />
      ))}
    </>
  )
}

/* ---------------- Card (DoubleSide FIXED) ---------------- */

type CardProps = ThreeElements["mesh"] & {
  url: string
}

function Card({ url, ...props }: CardProps) {
  const ref = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  // ✅ ALWAYS called, never conditional
  const texture = useTexture(url)

  const [hovered, setHovered] = useState(false)

  const pointerOver = (e: any) => {
    e.stopPropagation()
    setHovered(true)
  }

  const pointerOut = () => setHovered(false)

  useFrame((_, delta) => {
    if (!ref.current) return
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
  })

  return (
    <mesh
      ref={ref}
      {...props}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
    >
      <planeGeometry args={[1, 1, 20, 20]} />

      {/* ✅ NEVER conditionally render this */}
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          map: { value: texture },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
         uniform sampler2D map;
varying vec2 vUv;

float roundedBoxSDF(vec2 centerPos, vec2 size, float radius) {
  vec2 q = abs(centerPos) - size + radius;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
}

void main() {
  vec2 uv = vUv;

  if (!gl_FrontFacing) {
    uv.x = 1.0 - uv.x;
  }

  vec4 color = texture2D(map, uv);

  // Convert UV to centered coordinates (-0.5 to 0.5)
  vec2 pos = uv - 0.5;

  // Rounded corners
  float radius = 0.15; // adjust for more/less roundness
  float mask = roundedBoxSDF(pos, vec2(0.5), radius);

  if (mask > 0.0 || color.a < 0.1) discard;

  gl_FragColor = color;
}
        `}
        side={THREE.DoubleSide}
        transparent
      />
    </mesh>
  )
}
/* ---------------- Banner ---------------- */

function Banner(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!)

  // ✅ ALWAYS call hooks (top level, no conditions)
  const texture = useTexture("/CardScroll3D/work_.png")
  const scroll = useScroll()

  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  useFrame((_, delta) => {
    if (!ref.current) return

    const material = ref.current.material as THREE.MeshStandardMaterial

    if (material.map) {
      material.map.offset.x += delta
    }
  })

  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />

      {/* ✅ DO NOT SWITCH MATERIAL TYPES CONDITIONALLY */}
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} transparent />
    </mesh>
  )
}
