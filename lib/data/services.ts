export interface Service {
    id: string
    title: string
    description: string
    icon: string
    features: string[]
    process: { title: string; desc: string }[]
    testimonials: { author: string; role: string; content: string }[]
}

export const servicesData: Service[] = [
    {
        id: "web-development",
        title: "Web Development",
        description: "Modern, responsive, and high-performance web applications built with cutting-edge technologies.",
        icon: "code",
        features: ["React & Next.js", "Server-Side Rendering", "Progressive Web Apps", "API Integration"],
        process: [
            { title: "Discovery", desc: "Understanding your goals and requirements." },
            { title: "Design", desc: "Crafting intuitive and engaging user interfaces." },
            { title: "Development", desc: "Building the core functionality with modern tech." },
            { title: "Deployment", desc: "Launching your application securely." }
        ],
        testimonials: [
            { author: "Jane Doe", role: "CEO, TechFlow", content: "They delivered an incredible web app that boosted our conversions." }
        ]
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "Beautiful, user-centric interfaces that engage and convert visitors into loyal customers.",
        icon: "palette",
        features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
        process: [
            { title: "Research", desc: "Analyzing target audience and competitors." },
            { title: "Wireframing", desc: "Creating the skeletal structure of the product." },
            { title: "Visual Design", desc: "Applying brand colors, typography, and aesthetics." },
            { title: "Handoff", desc: "Delivering assets to the development team." }
        ],
        testimonials: [
            { author: "John Smith", role: "Founder, Creativ", content: "The new design is stunning and intuitive." }
        ]
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Data-driven marketing strategies to accelerate your growth and dominate your niche.",
        icon: "trending-up",
        features: ["SEO Optimization", "Content Strategy", "Social Media Management", "PPC Campaigns"],
        process: [
            { title: "Audit", desc: "Reviewing current marketing efforts." },
            { title: "Strategy", desc: "Developing a custom marketing plan." },
            { title: "Execution", desc: "Implementing campaigns across channels." },
            { title: "Optimization", desc: "Analyzing data to improve ROI." }
        ],
        testimonials: [
            { author: "Sarah Lee", role: "Marketing VP, GrowthCo", content: "Our traffic doubled within 3 months." }
        ]
    },
    {
        id: "cloud-infrastructure",
        title: "Cloud Infrastructure",
        description: "Scalable, secure, and reliable cloud solutions tailored for enterprise needs.",
        icon: "cloud",
        features: ["AWS/GCP/Azure", "Docker & Kubernetes", "CI/CD Pipelines", "24/7 Monitoring"],
        process: [
            { title: "Assessment", desc: "Evaluating current infrastructure." },
            { title: "Architecture", desc: "Designing a scalable cloud solution." },
            { title: "Migration", desc: "Moving assets to the cloud securely." },
            { title: "Management", desc: "Ongoing maintenance and optimization." }
        ],
        testimonials: [
            { author: "Mike Johnson", role: "CTO, DataCorp", content: "We haven't had a single minute of downtime since migrating." }
        ]
    }
]
