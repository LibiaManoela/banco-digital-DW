document.addEventListener('DOMContentLoaded', function() {
    const corpoTabelaTransacoes = document.getElementById('corpoTabelaTransacoes');
    const mensagemSemTransacoes = document.getElementById('mensagem-sem-transacoes');

    const transacoesSalvas = localStorage.getItem('transacoesGlobais'); // Lê a chave global
    let transacoesGlobais = [];

    if (transacoesSalvas) {
        transacoesGlobais = JSON.parse(transacoesSalvas);
    }

    if (transacoesGlobais.length === 0) {
        if (mensagemSemTransacoes) {
            mensagemSemTransacoes.style.display = 'block';
        }
    } else {
        if (mensagemSemTransacoes) {
            mensagemSemTransacoes.style.display = 'none';
        }

        // Para exibir as mais recentes primeiro, você pode reverter a ordem
        transacoesGlobais.reverse();

        transacoesGlobais.forEach(transacao => {
            const row = corpoTabelaTransacoes.insertRow();

            const cellData = row.insertCell();
            cellData.textContent = transacao.data; // A data já está formatada corretamente

            const cellDescricao = row.insertCell();
            cellDescricao.textContent = transacao.descricao; // Usa a descrição já criada

            const cellValor = row.insertCell();
            cellValor.textContent = `R$ ${transacao.valor.toFixed(2)}`;
            cellValor.style.color = 'white';
        });
    }
});