const express = require('express');
const router = express.Router();
const database = require('./database');

router.post('/register', (req, res) => {
    // Manejar registro de usuario
    const { nombre, gremio, password } = req.body;
    database.query('INSERT INTO users SET ?', { nombre, gremio, password }, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error al registrar usuario' });
        } else {
            res.send({ message: 'Usuario registrado con éxito' });
        }
    });
});

router.post('/login', (req, res) => {
    // Manejar inicio de sesión
    const { nombre, password } = req.body;
    database.query('SELECT * FROM users WHERE nombre = ? AND password = ?', [nombre, password], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error al iniciar sesión' });
        } else if (results.length === 0) {
            res.status(401).send({ message: 'Credenciales incorrectas' });
        } else {
            res.send({ message: 'Sesión iniciada con éxito' });
        }
    });
});

router.get('/votaciones', (req, res) => {
    // Obtener
