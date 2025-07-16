const fs = require("fs");
const pdfParse = require("pdf-parse");

/**
 * Reads PDF and returns raw text content
 * @param {string} filePath - Local path to uploaded PDF
 * @returns {Promise<string>} Parsed plain text
 */
async function extractTextFromPDF(filePath) {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text.trim();
  } catch (error) {
    console.error("❌ Error reading PDF:", error.message);
    return "";
  }
}

/**
 * Categorizes text into resume fields
 * @param {string} text
 * @returns {Object} Parsed resume fields
 */
function categorizeText(text) {
  const sections = {
    profile: [],
    key_expertise: [],
    project_experience: [],
    education: [],
    languages: [],
    certifications: [],
    links: [],
  };
}

const lines = text.split('"\n').map((line) => line.trim());
