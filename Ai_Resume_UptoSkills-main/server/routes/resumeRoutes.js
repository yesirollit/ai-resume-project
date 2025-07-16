const express = require("express");
const router = express.Router();
const resumeController = require("../controllers/resumeController"); // ✅ Ensure path is correct
const mongoose = require("mongoose");
// Resume Schema
const ResumeSchema = new mongoose.Schema({
  name: String,
  summary: String,
  experience: String,
  education: String,
  skills: [String],
  achievements: [String],
  contact: String,
  createdAt: { type: Date, default: Date.now },
});

const Resume = require("../models/Temp23Resume");

// POST /api/resume — create a new resume
router.post("/resume", async (req, res) => {
  try {
    const resume = new Resume(req.body);
    const saved = await resume.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to save resume." });
  }
});

// PUT /api/resume/:id — update an existing resume
router.put("/resume/:id", async (req, res) => {
  try {
    const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update resume." });
  }
});

// GET /api/resume/:id — get resume by ID
router.get("/resume/:id", async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ error: "Resume not found." });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resume." });
  }
});

// ✅ Fix Routes
router.post("/create", resumeController.createResume);
router.post("/save", resumeController.saveResume);
router.post("/generate-pdf", resumeController.generatePDF);
router.post("/enhanceField", resumeController.enhanceField);

module.exports = router;
