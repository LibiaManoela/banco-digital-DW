# Banco Digital - Projeto de Desenvolvimento Web

Este é um projeto de um sistema de banco digital desenvolvido como parte da disciplina de Desenvolvimento Web. O objetivo é criar uma interface front-end funcional que simule operações bancárias comuns, como visualização de saldo, detalhes de cartão, transações, pagamentos e PIX.

## Visão Geral do Projeto

O projeto "Banco Digital" é uma aplicação web front-end que simula algumas funcionalidades básicas de um banco online. Ele é construído com HTML para a estrutura, CSS para a estilização e JavaScript para a lógica interativa.

## Funcionalidades Implementadas

Atualmente, o sistema conta com as seguintes funcionalidades:

* **Página Inicial (Homepage):**
    * Exibição de informações da conta (tipo, agência, numeração).
    * **Mostrar/Ocultar Saldo:** Funcionalidade para alternar a visibilidade do saldo atual.
    * Links para as principais ações (Empréstimo, Pagar Conta, Fazer Pix).
* **Página de Cartão Bancário:**
    * Exibição de um cartão virtual com nome do banco, chip, validade e titular.
    * **Mostrar/Ocultar Número do Cartão:** Funcionalidade para alternar a visibilidade dos números principais do cartão.
* **Página de Transações:**
    * Visualização de um extrato de transações.
    * Funcionalidade para **Gerar Extrato em PDF**.
    * Integração com `localStorage` para persistência das transações (Pagamentos e PIX).
* **Página de Pagar Conta:**
    * Formulário para simular o pagamento de uma conta com código de barras e valor.
    * Os pagamentos são registrados na lista de transações.
* **Página de Fazer PIX:**
    * Formulário para simular uma transação PIX com chave e valor.
    * As transações PIX são registradas na lista de transações.
* **Página de Login:**
    * Simulação de um login (com autenticação via `fetch` para `localhost:3000/login` - requer um backend simples para funcionar).
* **Página de Empréstimo:**
    * Formulário simples para solicitar empréstimo.
* **Página de Contato:**
    * Informações de contato.
* **Cookies:** Mensagem de aceitação de cookies na página inicial.

## Estrutura do Projeto

O projeto está organizado nas seguintes pastas:

├── front/
│   ├── css/
│   │   ├── cartao.css
│   │   ├── contato.css
│   │   ├── emprestimo.css
│   │   ├── homepage.css
│   │   ├── login.css
│   │   ├── pagarConta.css
│   │   ├── pix.css
│   │   ├── style.css
│   │   └── transacoes.css
│   ├── js/
│   │   ├── cartao.js
│   │   ├── main.js
│   │   ├── pagarConta.js
│   │   ├── pix.js
│   │   ├── saldo.js
│   │   └── transacoes.js
│   ├── imagens/
│   ├── cartao.html
│   ├── contato.html
│   ├── emprestimo.html
│   ├── homePage.html
│   ├── index.html
│   ├── login.html
│   ├── pagarConta.html
│   ├── pix.html
│   └── transacoes.html
└── README.md


* **`front/`**: Contém todos os arquivos front-end da aplicação.
    * **`css/`**: Folhas de estilo CSS para cada página ou componente.
    * **`js/`**: Scripts JavaScript para adicionar interatividade às páginas.
    * **`imagens/`**: Diretório para armazenar as imagens utilizadas no projeto (assumido pela referência no `index.html`).
    * **Arquivos `.html`**: As diferentes páginas da aplicação.

## Como Rodar o Projeto

Para visualizar o projeto em seu navegador:

1.  **Clone o repositório** (se estiver em um sistema de controle de versão) ou baixe os arquivos.
2.  Navegue até a pasta `front/`.
3.  Abra o arquivo `index.html` ou `homePage.html` diretamente em seu navegador.

    * **Nota:** Algumas funcionalidades, como o login, esperam uma resposta de um servidor `http://localhost:3000/login`. Para testar o login completo, um backend simples precisaria estar rodando. No entanto, as demais funcionalidades são puramente front-end e funcionarão sem um servidor.

## Tecnologias Utilizadas

* **HTML5:** Estrutura das páginas web.
* **CSS3:** Estilização e design responsivo.
* **JavaScript:** Lógica de interatividade e manipulação do DOM.
* **jsPDF:** Biblioteca JavaScript para geração de arquivos PDF (utilizada na página de Transações).
* **jsPDF-AutoTable:** Plugin para jsPDF que facilita a criação de tabelas em PDFs.

## Próximos Passos e Melhorias Futuras (Anotações do Desenvolvedor)

De acordo com as anotações do projeto:

* Adicionar um `<span>` na página inicial.
* Implementar um CRUD (Create, Read, Update, Delete) com React para:
    * **Create:** Em 'Pagar Conta' e 'Fazer Pix' (já parcialmente implementado com `localStorage`).
    * **Visualizar:** Em 'Transações' (já implementado).
    * **Delete:** Automático após um certo tempo de inclusão da informação.
* Separar o conteúdo do `style.css` em arquivos CSS mais específicos.
* Separar o conteúdo dos arquivos JavaScript em módulos mais organizados.

## Referências e Links Úteis para o Professor

Aqui estão alguns links úteis relacionados às tecnologias e funcionalidades exploradas neste projeto:

* **jsPDF (para geração de PDF):**
    * Documentação Oficial: [https://www.npmjs.com/package/jspdf](https://www.npmjs.com/package/jspdf)
    * Tutorial sobre Geração de PDF com JavaScript: [https://medium.com/profdiegopinho/gerando-arquivos-pdf-com-javascript-23e8b19fde99](https://medium.com/profdiegopinho/gerando-arquivos-pdf-com-javascript-23e8b19fde99)
* **React (para futuras implementações de CRUD):**
    * Documentação Oficial: [https://pt-br.react.dev/](https://pt-br.react.dev/)
    * Guia Completo para Criar um CRUD com React e MySQL: [https://awari.com.br/guia-completo-para-criar-um-crud-com-react-e-mysql/](https://awari.com.br/guia-completo-para-criar-um-crud-com-react-e-mysql/)
    * Aula ReactJS - CRUD: [https://kosmicke.medium.com/aula-14-reactjs-crud-6fc836d3918a](https://kosmicke.medium.com/aula-14-reactjs-crud-6fc836d3918a)

---
