const express = require("express");
const VolunteerRequest = require("../models/VolunteerRequest");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a volunteer request
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description, urgency } = req.body;
    const newRequest = new VolunteerRequest({ ...req.body, createdBy: req.user.id });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all volunteer requests
router.get("/", async (req, res) => {
  try {
    const requests = await VolunteerRequest.find().populate("createdBy", "name");
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Respond to a volunteer request
router.post("/:requestId/respond", authMiddleware, async (req, res) => {
  try {
    const request = await VolunteerRequest.findById(req.params.requestId);
    if (!request) return res.status(404).json({ message: "Request not found" });

    request.responses.push({ userId: req.user.id, message: req.body.message });
    await request.save();

    res.json({ message: "Response added successfully", request });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
