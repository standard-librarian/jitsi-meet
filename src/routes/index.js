const express = require('express');
const router = express.Router();

// Basic route
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to Jitsi Meet API' });
});

module.exports = router;