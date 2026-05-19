import Link from 'next/link';
import { Link2, Zap, BarChart3, Globe, Code2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
          <Zap className="w-4 h-4" />
          Launch your personal page in 60 seconds
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
          Your links, <span className="text-indigo-600">supercharged.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          DevTree is the minimalist link-in-bio tool built for developers, designers, and creators who care about speed, design, and owning their audience.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/register"
            className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition"
          >
            Create your page — free
          </Link>
          <a
            href="#preview"
            className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition"
          >
            See a preview
          </a>
        </div>
      </section>

      {/* Preview mockup */}
      <section id="preview" className="max-w-md mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Code2 className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="font-semibold text-slate-900 text-lg">@sarahdev</h3>
          <p className="text-slate-500 text-sm mb-6">Frontend engineer & open source maintainer</p>
          <div className="space-y-3">
            {['GitHub', 'Twitter', 'Portfolio', 'Buy me a coffee'].map((l) => (
              <div key={l} className="bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium">
                {l}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-6 flex items-center justify-center gap-1">
            <Link2 className="w-3 h-3" />
            Made with DevTree
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-t border-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div>
            <Globe className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Custom Domains</h3>
            <p className="text-slate-600 text-sm">
              Use your own domain or claim a clean username like devtree.io/you.
            </p>
          </div>
          <div>
            <BarChart3 className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Real Analytics</h3>
            <p className="text-slate-600 text-sm">
              Track clicks, referrers, and audience growth with a simple dashboard.
            </p>
          </div>
          <div>
            <Zap className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Blazing Fast</h3>
            <p className="text-slate-600 text-sm">
              Built on Next.js 14. Pages load instantly, rank better, and convert more.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to own your link?</h2>
        <p className="text-slate-600 mb-8">Free forever. Upgrade when you need more power.</p>
        <Link
          href="/register"
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Start for free
        </Link>
      </section>
    </div>
  );
}
