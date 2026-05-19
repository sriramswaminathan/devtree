# DevTree Marketing Playbook

## The Hard Truth

**I cannot do your marketing for you.** Marketing is a daily, relentless activity that requires human judgment, relationship building, and adaptability. But I can give you the exact playbook that successful indie hackers use to go from $0 to $500/month.

---

## Phase 1: Pre-Launch (Week 1)

### 1. Pick Your Niche (Don't Sell to Everyone)

Instead of "link in bio for everyone," start with:
- **Open source developers**
- **Indie hackers / solopreneurs**
- **Designers on Dribbble/Behance**
- **Substack writers**

Why? Niching down lets you speak their language. You can always expand later.

### 2. Create 5 "Lighthouse" Profiles

Before you launch, manually create beautiful profiles for 5 influencers in your niche. Message them: *"I built you a profile page. It's yours if you want it — just need to set a password."*

This gives you:
- Social proof
- Case studies
- Potential backlinks/shares

### 3. Set Up Your Presence

- [ ] Twitter/X account: `@DevTreeHQ`
- [ ] IndieHackers account
- [ ] Product Hunt account (with maker badge)
- [ ] GitHub repo (open source the landing page or a component)
- [ ] Wait, don't spend too long here. Ship first.

---

## Phase 2: Launch (Week 2)

### Where to Launch (In Order)

1. **Your personal network**
   - Tweet a thread about why you built it
   - Post on LinkedIn
   - Share in 3 relevant Discord/Slack communities
   - Expected: 10-50 signups

2. **Hacker News "Show HN"**
   - Title: *"Show HN: I built a Linktree alternative for developers"*
   - Focus on the tech and the "why developers hate Linktree" angle
   - Expected: 100-2,000 visitors (high variance)

3. **Reddit**
   - r/webdev, r/SideProject, r/selfhosted, r/IndieHackers
   - Don't be spammy. Post as "I built this, would love feedback"
   - Expected: 50-500 visitors

4. **Product Hunt**
   - Prepare gallery images (use Canva)
   - Get 3-5 friends to upvote in first hour
   - Expected: 200-1,000 visitors

5. **IndieHackers**
   - Write a "Building in Public" post
   - Share revenue numbers honestly (even if $0)

### Launch Day Checklist

- [ ] Website is live and bug-free
- [ ] You can register, create profile, and share link in under 2 minutes
- [ ] Analytics dashboard is working
- [ ] You have a "Pro" pricing page ready (even if Stripe isn't integrated yet — collect emails!)

---

## Phase 3: Growth (Month 2-6)

### Content Marketing (The Free Engine)

Post 3x per week on Twitter/X:
- **Monday**: Share a user's profile (with permission)
- **Wednesday**: Tech tip ("How I optimized page load to 0.4s")
- **Friday**: Build in public update ("Added dark mode, here's the CSS trick")

Also:
- Write 1 blog post per month comparing DevTree vs alternatives
- Create a "Best link-in-bio tools" blog post where you rank yourself #2 (honest comparison)
- Post video tutorials on TikTok/YouTube Shorts ("How to make a bio link in 60 seconds")

### Cold Outreach (The Fast Engine)

Find 50 developers/designers per week who:
- Have a Linktree in their bio
- Have a messy list of links in their bio
- Just launched a product on Product Hunt

Message them:
> "Hey [Name], noticed you're using Linktree. I built DevTree specifically for developers — no bloat, instant load, and you own your data. Happy to upgrade you to Pro free for a year if you want to try it. [link]"

Expected conversion: 5-10% try it, 1-2% convert to paid eventually.

### SEO (The Slow Engine)

Target keywords:
- "link in bio for developers"
- "Linktree alternative"
- "free link in bio tool"
- "developer portfolio links"

Write landing pages for each:
- `/alternatives/linktree`
- `/for/developers`
- `/for/designers`

This takes 3-6 months to work, but compounds forever.

---

## Phase 4: Monetization

### Adding Payments (Stripe)

```bash
npm install stripe @stripe/stripe-js
```

1. Create Stripe account
2. Create products: Pro ($5/mo) and Team ($12/mo)
3. Add Stripe Checkout or Customer Portal
4. Gate features based on `user.subscriptionStatus`

### When to Add Payments?

- **Now** — even if 0 people pay. It signals legitimacy.
- Add a "Upgrade to Pro" button in dashboard
- Offer 50% off for first 100 customers (scarcity)

### Pricing Psychology

- **Anchoring**: Show Team at $12 so Pro at $5 feels cheap
- **Annual discount**: $48/year instead of $60 (2 months free)
- **Lifetime deal**: $99 one-time for first 50 users (great for early revenue)

---

## Realistic Revenue Timeline ($500/month Goal)

| Month | Users | Paying | MRR | Your Action |
|-------|-------|--------|-----|-------------|
| 1 | 100 | 0 | $0 | Launch, fix bugs, collect feedback |
| 2 | 300 | 5 | $25 | Cold outreach, Twitter content |
| 3 | 800 | 15 | $75 | First blog post, SEO |
| 4 | 1,500 | 25 | $125 | Product Hunt relaunch, new feature |
| 5 | 2,500 | 50 | $250 | Affiliate program, partnerships |
| 6 | 4,000 | 100 | $500 | **GOAL HIT** — Paid ads, scale up |
| 12 | 10,000 | 250 | $1,250 | Team, automation |

**$500/month is very realistic by Month 6** if you work on it 1-2 hours daily. That's just **100 customers paying $5/month** or **50 customers paying $10/month**.

---

## What You Must Do Every Day

1. **Post on Twitter/X** (15 min)
2. **Message 10 potential users** (30 min)
3. **Check analytics and fix top friction point** (15 min)
4. **Build 1 small improvement** (1-2 hours)

**Total: 2-3 hours/day. Consistency beats intensity.**

---

## Emergency Tactics (Need Money Fast?)

If you need revenue *this month*, don't rely on the product alone:

1. **Offer setup as a service**: "I'll build your DevTree profile for $50"
2. **Sell Notion templates** with your branding
3. **Offer bio audits**: "I'll optimize your link-in-bio for $30"
4. **Freelance using the product**: Build bio pages for clients, use DevTree as the delivery tool

These aren't scalable, but they can fund your runway while the SaaS grows.

---

## Success Metrics

Track weekly:
- New signups
- Profiles created
- Click-through rate on profiles
- Conversion rate to Pro
- Churn rate

Your north star metric: **Monthly Recurring Revenue (MRR)**

---

## Final Advice

> "The product is built. Now the real work begins."

You have a production-ready MVP. That's 20% of the journey. The other 80% is:
- Talking to users
- Marketing every day
- Iterating based on feedback
- Not giving up when Month 1 revenue is $0

**Start today. Post your first tweet. Message your first user. Ship your first improvement.**

The $500/day is possible. But it's on the other side of 6 months of showing up every day.
