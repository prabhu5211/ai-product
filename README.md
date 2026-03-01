# AI Product Discovery - Full-Stack Assessment

A mini product discovery experience with natural language search powered by AI/LLM integration. Users can browse products and ask questions in natural language to get AI-powered recommendations.

## 🎯 Features

- 📦 Browse product catalog (8 diverse products)
- 🤖 Natural language product search using OpenAI
- 💡 AI-generated product recommendations with explanations
- 🎨 Clean, responsive UI with loading and error states
- 🔄 Reset functionality to return to full catalog
- 💬 Example queries for better user experience

## 🛠 Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: React + Vite
- **AI**: OpenAI GPT-3.5-turbo
- **Styling**: CSS (no frameworks)

## 🏗 Architecture

```
User Query → Frontend (React) → Backend API (Express) → OpenAI API
                ↓                        ↓                    ↓
         Display Results ← Parse Response ← AI Recommendations
```

## 📁 Project Structure

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
├── README.md                      # This file
├── SETUP_GUIDE.md                 # Detailed setup instructions
├── TESTING_GUIDE.md               # Example queries and testing
├── EVALUATION_CHECKLIST.md        # Evaluation criteria
└── IMPLEMENTATION_NOTES.md        # Architecture decisions
```

## 🚀 Setup Instructions

### Prerequisites

- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### 1. Clone and Install

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment

Create `backend/.env` file:

```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
```

Or copy from example:
```bash
cd backend
copy .env.example .env
# Then edit .env with your actual API key
```

### 3. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
Backend runs on http://localhost:3001

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:5173

Open your browser and navigate to http://localhost:5173

## 📡 API Endpoints

- `GET /api/products` - List all products (optional ?category filter)
- `POST /api/ask` - Natural language product search
  ```json
  {
    "query": "Show me budget laptops under $1000"
  }
  ```

## ✅ What's Implemented

### Backend (Mandatory)
- ✅ Product catalog with 8 products (JSON file)
- ✅ `GET /api/products` - List/filter products
- ✅ `POST /api/ask` - Natural language search with LLM
- ✅ OpenAI integration with structured prompts
- ✅ Robust error handling (401, 429, 503)
- ✅ Environment-based configuration
- ✅ No hardcoded secrets

### Frontend (Mandatory)
- ✅ Product list view with cards
- ✅ Natural language search interface
- ✅ React state management (useState, useEffect)
- ✅ API integration with loading/error states
- ✅ Reusable components (ProductCard, SearchBox)
- ✅ Props and component composition

### AI/LLM (Mandatory)
- ✅ Prompt includes full product context
- ✅ Structured JSON output from LLM
- ✅ Response parsing with fallbacks
- ✅ Error handling for API failures
- ✅ Safe error messages (no internal details)

### Bonus Features
- ✅ Example queries for better UX
- ✅ Reset functionality
- ✅ AI summary display
- ✅ Responsive design
- ✅ Comprehensive documentation

## 🧪 Example Queries

Try these in the application:
- "Show me budget laptops under $1000"
- "What's good for gaming?"
- "I need accessories for my setup"
- "Best products for office work"
- "Show me wireless products"

## ⏱ Time Spent

Approximately 3 hours (within 2-4 hour target)

## 📚 Documentation

- **README.md** - This file (overview and setup)
- **SETUP_GUIDE.md** - Detailed step-by-step setup instructions
- **TESTING_GUIDE.md** - Example queries and testing procedures
- **EVALUATION_CHECKLIST.md** - Evaluation criteria and scoring
- **IMPLEMENTATION_NOTES.md** - Architecture decisions and trade-offs

## 🚀 Future Enhancements

**Short Term (2-4 hours):**
- Product detail pages with AI-generated descriptions
- Response caching (Redis)
- Category and price filtering
- Sort options

**Long Term:**
- Database integration (PostgreSQL)
- User authentication
- Shopping cart functionality
- Multi-step agentic flows
- Deployment to Vercel/Railway
- Analytics dashboard

## 📝 Evaluation Criteria

This project demonstrates:
- ✅ Backend API design and implementation
- ✅ Frontend React component architecture
- ✅ LLM integration and prompt engineering
- ✅ Error handling and user experience
- ✅ Clean, maintainable code
- ✅ Security best practices (no exposed secrets)
- ✅ Clear documentation

See **EVALUATION_CHECKLIST.md** for detailed scoring criteria.

## 🤝 Contributing

This is an assessment project, but feedback is welcome!

## 📄 License

MIT
