#!/usr/bin/env node
import axios from "axios";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-flash"; // ✅ Correct model name

// Gemini API call
async function callGemini(prompt) {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent`,
      { contents: [{ parts: [{ text: prompt }] }] },
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY,
        },
      }
    );

    return (
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ No response from Gemini."
    );
  } catch (err) {
    console.error(
      "❌ Gemini API Error:",
      err.response?.data?.error || err.message
    );
    return null;
  }
}

async function main() {
  // ✅ Proper argument parsing
  const args = process.argv.slice(2);
  const mode = args[0];     // "review" or "correct"
  const filename = args[1]; // "test.js"

  if (!mode || !filename) {
    console.error("❌ Usage: node index.js <review|correct> <filename>");
    process.exit(1);
  }

  // Ensure file path is valid
  const filePath = path.resolve(process.cwd(), filename);
  if (!fs.existsSync(filePath)) {
    console.error("❌ File not found:", filename);
    process.exit(1);
  }

  const code = fs.readFileSync(filePath, "utf-8");
  console.log("📂 Loaded file:", filename);

  let prompt = "";
  if (mode === "review") {
    prompt = `Review this code and suggest improvements:\n\n${code}`;
  } else if (mode === "correct") {
    prompt = `Correct this code and output the fixed version only:\n\n${code}`;
  } else {
    console.error("❌ Invalid mode. Use 'review' or 'correct'.");
    process.exit(1);
  }

  const result = await callGemini(prompt);
  if (result) {
    console.log(
      `\n🔍 ${mode === "review" ? "Review" : "Corrected Code"}:\n`,
      result
    );
  }
}

// Debugging: check if API key exists
if (!GEMINI_API_KEY) {
  console.error("❌ No API key found. Make sure .env contains GEMINI_API_KEY.");
  process.exit(1);
} else {
  console.log("✅ API Key loaded");
}

main();


