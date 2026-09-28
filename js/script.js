function validarCadastro() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const erro = document.getElementById("erro");

  if (!nome || !email) {
    erro.textContent = "Quase. Você esqueceu de preencher alguma coisa que o sistema não explicou direito.";
    return;
  }

  window.location.href = "agendamento.html";
}

function voltar() {
  window.location.href = "index.html";
}

function validarAgendamento() {
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const erro = document.getElementById("erroAgendamento");

  if (!servico || !data || !hora) {
    erro.textContent = "Não foi possível continuar. Descubra sozinho qual campo está faltando.";
    return;
  }

  window.location.href = "final.html";
}
