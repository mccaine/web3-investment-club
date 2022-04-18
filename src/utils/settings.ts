interface Settings {
    dAppName: string;
    tagline: string;
    title: string;
    description: string;
    canonicalURL: string;
    proposeStake: string;
}

interface MetaTags {
    title: string;
    locale: string;
    image: string;
    description: string;
    keywords: string;
    canonicalURL: string;
    alternateURLs: string[];
}

interface OpenGraph {
    site_name: string;
    title: string;
    type: "website";
    locale: string;
    description: string;
    image: string;
    url: string;
}

type SoMeObj = {
    id: "tiktok" | "twitter" | "discord" | "instagram";
    name: string;
    url: string;
    handle?: string;
    active: boolean;
}

export const settings: Settings = {
    dAppName: "Sheesh",
    title: "Sheesh Venture Club",
    tagline: "Be you own VC",
    description: "Sheesh is a Venture Club that gives you access to the VC game: Vote on promising startups, get an early stake in the business and be rewarded when promoting your favourites.",
    canonicalURL: "https://sheesh.vc",
    proposeStake: "0.05",
}

export const metaTags: MetaTags = {
    title: settings.title,
    locale: "en_US",
    image: "",
    description: settings.description,
    keywords: "venture club, startup funding, venture capital, accelerator",
    canonicalURL: settings.canonicalURL,
    alternateURLs: ["https://shesh.vs", "https://sheeesh.vs"],
}

export const og: OpenGraph = {
    site_name: settings.dAppName,
    title: settings.title,
    type: "website",
    locale: metaTags.locale,
    description: settings.description,
    image: metaTags.image,
    url: settings.canonicalURL,
}

export const some: SoMeObj[] = [
    {
        id: "discord",
        name: "Discord",
        url: "",
        handle: "",
        active: true
    },
    {
        id: "twitter",
        name: "Twitter",
        url: "",
        handle: "",
        active: true
    },
    {
        id: "instagram",
        name: "Instagram",
        url: "",
        handle: "",
        active: true
    },
    {
        id: "tiktok",
        name: "TikTok",
        url: "",
        handle: "",
        active: true
    },
]