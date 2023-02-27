![rumia](https://github.com/100ze/rumia/blob/main/public/img/rumia.png?raw=true "rumia")

# Rumia Browser

## Por que criei essa estensão?
Esse foi um dos meus projetos de extensão (para o chrome claro), a idéia era fazer um mini navegador em formato de extensão, que pudesse abrir outras páginas enquanto eu estivesse na plataforma de atendimentos ao cliente.

O problema que eu tentei resolver era poder acessar as duas páginas que eu mais utilizava para trabalhar, usando uma página só, evitando assim ter que ficar trocando e abrindo novas abas toda vez que tivesse que acessar o cadastro de um novo cliente.

## Quais os problemas?
O problema que impediu a extensão de ir para frente foi a permissão para rodar em todas as páginas, que eu não consegui encontrar uma maneira de fazer funcionar, já que para rodar a função precisa declarar em quais sites ela vai abrir, e como o propósito era ser um navegador, ficou meio impossível pré-indexar todas as páginas do mundo :sweat_smile:

## Como funcionava?
A extensão injetava um javascript na página que estivesse aberta no momento, esse código injetado era executado pela página atual, que criava uma div na tela que representava o "navegador".

Dentro dessa div, tinham elementos como botões e uma barra de url, que ao clicar, carregavam elementos `iframe` dentro da div e alternava a visibilidade desses elementos a medida que se clicava nas "abas" do navegador injetado.

Aqui em baixo está um exemplo:

## É possível rodar a extensão?
Sim! primeiro você baixa o código da rumia, depois você vai precisar ir na página [chrome://extensions/](chrome://extensions/) e clicar no botão "Modo desenvolvedor", depois, clique em "Carregar sem compactação" e selecione a pasta `rumia/public/`.

Uma vez carregada, você pode ir na página [da wikipedia em inglês](https://www.wikipedia.org/) e clicar na extensão. Caso queira usar a rumia em outro site, coloque o link desse site no arquivo `rumia/public/manifest.json` em `matches`.
