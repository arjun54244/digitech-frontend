"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

// ─── Types ─────────────────────────────────────────────────────────────────────
type Budget = "<5k" | "5-15k" | "15-50k" | ">50k"

// ─── Icons ─────────────────────────────────────────────────────────────────────
const MailIcon = ({
  size = 16,
  color = "currentColor",
}: {
  size?: number
  color?: string
}) => (
  <svg viewBox="0 0 256 256" fill="none" width={size} height={size}>
    <rect
      x="10"
      y="41"
      width="236"
      height="174"
      rx="20"
      stroke={color}
      strokeWidth="18"
    />
    <path
      d="M16.5 46.5L115 126.7C122 132.7 133 132.7 140 126.8L239.5 46.5"
      stroke={color}
      strokeWidth="18"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const PinIcon = ({
  size = 16,
  color = "currentColor",
}: {
  size?: number
  color?: string
}) => (
  <svg viewBox="0 0 256 256" fill="none" width={size} height={size}>
    <path
      d="M127.501 11C77.519 11 37 51.475 37 101.403C37 123.692 45.113 144.063 58.5 159.825L127.501 241L196.5 159.823C209.888 144.063 218 123.69 218 101.4C218.003 51.475 177.484 11 127.501 11Z"
      stroke={color}
      strokeWidth="14"
    />
    <circle cx="128" cy="101" r="15" fill={color} />
  </svg>
)
const GlobeIcon = ({
  size = 16,
  color = "currentColor",
}: {
  size?: number
  color?: string
}) => (
  <svg viewBox="0 0 256 256" fill="none" width={size} height={size}>
    <circle cx="128" cy="128" r="110" stroke={color} strokeWidth="14" />
    <path
      d="M128 18C128 18 80 80 80 128C80 176 128 238 128 238"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
    />
    <path
      d="M128 18C128 18 176 80 176 128C176 176 128 238 128 238"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
    />
    <path
      d="M18 128H238"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
    />
  </svg>
)
const GithubIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" width={16} height={16}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M128 0C57 0 0 59 0 131C0 189 37 238 87 256C94 257 96 253 96 249V225C60 233 53 209 53 209C47 194 39 190 39 190C27 182 40 182 40 182C52 183 59 196 59 196C71 216 89 210 96 207C97 198 101 192 104 189C76 186 46 175 46 124C46 110 51 98 59 89C58 86 54 72 61 54C61 54 71 51 96 68C106 65 117 63 128 63C139 63 149 65 160 68C184 51 195 54 195 54C202 72 197 86 196 89C204 98 209 110 209 124C209 175 179 186 151 189C155 193 159 201 159 213V249C159 253 161 257 168 256C218 238 255 189 255 131C255 59 198 0 128 0Z"
    />
  </svg>
)
const LinkedInIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" width={16} height={16}>
    <circle cx="44" cy="44" r="31" />
    <rect x="17" y="87" width="54" height="156" rx="4" />
    <path d="M184 85C167 85 153 90 144 98V91C144 88 142 87 140 87H96C93 87 92 88 92 91V239C92 241 93 243 96 243H141C144 243 145 241 145 239V165C145 144 149 131 169 131C188 131 189 145 189 167V239C189 241 191 243 193 243H239C241 243 243 241 243 239V157C243 124 236 85 184 85Z" />
  </svg>
)
const XIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" width={16} height={16}>
    <path d="M200 15H224C231 15 234 20 230 25L160 105C157 108 157 112 159 115L246 230C250 235 247 243 240 243H181C178 243 176 242 175 240L121 170C118 166 112 166 109 170L47 240C45 242 43 243 41 243H23C16 243 12 235 17 230L92 143C95 140 95 136 92 133L10 25C6 19 10 12 16 12H77C79 12 82 13 83 15L131 78C134 82 140 82 143 79L200 15Z" />
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 256 256" fill="none" width={15} height={15}>
    <path
      d="M164 48L244 127M244 127L164 207M244 127H12"
      stroke="#fff"
      strokeWidth="20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const CheckIcon = () => (
  <svg viewBox="0 0 256 256" fill="none" width={24} height={24}>
    <path
      d="M40 128L100 192L216 64"
      stroke="#4caf50"
      strokeWidth="22"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// ─── Full-Background 3D Canvas ─────────────────────────────────────────────────
function ContactBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const container = canvas.parentElement!

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    })
    renderer.setClearColor(0x040814, 1)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200)
    camera.position.set(0, 0, 9)

    const resize = () => {
      const w = container.clientWidth || 900,
        h = container.clientHeight || 620
      renderer.setSize(w, h, false)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    window.addEventListener("resize", resize)

    // Star field
    const starN = 3200
    const sP = new Float32Array(starN * 3),
      sC = new Float32Array(starN * 3)
    for (let i = 0; i < starN; i++) {
      sP[i * 3] = (Math.random() - 0.5) * 120
      sP[i * 3 + 1] = (Math.random() - 0.5) * 120
      sP[i * 3 + 2] = (Math.random() - 0.5) * 120
      const c = new THREE.Color().setHSL(
        Math.random() < 0.5
          ? 0.57 + Math.random() * 0.08
          : 0.7 + Math.random() * 0.08,
        0.6,
        0.75 + Math.random() * 0.25
      )
      sC[i * 3] = c.r
      sC[i * 3 + 1] = c.g
      sC[i * 3 + 2] = c.b
    }
    const sGeo = new THREE.BufferGeometry()
    sGeo.setAttribute("position", new THREE.BufferAttribute(sP, 3))
    sGeo.setAttribute("color", new THREE.BufferAttribute(sC, 3))
    const stars = new THREE.Points(
      sGeo,
      new THREE.PointsMaterial({
        size: 0.08,
        vertexColors: true,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
      })
    )
    scene.add(stars)

    // Mid-orbit cloud
    const midN = 2400
    const mP = new Float32Array(midN * 3),
      mC = new Float32Array(midN * 3)
    for (let i = 0; i < midN; i++) {
      const t = Math.random() * Math.PI * 2,
        p = Math.acos(2 * Math.random() - 1),
        r = 3.5 + Math.random() * 3.5
      mP[i * 3] = r * Math.sin(p) * Math.cos(t)
      mP[i * 3 + 1] = r * Math.sin(p) * Math.sin(t)
      mP[i * 3 + 2] = r * Math.cos(p)
      const c = new THREE.Color().setHSL(
        0.55 + Math.random() * 0.15,
        0.75,
        0.65 + Math.random() * 0.2
      )
      mC[i * 3] = c.r
      mC[i * 3 + 1] = c.g
      mC[i * 3 + 2] = c.b
    }
    const mGeo = new THREE.BufferGeometry()
    mGeo.setAttribute("position", new THREE.BufferAttribute(mP, 3))
    mGeo.setAttribute("color", new THREE.BufferAttribute(mC, 3))
    const midPts = new THREE.Points(
      mGeo,
      new THREE.PointsMaterial({
        size: 0.042,
        vertexColors: true,
        transparent: true,
        opacity: 0.62,
        sizeAttenuation: true,
      })
    )
    scene.add(midPts)

    // Rings
    const mkT = (
      r: number,
      t: number,
      c: number,
      op: number,
      rx: number,
      ry: number
    ) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r, t, 3, 120),
        new THREE.MeshBasicMaterial({
          color: c,
          transparent: true,
          opacity: op,
        })
      )
      m.rotation.x = rx
      m.rotation.y = ry
      return m
    }
    const rings = [
      mkT(3.2, 0.018, 0x64b5f6, 0.3, Math.PI / 4, 0),
      mkT(2.7, 0.016, 0x81c784, 0.28, -Math.PI / 3, Math.PI / 5),
      mkT(3.9, 0.012, 0xce93d8, 0.22, Math.PI / 6, Math.PI / 2),
      mkT(2.2, 0.02, 0xf48fb1, 0.2, -Math.PI / 5, -Math.PI / 4),
      mkT(4.5, 0.01, 0x90caf9, 0.15, Math.PI / 2.5, Math.PI / 3),
    ]
    rings.forEach((r) => scene.add(r))

    // Core
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.1, 2),
      new THREE.MeshStandardMaterial({
        color: 0x0d1a4a,
        metalness: 0.7,
        roughness: 0.15,
        emissive: 0x2235a0,
        emissiveIntensity: 0.6,
      })
    )
    scene.add(core)
    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.28, 1),
      new THREE.MeshBasicMaterial({
        color: 0x90caf9,
        wireframe: true,
        transparent: true,
        opacity: 0.16,
      })
    )
    scene.add(wire)

    // Mini nodes
    const nColors = [
      0x64b5f6, 0xce93d8, 0x81c784, 0xf48fb1, 0x90caf9, 0xffcc80, 0x80cbc4,
    ]
    type ND = {
      mesh: THREE.Mesh
      baseAngle: number
      radius: number
      speed: number
      yOff: number
    }
    const nodes: ND[] = []
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2,
        radius = 2.2 + Math.random() * 0.6,
        yOff = (Math.random() - 0.5) * 1.5
      const mesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.09 + Math.random() * 0.06, 0),
        new THREE.MeshBasicMaterial({
          color: nColors[i % nColors.length],
          transparent: true,
          opacity: 0.75,
        })
      )
      mesh.position.set(
        Math.cos(angle) * radius,
        yOff,
        Math.sin(angle) * radius
      )
      scene.add(mesh)
      nodes.push({
        mesh,
        baseAngle: angle,
        radius,
        speed: 0.25 + Math.random() * 0.35,
        yOff,
      })
    }

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.3))
    const l1 = new THREE.PointLight(0x64b5f6, 5, 20)
    l1.position.set(6, 5, 4)
    scene.add(l1)
    const l2 = new THREE.PointLight(0xce93d8, 4, 18)
    l2.position.set(-5, -3, 3)
    scene.add(l2)
    const l3 = new THREE.PointLight(0x81c784, 2, 15)
    l3.position.set(0, 6, -4)
    scene.add(l3)

    // Mouse parallax
    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      mouse.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    window.addEventListener("mousemove", onMouseMove)

    let frameId = 0,
      t = 0
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      t += 0.007
      stars.rotation.y = t * 0.015
      stars.rotation.x = t * 0.006
      midPts.rotation.y = t * 0.1
      midPts.rotation.x = t * 0.035
      rings[0].rotation.z = t * 0.35
      rings[1].rotation.z = -t * 0.28
      rings[2].rotation.x += 0.004
      rings[2].rotation.y += 0.003
      rings[3].rotation.y = t * 0.22
      rings[3].rotation.z = t * 0.12
      rings[4].rotation.x = -t * 0.1
      rings[4].rotation.z = t * 0.08
      core.rotation.y = t * 0.28
      core.rotation.x = t * 0.09
      wire.rotation.y = -t * 0.18
      wire.rotation.x = t * 0.06
      const bs = 1 + Math.sin(t * 1.1) * 0.03
      core.scale.setScalar(bs)
      wire.scale.setScalar(bs)
      nodes.forEach(({ mesh, baseAngle, radius, speed, yOff }) => {
        const a = baseAngle + t * speed
        mesh.position.x = Math.cos(a) * radius
        mesh.position.z = Math.sin(a) * radius
        mesh.position.y = yOff + Math.sin(t * 0.8 + baseAngle) * 0.35
      })
      camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.035
      camera.position.y += (mouse.y * 0.8 - camera.position.y) * 0.035
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("resize", resize)
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
        display: "block",
      }}
    />
  )
}

// ─── Reusable input styles ─────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  padding: "11px 14px",
  color: "#fff",
  fontSize: 13,
  fontFamily: "inherit",
  outline: "none",
}
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 500,
  color: "rgba(255,255,255,0.45)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginBottom: 7,
}

// ─── Social Button ─────────────────────────────────────────────────────────────
function SocialBtn({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 38,
        height: 38,
        borderRadius: "50%",
        border: `1px solid ${hov ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.18)"}`,
        background: hov ? "rgba(255,255,255,0.14)" : "rgba(255,255,255,0.06)",
        color: hov ? "#fff" : "rgba(255,255,255,0.7)",
        textDecoration: "none",
        transition: "all 0.2s",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {children}
    </a>
  )
}

// ─── Contact Info Row ──────────────────────────────────────────────────────────
function InfoRow({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode
  label: string
  value: string
  accent: string
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          flexShrink: 0,
          background: `rgba(${accent},0.1)`,
          border: `1px solid rgba(${accent},0.22)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontSize: 10,
            color: "rgba(255,255,255,0.35)",
            margin: "0 0 2px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", margin: 0 }}>
          {value}
        </p>
      </div>
    </div>
  )
}

// ─── Budget Button ─────────────────────────────────────────────────────────────
function BudgetBtn({
  value,
  label,
  active,
  onClick,
}: {
  value: Budget
  label: string
  active: boolean
  onClick: () => void
}) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "8px 4px",
        borderRadius: 8,
        fontFamily: "inherit",
        border: `1px solid ${active ? "rgba(100,181,246,0.6)" : hov ? "rgba(100,181,246,0.4)" : "rgba(255,255,255,0.12)"}`,
        background: active
          ? "rgba(100,181,246,0.15)"
          : hov
            ? "rgba(100,181,246,0.08)"
            : "rgba(255,255,255,0.05)",
        color: active ? "#64b5f6" : hov ? "#fff" : "rgba(255,255,255,0.55)",
        fontSize: 11,
        fontWeight: 500,
        cursor: "pointer",
        transition: "all 0.18s",
      }}
    >
      {label}
    </button>
  )
}

// ─── Contact Section ───────────────────────────────────────────────────────────
export default function ContactSection() {
  const [budget, setBudget] = useState<Budget>("15-50k")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const set =
    (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = () => {
    const newErrors: Record<string, boolean> = {}
    if (!form.name) newErrors.name = true
    if (!form.email) newErrors.email = true
    if (!form.message) newErrors.message = true
    if (Object.keys(newErrors).length) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
  }

  const errBorder = (key: string) =>
    errors[key]
      ? "1px solid rgba(244,143,161,0.6)"
      : "1px solid rgba(255,255,255,0.1)"

  const socials = [
    { label: "Email", href: "mailto:hello@digitech.com", icon: <MailIcon /> },
    {
      label: "GitHub",
      href: "https://github.com/digitech",
      icon: <GithubIcon />,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/company/digitech",
      icon: <LinkedInIcon />,
    },
    { label: "X", href: "https://x.com/digitech", icon: <XIcon /> },
  ]

  const budgets: { value: Budget; label: string }[] = [
    { value: "<5k", label: "< ₹5k" },
    { value: "5-15k", label: "₹5–15k" },
    { value: "15-50k", label: "₹15–50k" },
    { value: ">50k", label: "> ₹50k" },
  ]

  const skills = [
    "AI Solutions",
    "Web Development",
    "Mobile Apps",
    "3D & Interactive Web",
    "Cloud & DevOps",
    "UI/UX Design",
  ]

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Inter','Helvetica Neue',sans-serif",
      }}
    >
      {/* 3D full background */}
      <ContactBackground />

      {/* Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(135deg,rgba(4,8,20,0.78) 0%,rgba(6,12,30,0.58) 50%,rgba(4,8,20,0.78) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%,transparent 30%,rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* ── Two-column grid ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: 'space-between',
          gap: 48,
          maxWidth: '90vw',
          margin: "0 auto",
          padding: "60px 40px",
          alignItems: "start",
        }}
      >
        {/* ── LEFT: Details ── */}
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#64b5f6",
              margin: "0 0 18px",
            }}
          >
            Contact
          </p>

          <h2
            style={{
              fontSize: "clamp(36px,5vw,60px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.05,
              margin: "0 0 18px",
              letterSpacing: "-0.035em",
            }}
          >
            Build the future
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg,#64b5f6 0%,#ce93d8 60%,#f48fb1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              with Digitech
            </span>
          </h2>

          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.52)",
              lineHeight: 1.75,
              margin: "0 0 32px",
              maxWidth: 340,
            }}
          >
            Digitech builds modern digital products — from AI platforms and SaaS
            tools to immersive web experiences. We help startups and companies
            scale faster with cutting-edge technology.
          </p>

          {/* Contact details */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 14,
              marginBottom: 32,
            }}
          >
            <InfoRow
              icon={<MailIcon size={15} color="#64b5f6" />}
              label="Email"
              value="hello@digitech.com"
              accent="100,181,246"
            />
            <InfoRow
              icon={<PinIcon size={15} color="#ce93d8" />}
              label="Headquarters"
              value="Global / Remote"
              accent="206,147,216"
            />
            <InfoRow
              icon={<GlobeIcon size={15} color="#81c784" />}
              label="Website"
              value="digitech.com"
              accent="129,199,132"
            />
          </div>

          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.08)",
              marginBottom: 24,
            }}
          />

          {/* Socials */}
          <div style={{ display: "flex", gap: 10, marginBottom: 32 }}>
            {socials.map((s) => (
              <SocialBtn key={s.label} href={s.href} label={s.label}>
                {s.icon}
              </SocialBtn>
            ))}
          </div>

          {/* Skill chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  fontSize: 10,
                  fontWeight: 500,
                  padding: "4px 10px",
                  borderRadius: 20,
                  border: "1px solid rgba(100,181,246,0.22)",
                  color: "rgba(100,181,246,0.75)",
                  background: "rgba(100,181,246,0.07)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Contact Form ── */}
        <div
          style={{
            background: "rgb(14 20 22 / 0%)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20,
            padding: 32,
            backdropFilter: "blur(20px)",
          }}
        >
          <h3
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#fff",
              margin: "0 0 6px",
            }}
          >
            Send a message
          </h3>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              margin: "0 0 28px",
            }}
          >
            I'll get back to you soon.
          </p>

          {!submitted ? (
            <>
              {/* Name + Subject */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 14,
                  marginBottom: 14,
                }}
              >
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    style={{ ...inputStyle, border: errBorder("name") }}
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set("name")}
                    onFocus={() => setErrors((e) => ({ ...e, name: false }))}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Subject</label>
                  <input
                    style={inputStyle}
                    type="text"
                    placeholder="Project inquiry"
                    value={form.subject}
                    onChange={set("subject")}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Email</label>
                <input
                  style={{ ...inputStyle, border: errBorder("email") }}
                  type="email"
                  placeholder="contact@company.com"
                  value={form.email}
                  onChange={set("email")}
                  onFocus={() => setErrors((e) => ({ ...e, email: false }))}
                />
              </div>

              {/* Budget */}
              <div style={{ marginBottom: 14 }}>
                <label style={labelStyle}>Budget</label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    gap: 8,
                  }}
                >
                  {budgets.map((b) => (
                    <BudgetBtn
                      key={b.value}
                      value={b.value}
                      label={b.label}
                      active={budget === b.value}
                      onClick={() => setBudget(b.value)}
                    />
                  ))}
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 22 }}>
                <label style={labelStyle}>Message</label>
                <textarea
                  style={{
                    ...inputStyle,
                    border: errBorder("message"),
                    resize: "none",
                  }}
                  rows={4}
                  placeholder="Tell us about your project or idea..."
                  value={form.message}
                  onChange={set("message")}
                  onFocus={() => setErrors((e) => ({ ...e, message: false }))}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                style={{
                  width: "100%",
                  padding: 14,
                  borderRadius: 48,
                  border: "none",
                  background: "linear-gradient(135deg,#3a7bd5,#7c4fa0)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                  transition: "all 0.22s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                Send Message <ArrowIcon />
              </button>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  margin: "0 auto 16px",
                  background: "rgba(76,175,80,0.15)",
                  border: "1px solid rgba(76,175,80,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckIcon />
              </div>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#fff",
                  margin: "0 0 8px",
                }}
              >
                Message sent!
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  margin: 0,
                }}
              >
                Thanks for reaching out. I'll reply soon.
              </p>
            </div>
          )}

          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 20,
              paddingTop: 18,
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4caf50",
                boxShadow: "0 0 7px #4caf50",
                display: "inline-block",
                animation: "dotpulse 2.2s infinite",
              }}
            />
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.06em",
              }}
            >
              Available for work
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          gap: 24,
          alignItems: "center",
          justifyContent: "center",
          padding: "0 40px 28px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: 16,
        }}
      >
        {[
          { href: "/privacy", label: "Privacy" },
          { href: "/legal", label: "Legal Notice" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.28)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "rgba(255,255,255,0.65)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "rgba(255,255,255,0.28)")
            }
          >
            {item.label}
          </a>
        ))}
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.18)",
            letterSpacing: "0.05em",
          }}
        >
          © 2026 Digitech. All rights reserved.
        </span>
      </div>

      <style>{`
        @keyframes dotpulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.4)} }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        input:focus, textarea:focus { border-color: rgba(100,181,246,0.5) !important; background: rgba(100,181,246,0.05) !important; }
        @media (max-width: 680px) {
          #contact > div[style*="grid"] { grid-template-columns: 1fr !important; padding: 40px 20px !important; }
        }
      `}</style>
    </section>
  )
}
