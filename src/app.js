require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();

// built-in middlewire
app.use(express.json()); //convert json data(come from client req) to js object

// app.get('/', (req, res) => {
//     res.send('Server is Running!!');
// });
app.use('/api', authRoutes);

module.exports = app;