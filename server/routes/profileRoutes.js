const express = require("express");
const router = express.Router();
const { saveProfile } = require("../controller/profileController");

// Route to save profile data
router.post("/save-profile", saveProfile);

module.exports = router;
