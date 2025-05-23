let transacoesPix = []; // Esta array será usada para carregar e adicionar

// Função para carregar transações do localStorage ao iniciar a página
function carregarTransacoes() {
    const transacoesSalvas = localStorage.getItem('transacoesPix');
    if (transacoesSalvas) {
        // Se houver transações salvas, parseia de volta para um array de objetos
        transacoesPix = JSON.parse(transacoesSalvas);
    }
}

// Função para salvar as transações atualizadas no localStorage
function salvarTransacoes() {
    // Converte o array de objetos para uma string JSON antes de salvar
    localStorage.setItem('transacoesPix', JSON.stringify(transacoesPix));
}

// Carregar transações assim que o script é executado (quando a página PIX carrega)
carregarTransacoes();

document.addEventListener('DOMContentLoaded', function() {
    const pixForm = document.getElementById('pixForm');

    if (pixForm) {
        pixForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const chavePix = document.getElementById('chave').value;
            const valorPix = parseFloat(document.getElementById('valor').value);

            if (chavePix && !isNaN(valorPix) && valorPix > 0) {
                const novaTransacao = {
                    chave: chavePix,
                    valor: valorPix,
                    data: new Date().toLocaleString('pt-BR') // Formato de data/hora brasileiro
                };

                transacoesPix.push(novaTransacao); // Adiciona a nova transação
                salvarTransacoes(); // SALVA A LISTA ATUALIZADA NO localStorage

                pixForm.reset(); // Limpa o formulário

                console.log('Transação PIX registrada:', novaTransacao);
                console.log('Todas as transações (persistenes):', transacoesPix);

                alert(`PIX de R$${valorPix.toFixed(2)} para ${chavePix} enviado com sucesso!`);

            } else {
                alert('Por favor, preencha a chave PIX e um valor válido.');
            }
        });
    } else {
        console.warn('Formulário com ID "pixForm" não encontrado. Verifique seu HTML.');
    }
});