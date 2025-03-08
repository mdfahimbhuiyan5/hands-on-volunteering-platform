const express = require("express");
const Event = require("../models/Event");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create an event
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { title, description, category, date, time, location } = req.body;
    const newEvent = new Event({ ...req.body, createdBy: req.user.id });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name");
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register for an event
router.post("/:eventId/register", authMiddleware, async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (!event.attendees.includes(req.user.id)) {
      event.attendees.push(req.user.id);
      await event.save();
    }

    res.json({ message: "Registered successfully", event });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
