# Push to GitHub Guide

## 🚀 Quick Steps

### 1. Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: AI Product Discovery app"
```

### 2. Add Remote Repository

```bash
git remote add origin https://github.com/prabhu5211/ai-product.git
```

### 3. Push to GitHub

```bash
git branch -M main
git push -u origin main
```

---

## 📋 Detailed Steps

### Step 1: Check Git Status

```bash
git status
```

You should see all your files listed.

### Step 2: Stage All Files

```bash
git add .
```

### Step 3: Commit Changes

```bash
git commit -m "feat: Complete AI product discovery application

- Backend with Express and MVC architecture
- Frontend with React and Vite
- AI integration with Groq (Llama 3.3)
- Product catalog with images
- Natural language search
- Responsive UI design"
```

### Step 4: Add Remote

```bash
git remote add origin https://github.com/prabhu5211/ai-product.git
```

### Step 5: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

If you get an error about existing content, use:
```bash
git push -u origin main --force
```

---

## 🔐 If You Need Authentication

### Using Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scopes: `repo`
4. Copy the token
5. When pushing, use token as password

### Using SSH

1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. Add to GitHub: Settings → SSH and GPG keys
3. Change remote to SSH:
   ```bash
   git remote set-url origin git@github.com:prabhu5211/ai-product.git
   ```

---

## ✅ Verify Push

1. Go to https://github.com/prabhu5211/ai-product
2. You should see all your files
3. Check that `.env` is NOT pushed (it should be in .gitignore)

---

## 📝 Next Steps After Push

1. Deploy backend to Railway
2. Deploy frontend to Vercel
3. Update README with live demo links
4. Add screenshots to README

See DEPLOYMENT.md for deployment instructions!
