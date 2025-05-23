document.addEventListener('DOMContentLoaded', function() {
    const corpoTabelaTransacoes = document.getElementById('corpoTabelaTransacoes');
    const mensagemSemTransacoes = document.getElementById('mensagem-sem-transacoes');

    const transacoesSalvas = localStorage.getItem('transacoesPix');
    let transacoesPix = [];

    if (transacoesSalvas) {
        transacoesPix = JSON.parse(transacoesSalvas);
    }

    if (transacoesPix.length === 0) {
        if (mensagemSemTransacoes) {
            mensagemSemTransacoes.style.display = 'block';
        }
    } else {
        if (mensagemSemTransacoes) {
            mensagemSemTransacoes.style.display = 'none';
        }

        transacoesPix.forEach(transacao => {
            const row = corpoTabelaTransacoes.insertRow(); // Cria uma nova linha na tabela

            const cellData = row.insertCell();
            cellData.textContent = transacao.data.split(' ')[0].replace(',', ''); // Pega só a data (ex: "23/05/2025")

            const cellDescricao = row.insertCell();
            cellDescricao.textContent = `PIX para ${transacao.chave}`;

            const cellValor = row.insertCell();
            cellValor.textContent = `R$ ${transacao.valor.toFixed(2)}`;
            cellValor.style.color = 'white'; // Opcional: deixar valor negativo em vermelho
        });
    }
});