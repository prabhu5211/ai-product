# Deployment Guide

## 🚀 Quick Deploy

### Backend: Railway
### Frontend: Vercel

---

## 📦 Backend Deployment (Railway)

### Step 1: Prepare Backend

1. Make sure `backend/package.json` has start script:
   ```json
   "scripts": {
     "start": "node server.js"
   }
   ```

2. Backend is ready! ✅

### Step 2: Deploy to Railway

1. Go to https://railway.app/
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Select "backend" as root directory
7. Add environment variables:
   ```
   USE_GROQ=true
   GROQ_API_KEY=your_groq_api_key_here
   PORT=3001
   NODE_ENV=production
   ```
8. Deploy!

Railway will give you a URL like: `https://your-app.railway.app`

---

## 🎨 Frontend Deployment (Vercel)

### Step 1: Update API URL

Before deploying, update the frontend to use your Railway backend URL.

Edit `frontend/src/App.jsx`:
```javascript
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'
```

Create `frontend/.env.production`:
```
VITE_API_URL=https://your-railway-app.railway.app/api
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com/
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Root Directory: frontend
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add environment variable:
   ```
   VITE_API_URL=https://your-railway-app.railway.app/api
   ```
7. Deploy!

Vercel will give you a URL like: `https://your-app.vercel.app`

---

## 🔧 Alternative: Render (Both Backend & Frontend)

### Backend on Render

1. Go to https://render.com/
2. Sign up/Login
3. Click "New +" → "Web Service"
4. Connect GitHub repository
5. Configure:
   - Name: product-discovery-backend
   - Root Directory: backend
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables (same as Railway)
7. Deploy!

### Frontend on Render

1. Click "New +" → "Static Site"
2. Connect GitHub repository
3. Configure:
   - Name: product-discovery-frontend
   - Root Directory: frontend
   - Build Command: `npm install && npm run build`
   - Publish Directory: dist
4. Add environment variable with backend URL
5. Deploy!

---

## 📝 Post-Deployment Checklist

- [ ] Backend is running and accessible
- [ ] Frontend is deployed
- [ ] Frontend can connect to backend (check CORS)
- [ ] AI queries work
- [ ] Product images load
- [ ] No console errors

---

## 🐛 Troubleshooting

### CORS Issues
If frontend can't connect to backend, add your frontend URL to CORS in `backend/server.js`:

```javascript
app.use(cors({
  origin: ['https://your-frontend.vercel.app', 'http://localhost:5173']
}));
```

### Environment Variables Not Working
- Make sure to redeploy after adding env vars
- Check env var names match exactly
- Restart the service

### Build Fails
- Check Node.js version (use 18+)
- Verify all dependencies are in package.json
- Check build logs for specific errors

---

## 💰 Cost

- **Railway**: Free tier (500 hours/month)
- **Vercel**: Free tier (unlimited)
- **Render**: Free tier (750 hours/month)
- **Groq API**: FREE unlimited

Total: $0/month! 🎉
