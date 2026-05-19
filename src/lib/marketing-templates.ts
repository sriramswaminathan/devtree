export interface Template {
  id: string;
  category: 'twitter' | 'dm' | 'email' | 'reddit' | 'producthunt';
  title: string;
  template: string;
  tips: string[];
}

export const templates: Template[] = [
  {
    id: 'tw-1',
    category: 'twitter',
    title: 'Build in Public - Launch Post',
    template: "Just shipped DevTree 🚀\n\nA link-in-bio tool built specifically for developers.\n\nNo bloat. No slow loading. Just your links, fast.\n\nBuilt with Next.js 14 + Tailwind. Free to use.\n\nTry it: {{url}}\n\n#buildinpublic #indiehackers #webdev",
    tips: ['Pin this to your profile', 'Add a screenshot of your own DevTree page', 'Post at 9am EST for max dev engagement'],
  },
  {
    id: 'tw-2',
    category: 'twitter',
    title: 'Comparison Thread',
    template: "Why I switched from Linktree to my own tool 👇\n\n1/ Linktree takes 3+ seconds to load\nDevTree loads in 0.4s ⚡\n\n2/ Linktree shows ads on free plans\nDevTree is clean, no ads\n\n3/ Linktree tracks your users aggressively\nDevTree is privacy-first\n\n4/ Linktree looks generic\nDevTree themes actually look good\n\nTry it free: {{url}}",
    tips: ['Thread performs best Tuesday-Thursday', 'Quote tweet with your own DevTree link', 'Reply to every comment in first hour'],
  },
  {
    id: 'tw-3',
    category: 'twitter',
    title: 'Pain Point Hook',
    template: "Your Linktree loads slower than your portfolio site.\n\nThat is costing you clicks.\n\nI built DevTree because I was embarrassed by how slow my bio link loaded.\n\nNow it loads in 0.4 seconds.\n\nFree for developers: {{url}}",
    tips: ['Post this with a Lighthouse score screenshot', 'Tag 3 dev friends who have slow bio links'],
  },
  {
    id: 'dm-1',
    category: 'dm',
    title: 'Twitter DM - Soft Pitch',
    template: "Hey {{name}}, noticed you are using Linktree in your bio.\n\nI built DevTree — a link-in-bio tool specifically for developers. No bloat, loads instantly, and actually looks good.\n\nWould love to get your thoughts if you have 2 mins to try it:\n\n{{url}}\n\nNo pressure at all, just value your opinion as a fellow builder 🙏",
    tips: ['Only DM people who actively tweet', 'Personalize with something from their recent tweet', 'Send 10 per day max'],
  },
  {
    id: 'dm-2',
    category: 'dm',
    title: 'LinkedIn DM - Professional',
    template: "Hi {{name}}, I came across your profile and noticed your portfolio links.\n\nI have been building DevTree — a minimalist link-in-bio platform made for developers and creators who care about speed and design.\n\nI would love to offer you a free Pro account in exchange for honest feedback. Would you be open to trying it?\n\n{{url}}",
    tips: ['LinkedIn has higher response rate than Twitter', 'Best sent Tuesday-Thursday 10am-2pm', 'Follow up once after 5 days'],
  },
  {
    id: 'em-1',
    category: 'email',
    title: 'Cold Email to Newsletter',
    template: "Subject: Tool for your readers — DevTree (link-in-bio for devs)\n\nHi {{name}},\n\nI have been reading {{newsletter}} for a while — the {{topic}} post especially resonated with me.\n\nI built DevTree, a link-in-bio tool specifically for developers. Unlike Linktree, it is:\n- Blazing fast (0.4s load time)\n- Privacy-first (no tracking pixels)\n- Actually good-looking (minimalist themes)\n\nWould you consider featuring it in your newsletter? Happy to give your readers 50% off Pro forever.\n\nLive demo: {{url}}\n\nEither way, keep up the great work.\n\nBest,\n{{your_name}}",
    tips: ['Only email newsletters with <10k subscribers', 'Mention a SPECIFIC article they wrote', 'Keep it under 150 words'],
  },
  {
    id: 'rd-1',
    category: 'reddit',
    title: 'r/SideProject Post',
    template: "I built a Linktree alternative for developers because I was tired of slow load times\n\nHey r/SideProject,\n\nI am a frontend dev who got annoyed that my Linktree took 3+ seconds to load while my portfolio loaded in 0.5s.\n\nSo I built DevTree — a link-in-bio tool specifically for developers:\n\n- 0.4s load time (tested on Lighthouse)\n- Clean, minimal themes (no corporate bloat)\n- Privacy-first (no tracking pixels)\n- Free forever, Pro is $5/mo for custom domains\n\nWould love your honest feedback and brutal roasting.\n\n{{url}}",
    tips: ['Post Tuesday-Thursday 9am EST', 'Respond to EVERY comment in first 2 hours', 'Never defend criticism, just say thanks'],
  },
  {
    id: 'ph-1',
    category: 'producthunt',
    title: 'Product Hunt Launch',
    template: "DevTree — Link in bio for developers who care about speed\n\n🚀 DevTree is a blazing-fast, minimalist link-in-bio tool built specifically for developers, designers, and creators.\n\n**Why I built it:**\nI was embarrassed that my Linktree loaded slower than my portfolio. So I built something faster, cleaner, and privacy-first.\n\n**Key features:**\n⚡ 0.4s load time\n🎨 4 beautiful themes\n📊 Built-in analytics\n🔒 No tracking pixels\n\n**Pricing:**\nFree forever. Pro is $5/mo for unlimited links + custom domains.\n\nI would love your support and honest feedback! 🙏",
    tips: ['Launch Tuesday 12:01am PST', 'Prepare 5 screenshots and 1 GIF', 'Have 5 friends ready to upvote and comment in first hour'],
  },
];

export const categories = [
  { id: 'twitter', label: 'Twitter / X', icon: 'twitter' },
  { id: 'dm', label: 'Cold DMs', icon: 'message' },
  { id: 'email', label: 'Email Outreach', icon: 'mail' },
  { id: 'reddit', label: 'Reddit Posts', icon: 'file' },
  { id: 'producthunt', label: 'Product Hunt', icon: 'rocket' },
] as const;
