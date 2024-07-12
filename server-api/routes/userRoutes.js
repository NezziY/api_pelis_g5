// routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

router.post('/users', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const password_hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password_hash });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error al crear usuario' });
  }
});

module.exports = router;
