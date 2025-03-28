<?php
session_start();

$conn = new mysqli("localhost", "root", "", "sistema_login");

if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

$usuario = $_POST['usuario'] ?? '';
$senha = $_POST['senha'] ?? '';

$sql = "SELECT * FROM usuarios WHERE usuario = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $usuario);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    if (password_verify($senha, $user['senha'])) {
        $_SESSION['usuario'] = $usuario;
        header("Location: home.php");
        exit();
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Usuário não encontrado.";
}
?>
