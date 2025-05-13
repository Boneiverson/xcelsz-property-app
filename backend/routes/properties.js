const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all properties
router.get('/', (req, res) => {
  db.query('SELECT * FROM properties', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
