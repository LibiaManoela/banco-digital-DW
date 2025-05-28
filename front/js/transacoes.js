document.addEventListener('DOMContentLoaded', function() {
    const corpoTabelaTransacoes = document.getElementById('corpoTabelaTransacoes');
    const mensagemSemTransacoes = document.getElementById('mensagem-sem-transacoes');

    const transacoesSalvas = localStorage.getItem('transacoesGlobais'); // lê a chave global
    let transacoesGlobais = transacoesSalvas ? JSON.parse(transacoesSalvas) : [];

    if (transacoesGlobais.length === 0) {
        mensagemSemTransacoes.style.display = 'block';
    } else {
        mensagemSemTransacoes.style.display = 'none';

        // reverter a ordem para exibir as mais recentes primeiro
        transacoesGlobais.reverse();

        transacoesGlobais.forEach(transacao => {
            const row = corpoTabelaTransacoes.insertRow();

            const cellData = row.insertCell();
            cellData.textContent = transacao.data;

            const cellDescricao = row.insertCell();
            cellDescricao.textContent = transacao.descricao;

            const cellValor = row.insertCell();
            cellValor.textContent = `R$ ${transacao.valor.toFixed(2)}`;
        });
    }
});