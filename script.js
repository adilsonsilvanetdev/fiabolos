const menuButton = document.querySelector(".botao-menu");
const menu = document.querySelector("#menu-principal");
const janelaCarrinho = document.querySelector("[data-janela-carrinho]");
const botaoAbrirCarrinho = document.querySelector("[data-abrir-carrinho]");
const botaoFecharCarrinho = document.querySelector("[data-fechar-carrinho]");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    menuButton.setAttribute("aria-expanded", String(aberto));
  });

  menu.querySelectorAll("a, [data-abrir-carrinho]").forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("aberto");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const numeroWhatsApp = "5511994093043";

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

// O carrinho existe apenas nesta página e prepara a mensagem do pedido.
const carrinho = new Map();
const listaCarrinho = document.querySelector("[data-itens-carrinho]");
const contadorCarrinho = document.querySelector("[data-contador-carrinho]");
const contadorMenuCarrinho = document.querySelector("[data-contador-menu-carrinho]");
const avisoCarrinhoVazio = document.querySelector("[data-carrinho-vazio]");
const enviarCarrinho = document.querySelector("[data-enviar-carrinho]");

function atualizarCarrinho() {
  if (!listaCarrinho || !contadorCarrinho || !enviarCarrinho) return;

  listaCarrinho.replaceChildren();
  let quantidadeTotal = 0;

  carrinho.forEach((item, nome) => {
    quantidadeTotal += item.quantidade;
    const linha = document.createElement("li");
    linha.className = "item-carrinho";

    const informacoes = document.createElement("div");
    informacoes.className = "item-carrinho-info";

    if (item.foto) {
      const foto = document.createElement("img");
      foto.className = "miniatura-carrinho";
      foto.src = item.foto;
      foto.alt = "";
      foto.setAttribute("aria-hidden", "true");
      informacoes.append(foto);
    }

    const texto = document.createElement("span");
    texto.className = "nome-item-carrinho";
    texto.textContent = nome;
    informacoes.append(texto);

    const controlesQuantidade = document.createElement("div");
    controlesQuantidade.className = "controles-quantidade";
    controlesQuantidade.setAttribute("aria-label", `Quantidade de ${nome}`);

    const diminuir = document.createElement("button");
    diminuir.className = "botao-quantidade";
    diminuir.type = "button";
    diminuir.textContent = "−";
    diminuir.setAttribute("aria-label", `Diminuir quantidade de ${nome}`);
    diminuir.addEventListener("click", () => {
      if (item.quantidade <= 1) {
        carrinho.delete(nome);
      } else {
        item.quantidade -= 1;
      }
      atualizarCarrinho();
    });

    const quantidade = document.createElement("span");
    quantidade.className = "quantidade-item-carrinho";
    quantidade.textContent = String(item.quantidade);
    quantidade.setAttribute("aria-live", "polite");

    const aumentar = document.createElement("button");
    aumentar.className = "botao-quantidade";
    aumentar.type = "button";
    aumentar.textContent = "+";
    aumentar.setAttribute("aria-label", `Aumentar quantidade de ${nome}`);
    aumentar.addEventListener("click", () => {
      item.quantidade += 1;
      atualizarCarrinho();
    });

    controlesQuantidade.append(diminuir, quantidade, aumentar);

    const remover = document.createElement("button");
    remover.className = "remover-item-carrinho";
    remover.type = "button";
    remover.textContent = "Remover";
    remover.setAttribute("aria-label", `Remover ${nome} do carrinho`);
    remover.addEventListener("click", () => {
      carrinho.delete(nome);
      atualizarCarrinho();
    });

    linha.append(informacoes, controlesQuantidade, remover);
    listaCarrinho.append(linha);
  });

  contadorCarrinho.textContent = String(quantidadeTotal);
  if (contadorMenuCarrinho) contadorMenuCarrinho.textContent = String(quantidadeTotal);
  if (botaoAbrirCarrinho) {
    botaoAbrirCarrinho.setAttribute("aria-label", `Abrir carrinho, ${quantidadeTotal} ${quantidadeTotal === 1 ? "item" : "itens"}`);
  }
  if (avisoCarrinhoVazio) avisoCarrinhoVazio.hidden = quantidadeTotal > 0;
  enviarCarrinho.setAttribute("aria-disabled", String(quantidadeTotal === 0));
  enviarCarrinho.tabIndex = quantidadeTotal === 0 ? -1 : 0;

  if (quantidadeTotal === 0) {
    enviarCarrinho.href = "https://wa.me/" + numeroWhatsApp;
    return;
  }

  const linhasPedido = Array.from(carrinho, ([nome, item]) =>
    `• ${nome} (quantidade: ${item.quantidade})`
  );
  const mensagem = `Olá! Gostaria de fazer um pedido com estes produtos:\n${linhasPedido.join("\n")}\n\nPodem me passar os detalhes e a disponibilidade?`;
  enviarCarrinho.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
}

if (janelaCarrinho && botaoAbrirCarrinho) {
  botaoAbrirCarrinho.addEventListener("click", () => janelaCarrinho.showModal());
}

if (janelaCarrinho && botaoFecharCarrinho) {
  botaoFecharCarrinho.addEventListener("click", () => janelaCarrinho.close());
  janelaCarrinho.addEventListener("click", (evento) => {
    if (evento.target === janelaCarrinho) janelaCarrinho.close();
  });
}

document.querySelectorAll("[data-adicionar-carrinho]").forEach((botao) => {
  botao.addEventListener("click", () => {
    const card = botao.closest(".produto");
    const nome = card?.dataset.nome;
    if (!nome) return;

    const foto = card.querySelector("img")?.getAttribute("src");
    const existente = carrinho.get(nome);
    carrinho.set(nome, {
      quantidade: existente ? existente.quantidade + 1 : 1,
      foto: existente?.foto || foto,
    });
    atualizarCarrinho();
    botao.textContent = "Adicionado ao carrinho";
    window.setTimeout(() => {
      botao.textContent = "Adicionar ao carrinho";
    }, 1400);
  });
});

document.querySelectorAll("a[data-whatsapp-geral]").forEach((link) => {
  const mensagem = "Olá! Vi o site da Fia Bolos & Doces e gostaria de receber mais informações sobre os produtos.";
  link.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
});

if (enviarCarrinho) {
  enviarCarrinho.addEventListener("click", (evento) => {
    if (carrinho.size === 0) evento.preventDefault();
  });
}

atualizarCarrinho();
