# Free AI API Setup Guide

## 🆓 Option 1: Groq (Recommended - FREE & FAST)

Groq provides free API access with very fast responses!

### Setup Steps:

1. **Get Groq API Key**
   - Go to https://console.groq.com/
   - Sign up (free)
   - Go to API Keys section
   - Create new API key
   - Copy the key (starts with `gsk_...`)

2. **Update .env file**
   ```env
   USE_GROQ=true
   GROQ_API_KEY=gsk_your_groq_api_key_here
   PORT=3001
   NODE_ENV=development
   ```

3. **Restart backend**
   ```bash
   npm start
   ```

You should see: `✅ Using Groq AI service`

### Groq Features:
- ✅ Completely FREE
- ✅ Very fast responses
- ✅ High rate limits
- ✅ Uses Llama 3.1 70B model
- ✅ OpenAI-compatible API

---

## 🆓 Option 2: OpenAI with Credits

If you prefer OpenAI:

### Add Credits:

1. Go to https://platform.openai.com/settings/organization/billing/overview
2. Click "Add payment method"
3. Add credit/debit card
4. Click "Add to credit balance"
5. Add minimum $5

### Update .env:
```env
USE_GROQ=false
OPENAI_API_KEY=sk-proj-your-openai-key-here
PORT=3001
NODE_ENV=development
```

### Pricing:
- GPT-3.5-turbo: $0.0005 per 1K tokens (very cheap)
- $5 = ~10,000 queries

---

## 🆓 Option 3: Other Free Alternatives

### Together AI
- Website: https://api.together.xyz/
- Free tier available
- Multiple models

### Hugging Face
- Website: https://huggingface.co/inference-api
- Free tier available
- Many open-source models

---

## 🧪 Testing

After setup, test with:

```bash
curl -X POST http://localhost:3001/api/ask ^
  -H "Content-Type: application/json" ^
  -d "{\"query\": \"Show me gaming products\"}"
```

You should get real AI responses!

---

## 💡 Recommendation

**Use Groq** - It's:
- Completely free
- Very fast
- Easy to set up
- Works great for this project

Just get a Groq API key and update your .env file!
