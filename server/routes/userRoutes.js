// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Sample route to get user data
router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  // Fetch user data from MongoDB (use a User model, for instance)
  res.json({ message: `Fetching data for user ${userId}` });
});

module.exports = router;
