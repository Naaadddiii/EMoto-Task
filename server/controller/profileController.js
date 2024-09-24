const Profile = require("../models/Profile");

// Controller function to save profile data
const saveProfile = async (req, res) => {
  const { name, email, phone, instagram, twitter } = req.body;

  try {
    const profile = new Profile({
      name,
      email,
      phone,
      instagram,
      twitter,
    });

    await profile.save();
    res.status(201).json({ message: "Profile saved successfully", profile });
  } catch (error) {
    console.error("Error saving profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  saveProfile,
};
