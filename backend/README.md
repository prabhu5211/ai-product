# Backend API - Product Discovery

Express.js backend with OpenAI integration for AI-powered product recommendations.

## 📁 Project Structure

```
backend/
├── config/
│   └── config.js              # Configuration and env validation
├── controllers/
│   ├── productController.js   # Product business logic
│   └── aiController.js        # AI recommendation logic
├── data/
│   └── products.json          # Product catalog
├── middleware/
│   └── errorHandler.js        # Error handling middleware
├── models/
│   └── Product.js             # Product data model
├── routes/
│   ├── index.js               # Route aggregator
│   ├── productRoutes.js       # Product endpoints
│   └── aiRoutes.js            # AI endpoints
├── services/
│   └── aiService.js           # OpenAI service integration
├── server.js                  # Application entry point
├── package.json
└── .env                       # Environment variables (create this)
```

## 🏗 Architecture

**MVC Pattern:**
- **Models**: Data access and business logic
- **Controllers**: Request handling and response formatting
- **Routes**: Endpoint definitions
- **Services**: External API integrations
- **Middleware**: Cross-cutting concerns (errors, validation)

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Configure Environment
Create `.env` file:
```env
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
NODE_ENV=development
```

### Run Server
```bash
# Production mode
npm start

# Development mode (auto-reload)
npm run dev
```

## 📡 API Endpoints

### Products

**GET /api/products**
- Get all products or filter by category
- Query params: `?category=Electronics`
- Response: Array of products

**GET /api/products/:id**
- Get single product by ID
- Response: Product object or 404

### AI Search

**POST /api/ask**
- Natural language product search
- Body: `{ "query": "Show me gaming products" }`
- Response:
```json
{
  "productIds": [1, 3, 4],
  "summary": "AI explanation",
  "products": [...]
}
```

## 🧪 Testing

### Test with curl

```bash
# Get all products
curl http://localhost:3001/api/products

# Get products by category
curl "http://localhost:3001/api/products?category=Electronics"

# Get single product
curl http://localhost:3001/api/products/1

# AI search
curl -X POST http://localhost:3001/api/ask ^
  -H "Content-Type: application/json" ^
  -d "{\"query\": \"Show me budget laptops\"}"
```

## 🔧 Configuration

**Environment Variables:**
- `OPENAI_API_KEY` (required) - OpenAI API key
- `PORT` (optional) - Server port, default: 3001
- `NODE_ENV` (optional) - Environment mode, default: development

## 🛡 Error Handling

- **400** - Bad request (invalid input)
- **404** - Resource not found
- **500** - Internal server error
- **502** - AI service authentication failed
- **503** - AI service unavailable

## 📦 Dependencies

- **express** - Web framework
- **cors** - CORS middleware
- **dotenv** - Environment variables
- **openai** - OpenAI API client

## 🔐 Security

- API keys stored in environment variables
- No secrets in code
- Safe error messages (no internal details)
- Input validation on all endpoints

## 🚀 Deployment

1. Set environment variables on hosting platform
2. Install dependencies: `npm install`
3. Start server: `npm start`

**Recommended platforms:**
- Railway
- Render
- Heroku
- AWS Elastic Beanstalk
