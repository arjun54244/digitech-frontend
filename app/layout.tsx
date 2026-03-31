import { Geist, Geist_Mono } from "next/font/google"
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import ConditionalLayout from "@/components/ConditionalLayout"
import { QueryProvider } from "@/components/providers/query-provider"
import { SocialMediaLinks, socialMediaLinks } from "@/lib/data/socalmedia"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DigiTech",
  url: process.env.APP_URL,
  logo: `${process.env.APP_URL}/logo.svg`,
  sameAs: [
    socialMediaLinks.instagram,
    socialMediaLinks.linkedin,
    socialMediaLinks.twitter,
    socialMediaLinks.facebook,
    socialMediaLinks.youtube,
    socialMediaLinks.pintrust,
    socialMediaLinks.threads,
    socialMediaLinks.whatsapp,
  ]
};

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function FontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        fontSans.variable,
        fontMono.variable,
        "antialiased"
      )}
    >
      <GoogleTagManager gtmId={process.env.GOOGLETAGMANAGER!} />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
      // className="font-sans"
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ConditionalLayout>
              {children}
            </ConditionalLayout>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
