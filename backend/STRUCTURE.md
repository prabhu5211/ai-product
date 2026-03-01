# Backend Structure Overview

## 📁 Complete Directory Structure

```
backend/
│
├── config/                    # Configuration
│   └── config.js             # Environment & validation
│
├── controllers/              # Request handlers
│   ├── productController.js  # Product logic
│   └── aiController.js       # AI search logic
│
├── data/                     # Data storage
│   └── products.json         # 8 products
│
├── middleware/               # Express middleware
│   └── errorHandler.js       # Error & 404 handling
│
├── models/                   # Data models
│   └── Product.js            # Product data layer
│
├── routes/                   # API routes
│   ├── index.js             # Route aggregator
│   ├── productRoutes.js     # /api/products
│   └── aiRoutes.js          # /api/ask
│
├── services/                 # Business services
│   └── aiService.js         # OpenAI integration
│
├── server.js                # Entry point
├── package.json             # Dependencies
├── .env.example             # Env template
└── README.md               # Documentation
```

## 🎯 Layer Responsibilities

**Routes** → Define endpoints
**Controllers** → Handle requests
**Models** → Access data
**Services** → External APIs
**Middleware** → Cross-cutting concerns

## 📦 Key Files

- **server.js** - App initialization
- **config/config.js** - Configuration
- **models/Product.js** - Data access
- **services/aiService.js** - OpenAI integration
- **controllers/** - Business logic
- **routes/** - API endpoints
