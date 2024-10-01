<?php
// Conectar a la base de datos
$conn = mysqli_connect("localhost", "username", "password", "database");

// Verificar conexión
if (!$conn) {
    die("Error de conexión: " . mysqli_connect_error());
}

// Recibir datos del formulario
$name = $_POST["name"];
$gremio = $_POST["gremio"];
$password = $_POST["password"];

// Encriptar contraseña
$password_hash = password_hash($password, PASSWORD_DEFAULT);

// Insertar datos en la base de datos
$query = "INSERT INTO users (name, gremio, password) VALUES ('$name', '$gremio', '$password_hash')";
if (mysqli_query($conn, $query)) {
    echo "Registro exitoso!";
} else {
    echo "Error
