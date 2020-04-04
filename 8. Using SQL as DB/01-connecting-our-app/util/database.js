const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-schema',
    password: 'root'
});

module.exports = pool.promise();