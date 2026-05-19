'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Link2, LogOut, LayoutDashboard, User } from 'lucide-react';

export default function Navbar() {
  const [user, setUser] = useState<{ username: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/me')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.user) setUser(data.user);
      })
      .catch(() => {});
  }, []);

  const logout = () => {
    document.cookie = 'token=; Max-Age=0; path=/';
    setUser(null);
    router.push('/');
    router.refresh();
  };

  return (
    <nav className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900">
          <Link2 className="w-5 h-5 text-indigo-600" />
          DevTree
        </Link>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link
                href={`/${user.username}`}
                className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                <User className="w-4 h-4" />
                Profile
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-slate-600 hover:text-slate-900 flex items-center gap-1"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-sm text-slate-600 hover:text-red-600 flex items-center gap-1"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-sm text-slate-600 hover:text-slate-900">
                Log in
              </Link>
              <Link
                href="/register"
                className="text-sm bg-slate-900 text-white px-3 py-1.5 rounded-md hover:bg-slate-800"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
