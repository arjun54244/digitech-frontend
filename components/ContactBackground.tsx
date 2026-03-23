// import { useEffect, useRef, useState } from "react"
// import * as THREE from "three"

// function ContactBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const container = canvas.parentElement!

//     const renderer = new THREE.WebGLRenderer({
//       canvas,
//       antialias: true,
//       alpha: false,
//     })
//     renderer.setClearColor(0x040814, 1)
//     const scene = new THREE.Scene()
//     const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
//     camera.position.set(0, 0, 9)

//     const resize = () => {
//       const w = container.clientWidth || 900,
//         h = container.clientHeight || 620
//       renderer.setSize(w, h, false)
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//       camera.aspect = w / h
//       camera.updateProjectionMatrix()
//     }
//     resize()
//     window.addEventListener("resize", resize)

//     // Star field
//     const starN = 3200
//     const sP = new Float32Array(starN * 3),
//       sC = new Float32Array(starN * 3)
//     for (let i = 0; i < starN; i++) {
//       sP[i * 3] = (Math.random() - 0.5) * 120
//       sP[i * 3 + 1] = (Math.random() - 0.5) * 120
//       sP[i * 3 + 2] = (Math.random() - 0.5) * 120
//       const c = new THREE.Color().setHSL(
//         Math.random() < 0.5
//           ? 0.57 + Math.random() * 0.08
//           : 0.7 + Math.random() * 0.08,
//         0.6,
//         0.75 + Math.random() * 0.25
//       )
//       sC[i * 3] = c.r
//       sC[i * 3 + 1] = c.g
//       sC[i * 3 + 2] = c.b
//     }
//     const sGeo = new THREE.BufferGeometry()
//     sGeo.setAttribute("position", new THREE.BufferAttribute(sP, 3))
//     sGeo.setAttribute("color", new THREE.BufferAttribute(sC, 3))
//     const stars = new THREE.Points(
//       sGeo,
//       new THREE.PointsMaterial({
//         size: 0.08,
//         vertexColors: true,
//         transparent: true,
//         opacity: 0.85,
//         sizeAttenuation: true,
//       })
//     )
//     scene.add(stars)

//     // Mid-orbit cloud
//     const midN = 2400
//     const mP = new Float32Array(midN * 3),
//       mC = new Float32Array(midN * 3)
//     for (let i = 0; i < midN; i++) {
//       const t = Math.random() * Math.PI * 2,
//         p = Math.acos(2 * Math.random() - 1),
//         r = 3.5 + Math.random() * 3.5
//       mP[i * 3] = r * Math.sin(p) * Math.cos(t)
//       mP[i * 3 + 1] = r * Math.sin(p) * Math.sin(t)
//       mP[i * 3 + 2] = r * Math.cos(p)
//       const c = new THREE.Color().setHSL(
//         0.55 + Math.random() * 0.15,
//         0.75,
//         0.65 + Math.random() * 0.2
//       )
//       mC[i * 3] = c.r
//       mC[i * 3 + 1] = c.g
//       mC[i * 3 + 2] = c.b
//     }
//     const mGeo = new THREE.BufferGeometry()
//     mGeo.setAttribute("position", new THREE.BufferAttribute(mP, 3))
//     mGeo.setAttribute("color", new THREE.BufferAttribute(mC, 3))
//     const midPts = new THREE.Points(
//       mGeo,
//       new THREE.PointsMaterial({
//         size: 0.042,
//         vertexColors: true,
//         transparent: true,
//         opacity: 0.62,
//         sizeAttenuation: true,
//       })
//     )
//     scene.add(midPts)

//     // Rings
//     const mkT = (
//       r: number,
//       t: number,
//       c: number,
//       op: number,
//       rx: number,
//       ry: number
//     ) => {
//       const m = new THREE.Mesh(
//         new THREE.TorusGeometry(r, t, 3, 120),
//         new THREE.MeshBasicMaterial({
//           color: c,
//           transparent: true,
//           opacity: op,
//         })
//       )
//       m.rotation.x = rx
//       m.rotation.y = ry
//       return m
//     }
//     const rings = [
//       mkT(3.2, 0.018, 0x64b5f6, 0.3, Math.PI / 4, 0),
//       mkT(2.7, 0.016, 0x81c784, 0.28, -Math.PI / 3, Math.PI / 5),
//       mkT(3.9, 0.012, 0xce93d8, 0.22, Math.PI / 6, Math.PI / 2),
//       mkT(2.2, 0.02, 0xf48fb1, 0.2, -Math.PI / 5, -Math.PI / 4),
//       mkT(4.5, 0.01, 0x90caf9, 0.15, Math.PI / 2.5, Math.PI / 3),
//     ]
//     rings.forEach((r) => scene.add(r))

//     // Core
//     const core = new THREE.Mesh(
//       new THREE.IcosahedronGeometry(1.1, 2),
//       new THREE.MeshStandardMaterial({
//         color: 0x0d1a4a,
//         metalness: 0.7,
//         roughness: 0.15,
//         emissive: 0x2235a0,
//         emissiveIntensity: 0.6,
//       })
//     )
//     scene.add(core)
//     const wire = new THREE.Mesh(
//       new THREE.IcosahedronGeometry(1.28, 1),
//       new THREE.MeshBasicMaterial({
//         color: 0x90caf9,
//         wireframe: true,
//         transparent: true,
//         opacity: 0.16,
//       })
//     )
//     scene.add(wire)

//     // Mini nodes
//     const nColors = [
//       0x64b5f6, 0xce93d8, 0x81c784, 0xf48fb1, 0x90caf9, 0xffcc80, 0x80cbc4,
//     ]
//     type ND = {
//       mesh: THREE.Mesh
//       baseAngle: number
//       radius: number
//       speed: number
//       yOff: number
//     }
//     const nodes: ND[] = []
//     for (let i = 0; i < 7; i++) {
//       const angle = (i / 7) * Math.PI * 2,
//         radius = 2.2 + Math.random() * 0.6,
//         yOff = (Math.random() - 0.5) * 1.5
//       const mesh = new THREE.Mesh(
//         new THREE.IcosahedronGeometry(0.09 + Math.random() * 0.06, 0),
//         new THREE.MeshBasicMaterial({
//           color: nColors[i % nColors.length],
//           transparent: true,
//           opacity: 0.75,
//         })
//       )
//       mesh.position.set(
//         Math.cos(angle) * radius,
//         yOff,
//         Math.sin(angle) * radius
//       )
//       scene.add(mesh)
//       nodes.push({
//         mesh,
//         baseAngle: angle,
//         radius,
//         speed: 0.25 + Math.random() * 0.35,
//         yOff,
//       })
//     }

//     // Lights
//     scene.add(new THREE.AmbientLight(0xffffff, 0.3))
//     const l1 = new THREE.PointLight(0x64b5f6, 5, 20)
//     l1.position.set(6, 5, 4)
//     scene.add(l1)
//     const l2 = new THREE.PointLight(0xce93d8, 4, 18)
//     l2.position.set(-5, -3, 3)
//     scene.add(l2)
//     const l3 = new THREE.PointLight(0x81c784, 2, 15)
//     l3.position.set(0, 6, -4)
//     scene.add(l3)

//     // Mouse parallax
//     const mouse = { x: 0, y: 0 }
//     const onMouseMove = (e: MouseEvent) => {
//       const rect = container.getBoundingClientRect()
//       mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
//       mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2
//     }
//     window.addEventListener("mousemove", onMouseMove)

//     let frameId = 0,
//       t = 0
//     const animate = () => {
//       frameId = requestAnimationFrame(animate)
//       t += 0.007
//       stars.rotation.y = t * 0.015
//       stars.rotation.x = t * 0.006
//       midPts.rotation.y = t * 0.1
//       midPts.rotation.x = t * 0.035
//       rings[0].rotation.z = t * 0.35
//       rings[1].rotation.z = -t * 0.28
//       rings[2].rotation.x += 0.004
//       rings[2].rotation.y += 0.003
//       rings[3].rotation.y = t * 0.22
//       rings[3].rotation.z = t * 0.12
//       rings[4].rotation.x = -t * 0.1
//       rings[4].rotation.z = t * 0.08
//       core.rotation.y = t * 0.28
//       core.rotation.x = t * 0.09
//       wire.rotation.y = -t * 0.18
//       wire.rotation.x = t * 0.06
//       const bs = 1 + Math.sin(t * 1.1) * 0.03
//       core.scale.setScalar(bs)
//       wire.scale.setScalar(bs)
//       nodes.forEach(({ mesh, baseAngle, radius, speed, yOff }) => {
//         const a = baseAngle + t * speed
//         mesh.position.x = Math.cos(a) * radius
//         mesh.position.z = Math.sin(a) * radius
//         mesh.position.y = yOff + Math.sin(t * 0.8 + baseAngle) * 0.35
//       })
//       camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.035
//       camera.position.y += (mouse.y * 0.8 - camera.position.y) * 0.035
//       camera.lookAt(0, 0, 0)
//       renderer.render(scene, camera)
//     }
//     animate()

//     return () => {
//       cancelAnimationFrame(frameId)
//       window.removeEventListener("mousemove", onMouseMove)
//       window.removeEventListener("resize", resize)
//       renderer.dispose()
//     }
//   }, [])

//   return (
//     <canvas
//       dpr={[1, 1.5]}
//       frameloop="demand"
//       ref={canvasRef}
//       style={{
//         position: "absolute",
//         inset: 0,
//         width: "100%",
//         height: "100%",
//         display: "block",
//       }}
//     />
//   )
// }

// export default ContactBackground;

import { useEffect, useRef } from "react"
import * as THREE from "three"

function ContactBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const container = canvas.parentElement!

    // ⚡ Optimized renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false, // ❌ disable (big perf gain)
      powerPreference: "high-performance",
    })

    renderer.setClearColor(0x040814, 1)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
    camera.position.set(0, 0, 9)

    const clock = new THREE.Clock()

    // Resize
    const resize = () => {
      const w = container.clientWidth || 900
      const h = container.clientHeight || 600
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener("resize", resize)

    // ⭐ Reduced stars
    const starN = 1200
    const sGeo = new THREE.BufferGeometry()
    const sP = new Float32Array(starN * 3)
    const sC = new Float32Array(starN * 3)

    for (let i = 0; i < starN; i++) {
      sP[i * 3] = (Math.random() - 0.5) * 80
      sP[i * 3 + 1] = (Math.random() - 0.5) * 80
      sP[i * 3 + 2] = (Math.random() - 0.5) * 80

      const c = new THREE.Color().setHSL(0.6, 0.6, 0.8)
      sC[i * 3] = c.r
      sC[i * 3 + 1] = c.g
      sC[i * 3 + 2] = c.b
    }

    sGeo.setAttribute("position", new THREE.BufferAttribute(sP, 3))
    sGeo.setAttribute("color", new THREE.BufferAttribute(sC, 3))

    const stars = new THREE.Points(
      sGeo,
      new THREE.PointsMaterial({
        size: 0.07,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
      })
    )

    scene.add(stars)

    // 🌌 Mid cloud (optimized)
    const midN = 900
    const mGeo = new THREE.BufferGeometry()
    const mP = new Float32Array(midN * 3)

    for (let i = 0; i < midN; i++) {
      const t = Math.random() * Math.PI * 2
      const r = 3 + Math.random() * 2

      mP[i * 3] = Math.cos(t) * r
      mP[i * 3 + 1] = (Math.random() - 0.5) * 2
      mP[i * 3 + 2] = Math.sin(t) * r
    }

    mGeo.setAttribute("position", new THREE.BufferAttribute(mP, 3))

    const midPts = new THREE.Points(
      mGeo,
      new THREE.PointsMaterial({
        size: 0.04,
        color: 0x64b5f6,
        transparent: true,
        opacity: 0.5,
      })
    )

    scene.add(midPts)

    // 🔵 Core (lighter)
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1, 1), // reduced detail
      new THREE.MeshStandardMaterial({
        color: 0x0d1a4a,
        emissive: 0x2235a0,
        emissiveIntensity: 0.5,
      })
    )

    scene.add(core)

    // 💡 Lights (reduced)
    scene.add(new THREE.AmbientLight(0xffffff, 0.4))

    const light = new THREE.PointLight(0x64b5f6, 3, 20)
    light.position.set(5, 5, 5)
    scene.add(light)

    // 🖱️ Mouse (passive)
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true })

    // 🧠 Pause when tab inactive
    let isVisible = true
    document.addEventListener("visibilitychange", () => {
      isVisible = !document.hidden
    })

    // 🎯 FPS CAP (important)
    let lastTime = 0
    const FPS = 60
    const interval = 1000 / FPS

    let frameId: number

    const animate = (time: number) => {
      frameId = requestAnimationFrame(animate)

      if (!isVisible) return
      if (time - lastTime < interval) return
      lastTime = time

      const t = clock.getElapsedTime()

      stars.rotation.y = t * 0.02
      midPts.rotation.y = t * 0.08

      core.rotation.y = t * 0.4
      core.scale.setScalar(1 + Math.sin(t) * 0.03)

      camera.position.x += (mouse.x - camera.position.x) * 0.05
      camera.position.y += (mouse.y - camera.position.y) * 0.05

      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate(0)

    // 🧹 Cleanup
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)

      scene.traverse((obj: any) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) obj.material.dispose()
      })

      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  )
}

export default ContactBackground