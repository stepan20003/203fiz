const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all workflows for current user
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM workflows WHERE user_id = $1 ORDER BY created_at DESC', [req.user.id]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
});

// Create workflow
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;
    const result = await db.query(
      'INSERT INTO workflows (name, description, user_id) VALUES ($1, $2, $3) RETURNING *',
      [name, description, req.user.id]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
});

// Update workflow
router.put('/:id', async (req, res) => {
  try {
    const { name, description, isActive } = req.body;
    const result = await db.query(
      'UPDATE workflows SET name = $1, description = $2, is_active = $3 WHERE id = $4 AND user_id = $5 RETURNING *',
      [name, description, isActive, req.params.id, req.user.id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Աշխատանքային հոսքը չի գտնվել:' });
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
});

// Delete workflow
router.delete('/:id', async (req, res) => {
  try {
    const result = await db.query('DELETE FROM workflows WHERE id = $1 AND user_id = $2 RETURNING *', [req.params.id, req.user.id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Աշխատանքային հոսքը չի գտնվել:' });
    res.json({ message: 'Աշխատանքային հոսքը հաջողությամբ ջնջված է:' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
});

module.exports = router;
