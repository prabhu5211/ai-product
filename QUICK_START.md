# Quick Start - 5 Minutes to Running

## Prerequisites Check
- [ ] Node.js 18+ installed (`node --version`)
- [ ] OpenAI API key ready

## Installation (2 minutes)

```bash
# Backend
cd backend
npm install

# Frontend (in new terminal)
cd frontend
npm install
```

## Configuration (1 minute)

Create `backend/.env`:
```env
OPENAI_API_KEY=sk-your-key-here
PORT=3001
```

## Run (1 minute)

**Terminal 1:**
```bash
cd backend
npm start
```

**Terminal 2:**
```bash
cd frontend
npm run dev
```

## Test (1 minute)

1. Open http://localhost:5173
2. Click "Show me budget laptops under $1000"
3. See AI recommendations!

## Troubleshooting

**Backend won't start?**
- Check your OpenAI API key in `.env`
- Make sure port 3001 is free

**Frontend shows errors?**
- Verify backend is running on port 3001
- Check browser console for details

**AI queries fail?**
- Verify OpenAI API key is valid
- Check you have credits in your OpenAI account

## Next Steps

- Read **TESTING_GUIDE.md** for more example queries
- Read **IMPLEMENTATION_NOTES.md** for architecture details
- Read **EVALUATION_CHECKLIST.md** for assessment criteria

## Quick Commands

```bash
# Install everything at once
npm run install:all

# Test backend API
curl http://localhost:3001/api/products

# Test AI endpoint
curl -X POST http://localhost:3001/api/ask ^
  -H "Content-Type: application/json" ^
  -d "{\"query\": \"gaming products\"}"
```

## What You Should See

### Backend Terminal:
```
Backend server running on http://localhost:3001
Products loaded: 8
```

### Frontend Terminal:
```
VITE v5.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

### Browser:
- 8 product cards displayed
- Search box with example queries
- Clean, modern interface

## Success Criteria

✅ Application runs without errors
✅ Can view all 8 products
✅ Can submit AI queries
✅ AI returns relevant results
✅ Results display correctly

---

**Total Time: ~5 minutes**

For detailed instructions, see **SETUP_GUIDE.md**
