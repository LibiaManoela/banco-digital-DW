function carregarTransacoes() {
    const transacoesSalvas = localStorage.getItem('transacoesGlobais'); // chave global
    return transacoesSalvas ? JSON.parse(transacoesSalvas) : [];
}

function salvarTransacoes(transacoes) {
    localStorage.setItem('transacoesGlobais', JSON.stringify(transacoes)); // chave global
}

document.addEventListener('DOMContentLoaded', function() {
    const pixForm = document.getElementById('pixForm');

    if (pixForm) {
        pixForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const chavePix = document.getElementById('chave').value;
            const valorPix = parseFloat(document.getElementById('valor').value);

            if (chavePix && !isNaN(valorPix) && valorPix > 0) {
                let transacoesGlobais = carregarTransacoes(); // carrega transações globais

                const novaTransacao = {
                    tipo: 'PIX', // Identifica o tipo de transação
                    descricao: `PIX para ${chavePix}`,
                    valor: valorPix,
                    data: new Date().toLocaleDateString('pt-BR'),
                    status: 'Concluído'
                };

                transacoesGlobais.push(novaTransacao);
                salvarTransacoes(transacoesGlobais); // salva a lista atualizada

                pixForm.reset();

                console.log('Transação PIX registrada:', novaTransacao);
                console.log('Todas as transações (globais):', transacoesGlobais);

                alert(`PIX de R$${valorPix.toFixed(2)} para ${chavePix} enviado com sucesso!`);

            } else {
                alert('Por favor, preencha a chave PIX e um valor válido.');
            }
        });
    } else {
        console.warn('Formulário com ID "pixForm" não encontrado.');
    }
});