document.addEventListener('DOMContentLoaded', function() {
    const corpoTabelaTransacoes = document.getElementById('corpoTabelaTransacoes');
    const mensagemSemTransacoes = document.getElementById('mensagem-sem-transacoes');

    const transacoesSalvas = localStorage.getItem('transacoesGlobais');
    let transacoesGlobais = transacoesSalvas ? JSON.parse(transacoesSalvas) : [];

    // // filtrar transações dos últimos 30 dias
    // const hoje = new Date();
    // const trintaDiasAtras = new Date();
    // trintaDiasAtras.setDate(hoje.getDate() - 30);

    // transacoesGlobais = transacoesGlobais.filter(transacao => {
    //     const dataTransacao = new Date(transacao.data);
    //     return dataTransacao >= trintaDiasAtras && dataTransacao <= hoje;
    // });

    // // função para converter "dd/mm/aaaa" em objeto Date
    // function converterDataBrasileiraParaDate(dataString) {
    //     const [dia, mes, ano] = dataString.split('/');
    //     return new Date(`${ano}-${mes}-${dia}`);
    // }

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

        const totalSpan = document.getElementById("totalTransacoes");
        totalSpan.textContent = soma.toFixed(2).replace('.', ',');

    }
});

//gerar PDF de extrato
document.getElementById("btnGerarPDF").addEventListener("click", () => {
    const doc = new jsPDF();

    doc.text("Relatório de transações referente aos últimos 30 dias", 14, 15);

    const corpoTabela = document.getElementById('corpoTabelaTransacoes');
    const linhas = corpoTabela.querySelectorAll('tr');

    const dadosTabela = [];

    linhas.forEach(linha => {
        const colunas = linha.querySelectorAll('td');
        const linhaDados = Array.from(colunas).map(td => td.textContent);
        dadosTabela.push(linhaDados);
    });

    doc.autoTable({
        head: [['Data', 'Descrição', 'Valor']],
        body: dadosTabela,
        startY: 25,
        theme: 'grid',
        styles: {
            fontSize: 10,
            cellPadding: 4
        },
        headStyles: {
            fillColor: [220, 53, 69] // cor vermelha
        }
    });

    doc.text(`Total: R$ ${document.getElementById("totalTransacoes").textContent}`, 14, doc.lastAutoTable.finalY + 10);
    
    doc.save("extrato.pdf");
});