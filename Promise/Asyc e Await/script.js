// Está importando o fetch do node-fetch.
import fetch from 'node-fetch';

// Criado uma função que está recebendo uma promise.
function main() {
  console.log('main()');

  // Uma variável constante que contém o usuário do GitHub.
  const user = 'luizfelipe9627';
  
  // Uma variável constante que contém o link da API.
  const apiUrl = 'https://api.github.com';

  // O fetch é usado para fazer uma request(requisição). 
  // Dentro do seu parâmetro está o link da API e o usuário.
  fetch(`${apiUrl}/users/${user}`)

  // O then é usado para executar uma ação quando finalizar a requisição anterior.
  // Está recebendo a resposta como seu parâmetro.
  .then((response) => {
    // Irá pegar a resposta, converter para JSON e retornar ela.
    return response.json();
  })
  // Depois de finalizar o then anterior ele vai pegar o user e apresentar ele no console.
  .then((user) => {
    // Podemos filtrar a pesquisa e pegar somente o desejado.
    console.log(user.name);
  })
}

// Irá ser executado primeiro pois existe uma promise na função, assim ele acaba executando o que tiver a seguir no código.
main();