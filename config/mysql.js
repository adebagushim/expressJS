const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bardi1123',
    database: 'eduwork-cruds'
});

module.exports = connection;