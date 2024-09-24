const express = require("express");
const passport = require("passport");

const router = express.Router();

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  function (req, res) {
    res.redirect("http://localhost:3000/dashboard");
  }
);

// Logout route
router.get("/logout", async (req, res, next) => {
  try {
    await req.logout();
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
