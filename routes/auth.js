const express = require('express');
const register = require('../controllers/auth/register.js');
const login = require('../controllers/auth/login.js');

const router = express.Router();

router.use("/register", register);
router.use("/login", login);

module.exports = router;