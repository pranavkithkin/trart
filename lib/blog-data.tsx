export interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    coverImage: string;
    date: string;
    category: string;
    readTime: string;
    author: {
        name: string;
        role: string;
        avatar: string;
        linkedin?: string;
    };
    content: React.ReactNode;
}

export const blogPosts: BlogPost[] = [
    {
        title: "How AI Agents are Redefining B2B Sales in 2024",
        slug: "ai-agents-b2b-sales",
        excerpt: "Discover how intelligent agents are automating lead qualification and outreach, leading to a 40% increase in sales efficiency.",
        coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        date: "January 3, 2024",
        category: "Sales Automation",
        readTime: "6 min read",
        author: {
            name: "Pranav Satheesan",
            role: "Founder & CEO",
            avatar: "/team/Pranav_Satheesan.jpg",
            linkedin: "https://www.linkedin.com/in/pranavpambungalsatheesan/"
        },
        content: "Detailed content about AI agents in B2B sales..."
    },
    {
        title: "The Hidden ROI of Intelligent Automation in Manufacturing",
        slug: "roi-automation-manufacturing",
        excerpt: "Manufacturing leaders are seeing unprecedented returns by integrating AI into their shop floors and supply chains.",
        coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        date: "December 28, 2023",
        category: "Manufacturing",
        readTime: "8 min read",
        author: {
            name: "Mohammed Fazil",
            role: "CMO",
            avatar: "/team/Mohammed_Fazil.png",
            linkedin: "https://www.linkedin.com/in/fazilfazi/"
        },
        content: "Detailed content about ROI in manufacturing automation..."
    },
    {
        title: "Why Your Business Needs an AI Audit Before Implementation",
        slug: "ai-audit-importance",
        excerpt: "Before jumping into the AI deep end, a comprehensive audit is crucial for identifying high-impact areas and avoiding costly mistakes.",
        coverImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        date: "December 15, 2023",
        category: "Strategy",
        readTime: "5 min read",
        author: {
            name: "Thameem AR",
            role: "CGO",
            avatar: "/team/Thameer_AR.jpg",
            linkedin: "https://www.linkedin.com/in/thameemar/"
        },
        content: "Detailed content about the importance of an AI audit..."
    }
];
