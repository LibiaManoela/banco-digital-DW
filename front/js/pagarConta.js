function carregarTransacoes() {
    const transacoesSalvas = localStorage.getItem('transacoesGlobais');
    return transacoesSalvas ? JSON.parse(transacoesSalvas) : [];
}

function salvarTransacoes(transacoes) {
    localStorage.setItem('transacoesGlobais', JSON.stringify(transacoes));
}

document.addEventListener('DOMContentLoaded', function() {
    const pagarContaForm = document.getElementById('pagarContaForm');

    if (pagarContaForm) {
        pagarContaForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const codigoBarras = document.getElementById('codigoBarras').value;
            const valorConta = parseFloat(document.getElementById('valor').value);

            if (codigoBarras && !isNaN(valorConta) && valorConta > 0) {
                let transacoesGlobais = carregarTransacoes();

                const novaTransacao = {
                    tipo: 'Pagar Conta', // Identifica o tipo de transação
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

            } else {
                alert('Por favor, preencha o código de barras e um valor válido.');
            }
        });
    } else {
        console.warn('Formulário com ID "pagarContaForm" não encontrado.');
    }
});