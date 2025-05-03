const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');

// POST - Add Alumni
router.post('/', async (req, res) => {
  try {
    const newAlumni = new Alumni(req.body);
    const saved = await newAlumni.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET - Fetch all alumni
router.get('/', async (req, res) => {
  try {
    const alumniList = await Alumni.find();
    res.status(200).json(alumniList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
