
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are RIFZ Assistant, a professional AI fashion consultant for RIFZ.
RIFZ is a high-end streetwear brand that sells:
- Jackets: Stealth Bomber, Obsidian Puffer, Cargo Tech Vest.
- Hoodies: Oversized Midnight Hoodie, RIFZ Signature Hoodie.
- Apparel: Minimalist Core Tee.

Tone: Professional, sophisticated, minimalist, and helpful.
Guidelines:
1. Provide styling advice using RIFZ products.
2. If asked about prices, use the ones provided in the catalog (ranging $45 - $299).
3. Be concise but elegant in your responses.
4. If asked about technical details, mention 500GSM cotton, ripstop nylon, or Pima cotton.
5. Do not mention other brands.
`;

export async function getChatResponse(history: ChatMessage[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  // Convert history to contents format for Gemini 3 Pro
  // Note: For simplicity and following guidelines, we'll use generateContent with the last message 
  // and system instruction to maintain the 'assistant' feel.
  
  const userMessage = history[history.length - 1].text;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: [
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I apologize, I'm having trouble connecting to the RIFZ mainframe. Please try again later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently updating our style catalog. Please check back in a moment.";
  }
}
