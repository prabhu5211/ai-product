import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3001,
  openaiApiKey: process.env.OPENAI_API_KEY,
  nodeEnv: process.env.NODE_ENV || 'development'
};

// Validate required environment variables
export const validateConfig = () => {
  if (!config.openaiApiKey) {
    throw new Error('OPENAI_API_KEY is required in environment variables');
  }
};
