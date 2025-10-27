const JobApplication = require("../models/jobApplication.model");

// CREATE
exports.createApplication = async (req, res) => {
  try {
    const newJob = await JobApplication.create({
      userId: req.user.id,
      ...req.body,
    });
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ALL
exports.getApplications = async (req, res) => {
  try {
    const jobs = await JobApplication.find({ userId: req.user.id });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ ONE
exports.getApplication = async (req, res) => {
  try {
    const job = await JobApplication.findById(req.params.id);
    if (!job) return res.status(404).json({ message: "Not found" });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
exports.updateApplication = async (req, res) => {
  try {
    const job = await JobApplication.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
exports.deleteApplication = async (req, res) => {
  try {
    await JobApplication.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
