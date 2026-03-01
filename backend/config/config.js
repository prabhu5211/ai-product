import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3001,
  openaiApiKey: process.env.OPENAI_API_KEY,
  groqApiKey: process.env.GROQ_API_KEY,
  useGroq: process.env.USE_GROQ === 'true',
  nodeEnv: process.env.NODE_ENV || 'development'
};

// Validate required environment variables
export const validateConfig = () => {
  // If using Groq, check for Groq API key
  if (config.useGroq) {
    if (!config.groqApiKey) {
      throw new Error('GROQ_API_KEY is required when USE_GROQ=true');
    }
  } else {
    // If using OpenAI, check for OpenAI API key
    if (!config.openaiApiKey) {
      throw new Error('OPENAI_API_KEY is required in environment variables');
    }
  }
};
