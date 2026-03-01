import OpenAI from 'openai';

class AIService {
  constructor() {
    // Check if using alternative API
    const useGroq = process.env.USE_GROQ === 'true';
    const apiKey = useGroq ? process.env.GROQ_API_KEY : process.env.OPENAI_API_KEY;
    
    if (apiKey && apiKey !== 'your_openai_api_key_here') {
      try {
        this.openai = new OpenAI({
          apiKey: apiKey,
          baseURL: useGroq ? 'https://api.groq.com/openai/v1' : undefined
        });
        this.model = useGroq ? 'llama-3.3-70b-versatile' : 'gpt-3.5-turbo';
        this.useMock = false;
        console.log(`✅ Using ${useGroq ? 'Groq' : 'OpenAI'} AI service (${this.model})`);
      } catch (error) {
        console.warn('⚠️  Failed to initialize AI service. Using mock.');
        this.openai = null;
        this.useMock = true;
      }
    } else {
      this.openai = null;
      this.useMock = true;
      console.warn('⚠️  No API key configured. Using mock AI service.');
    }
  }

  async getProductRecommendations(query, productContext) {
    // Use mock service if no API configured
    if (this.useMock || !this.openai) {
      return this.getMockRecommendations(query);
    }

    const prompt = this.buildPrompt(query, productContext);

    try {
      const completion = await this.openai.chat.completions.create({
        model: this.model,
        messages: [
          { 
            role: 'system', 
            content: 'You are a helpful product recommendation assistant. Always respond with valid JSON only.' 
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 300
      });

      const responseText = completion.choices[0].message.content.trim();
      return this.parseResponse(responseText);
    } catch (error) {
      // If quota exceeded or rate limit, fall back to mock
      if (error.status === 429 || error.code === 'insufficient_quota') {
        console.warn('⚠️  API quota exceeded. Falling back to mock AI service.');
        this.useMock = true;
        return this.getMockRecommendations(query);
      }
      throw this.handleOpenAIError(error);
    }
  }

  getMockRecommendations(query) {
    const queryLower = query.toLowerCase();
    
    // Budget queries
    if (queryLower.includes('budget') || queryLower.includes('cheap') || queryLower.includes('affordable')) {
      if (queryLower.includes('laptop')) {
        return {
          productIds: [2],
          summary: 'The Budget Office Laptop is perfect for your needs at just $599.99, offering great value for office work and browsing.'
        };
      }
      return {
        productIds: [3, 7, 8],
        summary: 'These are our most affordable products under $120, perfect for budget-conscious shoppers.'
      };
    }

    // Gaming queries
    if (queryLower.includes('gaming') || queryLower.includes('game') || queryLower.includes('gamer')) {
      return {
        productIds: [1, 3, 4, 5],
        summary: 'These gaming products will give you a complete setup - from the powerful Gaming Laptop Pro X1 to peripherals with RGB lighting.'
      };
    }

    // Office/work queries
    if (queryLower.includes('office') || queryLower.includes('work') || queryLower.includes('productivity')) {
      return {
        productIds: [2, 8],
        summary: 'Perfect for office work - the Budget Office Laptop for computing and the Webcam HD Pro for video calls.'
      };
    }

    // Accessories queries
    if (queryLower.includes('accessories') || queryLower.includes('peripheral')) {
      return {
        productIds: [3, 4, 8],
        summary: 'Complete your setup with these essential accessories - mouse, keyboard, and webcam.'
      };
    }

    // Wireless queries
    if (queryLower.includes('wireless') || queryLower.includes('bluetooth')) {
      return {
        productIds: [3, 6],
        summary: 'Our wireless products offer freedom of movement - gaming mouse and premium headphones.'
      };
    }

    // Audio queries
    if (queryLower.includes('audio') || queryLower.includes('headphone') || queryLower.includes('sound')) {
      return {
        productIds: [6],
        summary: 'The Noise-Cancelling Headphones offer premium audio quality with 30-hour battery life.'
      };
    }

    // Storage queries
    if (queryLower.includes('storage') || queryLower.includes('ssd') || queryLower.includes('backup')) {
      return {
        productIds: [7],
        summary: 'The Portable SSD 1TB is perfect for fast backups and file transfers with USB-C connectivity.'
      };
    }

    // Video/streaming queries
    if (queryLower.includes('video') || queryLower.includes('stream') || queryLower.includes('call')) {
      return {
        productIds: [6, 8],
        summary: 'Great for video calls and streaming - quality webcam and noise-cancelling headphones.'
      };
    }

    // RGB/lighting queries
    if (queryLower.includes('rgb') || queryLower.includes('lighting')) {
      return {
        productIds: [3, 4],
        summary: 'Add some color to your setup with these RGB-enabled gaming peripherals.'
      };
    }

    // Price range queries
    if (queryLower.includes('under') || queryLower.includes('less than')) {
      if (queryLower.includes('100') || queryLower.includes('$100')) {
        return {
          productIds: [3, 8],
          summary: 'These products are under $100, offering great value without breaking the bank.'
        };
      }
      if (queryLower.includes('1000') || queryLower.includes('$1000')) {
        return {
          productIds: [2, 3, 4, 5, 6, 7, 8],
          summary: 'All these products are under $1000, giving you plenty of options within your budget.'
        };
      }
    }

    // Premium queries
    if (queryLower.includes('premium') || queryLower.includes('high-end') || queryLower.includes('expensive') || queryLower.includes('best')) {
      return {
        productIds: [1, 5, 6],
        summary: 'Our premium products offer top-tier performance and features for the most demanding users.'
      };
    }

    // Laptop queries
    if (queryLower.includes('laptop') || queryLower.includes('computer')) {
      return {
        productIds: [1, 2],
        summary: 'We have laptops for different needs - high-performance gaming or budget-friendly office work.'
      };
    }

    // Monitor queries
    if (queryLower.includes('monitor') || queryLower.includes('display') || queryLower.includes('screen')) {
      return {
        productIds: [5],
        summary: 'The 4K Monitor 27 inch offers stunning visuals with HDR support, perfect for gaming and content creation.'
      };
    }

    // Default
    return {
      productIds: [1, 3, 4, 6],
      summary: 'Here are some of our most popular products across different categories.'
    };
  }

  buildPrompt(query, productContext) {
    return `You are a product recommendation assistant. Based on the user's query, analyze the product catalog and return relevant product IDs.

Product Catalog:
${productContext}

User Query: "${query}"

Instructions:
1. Identify products that match the user's intent (budget, category, features, use case)
2. Return ONLY a JSON object with this exact structure:
{
  "productIds": [array of matching product IDs as numbers],
  "summary": "A brief 1-2 sentence explanation of why these products match"
}

Return ONLY valid JSON, no other text.`;
  }

  parseResponse(responseText) {
    try {
      // Remove markdown code blocks if present
      let cleanText = responseText.trim();
      if (cleanText.startsWith('```json')) {
        cleanText = cleanText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
      } else if (cleanText.startsWith('```')) {
        cleanText = cleanText.replace(/```\n?/g, '');
      }
      
      const parsed = JSON.parse(cleanText);
      
      if (!Array.isArray(parsed.productIds)) {
        parsed.productIds = [];
      }
      
      if (!parsed.summary) {
        parsed.summary = 'Here are the matching products.';
      }

      return parsed;
    } catch (error) {
      console.error('Failed to parse AI response:', responseText);
      return {
        productIds: [],
        summary: 'Unable to process your query. Please try rephrasing.',
        parseError: true
      };
    }
  }

  handleOpenAIError(error) {
    console.error('AI API Error:', error);

    if (error.status === 401) {
      const err = new Error('AI service authentication failed. Please check API configuration.');
      err.statusCode = 502;
      return err;
    }

    if (error.status === 429 || error.code === 'insufficient_quota') {
      const err = new Error('AI service rate limit reached. Please try again later.');
      err.statusCode = 503;
      return err;
    }

    const err = new Error('AI service temporarily unavailable. Please try again.');
    err.statusCode = 503;
    return err;
  }
}

export default new AIService();
