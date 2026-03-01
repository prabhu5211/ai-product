# Testing Guide

## Quick Start Testing

### 1. Verify Backend is Running

Open http://localhost:3001/api/products in your browser. You should see JSON with 8 products.

### 2. Verify Frontend is Running

Open http://localhost:5173 in your browser. You should see the product discovery interface with 8 product cards.

## Example Queries to Test

### Budget Queries
**Query:** "Show me budget laptops under $1000"
**Expected:** Should return product ID 2 (Budget Office Laptop - $599.99)
**AI Summary:** Should mention budget-friendly laptop option

**Query:** "What's the cheapest product?"
**Expected:** Should return product ID 3 (Wireless Gaming Mouse - $79.99)

### Category Queries
**Query:** "Show me gaming products"
**Expected:** Should return products 1, 3, 4, 5 (gaming laptop, mouse, keyboard, monitor)
**AI Summary:** Should mention gaming-focused products

**Query:** "I need accessories for my setup"
**Expected:** Should return products 3, 4, 8 (mouse, keyboard, webcam)

**Query:** "What audio products do you have?"
**Expected:** Should return product 6 (Noise-Cancelling Headphones)

### Use Case Queries
**Query:** "Best products for office work"
**Expected:** Should return products 2, 8 (office laptop, webcam)
**AI Summary:** Should mention productivity and office use

**Query:** "I need storage solutions"
**Expected:** Should return product 7 (Portable SSD)

**Query:** "What's good for video calls?"
**Expected:** Should return products 6, 8 (headphones, webcam)

### Feature-Based Queries
**Query:** "Show me wireless products"
**Expected:** Should return products 3, 6 (wireless mouse, wireless headphones)

**Query:** "I want something with RGB lighting"
**Expected:** Should return products 3, 4 (gaming mouse, mechanical keyboard)

**Query:** "What has USB-C?"
**Expected:** Should return product 7 (Portable SSD)

### Price Range Queries
**Query:** "Show me products under $100"
**Expected:** Should return products 3, 7, 8 (mouse, SSD, webcam)

**Query:** "What's available between $100 and $300?"
**Expected:** Should return products 4, 6, 7 (keyboard, headphones, SSD)

**Query:** "Show me premium products over $1000"
**Expected:** Should return product 1 (Gaming Laptop Pro X1)

### Complex Queries
**Query:** "I'm a gamer on a budget, what should I get?"
**Expected:** Should return affordable gaming products (3, 4)
**AI Summary:** Should mention budget gaming options

**Query:** "I need a complete gaming setup"
**Expected:** Should return products 1, 3, 4, 5 (laptop, mouse, keyboard, monitor)

**Query:** "What do I need for streaming?"
**Expected:** Should return products 6, 8 (headphones, webcam)

## API Testing with curl

### Test GET /api/products

```bash
# Get all products
curl http://localhost:3001/api/products

# Filter by category
curl "http://localhost:3001/api/products?category=Electronics"
```

### Test POST /api/ask

```bash
# Windows CMD
curl -X POST http://localhost:3001/api/ask ^
  -H "Content-Type: application/json" ^
  -d "{\"query\": \"Show me gaming products\"}"

# PowerShell
curl -X POST http://localhost:3001/api/ask `
  -H "Content-Type: application/json" `
  -d '{\"query\": \"Show me gaming products\"}'
```

## Error Testing

### Test Invalid Requests

**Empty query:**
```bash
curl -X POST http://localhost:3001/api/ask ^
  -H "Content-Type: application/json" ^
  -d "{\"query\": \"\"}"
```
**Expected:** 400 Bad Request

**Missing query field:**
```bash
curl -X POST http://localhost:3001/api/ask ^
  -H "Content-Type: application/json" ^
  -d "{}"
```
**Expected:** 400 Bad Request

**Invalid JSON:**
```bash
curl -X POST http://localhost:3001/api/ask ^
  -H "Content-Type: application/json" ^
  -d "invalid json"
```
**Expected:** 400 Bad Request

### Test API Key Issues

1. Stop the backend
2. Remove or invalidate OPENAI_API_KEY in .env
3. Restart backend
4. Try a query in the frontend
**Expected:** Error message about AI service authentication

### Test Network Issues

1. Stop the backend
2. Try to use the frontend
**Expected:** Error message about connection failure

## Frontend Testing Checklist

### Initial Load
- [ ] Page loads without errors
- [ ] All 8 products are displayed
- [ ] Product cards show: name, category, price, description, tags
- [ ] Search box is visible and enabled
- [ ] Example queries are clickable

### Search Functionality
- [ ] Can type in search box
- [ ] Submit button enables when text is entered
- [ ] Clicking example query populates search box
- [ ] Submitting shows loading state
- [ ] Results display after loading
- [ ] AI summary appears above results
- [ ] Product count updates

### Reset Functionality
- [ ] Reset button returns to full catalog
- [ ] Search box clears
- [ ] AI summary disappears
- [ ] All 8 products show again

### Loading States
- [ ] Spinner shows during search
- [ ] Buttons disable during loading
- [ ] "Searching products..." message appears
- [ ] UI doesn't freeze

### Error Handling
- [ ] Network errors show user-friendly message
- [ ] API errors show appropriate message
- [ ] Error message is visible and clear
- [ ] Can recover from errors

### Responsive Design
- [ ] Works on desktop (1920x1080)
- [ ] Works on tablet (768px)
- [ ] Works on mobile (375px)
- [ ] Cards stack properly on small screens

## Backend Testing Checklist

### Server Startup
- [ ] Starts without errors
- [ ] Loads 8 products from JSON
- [ ] Listens on port 3001
- [ ] Console shows success message

### GET /api/products
- [ ] Returns 200 status
- [ ] Returns array of 8 products
- [ ] Each product has all required fields
- [ ] Category filter works
- [ ] Returns valid JSON

### POST /api/ask
- [ ] Accepts JSON body
- [ ] Validates query field
- [ ] Calls OpenAI API
- [ ] Returns structured response
- [ ] Includes productIds array
- [ ] Includes summary string
- [ ] Includes products array
- [ ] Returns valid JSON

### Error Handling
- [ ] Returns 400 for invalid input
- [ ] Returns 502 for auth errors
- [ ] Returns 503 for rate limits
- [ ] Returns 503 for other API errors
- [ ] Error messages are safe (no internal details)
- [ ] Doesn't crash on errors

## Performance Testing

### Response Times
- GET /api/products: Should be < 50ms
- POST /api/ask: Should be < 3 seconds (depends on OpenAI)

### Load Testing (Optional)
```bash
# Install Apache Bench
# Test products endpoint
ab -n 100 -c 10 http://localhost:3001/api/products

# Expected: All requests succeed, avg response < 100ms
```

## Integration Testing

### End-to-End Flow
1. Open frontend
2. See all products loaded
3. Click example query "Show me gaming products"
4. See loading state
5. See AI summary appear
6. See filtered products (gaming-related)
7. Click Reset
8. See all products again

### Expected Behavior
- No console errors
- Smooth transitions
- Clear feedback at each step
- Results make sense

## Acceptance Criteria

### Must Have ✅
- [ ] Application runs without errors
- [ ] Can view all products
- [ ] Can submit natural language queries
- [ ] AI returns relevant products
- [ ] Results display correctly
- [ ] Basic error handling works
- [ ] No API keys in code

### Should Have ✅
- [ ] Loading states
- [ ] Error messages
- [ ] Reset functionality
- [ ] Example queries
- [ ] Responsive design
- [ ] Clean UI

### Nice to Have
- [ ] Product detail view
- [ ] Search history
- [ ] Caching
- [ ] Advanced filters
- [ ] Deployment

## Common Issues & Solutions

### Issue: "Failed to fetch products"
**Solution:** Check backend is running on port 3001

### Issue: "AI service authentication failed"
**Solution:** Verify OPENAI_API_KEY in backend/.env

### Issue: "Rate limit exceeded"
**Solution:** Wait a moment or check OpenAI account credits

### Issue: Products not displaying
**Solution:** Check browser console for errors, verify API response

### Issue: CORS errors
**Solution:** Ensure backend has cors() middleware enabled

### Issue: Port already in use
**Solution:** Kill process on port 3001 or change PORT in .env

## Success Metrics

### Functionality
- ✅ All features work as expected
- ✅ No crashes or errors
- ✅ AI returns relevant results

### Code Quality
- ✅ Clean, readable code
- ✅ Proper error handling
- ✅ Good component structure

### User Experience
- ✅ Intuitive interface
- ✅ Clear feedback
- ✅ Fast response times

### Documentation
- ✅ Clear setup instructions
- ✅ API documentation
- ✅ Testing guide

## Final Checklist

Before submitting:
- [ ] Application runs end-to-end
- [ ] All example queries work
- [ ] Error handling tested
- [ ] README is complete
- [ ] No API keys in code
- [ ] .gitignore is proper
- [ ] Code is clean and commented
- [ ] Git history is clean
