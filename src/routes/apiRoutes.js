const express = require('express');
const router = express.Router();
const upload = require('../middlewires/upload');

const { register, login, logout } = require('../controllers/api/authController');
const { createTicket } = require('../controllers/api/ticketController');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// file upload
router.post('/tickets', upload.single('file'), createTicket);

module.exports = router;