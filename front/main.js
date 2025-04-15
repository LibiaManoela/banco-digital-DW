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

//Fechar mensagem dos cookies na HomePage
function cookies(){
    const cookies = document.getElementById('cookies')
    const header  = document.getElementById('header')
    header.removeChild(cookies)
}

//Mostrar saldo
function saldo(){
    const saldo    = document.getElementById('valor')
    const checkbox = document.getElementById('toggleSaldo')

    const valor  = 'R$ 1000,00';
    const oculto = '*********';

    checkbox.addEventListener('change', function() {
    saldo.textContent = this.checked ? valor : oculto;
    });
}

window.onload = saldo;