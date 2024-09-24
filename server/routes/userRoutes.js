const express = require("express");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controller/userController");

const router = express.Router();

// GET all users
router.get("/", getAllUsers);

// GET user by ID
router.get("/:id", getUserById);

// PUT (update) user by ID
router.put("/:id", updateUserById);

// DELETE user by ID
router.delete("/:id", deleteUserById);

module.exports = router;
