document.getElementById("toggleSaldo").addEventListener("change", function() {
    var saldo = document.getElementById("valor");

    // Verifica se a checkbox está marcada e alterna a visibilidade do saldo
    if (this.checked) {
        saldo.style.display = "block";  // Exibe o saldo
    } else {
        saldo.style.display = "none";   // Oculta o saldo
    }
});