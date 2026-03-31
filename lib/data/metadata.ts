// types
type OpenGraph = {
    title: string;
    description: string;
    url: string;
    type: string;
};

type Metadata = {
    title: string;
    description: string;
    keywords: string;
    openGraph: OpenGraph;
    alternates?: {
        canonical: string;
        languages?: {
            "en-IN": string;
        };
    };
};

export const siteMetadata: Record<string, Metadata> = {
    home: {
        title: "DigiTech - Digital Marketing Agency for Business Growth",
        description:
            "DigiTech helps businesses grow with result-driven digital marketing services including SEO, social media, branding, and performance marketing.",
        keywords:
            "digital marketing agency, SEO services, social media marketing, branding, online growth, performance marketing",
        openGraph: {
            title: "DigiTech - Grow Your Business Online",
            description:
                "Scale your business with DigiTech’s expert digital marketing strategies. Trusted by 1500+ businesses.",
            url: `${process.env.APP_URL}`,
            type: "website",
        },
        alternates: {
            canonical: `${process.env.APP_URL}`,
            languages: {
                "en-IN": `${process.env.APP_URL}`,
            },
        },
    },
    about: {
        title: "About DigiTech - Expert Digital Marketing Solutions",
        description:
            "DigiTech helps businesses grow with result-driven digital marketing services including SEO, social media, branding, and performance marketing.",
        keywords:
            "digital marketing agency, SEO services, social media marketing, branding, online growth, performance marketing",
        openGraph: {
            title: "DigiTech - Grow Your Business Online",
            description:
                "Scale your business with DigiTech’s expert digital marketing strategies. Trusted by 1500+ businesses.",
            url: `${process.env.APP_URL}/about`,
            type: "website",
        },
        alternates: {
            canonical: `${process.env.APP_URL}/about`,
        },
    },

    services: {
        title: "Services - DigiTech Digital Marketing Solutions",
        description:
            "Explore DigiTech services including SEO, social media marketing, website development, branding, and performance marketing solutions.",
        keywords:
            "SEO services, social media marketing, website development, branding services, PPC, digital marketing solutions",
        openGraph: {
            title: "DigiTech Services - Marketing That Converts",
            description:
                "Discover powerful digital marketing services designed to grow your business and increase ROI.",
            url: `${process.env.APP_URL}/services`,
            type: "website",
        },
        alternates: {
            canonical: `${process.env.APP_URL}/services`,
        },
    },

    contact: {
        title: "Contact DigiTech - Get Free Consultation",
        description:
            "Get in touch with DigiTech for a free consultation. Let’s grow your business with powerful digital marketing strategies.",
        keywords:
            "contact digital marketing agency, free consultation, DigiTech contact, marketing support",
        openGraph: {
            title: "Contact DigiTech - Start Your Growth Journey",
            description:
                "Reach out to DigiTech and get expert guidance for your business growth.",
            url: `${process.env.APP_URL}/contact`,
            type: "website",
        },
        alternates: {
            canonical: `${process.env.APP_URL}/contact`,
        },
    },

    blogs: {
        title: "Blog - Digital Marketing Tips & Insights | DigiTech",
        description:
            "Read the latest digital marketing blogs, SEO tips, social media strategies, and business growth insights from DigiTech experts.",
        keywords:
            "digital marketing blog, SEO tips, social media strategies, business growth tips, marketing insights",
        openGraph: {
            title: "DigiTech Blog - Marketing Insights & Strategies",
            description:
                "Stay updated with the latest trends and tips in digital marketing.",
            url: `${process.env.APP_URL}/blogs`,
            type: "website",
        },
        alternates: {
            canonical: `${process.env.APP_URL}/blogs`,
        },
    },

    portfolio: {
        title: "Portfolio - DigiTech Success Stories & Case Studies",
        description:
            "Explore DigiTech portfolio showcasing successful campaigns, client growth stories, and digital marketing case studies.",
        keywords:
            "digital marketing portfolio, case studies, client success stories, marketing results, DigiTech projects",
        openGraph: {
            title: "DigiTech Portfolio - Proven Results",
            description:
                "See how DigiTech has helped businesses achieve real growth with digital marketing.",
            url: `${process.env.APP_URL}/portfolio`,
            type: "website",
        },
        alternates: {
            canonical: `${process.env.APP_URL}/portfolio`,
        },
    },
}