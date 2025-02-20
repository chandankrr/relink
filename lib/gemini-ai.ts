import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_KEY!);
export const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
