const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'teikoku',
    password: 'Teikoku2024',
    database: 'votaciones_teikoku'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

module.exports = db;
