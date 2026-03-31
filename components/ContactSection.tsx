// "use client"

// import dynamic from "next/dynamic"
// import { useEffect, useRef, useState } from "react"

// const ContactBackground = dynamic(
//   () => import("./ContactBackground"),
//   { ssr: false }
// )

// // ─── Theme tokens (CSS vars injected via <style>) ──────────────────────────────
// // --c-green  : #22c55e  (primary accent)
// // --c-sky    : #0ea5e9  (secondary accent)
// // --c-orange : #f97316  (tertiary accent)
// // All surfaces + text use semantic CSS vars that flip in dark mode.

// // ─── Types ─────────────────────────────────────────────────────────────────────
// type Budget = "<5k" | "5-15k" | "15-50k" | ">50k"

// // ─── Icons ─────────────────────────────────────────────────────────────────────
// const MailIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
//   <svg viewBox="0 0 256 256" fill="none" width={size} height={size}>
//     <rect x="10" y="41" width="236" height="174" rx="20" stroke={color} strokeWidth="18" />
//     <path d="M16.5 46.5L115 126.7C122 132.7 133 132.7 140 126.8L239.5 46.5" stroke={color} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )
// const PinIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
//   <svg viewBox="0 0 256 256" fill="none" width={size} height={size}>
//     <path d="M127.501 11C77.519 11 37 51.475 37 101.403C37 123.692 45.113 144.063 58.5 159.825L127.501 241L196.5 159.823C209.888 144.063 218 123.69 218 101.4C218.003 51.475 177.484 11 127.501 11Z" stroke={color} strokeWidth="14" />
//     <circle cx="128" cy="101" r="15" fill={color} />
//   </svg>
// )
// const GlobeIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
//   <svg viewBox="0 0 256 256" fill="none" width={size} height={size}>
//     <circle cx="128" cy="128" r="110" stroke={color} strokeWidth="14" />
//     <path d="M128 18C128 18 80 80 80 128C80 176 128 238 128 238" stroke={color} strokeWidth="14" strokeLinecap="round" />
//     <path d="M128 18C128 18 176 80 176 128C176 176 128 238 128 238" stroke={color} strokeWidth="14" strokeLinecap="round" />
//     <path d="M18 128H238" stroke={color} strokeWidth="14" strokeLinecap="round" />
//   </svg>
// )
// const GithubIcon = () => (
//   <svg viewBox="0 0 256 256" fill="currentColor" width={16} height={16}>
//     <path fillRule="evenodd" clipRule="evenodd" d="M128 0C57 0 0 59 0 131C0 189 37 238 87 256C94 257 96 253 96 249V225C60 233 53 209 53 209C47 194 39 190 39 190C27 182 40 182 40 182C52 183 59 196 59 196C71 216 89 210 96 207C97 198 101 192 104 189C76 186 46 175 46 124C46 110 51 98 59 89C58 86 54 72 61 54C61 54 71 51 96 68C106 65 117 63 128 63C139 63 149 65 160 68C184 51 195 54 195 54C202 72 197 86 196 89C204 98 209 110 209 124C209 175 179 186 151 189C155 193 159 201 159 213V249C159 253 161 257 168 256C218 238 255 189 255 131C255 59 198 0 128 0Z" />
//   </svg>
// )
// const LinkedInIcon = () => (
//   <svg viewBox="0 0 256 256" fill="currentColor" width={16} height={16}>
//     <circle cx="44" cy="44" r="31" />
//     <rect x="17" y="87" width="54" height="156" rx="4" />
//     <path d="M184 85C167 85 153 90 144 98V91C144 88 142 87 140 87H96C93 87 92 88 92 91V239C92 241 93 243 96 243H141C144 243 145 241 145 239V165C145 144 149 131 169 131C188 131 189 145 189 167V239C189 241 191 243 193 243H239C241 243 243 241 243 239V157C243 124 236 85 184 85Z" />
//   </svg>
// )
// const XIcon = () => (
//   <svg viewBox="0 0 256 256" fill="currentColor" width={16} height={16}>
//     <path d="M200 15H224C231 15 234 20 230 25L160 105C157 108 157 112 159 115L246 230C250 235 247 243 240 243H181C178 243 176 242 175 240L121 170C118 166 112 166 109 170L47 240C45 242 43 243 41 243H23C16 243 12 235 17 230L92 143C95 140 95 136 92 133L10 25C6 19 10 12 16 12H77C79 12 82 13 83 15L131 78C134 82 140 82 143 79L200 15Z" />
//   </svg>
// )
// const ArrowIcon = () => (
//   <svg viewBox="0 0 256 256" fill="none" width={15} height={15}>
//     <path d="M164 48L244 127M244 127L164 207M244 127H12" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )
// const CheckIcon = () => (
//   <svg viewBox="0 0 256 256" fill="none" width={24} height={24}>
//     <path d="M40 128L100 192L216 64" stroke="var(--c-green)" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// )

// // ─── Social Button ─────────────────────────────────────────────────────────────
// function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
//   const [hov, setHov] = useState(false)
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         width: 38,
//         height: 38,
//         borderRadius: "50%",
//         border: `1px solid ${hov ? "var(--c-sky)" : "var(--border-subtle)"}`,
//         background: hov ? "var(--social-hover-bg)" : "var(--social-bg)",
//         color: hov ? "var(--c-sky)" : "var(--text-muted)",
//         textDecoration: "none",
//         transition: "all 0.2s",
//         transform: hov ? "translateY(-2px)" : "translateY(0)",
//       }}
//     >
//       {children}
//     </a>
//   )
// }

// // ─── Contact Info Row ──────────────────────────────────────────────────────────
// function InfoRow({ icon, label, value, accentVar }: { icon: React.ReactNode; label: string; value: string; accentVar: string }) {
//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
//       <div
//         style={{
//           width: 36,
//           height: 36,
//           borderRadius: "50%",
//           flexShrink: 0,
//           background: `color-mix(in srgb, ${accentVar} 12%, transparent)`,
//           border: `1px solid color-mix(in srgb, ${accentVar} 28%, transparent)`,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {icon}
//       </div>
//       <div>
//         <p style={{ fontSize: 10, color: "var(--text-faint)", margin: "0 0 2px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
//           {label}
//         </p>
//         <p style={{ fontSize: 13, color: "var(--text-primary)", margin: 0 }}>{value}</p>
//       </div>
//     </div>
//   )
// }

// // ─── Budget Button ─────────────────────────────────────────────────────────────
// function BudgetBtn({ value, label, active, onClick }: { value: Budget; label: string; active: boolean; onClick: () => void }) {
//   const [hov, setHov] = useState(false)
//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         padding: "8px 4px",
//         borderRadius: 8,
//         fontFamily: "inherit",
//         border: `1px solid ${active ? "var(--c-orange)" : hov ? "color-mix(in srgb, var(--c-orange) 50%, transparent)" : "var(--border-subtle)"}`,
//         background: active ? "color-mix(in srgb, var(--c-orange) 16%, transparent)" : hov ? "color-mix(in srgb, var(--c-orange) 8%, transparent)" : "var(--input-bg)",
//         color: active ? "var(--c-orange)" : hov ? "var(--text-primary)" : "var(--text-muted)",
//         fontSize: 11,
//         fontWeight: 500,
//         cursor: "pointer",
//         transition: "all 0.18s",
//       }}
//     >
//       {label}
//     </button>
//   )
// }

// // ─── Contact Section ───────────────────────────────────────────────────────────
// export default function ContactSection() {
//   const [budget, setBudget] = useState<Budget>("15-50k")
//   const [submitted, setSubmitted] = useState(false)
//   const [errors, setErrors] = useState<Record<string, boolean>>({})
//   const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
//   const [showBg, setShowBg] = useState(false)
//   const ref = useRef(null)

//   const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//     setForm((f) => ({ ...f, [key]: e.target.value }))

//   const handleSubmit = () => {
//     const newErrors: Record<string, boolean> = {}
//     if (!form.name) newErrors.name = true
//     if (!form.email) newErrors.email = true
//     if (!form.message) newErrors.message = true
//     if (Object.keys(newErrors).length) { setErrors(newErrors); return }
//     setSubmitted(true)
//   }

//   const errBorder = (key: string) =>
//     errors[key] ? "1px solid color-mix(in srgb, var(--c-orange) 70%, transparent)" : "1px solid var(--border-subtle)"

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) setShowBg(true)
//     }, { threshold: 0.2 })
//     if (ref.current) observer.observe(ref.current)
//     return () => observer.disconnect()
//   }, [])

//   const socials = [
//     { label: "Email", href: "mailto:hello@digitech.com", icon: <MailIcon /> },
//     { label: "GitHub", href: "https://github.com/digitech", icon: <GithubIcon /> },
//     { label: "LinkedIn", href: "https://linkedin.com/company/digitech", icon: <LinkedInIcon /> },
//     { label: "X", href: "https://x.com/digitech", icon: <XIcon /> },
//   ]

//   const budgets: { value: Budget; label: string }[] = [
//     { value: "<5k", label: "< ₹5k" },
//     { value: "5-15k", label: "₹5–15k" },
//     { value: "15-50k", label: "₹15–50k" },
//     { value: ">50k", label: "> ₹50k" },
//   ]

//   const skills = ["AI Solutions", "Web Development", "Mobile Apps", "3D & Interactive Web", "Cloud & DevOps", "UI/UX Design"]

//   return (
//     <>
//       {/* ── CSS tokens: light & dark ── */}
//       <style>{`
//         /* ── Brand palette ── */
//         :root {
//           --c-green:  #22c55e;
//           --c-sky:    #0ea5e9;
//           --c-orange: #f97316;
//         }

//         /* ── Light mode surface tokens ── */
//         #contact {
//           --section-bg: #f8fafc;
//           --overlay-a: rgb(248 250 252 / 0%);
//           --overlay-b: rgb(241 245 249 / 0%);
//           --text-primary: #0f172a;
//           --text-muted: #475569;
//           --text-faint: #94a3b8;
//           --border-subtle: rgba(15, 23, 42, 0.13);
//           --input-bg: rgba(15, 23, 42, 0.04);
//           --card-bg: rgba(255, 255, 255, 0.88);
//           --card-border: rgba(15, 23, 42, 0.10);
//           --social-bg: rgba(15, 23, 42, 0.05);
//           --social-hover-bg: rgba(14, 165, 233, 0.10);
//           --footer-border: rgba(15, 23, 42, 0.08);
//           --footer-text: rgba(15, 23, 42, 0.35);
//           --chip-border: color-mix(in srgb, var(--c-sky) 30%, transparent);
//           --chip-color: color-mix(in srgb, var(--c-sky) 85%, #000);
//           --chip-bg: color-mix(in srgb, var(--c-sky) 08%, transparent);
//           --available-dot:   var(--c-green);
//           --available-text:  rgba(15,23,42,0.45);
//         }

//         /* ── Dark mode surface tokens ── */
//         @media (prefers-color-scheme: dark) {
//           #contact {
//             --section-bg:      #040e1a;
//             --overlay-a:       rgba(4,8,20,0.78);
//             --overlay-b:       rgba(0,0,0,0.45);
//             --text-primary:    #f1f5f9;
//             --text-muted:      #94a3b8;
//             --text-faint:      rgba(241,245,249,0.35);
//             --border-subtle:   rgba(255,255,255,0.10);
//             --input-bg:        rgba(255,255,255,0.04);
//             --card-bg:         rgba(14,20,22,0.0);
//             --card-border:     rgba(255,255,255,0.10);
//             --social-bg:       rgba(255,255,255,0.06);
//             --social-hover-bg: rgba(14,165,233,0.14);
//             --footer-border:   rgba(255,255,255,0.06);
//             --footer-text:     rgba(255,255,255,0.28);
//             --chip-border:     color-mix(in srgb, var(--c-sky) 28%, transparent);
//             --chip-color:      color-mix(in srgb, var(--c-sky) 80%, #fff);
//             --chip-bg:         color-mix(in srgb, var(--c-sky) 08%, transparent);
//             --available-text:  rgba(255,255,255,0.45);
//           }
//         }

//         /* ── Animations ── */
//         @keyframes dotpulse {
//           0%,100% { opacity:1; transform:scale(1) }
//           50%      { opacity:.4; transform:scale(1.4) }
//         }

//         /* ── Input chrome ── */
//         #contact input::placeholder,
//         #contact textarea::placeholder { color: var(--text-faint); }

//         #contact input:focus,
//         #contact textarea:focus {
//           border-color: color-mix(in srgb, var(--c-sky) 60%, transparent) !important;
//           background:   color-mix(in srgb, var(--c-sky) 05%, transparent) !important;
//           outline: none;
//         }

//         /* ── Footer link hover ── */
//         #contact .footer-link:hover { color: var(--text-muted) !important; }

//         /* ── Responsive ── */
//         @media (max-width: 720px) {
//           #contact .two-col { flex-direction: column !important; padding: 40px 20px !important; }
//           #contact .info-row-wrap { flex-direction: column !important; }
//         }
//       `}</style>

//       <section
//         ref={ref}
//         id="contact"
//         style={{
//           position: "relative",
//           minHeight: "100vh",
//           overflow: "hidden",
//           fontFamily: "'Inter','Helvetica Neue',sans-serif",
//           background: "var(--section-bg)",
//         }}
//       >
//         {/* 3D full background */}
//         {showBg && <ContactBackground />}

//         {/* Overlays — adapt per mode */}
//         <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "linear-gradient(135deg, var(--overlay-a) 0%, transparent 50%, var(--overlay-a) 100%)" }} />
//         <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, var(--overlay-b) 100%)" }} />

//         {/* ── Two-column grid ── */}
//         <div
//           className="two-col"
//           style={{
//             position: "relative",
//             zIndex: 2,
//             display: "flex",
//             justifyContent: "space-between",
//             gap: 48,
//             maxWidth: "90vw",
//             margin: "0 auto",
//             padding: "60px 40px",
//             alignItems: "start",
//           }}
//         >
//           {/* ── LEFT: Details ── */}
//           <div style={{ flex: "1 1 0", minWidth: 0 }}>
//             {/* Eyebrow */}
//             <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--c-green)", margin: "0 0 18px" }}>
//               Contact
//             </p>

//             {/* Heading */}
//             <h2 style={{ fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.05, margin: "0 0 18px", letterSpacing: "-0.035em" }}>
//               Build the future
//               <br />
//               <span style={{ background: "linear-gradient(135deg, var(--c-green) 0%, var(--c-sky) 55%, var(--c-orange) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
//                 with Digitech
//               </span>
//             </h2>

//             <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, margin: "0 0 32px", maxWidth: 340 }}>
//               Digitech builds modern digital products — from AI platforms and SaaS tools to immersive web experiences. We help startups and companies scale faster with cutting-edge technology.
//             </p>

//             {/* Contact details */}
//             <div className="info-row-wrap" style={{ display: "flex", flexDirection: "row", gap: 14, marginBottom: 32, flexWrap: "wrap" }}>
//               <InfoRow icon={<MailIcon size={15} color="var(--c-sky)" />} label="Email" value="hello@digitech.com" accentVar="var(--c-sky)" />
//               <InfoRow icon={<PinIcon size={15} color="var(--c-orange)" />} label="Headquarters" value="Global / Remote" accentVar="var(--c-orange)" />
//               <InfoRow icon={<GlobeIcon size={15} color="var(--c-green)" />} label="Website" value="digitech.com" accentVar="var(--c-green)" />
//             </div>

//             <div style={{ height: 1, background: "var(--border-subtle)", marginBottom: 24 }} />

//             {/* Socials */}
//             <div style={{ display: "flex", gap: 10, marginBottom: 32 }}>
//               {socials.map((s) => (
//                 <SocialBtn key={s.label} href={s.href} label={s.label}>{s.icon}</SocialBtn>
//               ))}
//             </div>

//             {/* Skill chips */}
//             <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
//               {skills.map((s, i) => {
//                 // Cycle chips through the three accent colors
//                 const colors = [
//                   { c: "var(--c-sky)", b: "color-mix(in srgb, var(--c-sky) 28%, transparent)", bg: "color-mix(in srgb, var(--c-sky) 08%, transparent)" },
//                   { c: "var(--c-green)", b: "color-mix(in srgb, var(--c-green) 28%, transparent)", bg: "color-mix(in srgb, var(--c-green) 08%, transparent)" },
//                   { c: "var(--c-orange)", b: "color-mix(in srgb, var(--c-orange) 28%, transparent)", bg: "color-mix(in srgb, var(--c-orange) 08%, transparent)" },
//                 ]
//                 const col = colors[i % 3]
//                 return (
//                   <span key={s} style={{ fontSize: 10, fontWeight: 500, padding: "4px 10px", borderRadius: 20, border: `1px solid ${col.b}`, color: col.c, background: col.bg }}>
//                     {s}
//                   </span>
//                 )
//               })}
//             </div>
//           </div>

//           {/* ── RIGHT: Contact Form ── */}
//           <div
//             style={{
//               flex: "0 0 380px",
//               background: "var(--card-bg)",
//               border: "1px solid var(--card-border)",
//               borderRadius: 20,
//               padding: 32,
//               backdropFilter: "blur(20px)",
//             }}
//           >
//             <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", margin: "0 0 6px" }}>
//               Send a message
//             </h3>
//             <p style={{ fontSize: 13, color: "var(--text-faint)", margin: "0 0 28px" }}>
//               I'll get back to you soon.
//             </p>

//             {!submitted ? (
//               <>
//                 {/* Name + Subject */}
//                 <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
//                   <div>
//                     <label style={{ fontSize: 11, fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 7, display: "block" }}>Name</label>
//                     <input
//                       style={{ width: "100%", boxSizing: "border-box", background: "var(--input-bg)", border: errBorder("name"), borderRadius: 10, padding: "11px 14px", color: "var(--text-primary)", fontSize: 13, outline: "none" }}
//                       type="text" placeholder="Your name" value={form.name}
//                       onChange={set("name")} onFocus={() => setErrors((e) => ({ ...e, name: false }))}
//                     />
//                   </div>
//                   <div>
//                     <label style={{ fontSize: 11, fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 7, display: "block" }}>Subject</label>
//                     <input
//                       style={{ width: "100%", boxSizing: "border-box", background: "var(--input-bg)", border: "1px solid var(--border-subtle)", borderRadius: 10, padding: "11px 14px", color: "var(--text-primary)", fontSize: 13, outline: "none" }}
//                       type="text" placeholder="Project inquiry" value={form.subject} onChange={set("subject")}
//                     />
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div style={{ marginBottom: 14 }}>
//                   <label style={{ fontSize: 11, fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 7, display: "block" }}>Email</label>
//                   <input
//                     style={{ width: "100%", boxSizing: "border-box", background: "var(--input-bg)", border: errBorder("email"), borderRadius: 10, padding: "11px 14px", color: "var(--text-primary)", fontSize: 13, outline: "none" }}
//                     type="email" placeholder="contact@company.com" value={form.email}
//                     onChange={set("email")} onFocus={() => setErrors((e) => ({ ...e, email: false }))}
//                   />
//                 </div>

//                 {/* Budget */}
//                 <div style={{ marginBottom: 14 }}>
//                   <label style={{ fontSize: 11, fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 7, display: "block" }}>Budget</label>
//                   <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
//                     {budgets.map((b) => (
//                       <BudgetBtn key={b.value} value={b.value} label={b.label} active={budget === b.value} onClick={() => setBudget(b.value)} />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div style={{ marginBottom: 22 }}>
//                   <label style={{ fontSize: 11, fontWeight: 500, color: "var(--text-faint)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 7, display: "block" }}>Message</label>
//                   <textarea
//                     style={{ width: "100%", boxSizing: "border-box", background: "var(--input-bg)", border: errBorder("message"), borderRadius: 10, padding: "11px 14px", color: "var(--text-primary)", fontSize: 13, outline: "none", resize: "none" }}
//                     rows={4} placeholder="Tell us about your project or idea..."
//                     value={form.message} onChange={set("message")}
//                     onFocus={() => setErrors((e) => ({ ...e, message: false }))}
//                   />
//                 </div>

//                 {/* Submit */}
//                 <button
//                   onClick={handleSubmit}
//                   style={{
//                     width: "100%",
//                     padding: 14,
//                     borderRadius: 48,
//                     border: "none",
//                     background: "linear-gradient(135deg, var(--c-green), var(--c-sky))",
//                     color: "#fff",
//                     fontSize: 14,
//                     fontWeight: 600,
//                     cursor: "pointer",
//                     letterSpacing: "0.03em",
//                     transition: "opacity 0.22s",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: 8,
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
//                   onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
//                 >
//                   Send Message <ArrowIcon />
//                 </button>
//               </>
//             ) : (
//               <div style={{ textAlign: "center", padding: "32px 0" }}>
//                 <div style={{ width: 56, height: 56, borderRadius: "50%", margin: "0 auto 16px", background: "color-mix(in srgb, var(--c-green) 14%, transparent)", border: "1px solid color-mix(in srgb, var(--c-green) 35%, transparent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <CheckIcon />
//                 </div>
//                 <p style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: "0 0 8px" }}>Message sent!</p>
//                 <p style={{ fontSize: 13, color: "var(--text-faint)", margin: 0 }}>Thanks for reaching out. I'll reply soon.</p>
//               </div>
//             )}

//             {/* Available badge */}
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 20, paddingTop: 18, borderTop: "1px solid var(--border-subtle)" }}>
//               <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--c-green)", boxShadow: "0 0 7px var(--c-green)", display: "inline-block", animation: "dotpulse 2.2s infinite" }} />
//               <span style={{ fontSize: 11, color: "var(--available-text)", letterSpacing: "0.06em" }}>Available for work</span>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div
//           style={{
//             position: "relative",
//             zIndex: 2,
//             display: "flex",
//             gap: 24,
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "16px 40px 28px",
//             borderTop: "1px solid var(--footer-border)",
//           }}
//         >
//           {[{ href: "/privacy", label: "Privacy" }, { href: "/legal", label: "Legal Notice" }].map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className="footer-link"
//               style={{ fontSize: 11, color: "var(--footer-text)", textDecoration: "none", letterSpacing: "0.05em", transition: "color 0.2s" }}
//             >
//               {item.label}
//             </a>
//           ))}
//           <span style={{ fontSize: 11, color: "var(--footer-text)", letterSpacing: "0.05em", opacity: 0.6 }}>
//             © 2026 Digitech. All rights reserved.
//           </span>
//         </div>
//       </section>
//     </>
//   )
// }
"use client"

import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"

const ContactBackground = dynamic(() => import("./ContactBackground"), { ssr: false })

// ─── Types ─────────────────────────────────────────────────────────────────────
type Budget = "<5k" | "5-15k" | "15-50k" | ">50k"

// ─── Icons ─────────────────────────────────────────────────────────────────────
const MailIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 256 256" fill="none" width={size} height={size}>
    <rect x="10" y="41" width="236" height="174" rx="20" stroke={color} strokeWidth="18" />
    <path d="M16.5 46.5L115 126.7C122 132.7 133 132.7 140 126.8L239.5 46.5" stroke={color} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const PinIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 256 256" fill="none" width={size} height={size}>
    <path d="M127.501 11C77.519 11 37 51.475 37 101.403C37 123.692 45.113 144.063 58.5 159.825L127.501 241L196.5 159.823C209.888 144.063 218 123.69 218 101.4C218.003 51.475 177.484 11 127.501 11Z" stroke={color} strokeWidth="14" />
    <circle cx="128" cy="101" r="15" fill={color} />
  </svg>
)
const GlobeIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg viewBox="0 0 256 256" fill="none" width={size} height={size}>
    <circle cx="128" cy="128" r="110" stroke={color} strokeWidth="14" />
    <path d="M128 18C128 18 80 80 80 128C80 176 128 238 128 238" stroke={color} strokeWidth="14" strokeLinecap="round" />
    <path d="M128 18C128 18 176 80 176 128C176 176 128 238 128 238" stroke={color} strokeWidth="14" strokeLinecap="round" />
    <path d="M18 128H238" stroke={color} strokeWidth="14" strokeLinecap="round" />
  </svg>
)
const GithubIcon = () => (
  <svg viewBox="0 0 256 256" fill="currentColor" width={16} height={16}>
    <path fillRule="evenodd" clipRule="evenodd" d="M128 0C57 0 0 59 0 131C0 189 37 238 87 256C94 257 96 253 96 249V225C60 233 53 209 53 209C47 194 39 190 39 190C27 182 40 182 40 182C52 183 59 196 59 196C71 216 89 210 96 207C97 198 101 192 104 189C76 186 46 175 46 124C46 110 51 98 59 89C58 86 54 72 61 54C61 54 71 51 96 68C106 65 117 63 128 63C139 63 149 65 160 68C184 51 195 54 195 54C202 72 197 86 196 89C204 98 209 110 209 124C209 175 179 186 151 189C155 193 159 201 159 213V249C159 253 161 257 168 256C218 238 255 189 255 131C255 59 198 0 128 0Z" />
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
    <path d="M164 48L244 127M244 127L164 207M244 127H12" stroke="currentColor" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const CheckIcon = () => (
  <svg viewBox="0 0 256 256" fill="none" width={24} height={24}>
    <path d="M40 128L100 192L216 64" stroke="#22c55e" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── Social Button ─────────────────────────────────────────────────────────────
function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-[38px] h-[38px] rounded-full border border-slate-200 dark:border-white/20 bg-slate-100/60 dark:bg-white/5 text-slate-500 dark:text-white/60 hover:border-sky-400 dark:hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-400/10 hover:text-sky-500 dark:hover:text-sky-400 hover:-translate-y-0.5 transition-all duration-200 no-underline"
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
  iconBg,
  iconBorder,
}: {
  icon: React.ReactNode
  label: string
  value: string
  iconBg: string
  iconBorder: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center border ${iconBg} ${iconBorder}`}>
        {icon}
      </div>
      <div>
        <p className="text-[10px] text-slate-400 dark:text-white/35 uppercase tracking-widest mb-0.5">
          {label}
        </p>
        <p className="text-[13px] text-slate-700 dark:text-white/80">{value}</p>
      </div>
    </div>
  )
}

// ─── Budget Button ─────────────────────────────────────────────────────────────
function BudgetBtn({ label, active, onClick }: { value: Budget; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={[
        "py-2 px-1 rounded-lg text-[11px] font-medium cursor-pointer transition-all duration-200",
        active
          ? "border border-orange-400 bg-orange-400/15 text-orange-500 dark:text-orange-400"
          : "border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-500 dark:text-white/50 hover:border-orange-300 dark:hover:border-orange-400/40 hover:bg-orange-50 dark:hover:bg-orange-400/[0.08] hover:text-slate-800 dark:hover:text-white",
      ].join(" ")}
    >
      {label}
    </button>
  )
}

// ─── Shared field classes ───────────────────────────────────────────────────────
const inputBase =
  "w-full bg-slate-100/60 dark:bg-white/[0.04] rounded-[10px] px-3.5 py-[11px] text-[13px] text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-white/25 outline-none focus:ring-0 focus:border-sky-400/60 dark:focus:border-sky-400/50 focus:bg-sky-50/40 dark:focus:bg-sky-400/[0.05] transition-colors duration-150 border"
const fieldDefault = "border-slate-200 dark:border-white/10"
const fieldError = "border-orange-400/70"
const labelCls = "block text-[11px] font-medium text-slate-400 dark:text-white/35 uppercase tracking-widest mb-1.5"

// ─── Contact Section ───────────────────────────────────────────────────────────
export default function ContactSection() {
  const [budget, setBudget] = useState<Budget>("15-50k")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [showBg, setShowBg] = useState(false)
  const ref = useRef<HTMLElement>(null)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))
  const clearErr = (k: string) => () => setErrors((e) => ({ ...e, [k]: false }))

  const handleSubmit = () => {
    const errs: Record<string, boolean> = {}
    if (!form.name) errs.name = true
    if (!form.email) errs.email = true
    if (!form.message) errs.message = true
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
  }

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShowBg(true) }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const socials = [
    { label: "Email", href: "mailto:hello@digitech.com", icon: <MailIcon /> },
    { label: "GitHub", href: "https://github.com/digitech", icon: <GithubIcon /> },
    { label: "LinkedIn", href: "https://linkedin.com/company/digitech", icon: <LinkedInIcon /> },
    { label: "X", href: "https://x.com/digitech", icon: <XIcon /> },
  ]

  const budgets: { value: Budget; label: string }[] = [
    { value: "<5k", label: "< ₹5k" },
    { value: "5-15k", label: "₹5–15k" },
    { value: "15-50k", label: "₹15–50k" },
    { value: ">50k", label: "> ₹50k" },
  ]

  const skills = ["AI Solutions", "Web Development", "Mobile Apps", "3D & Interactive Web", "Cloud & DevOps", "UI/UX Design"]
  const chipCls = [
    "border-sky-300/40    dark:border-sky-400/25     text-sky-600    dark:text-sky-400    bg-sky-50    dark:bg-sky-400/[0.08]",
    "border-green-300/40  dark:border-green-400/25   text-green-600  dark:text-green-400  bg-green-50  dark:bg-green-400/[0.08]",
    "border-orange-300/40 dark:border-orange-400/25  text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-400/[0.08]",
  ]

  const infoRows = [
    { icon: <MailIcon size={15} color="#0ea5e9" />, label: "Email", value: "hello@digitech.com", iconBg: "bg-sky-50    dark:bg-sky-500/10", iconBorder: "border-sky-200    dark:border-sky-500/25" },
    { icon: <PinIcon size={15} color="#f97316" />, label: "Headquarters", value: "Global / Remote", iconBg: "bg-orange-50 dark:bg-orange-500/10", iconBorder: "border-orange-200 dark:border-orange-500/25" },
    { icon: <GlobeIcon size={15} color="#22c55e" />, label: "Website", value: "digitech.com", iconBg: "bg-green-50  dark:bg-green-500/10", iconBorder: "border-green-200  dark:border-green-500/25" },
  ]

  return (
    <section
      ref={ref}
      id="contact"
      className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#040e1a] font-sans"
    >
      {/* 3D canvas */}
      {showBg && <ContactBackground />}

      {/* Gradient overlays — light and dark */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-slate-50/80 via-transparent to-slate-50/80 dark:from-[#040814]/80 dark:via-transparent dark:to-[#040814]/80" />
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_30%,rgba(0,0,0,0.08)_100%)] dark:[background:radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-12 max-w-[90vw] mx-auto px-10 py-16 items-start">

        {/* ── LEFT ── */}
        <div className="flex-1 min-w-0">

          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green-500 mb-4">
            Contact
          </p>

          <h2 className="font-bold leading-[1.05] tracking-[-0.035em] mb-4 text-slate-900 dark:text-white" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
            Build the future
            <br />
            <span className="bg-gradient-to-r from-green-500 via-sky-500 to-orange-500 bg-clip-text text-transparent">
              with Digitech
            </span>
          </h2>

          <p className="text-sm leading-relaxed mb-8 max-w-[340px] text-slate-500 dark:text-slate-400">
            Digitech builds modern digital products — from AI platforms and SaaS tools to immersive web experiences.
            We help startups and companies scale faster with cutting-edge technology.
          </p>

          {/* Info rows */}
          <div className="flex flex-row flex-wrap gap-3.5 mb-8">
            {infoRows.map((r) => <InfoRow key={r.label} {...r} />)}
          </div>

          <div className="h-px bg-slate-200 dark:bg-white/[0.08] mb-6" />

          {/* Socials */}
          <div className="flex gap-2.5 mb-8">
            {socials.map((s) => (
              <SocialBtn key={s.label} href={s.href} label={s.label}>{s.icon}</SocialBtn>
            ))}
          </div>

          {/* Skill chips */}
          <div className="flex flex-wrap gap-1.5">
            {skills.map((s, i) => (
              <span key={s} className={`text-[10px] font-medium px-2.5 py-1 rounded-full border ${chipCls[i % 3]}`}>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="flex-shrink-0 w-full lg:w-[380px] bg-white/70 dark:bg-transparent border border-slate-200 dark:border-white/10 rounded-[20px] p-8 backdrop-blur-xl">

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1.5">
            Send a message
          </h3>
          <p className="text-[13px] text-slate-400 dark:text-white/40 mb-7">
            I'll get back to you soon.
          </p>

          {!submitted ? (
            <>
              {/* Name + Subject */}
              <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className={labelCls}>Name</label>
                  <input className={`${inputBase} ${errors.name ? fieldError : fieldDefault}`} type="text" placeholder="Your name" value={form.name} onChange={set("name")} onFocus={clearErr("name")} />
                </div>
                <div>
                  <label className={labelCls}>Subject</label>
                  <input className={`${inputBase} ${fieldDefault}`} type="text" placeholder="Project inquiry" value={form.subject} onChange={set("subject")} />
                </div>
              </div>

              {/* Email */}
              <div className="mb-3.5">
                <label className={labelCls}>Email</label>
                <input className={`${inputBase} ${errors.email ? fieldError : fieldDefault}`} type="email" placeholder="contact@company.com" value={form.email} onChange={set("email")} onFocus={clearErr("email")} />
              </div>

              {/* Budget */}
              <div className="mb-3.5">
                <label className={labelCls}>Budget</label>
                <div className="grid grid-cols-4 gap-2">
                  {budgets.map((b) => (
                    <BudgetBtn key={b.value} {...b} active={budget === b.value} onClick={() => setBudget(b.value)} />
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="mb-5">
                <label className={labelCls}>Message</label>
                <textarea className={`${inputBase} ${errors.message ? fieldError : fieldDefault} resize-none`} rows={4} placeholder="Tell us about your project or idea..." value={form.message} onChange={set("message")} onFocus={clearErr("message")} />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 rounded-full border-0 bg-gradient-to-r from-green-500 to-sky-500 text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Send Message <ArrowIcon />
              </button>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full mx-auto mb-4 bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <CheckIcon />
              </div>
              <p className="text-base font-semibold text-slate-900 dark:text-white mb-2">Message sent!</p>
              <p className="text-[13px] text-slate-400 dark:text-white/40">Thanks for reaching out. I'll reply soon.</p>
            </div>
          )}

          {/* Available badge */}
          <div className="flex items-center justify-center gap-2 mt-5 pt-4 border-t border-slate-200 dark:border-white/[0.07]">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_7px_#22c55e] inline-block animate-pulse" />
            <span className="text-[11px] tracking-wider text-slate-400 dark:text-white/45">Available for work</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex gap-6 items-center justify-center px-10 pt-4 pb-7 border-t border-slate-200 dark:border-white/[0.06]">
        {[{ href: "/privacy", label: "Privacy" }, { href: "/legal", label: "Legal Notice" }].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[11px] tracking-wide no-underline text-slate-400 dark:text-white/30 hover:text-slate-600 dark:hover:text-white/60 transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
        <span className="text-[11px] tracking-wide text-slate-300 dark:text-white/20">
          © 2026 Digitech. All rights reserved.
        </span>
      </div>
    </section>
  )
}