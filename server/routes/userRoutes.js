const express = require("express");
const User = require("../model/users");
const router = express.Router();

router.get("/user/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId); // Fetch the user from the database
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// You can add more user-related routes here (e.g., create user, update user, etc.)

module.exports = router;
