import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
});

app.post("/translate", async (req, res) => {
    const { text, language } = req.body;
    if (!text) {
        return res.json({ translation: "" });
    }
    
    // Create fresh messages array for each request (no conversation history)
    const messages = [
        {
            role: "system",
            content: "You are a translation assistant. When given text and a target language, respond with ONLY the translated text. Do not include any explanations, notes, or additional text. Just the translation.",
        },
        {
            role: "user", 
            content: `Translate the following text into ${language}: ${text}`
        }
    ];

    try {
        const response = await openai.chat.completions.create({
            model: "qwen/qwen3-32b",
            messages: messages,
        });
        const translation = response.choices[0].message.content.trim();
        res.json({ translation });
    } catch (error) {
        console.error("Error translating text:", error);
        res.status(500).json({ error: "An error occurred while translating the text." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});   