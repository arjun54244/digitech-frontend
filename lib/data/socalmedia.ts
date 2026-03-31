// all social media links
// types 
export type SocialMediaLinks = {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
    pintrust?: string;
    threads?: string;
    whatsapp?: string;
}

export const socialMediaLinks: SocialMediaLinks = {
    instagram: process.env.INSTAGRAM_URL,
    linkedin: process.env.LINKEDIN_URL,
    twitter: process.env.TWITTER_URL,
    facebook: process.env.FACEBOOK_URL,
    youtube: process.env.YOUTUBE_URL,
    pintrust: process.env.PINTEREST_URL,
    threads: process.env.THREADS_URL,
    whatsapp: process.env.WHATSAPP_URL,
}