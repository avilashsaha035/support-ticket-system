const express = require('express');
const router = express.Router();
const isAuth = require('../middlewires/authMiddleware');
const upload = require('../middlewires/upload');

const {
  showRegister,
  showLogin,
  showDashboard,
  register,
  login,
  logout
} = require('../controllers/authController');

const {
  showCreateTicket,
  createTicket,
  myTickets,
  showEditTicket,
  updateTicket
} = require('../controllers/ticketController');


router.get('/register', showRegister);
router.post('/register', register);

router.get('/login', showLogin);
router.post('/login', login);

router.post('/logout', logout);
router.get('/dashboard', showDashboard);

// ticket 
router.get('/create-ticket', isAuth, showCreateTicket);
router.post('/create-ticket', isAuth, upload.single('file'), createTicket);
router.get('/my-tickets', isAuth, myTickets);
router.get('/edit-ticket/:id', isAuth, showEditTicket);
router.post('/edit-ticket/:id', isAuth, upload.single('file'), updateTicket);

module.exports = router;