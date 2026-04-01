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
        <p className="text-[10px] text-white dark:text-white/50 uppercase tracking-widest mb-0.5">
          {label}
        </p>
        <p className="text-[13px] text-white dark:text-white/80">{value}</p>
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
const labelCls = "block text-[11px] font-medium text-slate-900 dark:text-white/35 uppercase tracking-widest mb-1.5"

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
      className="relative min-h-[80vh] overflow-hidden bg-slate-50 dark:bg-[#040e1a] font-sans"
    >
      {/* 3D canvas */}
      {showBg && <ContactBackground />}

      {/* Gradient overlays — light and dark */}
      <div className="absolute inset-0 pointer-events-none dark:to-[#040814]/80" />
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_30%,rgba(0,0,0,0.08)_100%)] dark:[background:radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_30%,rgba(0,0,0,0.5)_100%)]" />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-12 max-w-[90vw] mx-auto px-10 py-16 items-start">

        {/* ── LEFT ── */}
        <div className="flex-1 min-w-0">

          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green-500 mb-4">
            Contact
          </p>

          <h2 className="font-bold leading-[1.05] tracking-[-0.035em] mb-4 text-white dark:text-white" style={{ fontSize: "clamp(36px,5vw,60px)" }}>
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
          <p className="text-[13px] text-slate-900 dark:text-white/40 mb-7">
            I'll get back to you soon.
          </p>

          {!submitted ? (
            <>
              {/* Name + Subject */}
              <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                <div>
                  <label className={labelCls}>Your Name</label>
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