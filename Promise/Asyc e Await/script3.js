// Está importando o fetch do node-fetch.
import fetch from 'node-fetch'

// O async é usado para quando for trabalhar com promise e await dentro de uma função.
async function main() {
  console.log('main()');

  // Uma variável constante que contém o usuário do GitHub.
  const user = 'luizfelipe9627';
  // Uma variável constante que contém o link da API.
  const apiUrl = 'https://api.github.com';

  // O fetch é usado para fazer uma request(requisição). Dentro do seu parâmetro está o link da API e o usuário.
  const promise = fetch(`${apiUrl}/users/${user}`);

  // Irá aguardar e pegar todas as request e transformar em objetos por fim armazenando na variável constante.
  const promises = await Promise.all([promise]);

  // Irá esperar acabar o processo anterior e vai pegar as promises começando da primeira posição até a final e transformar eles em json.
  const githubUser = await promises[0].json();

  // Irá mostrar a resposta no console.
  console.log(`Luiz Felipe ID: ${githubUser.id}`);
}

// Está chamando a função main.
main();