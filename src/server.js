const app = require('./app')
const sequelize = require('./config/database');

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