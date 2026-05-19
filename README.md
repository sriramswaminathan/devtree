# DevTree — Link in Bio for Developers

A blazing fast, minimalist link-in-bio tool built for developers, designers, and creators who care about speed, design, and owning their audience.

## Features

- **Custom Profiles** — Username-based public pages (`yourdomain.com/username`)
- **Link Management** — Add, edit, delete, and toggle links from a clean dashboard
- **Themes** — Multiple color themes (Clean Light, Midnight, Indigo, Rose)
- **Analytics** — Track total clicks, link performance, and daily stats
- **Click Tracking** — Every link click is recorded with timestamp
- **Auth** — Secure email/password authentication with JWT
- **Responsive** — Beautiful on mobile, tablet, and desktop
- **SEO Ready** — Server-side rendering with proper meta tags per profile

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: SQLite (local dev) / PostgreSQL (production)
- **ORM**: Prisma
- **Auth**: JWT (jsonwebtoken + bcryptjs)
- **Icons**: Lucide React

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Copy `.env` and update secrets:

```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="your-super-secret-min-32-characters-long"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### 3. Run database migrations

```bash
npx prisma migrate dev
```

### 4. Start the development server

```bash
npm run dev
```

Visit `http://localhost:3000`

## Production Deployment

### One-Click Deploy Options

We made deployment dead simple. Pick one:

**Option 1: Docker Compose (Run anywhere — easiest)**
```bash
docker-compose up -d
```
Your app is live at `http://localhost:3000`. See `DEPLOY.md` for details.

**Option 2: Railway (Cloud — connect GitHub, click Deploy)**
Push to GitHub, connect to Railway, done. See `DEPLOY.md` for step-by-step screenshots.

**Option 3: Render (Free cloud hosting)**
Free forever. Push to GitHub, create Web Service, done. See `DEPLOY.md`.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

## Monetization Strategy

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | Up to 5 links, basic themes, DevTree branding |
| **Pro** | $5/mo | Unlimited links, all themes, analytics, no branding |
| **Team** | $12/mo | Everything in Pro + multiple users, custom domains |

### Revenue Math ($500/month Goal)

- **$500/month = ~100 customers at $5/mo**
- Or just **50 customers at $10/mo**

**This is very achievable.** Most successful indie hackers hit $500/mo in 3-6 months.

Reality check:
- Month 1-2: $0-100/month (finding first users)
- Month 3-4: $100-300/month (word of mouth)
- Month 5-6: **$500/month** (consistent marketing)
- Year 1: $1,000-3,000/month possible

## Project Structure

```
devtree/
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── dev.db             # SQLite database (local)
├── src/
│   ├── app/
│   │   ├── api/           # API routes (auth, links, analytics)
│   │   ├── [username]/    # Public profile pages
│   │   ├── dashboard/     # User dashboard
│   │   ├── login/         # Login page
│   │   ├── register/      # Registration page
│   │   └── page.tsx       # Landing page
│   ├── components/
│   │   └── Navbar.tsx
│   └── lib/
│       ├── auth.ts        # JWT & password helpers
│       ├── prisma.ts      # Prisma client singleton
│       └── utils.ts       # Tailwind class merger
```

## Next Steps

1. Add Stripe for payments (see `MARKETING.md` for integration guide)
2. Add custom domain support
3. Add more analytics (referrers, locations, devices)
4. Add social OG image generation for profiles
5. Launch on Product Hunt, Hacker News, IndieHackers

## License

MIT — build something great.
