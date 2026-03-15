const app = require('./app')
const sequelize = require('./config/database');
require('./models');

(async () => {
    try{
        await sequelize.sync({ alter: true });  // create tables in db according to model code
        console.log('Database synced');

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error('Database connection failed:', error);
    }
})();