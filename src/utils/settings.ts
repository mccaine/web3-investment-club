interface Settings {
    dAppName: string;
    tagline: string;
    description: string;
    canonicalURL: string;
    alternateURLs: string[];
    proposeStake: string;
}

interface OpenGraph {}

export const settings: Settings = {
    dAppName: "SheesH",
    tagline: "Be you own VC",
    description: "SheesH Venture Club",
    canonicalURL: "https://sheesh.vc",
    alternateURLs: ["https://shesh.vs", "https://sheeesh.vs", "https://jeez.vs"],
    proposeStake: "0.05",
}

export const og: OpenGraph = {}