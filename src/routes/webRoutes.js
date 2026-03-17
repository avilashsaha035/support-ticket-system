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
router.get('/login', showLogin);
router.get('/dashboard', showDashboard);

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;