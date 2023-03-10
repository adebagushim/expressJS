const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'eduwork-cruds-v2',
    host: 'localhost',
    username: 'root',
    password: 'bardi1123',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        sequelize.sync({ force: false, logging: false});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;