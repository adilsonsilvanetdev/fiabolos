const menuButton = document.querySelector(".botao-menu");
const menu = document.querySelector("#menu-principal");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    menuButton.setAttribute("aria-expanded", String(aberto));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("aberto");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const numeroWhatsApp = "5511994093043";

// Mantém os links atuais de consulta com uma mensagem específica do produto.
document.querySelectorAll("a[data-produto]").forEach((link) => {
  const produto = link.dataset.produto;
  const mensagem = `Olá! Gostaria de consultar opções e disponibilidade para: ${produto}.`;
  link.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
});

// Os novos botões incluem o nome e o valor ilustrativo no pedido via WhatsApp.
document.querySelectorAll(".produto").forEach((card) => {
  const botaoPedido = card.querySelector("[data-fazer-pedido]");
  if (!botaoPedido) return;

  const produto = card.dataset.nome;
  const valor = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(card.dataset.valor));
  const mensagem = `Olá! Gostaria de fazer um pedido de ${produto}, no valor de ${valor}. Poderiam confirmar a disponibilidade?`;
  botaoPedido.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
});

// Filtros locais: não dependem de servidor ou banco de dados.
const filtros = document.querySelectorAll("[data-filtro]");
const produtos = document.querySelectorAll(".produto");
const mensagemSemProdutos = document.querySelector(".sem-produtos");

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {
    const categoriaSelecionada = filtro.dataset.filtro;
    let quantidadeVisivel = 0;

    filtros.forEach((item) => {
      const ativo = item === filtro;
      item.classList.toggle("ativo", ativo);
      item.setAttribute("aria-pressed", String(ativo));
    });

    produtos.forEach((produto) => {
      const corresponde = categoriaSelecionada === "todos"
        || produto.dataset.categoria === categoriaSelecionada;
      produto.hidden = !corresponde;
      if (corresponde) quantidadeVisivel += 1;
    });

    if (mensagemSemProdutos) {
      mensagemSemProdutos.hidden = quantidadeVisivel > 0;
    }
  });
});

document.querySelectorAll("a[data-whatsapp-geral]").forEach((link) => {
  const mensagem = "Olá! Gostaria de conhecer as opções de bolos e doces da Fia Bolos & Doces.";
  link.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
});
