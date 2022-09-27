// Está importando o fetch do node-fetch.
import fetch from 'node-fetch'

// O async é usado para quando for trabalhar com promise dentro de uma função.
async function main() {
  console.log('main()');

  // Uma variável constante que contém o usuário do GitHub.
  const user = 'luizfelipe9627';
  // Uma variável constante que contém o link da API.
  const apiUrl = 'https://api.github.com';

  // O fetch é usado para fazer uma request(requisição). Dentro do seu parâmetro está o link da API e o usuário.
  // O await é usado para esperar retornar uma resposta. Em seguida irá jogar a resposta para a variável constante.
  const response = await fetch(`${apiUrl}/users/${user}`);
  // Irá aguardar a resposta anterior e em seguida transformar em json.
  const userName = await response.json();

  // Irá mostrar a resposta no console.
  console.log(`Luiz Felipe ID: ${userName.id}`);
}

// Irá ser executado primeiro pois existe uma promise na função, assim ele acaba executando o que tiver a seguir no código.
main();