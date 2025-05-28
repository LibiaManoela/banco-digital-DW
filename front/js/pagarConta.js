//carregar transações anteriores
function carregarTransacoes() {
    const transacoesSalvas = localStorage.getItem('transacoesGlobais');
    return transacoesSalvas ? JSON.parse(transacoesSalvas) : [];
}

//salvar transações
function salvarTransacoes(transacoes) {
    localStorage.setItem('transacoesGlobais', JSON.stringify(transacoes));
}

//coletar, validar, processar e salvar novas transações
document.addEventListener('DOMContentLoaded', function() {
    const pagarContaForm = document.getElementById('pagarContaForm');

    if (pagarContaForm) { // verifica se o formulário existe
        pagarContaForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const codigoBarras = document.getElementById('codigoBarras').value;
            const valorConta = parseFloat(document.getElementById('valor').value);

            if (codigoBarras && !isNaN(valorConta) && valorConta > 0) {
                let transacoesGlobais = carregarTransacoes();

                const novaTransacao = {
                    tipo: 'Pagar Conta', 
                    descricao: `Pagamento de conta: ${codigoBarras}`,
                    valor: valorConta,
                    data: new Date().toLocaleDateString('pt-BR'),
                };

                transacoesGlobais.push(novaTransacao);
                salvarTransacoes(transacoesGlobais);

                pagarContaForm.reset();

                console.log('Pagamento de conta registrado:', novaTransacao);
                console.log('Todas as transações (globais):', transacoesGlobais);

                alert(`Conta de R$${valorConta.toFixed(2)} (${codigoBarras}) paga com sucesso!`);

            } else { //se validação dos dados falhar
                alert('Por favor, preencha o código de barras e um valor válido.');
            }
        });
    } else {
        console.warn('Formulário com ID "pagarContaForm" não encontrado.');
    }
});