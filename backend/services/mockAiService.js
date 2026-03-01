/**
 * Mock AI Service for testing without OpenAI API
 * Simulates AI recommendations based on keyword matching
 */

class MockAIService {
  async getProductRecommendations(query, productContext) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const queryLower = query.toLowerCase();
    const recommendations = this.analyzeQuery(queryLower);

    return {
      productIds: recommendations.productIds,
      summary: recommendations.summary
    };
  }

  analyzeQuery(query) {
    // Budget queries
    if (query.includes('budget') || query.includes('cheap') || query.includes('affordable')) {
      if (query.includes('laptop')) {
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
    if (query.includes('gaming') || query.includes('game') || query.includes('gamer')) {
      return {
        productIds: [1, 3, 4, 5],
        summary: 'These gaming products will give you a complete setup - from the powerful Gaming Laptop Pro X1 to peripherals with RGB lighting.'
      };
    }

    // Office/work queries
    if (query.includes('office') || query.includes('work') || query.includes('productivity')) {
      return {
        productIds: [2, 8],
        summary: 'Perfect for office work - the Budget Office Laptop for computing and the Webcam HD Pro for video calls.'
      };
    }

    // Accessories queries
    if (query.includes('accessories') || query.includes('peripheral')) {
      return {
        productIds: [3, 4, 8],
        summary: 'Complete your setup with these essential accessories - mouse, keyboard, and webcam.'
      };
    }

    // Wireless queries
    if (query.includes('wireless') || query.includes('bluetooth')) {
      return {
        productIds: [3, 6],
        summary: 'Our wireless products offer freedom of movement - gaming mouse and premium headphones.'
      };
    }

    // Audio queries
    if (query.includes('audio') || query.includes('headphone') || query.includes('sound')) {
      return {
        productIds: [6],
        summary: 'The Noise-Cancelling Headphones offer premium audio quality with 30-hour battery life.'
      };
    }

    // Storage queries
    if (query.includes('storage') || query.includes('ssd') || query.includes('backup')) {
      return {
        productIds: [7],
        summary: 'The Portable SSD 1TB is perfect for fast backups and file transfers with USB-C connectivity.'
      };
    }

    // Video/streaming queries
    if (query.includes('video') || query.includes('stream') || query.includes('call')) {
      return {
        productIds: [6, 8],
        summary: 'Great for video calls and streaming - quality webcam and noise-cancelling headphones.'
      };
    }

    // RGB/lighting queries
    if (query.includes('rgb') || query.includes('lighting')) {
      return {
        productIds: [3, 4],
        summary: 'Add some color to your setup with these RGB-enabled gaming peripherals.'
      };
    }

    // Price range queries
    if (query.includes('under') || query.includes('less than')) {
      if (query.includes('100') || query.includes('$100')) {
        return {
          productIds: [3, 8],
          summary: 'These products are under $100, offering great value without breaking the bank.'
        };
      }
      if (query.includes('1000') || query.includes('$1000')) {
        return {
          productIds: [2, 3, 4, 5, 6, 7, 8],
          summary: 'All these products are under $1000, giving you plenty of options within your budget.'
        };
      }
    }

    // Premium/expensive queries
    if (query.includes('premium') || query.includes('high-end') || query.includes('expensive') || query.includes('best')) {
      return {
        productIds: [1, 5, 6],
        summary: 'Our premium products offer top-tier performance and features for the most demanding users.'
      };
    }

    // Laptop queries
    if (query.includes('laptop') || query.includes('computer')) {
      return {
        productIds: [1, 2],
        summary: 'We have laptops for different needs - high-performance gaming or budget-friendly office work.'
      };
    }

    // Monitor/display queries
    if (query.includes('monitor') || query.includes('display') || query.includes('screen')) {
      return {
        productIds: [5],
        summary: 'The 4K Monitor 27 inch offers stunning visuals with HDR support, perfect for gaming and content creation.'
      };
    }

    // Default - return popular products
    return {
      productIds: [1, 3, 4, 6],
      summary: 'Here are some of our most popular products across different categories.'
    };
  }

  buildPrompt(query, productContext) {
    // Not used in mock, but kept for interface compatibility
    return '';
  }

  parseResponse(responseText) {
    // Not used in mock, but kept for interface compatibility
    return { productIds: [], summary: '' };
  }

  handleOpenAIError(error) {
    // Not used in mock, but kept for interface compatibility
    return error;
  }
}

export default new MockAIService();
