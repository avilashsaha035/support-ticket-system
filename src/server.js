require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');

const app = express();

// built-in middlewire
app.use(express.json()); //convert json data(come from client req) to js object

app.get('/', (req, res) => {
    res.send('Server is Running');
});

(async () => {
    try{
        await sequelize.authenticate();
        console.log('MySQL connected successfully');

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error('Database connection failed:', error);
    }
})();