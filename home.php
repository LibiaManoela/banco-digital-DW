<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}
?>

<h1>Bem-vindo, <?php echo $_SESSION['usuario']; ?>!</h1>
<a href="logout.php">Sair</a>
