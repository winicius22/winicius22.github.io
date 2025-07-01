// Referências
const btnCarrinho = document.getElementById("btn-carrinho");
const sidebarCarrinho = document.getElementById("sidebar-carrinho");
const overlayCarrinho = document.getElementById("overlay-carrinho");
const btnFechar = document.getElementById("fechar-carrinho");
const itensCarrinhoDiv = document.getElementById("itens-carrinho");
const totalDiv = document.getElementById("total");
const btnFinalizar = document.getElementById("finalizar-compra");

// Dados do carrinho
let carrinho = {};

// Função para abrir carrinho
function abrirCarrinho() {
  sidebarCarrinho.classList.add("show");
  overlayCarrinho.style.display = "block";
}

// Função para fechar carrinho
function fecharCarrinho() {
  sidebarCarrinho.classList.remove("show");
  overlayCarrinho.style.display = "none";
}

// Atualiza lista e total do carrinho na sidebar
function atualizarCarrinho() {
  itensCarrinhoDiv.innerHTML = ""; // limpa

  let total = 0;
  for (const nome in carrinho) {
    const item = carrinho[nome];
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    const divItem = document.createElement("div");
    divItem.classList.add("item-carrinho");
    divItem.innerHTML = `
      <span>${nome} x ${item.quantidade}</span>
      <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
    `;
    itensCarrinhoDiv.appendChild(divItem);
  }

  totalDiv.textContent = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Adiciona produto no carrinho
function adicionarAoCarrinho(nome, preco) {
  if (carrinho[nome]) {
    carrinho[nome].quantidade++;
  } else {
    carrinho[nome] = { preco: preco, quantidade: 1 };
  }
  atualizarCarrinho();
  abrirCarrinho();
}

// Eventos botão comprar
document.querySelectorAll(".btn-comprar").forEach(botao => {
  botao.addEventListener("click", () => {
    const nome = botao.getAttribute("data-nome");
    const preco = parseFloat(botao.getAttribute("data-preco"));
    adicionarAoCarrinho(nome, preco);
  });
});

// Eventos abrir/fechar carrinho
btnCarrinho.addEventListener("click", abrirCarrinho);
btnFechar.addEventListener("click", fecharCarrinho);
overlayCarrinho.addEventListener("click", fecharCarrinho);

// Finalizar compra (limpa carrinho e fecha)
btnFinalizar.addEventListener("click", () => {
  if (Object.keys(carrinho).length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }
  alert("Compra finalizada! Obrigado.");
  carrinho = {};
  atualizarCarrinho();
  fecharCarrinho();
});
