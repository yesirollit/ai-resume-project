const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const Temp23Resume = require("../models/Temp23Resume"); // ✅ match filename

const upload = multer({ dest: "uploads/" });

// POST: Upload and parse PDF resume
router.post("/upload-resume", upload.single("resume"), async (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const parsed = await pdfParse(dataBuffer);
    const text = parsed.text;

    const resumeData = {
      name: text.split("\n")[0] || "",
      summary: text.slice(0, 500),
      contact: "",
      education: [],
      experience: [],
      skills: [],
      achievements: [],
    };

    res.status(200).json(resumeData);
  } catch (err) {
    res.status(500).json({ error: "Resume upload failed" });
  } finally {
    fs.unlink(req.file.path, (err) => {
      if (err) console.error("Cleanup error:", err);
    });
  }
});

module.exports = router;
