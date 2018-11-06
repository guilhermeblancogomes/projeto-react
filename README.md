# Projeto MyReads

Este é o modelo inicial para o projeto de avaliação final do curso Fundamentos de Reação da Udacity. O objetivo desse modelo é economizar tempo fornecendo um exemplo estático da marcação CSS e HTML que pode ser usada, mas sem o código necessário para concluir o projeto. Se você optar por começar com este modelo, seu trabalho será adicionar interatividade ao aplicativo refatorando o código estático neste modelo.

Claro, você é livre para iniciar este projeto do zero, se desejar! Apenas certifique-se de usar o [Create React App] (https://github.com/facebookincubator/create-react-app) para inicializar o projeto.

## Backend Server

Para simplificar seu processo de desenvolvimento, fornecemos um servidor de backend para você desenvolver. O arquivo fornecido [`BooksAPI.js`] (src / BooksAPI.js) contém os métodos necessários para executar as operações necessárias no backend:

* [`getAll`] (# getall)
* [`update`] (# atualização)
* [`search`] (# pesquisa)

### `getAll`

Assinatura do Método:

js
getAll ()
(Por exemplo

* Retorna um Promise que resolve para um objeto JSON contendo uma coleção de objetos de livro.
* Esta coleção representa os livros atualmente nas estantes do seu aplicativo.

### `update`

Assinatura do Método:

js
atualização (livro, prateleira)
(Por exemplo

* book: `<Object>` contendo no mínimo um atributo `id`
* shelf: `<String>` contém um dos ["wantToRead", "currentReading", "read"]
* Retorna um Promise que resolve para um objeto JSON contendo a data de resposta da solicitação POST

### `search`

Assinatura do Método:

js
consulta de pesquisa)
(Por exemplo

consulta: `<>
* Retorna um Promise que resolve um objeto JSON contendo uma coleção de no máximo 20 objetos de livro.
* Esses livros não sabem em que prateleira estão. Eles são apenas resultados crus. Você precisará certificar-se de que você tenha o estado correto enquanto estiver na página de pesquisa.

## Importante
A API de back-end usa um conjunto fixo de resultados de pesquisa em cache e é limitada a um conjunto específico de termos de pesquisa, que pode ser encontrado em [SEARCH_TERMS.md] (SEARCH_TERMS.md). Essa lista de termos são os únicos termos que funcionarão com o back-end, portanto, não se surpreenda se suas pesquisas por Basket Weaving ou Bubble Wrap não retornarem nenhum resultado.

## Create React App
Este projeto foi bootstrapped com [Create React App] (https://github.com/facebookincubator/create-react-app). Você pode encontrar mais informações sobre como realizar tarefas comuns [https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contribuindo

Este repositório é o código inicial para estudantes _all_ Udacity. Portanto, provavelmente não aceitaremos solicitações de recebimento.

Para detalhes, confira [CONTRIBUTING.md] (CONTRIBUTING.md).

<img scr="../src/icons/screenshot.png">