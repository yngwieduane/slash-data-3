import sharyLaunchImage from '../assets/c8e6b70914f752aa1a15c7e28d4542a079de5523.jpeg';
import bahriLaunchImage from '../assets/54ae292a61905664f7aacdcd263faea8b2b77071.png';
import icpHonorImage from '../assets/547e1b616f0a080936e58b83e82981e848a456a9.png';

export const newsArticles = [
    {
        id: 1,
        // Fallbacks for SEO/Initial load, actual content via i18n
        title: "SlashData Launches Shary at Gitex 2025",
        excerpt: "SlashData, in partnership with TAMM, Abu Dhabi Police and Integrated Transport Center, is excited to announce the launch of Shary during Gitex 2025...",
        fullContent: "",
        category: "Partnership",
        date: "October, 2025",
        image: sharyLaunchImage,
        featured: true,
        translationKey: 'gitex2025'
    },
    {
        id: 2,
        title: "SlashData is proud to partner with the Ports, Customs & Freezone corporation (PCFC)",
        excerpt: "During Gitex Global 2025, and MOU was signed between Customs & Freezone corporation (PCFC)...",
        fullContent: "",
        category: "Partnership",
        date: "October, 2025",
        image: bahriLaunchImage,
        featured: false,
        translationKey: 'pcfc'
    },
    {
        id: 3,
        title: "Federal Authority for Identity, Citizenship, Customs & Port Security (ICP) Honors SlashData at GITEX 2024",
        excerpt: "The honour highlights the exceptional collaboration between ICP and SlashData...",
        fullContent: "",
        category: "Recognition",
        date: "October, 2024",
        image: icpHonorImage,
        featured: false,
        translationKey: 'icp'
    }
];
