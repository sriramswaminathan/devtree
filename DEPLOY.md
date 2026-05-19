# Deploy DevTree (Zero Experience Required)

You have **3 options** below. Pick ONE based on what you want.

| Option | Best For | Difficulty | Cost |
|--------|----------|------------|------|
| **A. Docker Compose** | Run on your computer or any cheap server | Easiest | Free |
| **B. Railway** | One-click cloud deploy with custom domain | Very Easy | ~$5/mo after trial |
| **C. Render** | Free cloud hosting forever | Easy | Free |

---

## Option A: Docker Compose (Recommended for Beginners)

This runs your app in one command. Works on **Windows, Mac, and Linux**.

### Step 1: Install Docker
- Go to https://www.docker.com/products/docker-desktop
- Download and install (just click Next Next Next)
- Open Docker Desktop and wait until it says "Engine Running"

### Step 2: Open your project folder
Open PowerShell (Windows) or Terminal (Mac/Linux) and type:
```bash
cd C:\Users\srira\projects\devtree
```
*(On Mac/Linux the path will be different, just `cd` to where you put the folder)*

### Step 3: Run one command
```bash
docker-compose up -d
```

Wait 2-3 minutes. Done.

### Step 4: Open your app
Go to `http://localhost:3000` in your browser.

**Your app is live!** Anyone on your WiFi can visit it. To put it on the real internet, you'd need a server (see Option B or C).

### Stop the app
```bash
docker-compose down
```

### Update after code changes
```bash
docker-compose up -d --build
```

---

## Option B: Railway (One-Click Cloud)

Railway is the closest thing to "magic deploy." You push code to GitHub, connect Railway, and it goes live.

### Step 1: Push to GitHub
If you've never used GitHub:
1. Go to https://github.com/new
2. Repository name: `devtree`
3. Click **Create repository**
4. In PowerShell/Terminal, run these commands EXACTLY:
```bash
cd C:\Users\srira\projects\devtree
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/devtree.git
git push -u origin main
```
*(Replace YOUR_USERNAME with your actual GitHub username)*

### Step 2: Deploy on Railway
1. Go to https://railway.app and sign up with GitHub
2. Click **New Project** → **Deploy from GitHub repo**
3. Select your `devtree` repo
4. Railway will detect the Dockerfile and build it automatically
5. Click **Settings** → **Domains** → **Generate Domain**
6. Your app is now on the real internet!

### Step 3: Set environment variables
In Railway dashboard:
1. Go to your project → **Variables**
2. Add these:
   - `JWT_SECRET` → type any random long sentence (minimum 32 characters)
   - `NEXT_PUBLIC_APP_URL` → paste your Railway domain (e.g., `https://devtree-production.up.railway.app`)
3. Click **Deploy** again

---

## Option C: Render (Free Cloud Forever)

Render has a generous free tier that never expires.

### Step 1: Push to GitHub
Same as Railway Step 1 above.

### Step 2: Create Web Service (Two Ways)

**Easy way — Blueprint button:**
1. Push code to GitHub first (Step 1 above)
2. Click this button: [![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/YOUR_USERNAME/devtree)
3. *(Replace YOUR_USERNAME with your actual GitHub username in the URL)*

**Manual way:**
1. Go to https://render.com and sign up with GitHub
2. Click **New** → **Web Service**
3. Connect your GitHub repo `devtree`
4. Fill the form:
   - **Name**: devtree
   - **Runtime**: Docker
   - **Plan**: Free
   - Everything else: leave default
5. Click **Create Web Service**

### Step 3: Add environment variables
1. In Render dashboard, click your service
2. Go to **Environment** tab
3. Add:
   - `JWT_SECRET` → any random long sentence (minimum 32 characters)
   - `NEXT_PUBLIC_APP_URL` → your Render URL (shown at top of dashboard)
4. Click **Save Changes**
5. Render will auto-redeploy

Your app will be live at `https://devtree-xxx.onrender.com`

**Note:** Free Render apps "sleep" after 15 minutes of no traffic. First visit after sleep takes ~30 seconds to wake up. Upgrade to $7/mo to keep it awake 24/7.

---

## How to Add a Custom Domain (Look Professional)

Once deployed, you want `yourdomain.com` instead of `devtree-xxx.onrender.com`.

### Buy a domain
- Go to https://namecheap.com or https://porkbun.com
- Search for a name (e.g., `devtree.io`, `mylinks.app`)
- Buy it (~$10/year)

### Connect it
Every platform is slightly different, but the steps are always:
1. In your hosting dashboard (Railway/Render/Vercel), go to **Custom Domains**
2. Type your domain and click **Add**
3. Go to your domain registrar (Namecheap/Porkbun)
4. Find **DNS Settings** or **Advanced DNS**
5. Add a `CNAME` record:
   - Host: `@` or `www`
   - Value: paste the domain from your hosting provider
6. Wait 5 minutes to 2 hours
7. Your site works on your custom domain!

---

## Troubleshooting

**"Docker not found"**
→ Docker Desktop is not running. Open it and wait for the whale icon to stop animating.

**"Port 3000 already in use"**
→ Something else is using port 3000. In `docker-compose.yml`, change `3000:3000` to `3001:3000`, then visit `http://localhost:3001`

**"Database error"**
→ Delete the old database and restart:
```bash
docker-compose down -v
docker-compose up -d --build
```

**"Build failed on Railway/Render"**
→ Make sure you committed ALL files including `prisma/`, `src/`, `package.json`, etc.

---

## Which Should You Pick?

| Your Situation | Pick This |
|----------------|-----------|
| Just testing on my laptop | **Option A: Docker Compose** |
| I want it live today with zero server management | **Option B: Railway** |
| I want free hosting and don't mind 30-sec wake-up | **Option C: Render** |

All three are production-ready. Your users won't know the difference.
