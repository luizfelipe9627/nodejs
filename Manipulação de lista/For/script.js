// Usado para importar algo de outro arquivo.
import {obterPessoas} from "./StarWarsAPI.js";

// O async é usado para quando for trabalhar com promise e await dentro de uma função.
async function main() {
  // O await é usado para esperar retornar uma resposta. Em seguida irá jogar a resposta para a variável constante.
  // Dentro do parâmetro do obterPessoas está a página dos resultados da API que deseja usar.
  const starWarsPessoas = await obterPessoas(2);

  // Basicamente o inicializador(i) começa com 0 e enquanto o inicializador for menor que aq quantidade de starWarsPessoas ele vai acrescentar mais um e repetir todo o processo até acabar as pessoas.
  for(let i = 0; i < starWarsPessoas.length; i++) {
    // Irá mostrar no console cada vetor do starWarsPessoas e pegar somente o nome, e por fim apresentar no console.
    console.log(starWarsPessoas[i].name);
  }
}

// Está chamando a função main.
main();