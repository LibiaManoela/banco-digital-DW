document.addEventListener('DOMContentLoaded', function() {
    const corpoTabelaTransacoes = document.getElementById('corpoTabelaTransacoes');
    const mensagemSemTransacoes = document.getElementById('mensagem-sem-transacoes');

    const transacoesSalvas = localStorage.getItem('transacoesGlobais');
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
        
        let soma = 0;
        transacoesGlobais.forEach(transacao => {
            soma = soma + transacao.valor;
        });

        const row = corpoTabelaTransacoes.insertRow();
        const cellDescricao = row.insertCell();
        cellDescricao.textContent = `Total gasto:`;
        const cellVazio = row.insertCell();
        cellVazio.textContent = '';
        const cellValor = row.insertCell();
        cellValor.textContent = `R$ ${soma.toFixed(2)}`;
    }
});
