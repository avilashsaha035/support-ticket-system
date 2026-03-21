const express = require('express');
const router = express.Router();
const {
  showRegister,
  showLogin,
  showDashboard,
  register,
  login,
  logout
} = require('../controllers/authController');



router.get('/register', showRegister);
router.post('/register', register);

router.get('/login', showLogin);
router.post('/login', login);

router.post('/logout', logout);
router.get('/dashboard', showDashboard);

module.exports = router;