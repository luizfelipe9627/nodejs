// Está importando o fetch do node-fetch.
import fetch from 'node-fetch';

// Uma variável constante que contém o link da API.
const apiUrl = 'https://swapi.dev/api';

// O async é usado para quando for trabalhar com promise e await dentro de uma função.
async function obterPessoas(pag = 1) {
  // O fetch é usado para fazer uma request(requisição).Dentro do seu parâmetro está o link da API e qual parte a API deve puxar.
  // O await é usado para esperar retornar uma resposta. Em seguida irá jogar a resposta para a variável constante.
 const resposta = await fetch(`${apiUrl}/people?page=${pag}`);

 // O await é usado para esperar retornar uma resposta. Em seguida irá jogar a resposta para a variável constante.
 const pessoas = await resposta.json();

 // Irá retornar a resposta em JSON junto aos resultados que é do padrão da API.
 return pessoas.results;
}

// Usado para exportar um escopo local.
export {obterPessoas};