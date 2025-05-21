//Validação do Login
function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            usuario: user,  
            senha: pass      
        })
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        if(data.isValid){
            alert("Login bem-sucedido!");
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "Usuário ou senha incorretos.";
       }
    })
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

// Mostrar/ocultar número do cartão
function detalhes() {
    const numeroCartao = document.getElementById('numero-cartao');
    const checkbox = document.getElementById('toggleDetalhes');

    const numero = '1234 5678 9012 3456';
    const oculto = '************';

    checkbox.addEventListener('change', function () {
        numeroCartao.textContent = this.checked ? numero : oculto;
    });
}

window.onload = function() {
    saldo();
    detalhes();
};

