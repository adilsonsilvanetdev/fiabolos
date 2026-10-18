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

// Os links dos cards enviam o nome e a descrição vistos no site para o WhatsApp.
document.querySelectorAll(".produto").forEach((card) => {
  const produto = card.dataset.nome;
  const descricao = card.querySelector(".produto-conteudo > p")?.textContent.trim();
  const complemento = descricao ? ` — ${descricao}` : "";
  const mensagem = `Olá! Vi no site o produto ${produto}${complemento} e gostaria de receber mais informações.`;
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  card.querySelectorAll("a[data-produto], a[data-fazer-pedido]").forEach((link) => {
    link.href = linkWhatsApp;
  });
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
  const mensagem = "Olá! Vi o site da Fia Bolos & Doces e gostaria de receber mais informações sobre os produtos.";
  link.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
});
