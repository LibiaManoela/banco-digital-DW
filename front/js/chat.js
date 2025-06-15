const historicoMensagens = [];

const chatContainer = document.getElementById('chat-container');
const mensagemInput = document.getElementById('mensagem-input');
const enviarBtn = document.getElementById('enviar-btn');
const chatForm = document.getElementById('chatForm');

function adicionarMensagem(texto, remetente) {
  const novaMensagem = {
    texto: texto,
    remetente: remetente,
    timestamp: new Date().toISOString() 
  };

  historicoMensagens.push(novaMensagem); 

  // Cria o elemento HTML da mensagem
  const mensagemDiv = document.createElement('div');
  mensagemDiv.classList.add('mensagem');

  if (remetente === 'usuario') {
    mensagemDiv.classList.add('mensagem-usuario');
  } else {
    mensagemDiv.classList.add('mensagem-ia');
  }

  mensagemDiv.textContent = texto; 

  chatContainer.appendChild(mensagemDiv); // Adiciona a mensagem ao contêiner

  // Rolagem automática para a última mensagem
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function enviarMensagemDoUsuario() {
  const texto = mensagemInput.value.trim(); // Pega o texto e remove espaços em branco

  if (texto) { // Verifica se a mensagem não está vazia
    adicionarMensagem(texto, 'usuario'); // Adiciona a mensagem do usuário

    // Limpa o input após o envio
    mensagemInput.value = '';

    // TODO: Aqui você fará a integração com o backend que chama a IA do Gemini
    // Por enquanto, vamos simular uma resposta da IA após um pequeno atraso.
    simularRespostaIA(texto);
  }
}

function simularRespostaIA(mensagemUsuario) {
    // Apenas para demonstração, a IA responde com base na mensagem do usuário
    let resposta = "Desculpe, não entendi. Poderia reformular?";
    if (mensagemUsuario.toLowerCase().includes("olá") || mensagemUsuario.toLowerCase().includes("oi")) {
        resposta = "Olá! Como posso ajudar você hoje?";
    } else if (mensagemUsuario.toLowerCase().includes("saldo")) {
        resposta = "Para verificar seu saldo, acesse a página inicial do banco.";
    } else if (mensagemUsuario.toLowerCase().includes("pix")) {
        resposta = "Você pode fazer um PIX através da nossa página de PIX. Precisa de ajuda com isso?";
    } else if (mensagemUsuario.toLowerCase().includes("cartão")) {
        resposta = "Nossos cartões oferecem diversas vantagens. Qual a sua dúvida sobre cartões?";
    }

    setTimeout(() => {
        adicionarMensagem(resposta, 'IA'); // Adiciona a resposta da IA
    }, 1000); // Simula um atraso de 1 segundo
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    adicionarMensagem("Olá! Sou o seu assistente virtual. Como posso ajudar você hoje?", "IA");

    enviarBtn.addEventListener('click', enviarMensagemDoUsuario);

    mensagemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita quebra de linha no input
            enviarMensagemDoUsuario();
        }
    });
});