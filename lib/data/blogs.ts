export type BlogPost = {
    id: string;
    title: string;
    excerpt: string;
    content: string; // HTML string or rich text for the detail page
    coverImage: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    category: string;
    readTime: string;
    date: string;
};

export const blogsData: BlogPost[] = [
    {
        id: "the-future-of-ai-marketing",
        title: "The Future of AI in Digital Marketing: What to Expect in 2026",
        excerpt: "Discover how Artificial Intelligence is reshaping the digital marketing landscape, from predictive analytics to hyper-personalized content generation.",
        content: `
      <h2>The AI Revolution is Here</h2>
      <p>Artificial Intelligence is no longer just a buzzword in the marketing industry; it's a fundamental driver of growth and engagement. In 2026, we are seeing unprecedented adoption of AI tools that automate complex workflows and provide deep insights into consumer behavior.</p>
      
      <h3>Hyper-Personalization at Scale</h3>
      <p>One of the most significant impacts of AI is the ability to deliver hyper-personalized experiences to millions of users simultaneously. Machine learning algorithms analyze vast amounts of data to predict what content, products, or services a user is most likely to engage with.</p>
      
      <h3>Predictive Analytics</h3>
      <p>Instead of looking at past data to understand what happened, marketers are now using predictive analytics to foresee future trends. This shift from reactive to proactive marketing allows brands to stay ahead of the curve and optimize their campaigns for maximum ROI.</p>
      
      <blockquote>"The companies that will dominate the next decade are those that seamlessly integrate AI into their marketing stacks without losing the human touch."</blockquote>
      
      <h3>Conclusion</h3>
      <p>As we look forward, the integration of AI will only deepen. Marketers who embrace these technologies will find themselves with a significant competitive advantage.</p>
    `,
        coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Elena Rodriguez",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
            role: "Head of AI Strategy"
        },
        category: "AI & Tech",
        readTime: "5 min read",
        date: "Mar 20, 2026"
    },
    {
        id: "seo-algorithms-unlocked",
        title: "Unlocking Search Algorithms: A Deep Dive into Semantic SEO",
        excerpt: "Move beyond keyword stuffing. Learn how semantic SEO and topic clusters can skyrocket your organic traffic and build topical authority.",
        content: `
      <h2>Beyond Keywords</h2>
      <p>Search engines have evolved drastically. They no longer simply match keywords; they understand intent. Semantic SEO is the practice of building meaning and topical depth into your content.</p>
      
      <h3>Topic Clusters</h3>
      <p>To master semantic SEO, you must organize your content into topic clusters. A core "pillar" page covers a broad topic, while interlinked "cluster" pages cover specific subtopics in detail.</p>
      
      <h3>User Intent Focus</h3>
      <p>Understanding whether a user is looking to buy, learn, or navigate is crucial. Aligning your content format with the searcher's intent is the quickest path to climbing the SERPs.</p>
    `,
        coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Marcus Chen",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
            role: "SEO Director"
        },
        category: "SEO",
        readTime: "7 min read",
        date: "Mar 15, 2026"
    },
    {
        id: "social-commerce-strategies",
        title: "Mastering Social Commerce: Turning Likes into Immediate Sales",
        excerpt: "Social media is now a primary storefront. Explore the strategies top brands use to create seamless shopping experiences directly within social apps.",
        content: `
      <h2>The Seamless Checkout</h2>
      <p>The friction between discovery and purchase is disappearing. Social platforms now offer native checkout solutions, allowing users to buy products without ever leaving the app.</p>
      
      <h3>Authenticity Sells</h3>
      <p>Consumers are skeptical of traditional advertising. User-generated content and influencer partnerships that prioritize authenticity over high-production value are driving the highest conversion rates.</p>
      
      <h3>Live Shopping</h3>
      <p>Live streaming combined with instant purchasing is a massive trend. Brands leveraging interactive live shopping events are seeing unprecedented engagement and sales spikes.</p>
    `,
        coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "Sarah Jenkins",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
            role: "Social Media Lead"
        },
        category: "Social Media",
        readTime: "4 min read",
        date: "Mar 10, 2026"
    },
    {
        id: "brand-storytelling-3d",
        title: "Immersive Brand Storytelling: WebGL and 3D Experiences",
        excerpt: "How brands are escaping the generic constraints of flat web design by utilizing React Three Fiber and WebGL for interactive, unforgettable sites.",
        content: `
      <h2>Breaking the Grid</h2>
      <p>The modern web isn't constrained to flat rectangles. WebGL allows us to render complex 3D scenes directly in the browser, creating deeply engaging experiences.</p>
      
      <h3>Emotional Connection</h3>
      <p>When users can interact with a 3D environment, they form a stronger memory of the brand. Motion and depth create an illusion of reality that flat images simply cannot achieve.</p>
      
      <h3>Performance Optimization</h3>
      <p>The key to successful 3D web design is performance. Techniques like lazy loading models, compressing textures, and managing frame rates are essential for maintaining a smooth experience across devices.</p>
    `,
        coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
        author: {
            name: "David Kim",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
            role: "Creative Developer"
        },
        category: "Web Development",
        readTime: "8 min read",
        date: "Mar 05, 2026"
    }
];
