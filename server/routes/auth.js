const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, fullName } = req.body;

    // Check if user exists
    const userRes = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userRes.rows.length > 0) {
      return res.status(400).json({ message: 'Օգտատերը արդեն գոյություն ունի:' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.query(
      'INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email, full_name',
      [email, hashedPassword, fullName]
    );

    const user = newUser.rows[0];
    const jwtSecret = process.env.JWT_SECRET || 'dev_secret_key_change_me';
    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1d' });

    res.status(201).json({ token, user: { id: user.id, email: user.email, fullName: user.full_name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRes = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = userRes.rows[0];

    if (!user) {
      return res.status(400).json({ message: 'Սխալ էլ. հասցե կամ գաղտնաբառ:' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Սխալ էլ. հասցե կամ գաղտնաբառ:' });
    }

    const jwtSecret = process.env.JWT_SECRET || 'dev_secret_key_change_me';
    const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1d' });

    res.json({ token, user: { id: user.id, email: user.email, fullName: user.full_name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Սերվերի սխալ:' });
  }
});

module.exports = router;
