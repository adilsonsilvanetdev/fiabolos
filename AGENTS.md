# Fia Bolos & Doces

## Visão
Criar um site acolhedor e elegante para apresentar os bolos e doces artesanais da Fia Bolos & Doces, em São Paulo.
A experiência deve valorizar as fotos reais fornecidas, facilitar a escolha de produtos e levar a pessoa diretamente ao WhatsApp para consultar ou fazer um pedido.

## Stack e limites técnicos
- Usar somente HTML, CSS e JavaScript puros, sem frameworks, bibliotecas, pacotes ou dependências.
- Não instalar nada e não criar processos de build; o site deve funcionar como arquivos estáticos no navegador.
- Não adicionar frameworks, bibliotecas ou dependências sem pedido explícito da pessoa usuária.
- Manter o site responsivo, acessível por teclado e legível em celulares e computadores.

## Estrutura planejada
```text
/
├── AGENTS.md
├── index.html
├── style.css
├── script.js
└── inspiracoes/
    └── referências visuais e imagens fornecidas
```

No estado atual do projeto, as 22 imagens fornecidas estão em `Imagens/`; ainda não existe a pasta `inspiracoes/`. Tratar `Imagens/` como a origem dos arquivos visuais disponíveis e não mover nem renomear a pasta sem solicitação explícita. Quando os arquivos do site forem criados, seguir os nomes e a estrutura planejados acima.

## Direção visual extraída das referências
- **Paleta:** marrom escuro de chocolate como cor de base (`#35170D`), marfim/creme para fundos e texto (`#FFF4E5`), dourado champanhe (`#E8C879`) nos detalhes e rosa framboesa/coral (`#E84B73`) em pequenos acentos. Verde pode aparecer no ícone ou botão do WhatsApp, sem competir com a identidade da marca.
- **Tipografia:** combinar uma serifada elegante e de alto contraste para títulos, inspirada no lettering da marca, com uma serifada clássica para chamadas secundárias e uma fonte sem serifa simples e legível para textos e controles. Preferir fontes já disponíveis no sistema e fallbacks CSS; não carregar fontes externas nem instalar arquivos de fonte.
- **Componentes:** botões claros e fáceis de identificar; cartões de produto simples que deem destaque às fotos; detalhes delicados em dourado e rosa, como linhas, curvas e pequenos corações, usados com moderação. Manter bom contraste, respiro e hierarquia visual.
- **Clima:** artesanal, afetuoso, festivo e caprichado, com um toque elegante inspirado na logomarca. As fotos mostram bolos decorados variados; elas devem ser o foco da vitrine, sem filtros que alterem as cores dos produtos.
- Usar somente as imagens já fornecidas em `Imagens/` (ou as que futuramente forem colocadas em `inspiracoes/`). Não buscar imagens externas nem gerar ou criar novas imagens. A arte com a marca pode orientar o visual; nas fotos de produtos, priorizar os bolos e doces. Não usar fotos de clientes como depoimentos ou prova social.

## Escolha e pedido pelo WhatsApp
- Incluir chamadas visíveis para **“Escolher um bolo”** e **“Pedir pelo WhatsApp”**, com opção de iniciar uma consulta ou pedido a partir da vitrine de produtos.
- Usar o número exibido na arte da marca: **(11) 99409-3043**. Para links, usar o formato `https://wa.me/5511994093043` e, quando apropriado, abrir a conversa com uma mensagem inicial preenchida com o produto escolhido.
- Não inventar preços, disponibilidade, endereço, prazos, avaliações ou condições de entrega. Deixar informações não fornecidas em aberto ou orientar a pessoa a confirmá-las pelo WhatsApp.

## Regras fixas de conteúdo e projeto
- Escrever todos os textos em português do Brasil, com acentuação e linguagem natural.
- Imóveis e clientes devem ser sempre fictícios.
- Nunca adicionar frameworks, bibliotecas ou dependências sem pedido explícito da pessoa usuária.
- Preservar as imagens e arquivos de referência fornecidos; não criar outros arquivos além dos que forem solicitados.
