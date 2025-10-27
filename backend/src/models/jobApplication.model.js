const mongoose = require("mongoose");

const jobApplicationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  companyName: { type: String, required: true },
  jobTitle: { type: String, required: true },
  applicationDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied",
  },
}, { timestamps: true });

module.exports = mongoose.model("JobApplication", jobApplicationSchema);
