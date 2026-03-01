# Backend Architecture

## 🏗 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Client Request                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                         server.js                            │
│                    (Application Entry)                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        Middleware                            │
│                  (CORS, JSON Parser)                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      routes/index.js                         │
│                     (Route Aggregator)                       │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                ▼                           ▼
    ┌───────────────────┐       ┌───────────────────┐
    │ productRoutes.js  │       │   aiRoutes.js     │
    │  /api/products    │       │    /api/ask       │
    └───────────────────┘       └───────────────────┘
                │                           │
                ▼                           ▼
    ┌───────────────────┐       ┌───────────────────┐
    │productController  │       │  aiController     │
    │   .getAllProducts │       │     .askAI        │
    │   .getProductById │       └───────────────────┘
    └───────────────────┘                   │
                │                           │
                ▼                           ▼
    ┌───────────────────┐       ┌───────────────────┐
    │   Product Model   │       │   AIService       │
    │   .getAll()       │       │.getRecommendations│
    │   .getById()      │       └───────────────────┘
    │   .getByCategory()│                   │
    └───────────────────┘                   │
                │                           ▼
                │               ┌───────────────────┐
                │               │   OpenAI API      │
                │               │  (GPT-3.5-turbo)  │
                │               └───────────────────┘
                ▼
    ┌───────────────────┐
    │  products.json    │
    │   (Data Store)    │
    └───────────────────┘
```

## 📂 Layer Responsibilities

### 1. Entry Point (server.js)
- Initialize Express app
- Load configuration
- Initialize models
- Mount routes
- Start server

### 2. Configuration (config/)
- Load environment variables
- Validate required config
- Export configuration object

### 3. Routes (routes/)
- Define API endpoints
- Map URLs to controllers
- HTTP method definitions

### 4. Controllers (controllers/)
- Handle HTTP requests
- Validate input
- Call models/services
- Format responses
- Handle errors

### 5. Models (models/)
- Data access layer
- Business logic
- Data validation
- CRUD operations

### 6. Services (services/)
- External API integrations
- Third-party service calls
- Complex business logic
- Reusable utilities

### 7. Middleware (middleware/)
- Error handling
- Request validation
- Logging
- Authentication (future)

## 🔄 Request Flow

### Product Request Flow
```
GET /api/products
    ↓
routes/productRoutes.js
    ↓
controllers/productController.getAllProducts()
    ↓
models/Product.getAll()
    ↓
data/products.json
    ↓
Response: [products]
```

### AI Search Flow
```
POST /api/ask
    ↓
routes/aiRoutes.js
    ↓
controllers/aiController.askAI()
    ↓
models/Product.getProductContext()
    ↓
services/aiService.getProductRecommendations()
    ↓
OpenAI API (GPT-3.5-turbo)
    ↓
services/aiService.parseResponse()
    ↓
models/Product.getByIds()
    ↓
Response: { productIds, summary, products }
```

## 🎯 Design Patterns

### 1. MVC (Model-View-Controller)
- **Model**: Product.js - Data and business logic
- **View**: JSON responses
- **Controller**: productController.js, aiController.js

### 2. Service Layer Pattern
- Separates business logic from controllers
- AIService handles OpenAI integration
- Reusable across controllers

### 3. Singleton Pattern
- Product model is a singleton
- AIService is a singleton
- Ensures single instance

### 4. Middleware Pattern
- Error handling middleware
- Request processing pipeline
- Extensible architecture

## 🔐 Security Layers

```
Request
    ↓
CORS Middleware (origin validation)
    ↓
JSON Parser (body parsing)
    ↓
Input Validation (controller)
    ↓
Business Logic (model/service)
    ↓
Error Handler (safe messages)
    ↓
Response
```

## 📊 Data Flow

### Product Data
```
products.json → Product Model → Controller → Response
```

### AI Data
```
User Query → Controller → Product Context
                              ↓
                         AI Service
                              ↓
                         OpenAI API
                              ↓
                    Parse & Validate
                              ↓
                      Product Model
                              ↓
                         Response
```

## 🧩 Component Dependencies

```
server.js
├── config/config.js
├── routes/index.js
│   ├── routes/productRoutes.js
│   │   └── controllers/productController.js
│   │       └── models/Product.js
│   └── routes/aiRoutes.js
│       └── controllers/aiController.js
│           ├── models/Product.js
│           └── services/aiService.js
└── middleware/errorHandler.js
```

## 🚀 Scalability Considerations

### Current Architecture
- Single server instance
- In-memory data
- Synchronous processing

### Future Enhancements
1. **Database Layer**
   - Add database connection pool
   - Implement repository pattern
   - Support multiple data sources

2. **Caching Layer**
   - Redis for AI responses
   - Product catalog caching
   - Rate limiting

3. **Queue System**
   - Async AI processing
   - Background jobs
   - Event-driven architecture

4. **Microservices**
   - Separate AI service
   - Product service
   - API gateway

## 🔧 Extension Points

### Adding New Routes
1. Create route file in `routes/`
2. Create controller in `controllers/`
3. Import in `routes/index.js`

### Adding New Models
1. Create model file in `models/`
2. Implement data access methods
3. Use in controllers

### Adding New Services
1. Create service file in `services/`
2. Implement business logic
3. Use in controllers

### Adding Middleware
1. Create middleware file in `middleware/`
2. Implement middleware function
3. Add to `server.js`

## 📝 Best Practices Implemented

✅ Separation of concerns
✅ Single responsibility principle
✅ DRY (Don't Repeat Yourself)
✅ Error handling at all layers
✅ Input validation
✅ Environment-based configuration
✅ Modular architecture
✅ Clear naming conventions
✅ Consistent code structure
