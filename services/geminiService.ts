import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { AI_SYSTEM_INSTRUCTION } from '../constants';

// Function to safely create a GoogleGenAI instance.
// This ensures that the API_KEY is accessed at the time of the call,
// allowing for dynamic key selection if necessary (e.g., in a development environment or via a UI prompt).
const getGeminiClient = () => {
  if (!process.env.API_KEY) {
    throw new Error('API_KEY is not defined. Please ensure it is set as an environment variable.');
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateAIResponse = async (
  prompt: string,
  history: { parts: { text: string }[] }[],
): Promise<GenerateContentResponse> => {
  try {
    const ai = getGeminiClient();
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message: prompt });
    return response;
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
};
