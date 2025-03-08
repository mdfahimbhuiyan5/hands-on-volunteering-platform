const mongoose = require("mongoose");

const volunteerRequestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  urgency: { type: String, enum: ["Low", "Medium", "Urgent"], required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  responses: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, message: String }]
});

module.exports = mongoose.model("VolunteerRequest", volunteerRequestSchema);
