// mostrar/ocultar número do cartão
function detalhes() {
    const numeroCartao = document.getElementById('numero-cartao');
    const checkbox = document.getElementById('toggleDetalhes');

    const visivel = '1234 5678 9012 3456';
    const oculto = '************';

    checkbox.addEventListener('change', function () {
        numeroCartao.textContent = this.checked ? visivel : oculto;
    });
}

window.onload = detalhes;