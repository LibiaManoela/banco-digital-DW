// mostrar saldo
function saldo(){
    const saldo    = document.getElementById('valor')
    const checkbox = document.getElementById('toggleSaldo')

    const visivel  = 'R$ 1000,00';
    const oculto = '*********';

    checkbox.addEventListener('change', function() {
    saldo.textContent = this.checked ? visivel : oculto;
    });
}

window.onload = function() {
    saldo();
};
