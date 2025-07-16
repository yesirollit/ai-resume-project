// server/controllers/temp23Controller.js

const Temp23Resume = require("../models/Temp23Resume");

// POST: Create resume
exports.createResume = async (req, res) => {
  try {
    const newResume = new Temp23Resume(req.body);
    const saved = await newResume.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to create resume" });
  }
};

// PUT: Update resume
exports.updateResume = async (req, res) => {
  try {
    const updated = await Temp23Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: "Failed to update resume" });
  }
};

// GET: Get resume by ID
exports.getResume = async (req, res) => {
  try {
    const resume = await Temp23Resume.findById(req.params.id);
    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch resume" });
  }
};
