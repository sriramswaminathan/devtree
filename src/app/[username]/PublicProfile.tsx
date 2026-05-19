'use client';

import { Link2, Globe, Coffee, BookOpen, Mail, ExternalLink, Code2, FileText, Video, Music, Camera, Briefcase, Bookmark, Star } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  link: Link2,
  code: Code2,
  globe: Globe,
  coffee: Coffee,
  book: BookOpen,
  mail: Mail,
  external: ExternalLink,
  file: FileText,
  video: Video,
  music: Music,
  camera: Camera,
  briefcase: Briefcase,
  bookmark: Bookmark,
  star: Star,
};

const THEMES: Record<string, string> = {
  zinc: 'bg-white text-slate-900',
  midnight: 'bg-slate-950 text-white',
  indigo: 'bg-indigo-600 text-white',
  rose: 'bg-rose-500 text-white',
};

const BTN_THEMES: Record<string, string> = {
  zinc: 'bg-slate-900 text-white hover:bg-slate-800',
  midnight: 'bg-white text-slate-950 hover:bg-slate-100',
  indigo: 'bg-white text-indigo-600 hover:bg-indigo-50',
  rose: 'bg-white text-rose-600 hover:bg-rose-50',
};

interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
}

interface User {
  username: string;
  displayName: string | null;
  bio: string | null;
  avatar: string | null;
  theme: string;
  links: LinkItem[];
}

export default function PublicProfile({ user }: { user: User }) {
  const themeClass = THEMES[user.theme] || THEMES.zinc;
  const btnClass = BTN_THEMES[user.theme] || BTN_THEMES.zinc;

  // Page view tracking can be added here in the future

  const handleClick = async (linkId: string, url: string) => {
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ linkId }),
    });
    window.open(url, '_blank');
  };

  return (
    <div className={`min-h-screen ${themeClass} transition-colors`}>
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.displayName || user.username}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white/20"
          />
        ) : (
          <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-white/20 flex items-center justify-center text-3xl font-bold">
            {(user.displayName || user.username)[0]?.toUpperCase()}
          </div>
        )}

        <h1 className="text-2xl font-bold mb-1">{user.displayName || user.username}</h1>
        <p className="opacity-80 mb-8">{user.bio}</p>

        <div className="space-y-3">
          {user.links.map((link) => {
            const Icon = ICON_MAP[link.icon] || Link2;
            return (
              <button
                key={link.id}
                onClick={() => handleClick(link.id, link.url)}
                className={`w-full py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 transition ${btnClass}`}
              >
                <Icon className="w-5 h-5" />
                {link.title}
              </button>
            );
          })}
        </div>

        <div className="mt-12 opacity-40 text-xs flex items-center justify-center gap-1">
          <Link2 className="w-3 h-3" />
          <a href="/">Made with DevTree</a>
        </div>
      </div>
    </div>
  );
}
