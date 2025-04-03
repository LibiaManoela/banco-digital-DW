//Validação do Login
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const predefinedUser = "admin";
    const predefinedPass = "1234";

    if (user === predefinedUser && pass === predefinedPass) {
        alert("Login bem-sucedido!");
        window.location.href = "index.html"; // Redireciona para a página index.html
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos.";
    }
}
