const express = require("express");
const router = express.Router();
const {
  createApplication,
  getApplications,
  getApplication,
  updateApplication,
  deleteApplication,
} = require("../controllers/jobApplication.controller.js");

const authMiddleware = require("../middlewares/auth.middleware.js");

router.use(authMiddleware);
router.post("/", createApplication);
router.get("/", getApplications);
router.get("/:id", getApplication);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);

module.exports = router;
