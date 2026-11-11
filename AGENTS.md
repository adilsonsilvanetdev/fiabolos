# Fia Bolos & Doces

## Visão
Site estático para apresentar os bolos e doces da Fia Bolos & Doces, em São Paulo. A página valoriza as fotos fornecidas, permite filtrar a vitrine e encaminha consultas e pedidos ao WhatsApp.

## Stack e limites técnicos
- Usar HTML, CSS e JavaScript puros. Não usar frameworks, bibliotecas, pacotes, dependências ou processo de build; não instalar nada.
- O site funciona como arquivos estáticos no navegador. Não há back-end, banco de dados, API, processamento de pedidos nem persistência de filtros.
- O JavaScript controla somente interações locais: abrir e fechar o menu móvel, filtrar os cards e preparar links com mensagens para o WhatsApp. O pedido é concluído pelo usuário na conversa externa do WhatsApp.
- Não adicionar frameworks, bibliotecas ou dependências sem pedido explícito da pessoa usuária.

## Estrutura atual
```text
/
├── AGENTS.md
├── index.html       # marcação, conteúdo, produtos, categorias e valores demonstrativos
├── style.css        # identidade visual, layout responsivo, filtros e componentes
├── script.js        # menu móvel, filtros e links de consulta/pedido
└── Imagens/         # 22 imagens JPEG fornecidas; origem de todas as imagens do site
```

A pasta `inspiracoes/` não existe no projeto atual. Não mover nem renomear `Imagens/`; usar seus arquivos como fonte visual. Não criar arquivos adicionais além dos solicitados.

## Seções e conteúdo da página
1. **Cabeçalho:** logomarca ampliada e navegação para Início, Produtos e Contato. Em telas estreitas, o menu vira um botão que abre e fecha os links.
2. **Principal:** título “Bolos feitos para celebrar” e subtítulo sobre as criações da doceria, sobre uma foto de bolo em fundo de tela cheia. O botão “Ver Produtos” foi removido.
3. **Produtos em destaque:** texto introdutório, filtros, aviso de valores fictícios, mensagem amigável para resultados vazios e cards de produtos.
4. **Contato:** chamada e botão para pedir pelo WhatsApp, com o telefone (11) 99409-3043.
5. **Rodapé:** identificação da Fia Bolos & Doces e São Paulo.

A vitrine atual tem oito cards: bolo de chocolate decorado, bolo decorado com rosas, bolo floral, torta de maracujá, bolo de chocolate com cobertura, rocambole de chocolate, bento cake decorado e mini bolo com confeitos. As fotos e os produtos devem ser apresentados sem alegações de disponibilidade não confirmadas.

## Funcionalidades que rodam no navegador
- Os filtros **Todos**, **Bolos caseiros**, **Aniversários**, **Bento cake** e **Mini bolos** mostram e ocultam cards localmente, sem recarregar a página. O filtro Todos mostra todos os cards. A categoria `outros` também aparece em Todos; não há botão dedicado para ela.
- Se a categoria selecionada não tiver cards, mostrar a mensagem amigável existente em `.sem-produtos`.
- Cada card conserva o link **Consultar pelo WhatsApp**, com mensagem sobre o produto.
- O botão **Fazer Pedido** de cada card abre `https://wa.me/5511994093043` com nome do produto e valor demonstrativo pré-preenchidos. O link de contato geral também inicia uma mensagem.
- O menu móvel abre e fecha pelo botão Menu e fecha ao selecionar um link.
- Os valores atuais são fictícios para demonstração e estão identificados assim na página; não devem ser apresentados como preços comerciais confirmados. Consultas de disponibilidade e detalhes devem ser encaminhadas ao WhatsApp.

## Como adicionar um bolo ou doce
1. Use uma foto já fornecida em `Imagens/`. Se a pessoa usuária fornecer uma foto nova, mantê-la nessa pasta e referenciá-la pelo caminho relativo. Não buscar nem gerar imagens.
2. Adicione um `<article class="produto">` dentro de `.grade-produtos` em `index.html`, seguindo este padrão. Substitua os exemplos e mantenha o valor do atributo `data-valor` igual ao preço visível:

```html
<article class="produto" data-categoria="bolos-caseiros" data-nome="Bolo de exemplo" data-valor="49.90">
  <img src="Imagens/foto-fornecida.jpeg" alt="Descrição objetiva do bolo na foto" loading="lazy">
  <div class="produto-conteudo">
    <h3>Bolo de exemplo</h3>
    <p class="preco-produto">R$ 49,90</p>
    <p>Descrição curta do produto.</p>
    <a class="link-pedido" data-produto="Bolo de exemplo" href="https://wa.me/5511994093043">Consultar pelo WhatsApp</a>
    <a class="botao-pedido" data-fazer-pedido href="https://wa.me/5511994093043">Fazer Pedido</a>
  </div>
</article>
```

3. Use exatamente uma das categorias reconhecidas pelos filtros: `bolos-caseiros`, `aniversarios`, `bento-cake` ou `mini-bolos`. Use `outros` quando o produto não pertencer a nenhuma delas; esse card aparecerá em Todos. Se for necessário apresentar uma nova categoria como filtro, atualizar os botões `data-filtro` e a lógica de filtragem em `script.js`.
4. Mantenha `data-nome` sincronizado com o nome do card e `data-valor` com o valor visível. O JavaScript usa esses atributos para compor a mensagem do botão Fazer Pedido. O link de consulta usa `data-produto`.
5. Os valores atuais são demonstrativos e fictícios. Em novos cards, usar somente valores fornecidos pela pessoa usuária ou identificá-los claramente como fictícios; nunca inventar condições comerciais, disponibilidade, prazos, endereço ou avaliações.
6. Preserve classes e atributos do padrão para que o card herde o layout responsivo e as funcionalidades atuais. Escreva todo o texto em português do Brasil.

## Direção visual
- **Identidade da marca:** marrom chocolate (`#35170D`), marfim/creme (`#FFF4E5`), dourado champanhe (`#E8C879`) e rosa framboesa/coral (`#E84B73`) aparecem nas referências da logomarca.
- **Aplicação atual no site:** fundo marfim claro, texto marrom escuro, superfícies claras e uma única cor de destaque discreta rosa seco (`#A86F72`). Dourado pode permanecer na logomarca, sem acrescentar outras cores de destaque à interface.
- **Tipografia:** títulos elegantes em serifada de alto contraste, usando fontes locais com fallbacks; textos e controles em fonte sem serifa legível. Não carregar fontes externas.
- **Componentes e clima:** bastante espaço em branco, títulos com hierarquia clara, cards de cantos sutis e sombra suave, fotos grandes e sem filtros de cor, botões e filtros simples com foco visível. Manter o clima artesanal, afetuoso e caprichado da marca.
- **Responsividade:** cabeçalho fixo translúcido, menu recolhível em celular, cards em coluna única em telas pequenas, filtros que podem quebrar em linhas, alvos de toque confortáveis e nenhuma rolagem horizontal ou conteúdo cortado.
- Usar somente imagens fornecidas em `Imagens/`. Não usar fotos de clientes como depoimentos ou prova social.

## Regras fixas
- Escrever todos os textos em português do Brasil, com acentuação e linguagem natural.
- Imóveis e clientes devem ser sempre fictícios.
- Nunca adicionar frameworks, bibliotecas ou dependências sem pedido explícito da pessoa usuária.
- Não adicionar fatos comerciais não fornecidos. Preços demonstrativos só podem ser tratados como fictícios, conforme descrito acima.
- Preservar as imagens e referências fornecidas; não criar outros arquivos além dos solicitados.
