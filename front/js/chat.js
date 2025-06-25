const historicoMensagens = [];

const chatContainer = document.getElementById('chat-container');
const mensagemInput = document.getElementById('mensagem-input');
const enviarBtn = document.getElementById('enviar-btn');
const chatForm = document.getElementById('chatForm');

const BACKEND_URL = 'http://localhost:3000';

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

async function enviarMensagemDoUsuario() {
  const texto = mensagemInput.value.trim();// Remove espaços em branco do texto 

  if (texto) { 
    adicionarMensagem(texto, 'usuario');
    
    mensagemInput.value = '';

    try {
      const response = await fetch(`${BACKEND_URL}/gemini-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: texto }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Erro do servidor: ${response.status} - ${errorData.error || 'Erro desconhecido'}`);
      }

      const data = await response.json();
      const respostaIA = data.reply || "Não entendi sua pergunta. Pode reformular?";

      adicionarMensagem(respostaIA, 'IA');

    } catch (error) {
      console.error('Erro ao comunicar com o backend/Gemini:', error);
      adicionarMensagem("Desculpe, houve um erro ao processar sua solicitação. Por favor, tente novamente.", 'IA');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
    adicionarMensagem("Olá! Sou o seu assistente virtual. Como posso ajudar você hoje?", "IA");

    enviarBtn.addEventListener('click', enviarMensagemDoUsuario);

    mensagemInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            enviarMensagemDoUsuario();
        }
    });
});