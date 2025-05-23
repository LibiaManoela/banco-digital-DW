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
            window.location.href = "homePage.html";
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