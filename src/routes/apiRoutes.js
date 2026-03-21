const express = require('express');
const router = express.Router();
const upload = require('../middlewires/upload');

const { register, login, logout } = require('../controllers/api/authController');
const { createTicket, myTickets } = require('../controllers/api/ticketController');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

// create ticket with file upload
router.post('/tickets', upload.single('file'), createTicket);
router.get('/tickets', myTickets);

module.exports = router;