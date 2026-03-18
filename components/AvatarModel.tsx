// "use client"

// import { JSX, useEffect, useRef } from "react"
// import * as THREE from "three"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

// export default function Avatar({
//   animation = "contact-idle",
// }: {
//   animation?: string
// }): JSX.Element {
//   const mountRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!mountRef.current) return

//     const width = mountRef.current.clientWidth
//     const height = mountRef.current.clientHeight

//     /* ---------------- SCENE ---------------- */
//     const scene = new THREE.Scene()
//     scene.background = null

//     /* ---------------- CAMERA ---------------- */
//     const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
//     camera.position.set(0, 1.5, 3)

//     /* ---------------- RENDERER ---------------- */
//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
//     renderer.setSize(width, height)
//     renderer.outputColorSpace = THREE.SRGBColorSpace
//     mountRef.current.appendChild(renderer.domElement)

//     /* ---------------- CONTROLS ---------------- */
//     const controls = new OrbitControls(camera, renderer.domElement)
//     controls.enableDamping = true

//     /* ---------------- LIGHT ---------------- */
//     scene.add(new THREE.AmbientLight(0xffffff, 1))
//     const dirLight = new THREE.DirectionalLight(0xffffff, 2)
//     dirLight.position.set(3, 5, 5)
//     scene.add(dirLight)

//     /* ---------------- TEXTURES ---------------- */
//     const textureLoader = new THREE.TextureLoader()
//     const skinMatcap = textureLoader.load("/models/david-hckh/BdaaHT-w.webp")
//     const blackMatcap = textureLoader.load("/models/david-hckh/C96NpsPT.webp")
//     const grayMatcap = textureLoader.load("/models/david-hckh/Cq9OAfTr.webp")

//     skinMatcap.colorSpace = THREE.SRGBColorSpace
//     blackMatcap.colorSpace = THREE.SRGBColorSpace
//     grayMatcap.colorSpace = THREE.SRGBColorSpace

//     /* ---------------- HEAD SHADER ---------------- */
//     const headUniforms = {
//       uHeadTexture: { value: null },
//       uProgress: { value: 1 },
//       uAmbientStrength: { value: 0.3 },
//     }

//     const headVertex = `varying vec2 vUv;
// #include <skinning_pars_vertex>
// void main(){
//   vUv = uv;
//   #include <skinbase_vertex>
//   #include <begin_vertex>
//   #include <skinning_vertex>
//   gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed,1.0);
// }`

//     const headFragment = `
// uniform sampler2D uHeadTexture;
// uniform float uProgress;
// uniform float uAmbientStrength;
// varying vec2 vUv;
// vec3 applyAmbient(vec3 color){
//   return color + color * uAmbientStrength;
// }
// void main(){
//   vec4 tex = texture2D(uHeadTexture, vUv);
//   gl_FragColor = vec4(applyAmbient(tex.rgb), tex.a * uProgress);
// }`

//     /* ---------------- MODEL LOADER ---------------- */
//     const loader = new GLTFLoader()
//     let mixer: THREE.AnimationMixer | null = null
//     let actions: Record<string, THREE.AnimationAction> = {}

//     loader.load("/models/david-hckh/boy.glb", (gltf) => {
//       const model = gltf.scene
//       model.scale.set(1, 1.5, 1.5)

//       /* CENTER MODEL */
//       const box = new THREE.Box3().setFromObject(model)
//       const center = box.getCenter(new THREE.Vector3())
//       model.position.sub(center)

//       /* APPLY MATERIALS */
//       model.traverse((child: any) => {
//         if (!child.isMesh) return
//         const name = child.name.toLowerCase()

//         if (name === "skin") child.material = new THREE.MeshMatcapMaterial({ matcap: skinMatcap })
//         else if (name === "black") child.material = new THREE.MeshMatcapMaterial({ matcap: blackMatcap })
//         else if (name === "gray") child.material = new THREE.MeshMatcapMaterial({ matcap: grayMatcap })
//         else if (name === "white") child.material = new THREE.MeshMatcapMaterial({ color: "white" })
//         else if (name === "face") {
//           const faceTexture = textureLoader.load("/models/david-hckh/av_iUPQk.png")
//           faceTexture.flipY = false
//           faceTexture.repeat.set(0.25, 0.25)
//           faceTexture.center.set(0.5, 0.5)
//           faceTexture.rotation = Math.PI
//           const faceIndex = 0
//           const faceX = faceIndex % 4
//           const faceY = Math.floor(faceIndex / 4)
//           faceTexture.offset.set(faceX * 0.25 + 0.125, faceY * 0.25 + 0.125)
//           child.material = new THREE.MeshBasicMaterial({ map: faceTexture, transparent: true })
//         } else if (name === "head") {
//           const headTexture = textureLoader.load("/models/david-hckh/Bn1uEi_X.webp")
//           headTexture.colorSpace = THREE.SRGBColorSpace
//           headTexture.flipY = false
//           headTexture.repeat.set(0.5, 0.5)
//           const tileX = 1, tileY = 1
//           headTexture.offset.set(tileX * 0.5, 1 - (tileY + 1) * 0.5)
//           headUniforms.uHeadTexture.value = headTexture
//           child.material = new THREE.ShaderMaterial({
//             vertexShader: headVertex,
//             fragmentShader: headFragment,
//             uniforms: headUniforms,
//             transparent: true,
//             skinning: false,
//             morphTargets: true,
//             depthWrite: true,
//             depthTest: true,
//           })
//         }

//         child.castShadow = true
//         child.receiveShadow = true
//       })

//       scene.add(model)

//       /* ANIMATIONS */
//       mixer = new THREE.AnimationMixer(model)
//       gltf.animations.forEach((clip) => {
//         actions[clip.name] = mixer!.clipAction(clip)
//       })
//       if (actions[animation]) actions[animation].play()

//       camera.lookAt(model.position)
//     })

//     /* ---------------- ANIMATION LOOP ---------------- */
//     const clock = new THREE.Clock()
//     const animate = () => {
//       requestAnimationFrame(animate)
//       const delta = clock.getDelta()
//       if (mixer) mixer.update(delta)
//       controls.update()
//       renderer.render(scene, camera)
//     }
//     animate()

//     /* ---------------- RESIZE ---------------- */
//     const handleResize = () => {
//       if (!mountRef.current) return
//       const width = mountRef.current.clientWidth
//       const height = mountRef.current.clientHeight
//       camera.aspect = width / height
//       camera.updateProjectionMatrix()
//       renderer.setSize(width, height)
//     }
//     window.addEventListener("resize", handleResize)

//     return () => {
//       window.removeEventListener("resize", handleResize)
//       mountRef.current?.removeChild(renderer.domElement)
//     }
//   }, [animation])

//   return <div ref={mountRef} style={{ width: "100%", height: "600px" }} />
// }

"use client"

import { JSX, useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export default function Avatar({
  animation = "sleeping",
}: {
  animation?: string
}): JSX.Element {
  const mountRef = useRef<HTMLDivElement>(null)

  const mixerRef = useRef<THREE.AnimationMixer | null>(null)
  const actionsRef = useRef<Record<string, THREE.AnimationAction>>({})

  useEffect(() => {
    if (!mountRef.current) return

    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    /* ---------- SCENE ---------- */

    const scene = new THREE.Scene()

    /* ---------- CAMERA ---------- */

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 1.5, 3)

    /* ---------- RENDERER ---------- */

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mountRef.current.appendChild(renderer.domElement)

    /* ---------- CONTROLS ---------- */

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    /* ---------- LIGHT ---------- */

    scene.add(new THREE.AmbientLight(0xffffff, 1))

    const dirLight = new THREE.DirectionalLight(0xffffff, 2)
    dirLight.position.set(3, 5, 5)
    scene.add(dirLight)

    /* ---------- TEXTURES ---------- */

    const textureLoader = new THREE.TextureLoader()

    const skinMatcap = textureLoader.load("/models/david-hckh/BdaaHT-w.webp")
    const blackMatcap = textureLoader.load("/models/david-hckh/C96NpsPT.webp")
    const grayMatcap = textureLoader.load("/models/david-hckh/Cq9OAfTr.webp")

    skinMatcap.colorSpace = THREE.SRGBColorSpace
    blackMatcap.colorSpace = THREE.SRGBColorSpace
    grayMatcap.colorSpace = THREE.SRGBColorSpace

    /* ---------- HEAD SHADER ---------- */

    const headUniforms = {
      uHeadTexture: { value: null },
      uProgress: { value: 1 },
      uAmbientStrength: { value: 0.3 },
    }

    const headVertex = `

varying vec2 vUv;

#include <skinning_pars_vertex>

void main(){

vUv = uv;

#include <skinbase_vertex>
#include <begin_vertex>
#include <skinning_vertex>

gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed,1.0);

}

`

    const headFragment = `

uniform sampler2D uHeadTexture;
uniform float uProgress;
uniform float uAmbientStrength;

varying vec2 vUv;

vec3 applyAmbient(vec3 color){
return color + color * uAmbientStrength;
}

void main(){

vec4 tex = texture2D(uHeadTexture,vUv);

gl_FragColor = vec4(applyAmbient(tex.rgb), tex.a * uProgress);

}

`

    /* ---------- MODEL LOADER ---------- */

    const loader = new GLTFLoader()

    loader.load("/models/david-hckh/boy.glb", (gltf) => {
      const model = gltf.scene

      model.scale.set(0.75, 0.75, 0.75)

      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)

      model.traverse((child: any) => {
        if (!child.isMesh) return

        const name = child.name.toLowerCase()

        if (name === "skin")
          child.material = new THREE.MeshMatcapMaterial({ matcap: skinMatcap })
        else if (name === "black")
          child.material = new THREE.MeshMatcapMaterial({ matcap: blackMatcap })
        else if (name === "gray")
          child.material = new THREE.MeshMatcapMaterial({ matcap: grayMatcap })
        else if (name === "white")
          child.material = new THREE.MeshMatcapMaterial({ color: "white" })
        /* ---------- FACE ---------- */ else if (name === "face") {
          const faceTexture = textureLoader.load(
            "/models/david-hckh/av_iUPQk.png"
          )

          faceTexture.flipY = false
          faceTexture.repeat.set(0.25, 0.25)
          faceTexture.center.set(0.5, 0.5)
          faceTexture.rotation = Math.PI

          const faceIndex = 0
          const faceX = faceIndex % 4
          const faceY = Math.floor(faceIndex / 4)

          faceTexture.offset.set(faceX * 0.25 + 0.125, faceY * 0.25 + 0.125)

          child.material = new THREE.MeshBasicMaterial({
            map: faceTexture,
            transparent: true,
          })
        } else if (name === "head") {

        /* ---------- HEAD ---------- */
          const headTexture = textureLoader.load(
            "/models/david-hckh/Bn1uEi_X.webp"
          )

          headTexture.colorSpace = THREE.SRGBColorSpace
          headTexture.flipY = false

          headTexture.repeat.set(0.5, 0.5)

          const tileX = 1
          const tileY = 1

          headTexture.offset.set(tileX * 0.5, 1 - (tileY + 1) * 0.5)

          headUniforms.uHeadTexture.value = headTexture

          child.material = new THREE.ShaderMaterial({
            vertexShader: headVertex,
            fragmentShader: headFragment,
            uniforms: headUniforms,

            transparent: true,

            skinning: true, // IMPORTANT
            depthWrite: true,
            depthTest: true,
          })
        }
      })

      scene.add(model)

      /* ---------- ANIMATION ---------- */

      const mixer = new THREE.AnimationMixer(model)
      mixerRef.current = mixer

      gltf.animations.forEach((clip) => {
        actionsRef.current[clip.name] = mixer.clipAction(clip)
      })
    })

    /* ---------- RENDER LOOP ---------- */

    const clock = new THREE.Clock()

    const animate = () => {
      requestAnimationFrame(animate)

      const delta = clock.getDelta()

      if (mixerRef.current) mixerRef.current.update(delta)

      controls.update()

      renderer.render(scene, camera)
    }

    animate()

    /* ---------- RESIZE ---------- */

    const resize = () => {
      if (!mountRef.current) return

      const w = mountRef.current.clientWidth
      const h = mountRef.current.clientHeight

      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)

      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  /* ---------- ANIMATION SWITCH ---------- */

  useEffect(() => {
    const actions = actionsRef.current

    Object.values(actions).forEach((a) => a.stop())

    if (actions[animation]) {
      actions[animation].reset().fadeIn(0.3).play()
    }
  }, [animation])

  return <div ref={mountRef} style={{ width: "100%", height: "600px" }} />
}
