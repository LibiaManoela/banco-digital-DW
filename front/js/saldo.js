// mostrar saldo
function saldo(){
    const saldo    = document.getElementById('valor')
    const checkbox = document.getElementById('toggleSaldo')

    const valor  = 'R$ 1000,00';
    const oculto = '*********';

    checkbox.addEventListener('change', function() {
    saldo.textContent = this.checked ? valor : oculto;
    });
}

window.onload = function() {
    saldo();
};
