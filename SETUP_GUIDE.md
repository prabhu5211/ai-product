# Quick Setup Guide

## Step-by-Step Instructions

### 1. Install Dependencies

Open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd backend
npm install
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm install
```

### 2. Get OpenAI API Key

1. Go to https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (you won't see it again!)

### 3. Configure Backend

In the `backend` folder, create a `.env` file:

```env
OPENAI_API_KEY=sk-your-actual-key-here
PORT=3001
```

### 4. Start the Application

**Terminal 1 (Backend):**
```bash
cd backend
npm start
```

You should see:
```
Backend server running on http://localhost:3001
Products loaded: 8
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

### 5. Test the Application

1. Open http://localhost:5173 in your browser
2. You should see 8 products displayed
3. Try the example queries or type your own:
   - "Show me budget laptops under $1000"
   - "What's good for gaming?"
   - "I need accessories for my setup"

### Troubleshooting

**Backend won't start:**
- Check that you have a valid OpenAI API key in `.env`
- Make sure port 3001 is not in use

**Frontend shows errors:**
- Check that backend is running on port 3001
- Check browser console for CORS errors

**AI queries fail:**
- Verify your OpenAI API key is valid
- Check you have credits in your OpenAI account
- Look at backend terminal for error messages

## Testing the API Directly

You can test the backend API using curl or Postman:

**Get all products:**
```bash
curl http://localhost:3001/api/products
```

**Ask AI a question:**
```bash
curl -X POST http://localhost:3001/api/ask ^
  -H "Content-Type: application/json" ^
  -d "{\"query\": \"Show me gaming products\"}"
```

## Project Structure

```
├── backend/
│   ├── server.js          # Express server with API endpoints
│   ├── products.json      # Product catalog (8 products)
│   ├── package.json       # Backend dependencies
│   └── .env              # Environment variables (create this)
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx           # Main application component
│   │   ├── components/
│   │   │   ├── ProductCard.jsx    # Reusable product card
│   │   │   └── SearchBox.jsx      # AI search interface
│   │   └── main.jsx
│   ├── package.json       # Frontend dependencies
│   └── index.html
│
└── README.md             # Main documentation
```
