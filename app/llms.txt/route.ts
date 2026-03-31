import { NextResponse } from "next/server";

export async function GET() {
    const content = `
User-agent: *
Allow: /

Sitemap: ${process.env.APP_URL}/sitemap.xml

Name: DigiTech
Description: Digital marketing agency offering SEO, social media marketing, and performance marketing.

Preferred:
- /services/
- /blog/

Contact: ${process.env.APP_URL}/contact
`;

    return new NextResponse(content, {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}