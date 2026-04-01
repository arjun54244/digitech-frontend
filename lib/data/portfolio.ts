export interface PortfolioProject {
    id: string
    title: string
    category: string
    description: string
    techStack: string[]
    gallery: string[]
    link: string
    image?: string
    type?: "pdf" | "website"
}

export const portfolioData: PortfolioProject[] = [
    {
        id: "nexus-dashboard",
        title: "Nexus Dashboard",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        description: "A comprehensive analytics dashboard and management tool for enterprise logistics. Features real-time data streaming, interactive data visualization, and a highly customizable widget system.",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
        gallery: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
        ],
        link: "https://example.com"
    },
    {
        id: "aethereal-brand",
        title: "Aethereal Identity",
        category: "Design",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80",
        description: "Complete brand identity and web presence for a rising fashion label. We infused their digital storefront with fluid animations and a minimalist anti-gravity aesthetic.",
        techStack: ["Figma", "React", "GSAP", "Three.js"],
        gallery: [
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
        ],
        link: "https://example.com"
    },
    {
        id: "quantum-finance",
        title: "Quantum Finance",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
        description: "A secure, lightning-fast banking application utilizing edge-computing architecture. We completely reimagined the user flow to streamline complex financial forecasting for everyday users.",
        techStack: ["React Native", "Next.js", "Go", "PostgreSQL"],
        gallery: [
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
        ],
        link: "https://example.com"
    },
    {
        id: "lumina-3d",
        title: "Lumina 3D Experience",
        category: "3D",
        image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=1200&q=80",
        description: "An immersive virtual showroom built directly into the browser. Users can explore high-fidelity product models in real-time, drastically increasing engagement metrics.",
        techStack: ["React Three Fiber", "Blender", "WebGL", "Framer Motion"],
        gallery: [
            "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
        ],
        link: "https://example.com"
    },
    {
        id: "horizon-ecommerce",
        title: "Horizon eCommerce",
        category: "Web App",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
        description: "A highly performant headless eCommerce platform that scales seamlessly during high-traffic events like Black Friday. Achieved a perfect 100 Lighthouse score across all metrics.",
        techStack: ["Next.js App Router", "Shopify Storefront API", "Tailwind CSS"],
        gallery: [
            "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
        ],
        link: "https://example.com"
    },
    {
        id: "echo-marketing",
        title: "Echo Campaign",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
        description: "A multi-touchpoint digital marketing campaign page. Utilizing sophisticated scroll-linked animations and dynamic interactive content blocks.",
        techStack: ["HTML5", "CSS3", "GSAP ScrollTrigger"],
        gallery: [
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
        ],
        link: "https://example.com"
    }
]
