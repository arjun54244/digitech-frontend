import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "DigiTech",
        short_name: "DigiTech",
        description:
            "DigiTech helps businesses grow with result-driven digital marketing services.",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
            {
                src: "/logo.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
            {
                src: "/logo.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/logo.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    }
}