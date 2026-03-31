document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("formulario");
  const mensagem = document.getElementById("mensagem");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const msg = document.getElementById("mensagemInput").value;

      if (!nome || !email || !msg) {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
      }

      mensagem.textContent = "Cadastro feito com sucesso!";
      mensagem.style.color = "#00ffcc";

      form.reset();
    });
    function celularValido(numero) {
  return numero.replace(/\D/g, "").length === 11;
}
    const celularInput = document.getElementById("celular");

celularInput.addEventListener("input", function(e) {
  let valor = e.target.value.replace(/\D/g, "");

  if (valor.length > 11) valor = valor.slice(0, 11);

  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

  e.target.value = valor;
});
  }

  const simForm = document.getElementById("simuladorForm");
  const resultado = document.getElementById("resultado");

  if (simForm) {
    simForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const preco = parseFloat(document.getElementById("produto").value);
      const quantidade = parseInt(document.getElementById("quantidade").value);

      if (!preco || !quantidade) {
        resultado.textContent = "Preencha corretamente!";
        resultado.style.color = "red";
        return;
      }

      const total = preco * quantidade;

      resultado.textContent = "Total: R$ " + total.toFixed(2);
      resultado.style.color = "#00ffcc";
    });
  }

});

function scrollParaProdutos() {
  document.getElementById("produtos").scrollIntoView({
    behavior: "smooth"
  });
  
}
document.getElementById("cpf").addEventListener("input", function(e) {
    let v = e.target.value.replace(/\D/g, "");

    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = v;
});

document.getElementById("cpf_cadastro").addEventListener("input", function(e) {
    let v = e.target.value.replace(/\D/g, "");

    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    e.target.value = v;
});
document.addEventListener("DOMContentLoaded", function () {
  const formCupom = document.getElementById("formCupom");
  const mensagemCupom = document.getElementById("mensagemCupom");

  formCupom.addEventListener("submit", function(e) {
    e.preventDefault();

    let cpf = document.getElementById("cpf").value.trim();

    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
      mensagemCupom.textContent = "CPF inválido! Digite os 11 números.";
      mensagemCupom.style.color = "red";
      return;
    }

    const cupom = "WV" + Math.floor(Math.random() * 9000 + 1000);
    mensagemCupom.textContent = `Parabéns! Seu cupom é: ${cupom}`;
    mensagemCupom.style.color = "black";

    formCupom.reset();
  });
});