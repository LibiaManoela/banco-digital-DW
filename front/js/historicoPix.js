document.addEventListener('DOMContentLoaded', function() {
    const listaHistoricoPix = document.getElementById('listaHistoricoPix');
    const mensagemSemTransacoes = document.getElementById('mensagem-sem-transacoes');

    // carrega as transações do localStorage
    const transacoesSalvas = localStorage.getItem('transacoesPix');
    let transacoesPix = [];

    if (transacoesSalvas) {
        transacoesPix = JSON.parse(transacoesSalvas);
    }

    // verifica se há transações para exibir
    if (transacoesPix.length === 0) {
        if (mensagemSemTransacoes) {
            mensagemSemTransacoes.style.display = 'block'; 
        }
        if (listaHistoricoPix) {
            listaHistoricoPix.style.display = 'none'; // esconde a lista vazia
        }
    } else {
        if (mensagemSemTransacoes) {
            mensagemSemTransacoes.style.display = 'none'; // esconde a mensagem
        }
        if (listaHistoricoPix) {
            listaHistoricoPix.style.display = 'block'; // mostra a lista
            // itera sobre as transações e as adiciona à lista HTML
            transacoesPix.forEach(transacao => {
                const li = document.createElement('li');
                li.textContent = `Chave: ${transacao.chave} | Valor: R$${transacao.valor.toFixed(2)} | Data: ${transacao.data}`;
                listaHistoricoPix.appendChild(li);
            });
        }
    }
});