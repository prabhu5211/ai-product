# Evaluation Checklist

## Quick Test (15-20 min)

### Setup & Run
- [ ] Clone repository
- [ ] Install backend dependencies (`cd backend && npm install`)
- [ ] Install frontend dependencies (`cd frontend && npm install`)
- [ ] Create `.env` file with `OPENAI_API_KEY`
- [ ] Start backend (`npm start` in backend folder)
- [ ] Start frontend (`npm run dev` in frontend folder)
- [ ] Application runs without errors

### Functionality Test
- [ ] Frontend loads and displays products
- [ ] All 8 products are visible
- [ ] Can type in search box
- [ ] Example queries are clickable
- [ ] Submitting a query shows loading state
- [ ] AI returns relevant products
- [ ] AI summary is displayed
- [ ] Reset button works
- [ ] Error handling works (test with invalid backend)

### Security Check
- [ ] No API keys in code
- [ ] API key loaded from environment variable
- [ ] `.env` file in `.gitignore`
- [ ] `.env.example` provided

## Code Review (15-20 min)

### Backend Quality

**API Design:**
- [ ] Clear REST endpoints (`GET /api/products`, `POST /api/ask`)
- [ ] Proper HTTP methods used
- [ ] Appropriate status codes (200, 400, 502, 503)
- [ ] JSON request/response format

**LLM Integration:**
- [ ] OpenAI client properly initialized
- [ ] Prompt includes product context
- [ ] Prompt is clear and structured
- [ ] Response parsing is robust
- [ ] Handles JSON parse errors

**Error Handling:**
- [ ] Validates request body
- [ ] Catches API errors
- [ ] Returns safe error messages (no internal details)
- [ ] Handles rate limits (429)
- [ ] Handles auth errors (401)

**Code Quality:**
- [ ] Clean, readable code
- [ ] Proper async/await usage
- [ ] No hardcoded values
- [ ] Appropriate comments

### Frontend Quality

**React Fundamentals:**
- [ ] Uses `useState` for state management
- [ ] Uses `useEffect` for data fetching
- [ ] Props passed correctly to components
- [ ] Component structure is clear

**Components:**
- [ ] At least one reusable component (ProductCard)
- [ ] Props properly typed/used
- [ ] Component separation makes sense
- [ ] SearchBox is reusable

**API Integration:**
- [ ] Fetches from backend API
- [ ] Handles loading states
- [ ] Handles error states
- [ ] Displays results correctly

**UI/UX:**
- [ ] Clean, readable layout
- [ ] Products displayed as cards
- [ ] Search interface is intuitive
- [ ] Loading indicators present
- [ ] Error messages are clear

**Code Quality:**
- [ ] Clean component structure
- [ ] Proper event handling
- [ ] No console errors
- [ ] Reasonable styling

### AI/LLM Component

**Prompt Design:**
- [ ] Includes user query
- [ ] Includes product catalog context
- [ ] Clear instructions for LLM
- [ ] Requests structured output (JSON)
- [ ] Likely to return relevant results

**Output Parsing:**
- [ ] Parses JSON response
- [ ] Validates response structure
- [ ] Handles malformed responses
- [ ] Returns consistent shape to frontend

**Error Handling:**
- [ ] Catches LLM API errors
- [ ] Returns appropriate status codes
- [ ] Safe error messages
- [ ] Doesn't expose API keys or internal errors

## Scoring Grid (1-5 scale)

| Area | Score | Notes |
|------|-------|-------|
| Backend API Design | /5 | Clear endpoints, proper methods, good structure |
| LLM Integration | /5 | Prompt quality, parsing, error handling |
| Frontend Structure | /5 | Components, state management, props |
| API Consumption | /5 | Fetching, loading/error states |
| Code Quality | /5 | Readability, no hardcoded secrets, clean |
| Completeness | /5 | End-to-end working, all requirements met |
| **Total** | **/30** | |

### Weighting Suggestion
- End-to-end working: 2x weight
- AI integration: 1.5x weight
- Code quality: 1x weight

## Interview Discussion Points (30-45 min)

### Walkthrough Questions
1. "Walk me through your backend architecture and where you call the LLM."
2. "Show me how data flows from the user query to the displayed results."
3. "Explain your component structure in the frontend."

### Design Decisions
1. "Why did you structure the prompt this way?"
2. "How did you decide what product context to include?"
3. "What made you choose this response format?"
4. "Why did you organize components this way?"

### Trade-offs & Extensions
1. "What would you add if you had 2 more hours?"
2. "How would you improve the prompt for better results?"
3. "What would you do differently with more time?"
4. "How would you handle caching?"

### Extensibility
1. "How would you add a product detail page?"
2. "How would you extend this for another use case (e.g., support FAQ)?"
3. "How would you add product recommendations?"
4. "How would you implement a checkout assistant?"
5. "What if we wanted to add user preferences/history?"

### Technical Deep Dive
1. "How would you handle rate limiting from OpenAI?"
2. "What if the LLM returns irrelevant products?"
3. "How would you test the LLM integration?"
4. "What security considerations did you think about?"
5. "How would you deploy this to production?"

## Red Flags

- [ ] API keys committed to repository
- [ ] No error handling
- [ ] Backend crashes on invalid input
- [ ] Frontend doesn't handle loading/error states
- [ ] LLM prompt doesn't include product context
- [ ] No response parsing/validation
- [ ] Hardcoded values everywhere
- [ ] Doesn't work end-to-end
- [ ] Missing README or setup instructions
- [ ] Can't run the application

## Green Flags

- [ ] Clean, well-organized code
- [ ] Comprehensive error handling
- [ ] Good prompt engineering
- [ ] Reusable components
- [ ] Clear documentation
- [ ] Works perfectly on first try
- [ ] Thoughtful UI/UX
- [ ] Bonus features implemented
- [ ] Good git commit history
- [ ] Tests included (bonus)

## Time Considerations

**Completed in 2-3 hours:** Excellent time management
**Completed in 3-4 hours:** Good, within expected range
**Completed in 4+ hours:** Discuss prioritization in interview

## Final Assessment

**Pass Criteria:**
- Application runs without errors
- Can list products
- Can submit AI query and see results
- No API keys in code
- Basic error handling present

**Strong Candidate Indicators:**
- Clean code structure
- Robust error handling
- Good prompt design
- Thoughtful UI/UX
- Clear documentation
- Extensible architecture

**Hire Recommendation:**
- [ ] Strong Yes - Exceeds expectations
- [ ] Yes - Meets all requirements well
- [ ] Maybe - Meets basic requirements, some concerns
- [ ] No - Significant gaps or doesn't work
