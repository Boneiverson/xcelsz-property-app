// GET one property by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM properties WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(results[0]);
  });
});
