'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Plus,
  Trash2,
  GripVertical,
  Save,
  Link as LinkIcon,
  BarChart3,
  Eye,
  Loader2,
} from 'lucide-react';

interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  order: number;
  active: boolean;
}

interface User {
  id: string;
  username: string;
  displayName: string | null;
  bio: string | null;
  avatar: string | null;
  theme: string;
  links: LinkItem[];
}

const THEMES = [
  { name: 'zinc', label: 'Clean Light', bg: 'bg-white', text: 'text-slate-900', btn: 'bg-slate-900 text-white' },
  { name: 'midnight', label: 'Midnight', bg: 'bg-slate-950', text: 'text-white', btn: 'bg-white text-slate-950' },
  { name: 'indigo', label: 'Indigo', bg: 'bg-indigo-600', text: 'text-white', btn: 'bg-white text-indigo-600' },
  { name: 'rose', label: 'Rose', bg: 'bg-rose-500', text: 'text-white', btn: 'bg-white text-rose-600' },
];

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newLink, setNewLink] = useState({ title: '', url: '', icon: 'link' });
  const [analytics, setAnalytics] = useState({ totalClicks: 0, totalLinks: 0, clicksToday: 0 });

  useEffect(() => {
    fetch('/api/me')
      .then((r) => {
        if (!r.ok) throw new Error('Unauthorized');
        return r.json();
      })
      .then((data) => {
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => {
        router.push('/login');
      });

    fetch('/api/analytics')
      .then((r) => r.json())
      .then(setAnalytics)
      .catch(() => {});
  }, [router]);

  const saveProfile = async () => {
    if (!user) return;
    setSaving(true);
    await fetch('/api/me', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        displayName: user.displayName,
        bio: user.bio,
        avatar: user.avatar,
        theme: user.theme,
      }),
    });
    setSaving(false);
  };

  const addLink = async () => {
    if (!newLink.title || !newLink.url) return;
    const res = await fetch('/api/links', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLink),
    });
    const data = await res.json();
    if (user) {
      setUser({ ...user, links: [...user.links, data.link] });
    }
    setNewLink({ title: '', url: '', icon: 'link' });
  };

  const updateLink = async (id: string, updates: Partial<LinkItem>) => {
    await fetch('/api/links', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updates }),
    });
    if (user) {
      setUser({
        ...user,
        links: user.links.map((l) => (l.id === id ? { ...l, ...updates } : l)),
      });
    }
  };

  const deleteLink = async (id: string) => {
    await fetch(`/api/links?id=${id}`, { method: 'DELETE' });
    if (user) {
      setUser({ ...user, links: user.links.filter((l) => l.id !== id) });
    }
  };

  if (loading || !user) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
      </div>
    );
  }

  const activeTheme = THEMES.find((t) => t.name === user.theme) || THEMES[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
      {/* Editor */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl border border-slate-100 p-6">
          <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <LinkIcon className="w-4 h-4" />
            Profile
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Display Name</label>
                <input
                  value={user.displayName || ''}
                  onChange={(e) => setUser({ ...user, displayName: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Avatar URL</label>
                <input
                  value={user.avatar || ''}
                  onChange={(e) => setUser({ ...user, avatar: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="https://..."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
              <textarea
                value={user.bio || ''}
                onChange={(e) => setUser({ ...user, bio: e.target.value })}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Theme</label>
              <div className="flex gap-3">
                {THEMES.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setUser({ ...user, theme: t.name })}
                    className={`w-10 h-10 rounded-full border-2 ${
                      user.theme === t.name ? 'border-indigo-600' : 'border-transparent'
                    } ${t.bg}`}
                    title={t.label}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={saveProfile}
              disabled={saving}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 disabled:opacity-50 flex items-center gap-2"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              <Save className="w-4 h-4" />
              Save profile
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 p-6">
          <h2 className="font-semibold text-slate-900 mb-4">Links</h2>
          <div className="flex gap-2 mb-4">
            <input
              placeholder="Title"
              value={newLink.title}
              onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
              className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              placeholder="https://..."
              value={newLink.url}
              onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
              className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={addLink}
              className="bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {user.links.map((link) => (
              <div
                key={link.id}
                className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg hover:bg-slate-50"
              >
                <GripVertical className="w-4 h-4 text-slate-300" />
                <input
                  type="checkbox"
                  checked={link.active}
                  onChange={(e) => updateLink(link.id, { active: e.target.checked })}
                  className="w-4 h-4"
                />
                <div className="flex-1 min-w-0">
                  <input
                    value={link.title}
                    onChange={(e) => updateLink(link.id, { title: e.target.value })}
                    className="font-medium text-sm text-slate-900 bg-transparent border-none p-0 focus:ring-0 w-full"
                  />
                  <input
                    value={link.url}
                    onChange={(e) => updateLink(link.id, { url: e.target.value })}
                    className="text-xs text-slate-500 bg-transparent border-none p-0 focus:ring-0 w-full truncate"
                  />
                </div>
                <button
                  onClick={() => deleteLink(link.id)}
                  className="text-slate-400 hover:text-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {user.links.length === 0 && (
              <p className="text-sm text-slate-400 text-center py-4">No links yet. Add your first one above.</p>
            )}
          </div>
        </div>
      </div>

      {/* Preview & Stats */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-100 p-6">
          <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            Analytics
          </h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900">{analytics.totalClicks}</div>
              <div className="text-xs text-slate-500">Total clicks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{analytics.totalLinks}</div>
              <div className="text-xs text-slate-500">Links</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">{analytics.clicksToday}</div>
              <div className="text-xs text-slate-500">Today</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 p-6">
          <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Live Preview
          </h2>
          <div
            className={`rounded-xl p-6 text-center transition-colors ${activeTheme.bg} ${activeTheme.text}`}
          >
            {user.avatar ? (
              <img src={user.avatar} alt="" className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" />
            ) : (
              <div className="w-16 h-16 rounded-full mx-auto mb-3 bg-white/20 flex items-center justify-center text-xl font-bold">
                {(user.displayName || user.username)[0]?.toUpperCase()}
              </div>
            )}
            <h3 className="font-semibold">{user.displayName || user.username}</h3>
            <p className="text-sm opacity-80 mb-4 line-clamp-2">{user.bio || 'No bio yet.'}</p>
            <div className="space-y-2">
              {user.links
                .filter((l) => l.active)
                .map((link) => (
                  <div key={link.id} className={`py-2 rounded-lg text-sm font-medium ${activeTheme.btn}`}>
                    {link.title}
                  </div>
                ))}
              {user.links.filter((l) => l.active).length === 0 && (
                <p className="text-xs opacity-60">No active links</p>
              )}
            </div>
          </div>
          <a
            href={`/${user.username}`}
            target="_blank"
            className="mt-4 block text-center text-sm text-indigo-600 hover:underline"
          >
            Open public page →
          </a>
        </div>
      </div>
    </div>
  );
}
