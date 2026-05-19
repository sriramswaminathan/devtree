'use client';

import { useState } from 'react';
import { templates, categories, Template } from '@/lib/marketing-templates';
import { Copy, Check, MessageSquare, Mail, FileText, Rocket, Globe } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  twitter: Globe,
  message: MessageSquare,
  mail: Mail,
  file: FileText,
  rocket: Rocket,
};

export default function MarketingPage() {
  const [activeCategory, setActiveCategory] = useState<string>('twitter');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [variables, setVariables] = useState<Record<string, string>>({
    url: '',
    name: '',
    newsletter: '',
    topic: '',
    your_name: '',
  });

  const filtered = templates.filter((t) => t.category === activeCategory);

  const renderTemplate = (template: string) => {
    return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
      return variables[key] || `{{${key}}}`;
    });
  };

  const copy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Marketing Generator</h1>
        <p className="text-slate-500 text-sm mt-1">
          Copy-paste ready content to get your first 100 users. Fill in your details, click copy, post.
        </p>
      </div>

      {/* Variables */}
      <div className="bg-white rounded-xl border border-slate-100 p-6 mb-6">
        <h2 className="font-semibold text-slate-900 mb-4 text-sm">Your Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Your DevTree URL</label>
            <input
              value={variables.url}
              onChange={(e) => setVariables({ ...variables, url: e.target.value })}
              placeholder="https://devtree.io/yourname"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Your Name</label>
            <input
              value={variables.your_name}
              onChange={(e) => setVariables({ ...variables, your_name: e.target.value })}
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Recipient Name (for DMs/Email)</label>
            <input
              value={variables.name}
              onChange={(e) => setVariables({ ...variables, name: e.target.value })}
              placeholder="Sarah"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-600 mb-1">Newsletter Name (for email)</label>
            <input
              value={variables.newsletter}
              onChange={(e) => setVariables({ ...variables, newsletter: e.target.value })}
              placeholder="React Weekly"
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || FileText;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Templates */}
      <div className="space-y-4">
        {filtered.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            rendered={renderTemplate(template.template)}
            copied={copiedId === template.id}
            onCopy={() => copy(template.id, renderTemplate(template.template))}
          />
        ))}
      </div>
    </div>
  );
}

function TemplateCard({
  template,
  rendered,
  copied,
  onCopy,
}: {
  template: Template;
  rendered: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
      <div className="p-4 border-b border-slate-50 flex items-center justify-between">
        <h3 className="font-medium text-slate-900 text-sm">{template.title}</h3>
        <button
          onClick={onCopy}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4">
        <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans leading-relaxed bg-slate-50 p-4 rounded-lg">
          {rendered}
        </pre>
      </div>
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-2">
          {template.tips.map((tip, i) => (
            <span
              key={i}
              className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full"
            >
              {tip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
