// Usado para importar algo de outro arquivo.
import {obterPessoas} from "./StarWarsAPI.js";

// O async é usado para quando for trabalhar com promise e await dentro de uma função.
async function main() {
  // O await é usado para esperar retornar uma resposta. Em seguida irá jogar a resposta para a variável constante.
  // Dentro do parâmetro do obterPessoas está a página dos resultados da API que deseja usar.
  const starWarsPessoas = await obterPessoas(2);

  // A variável pessoa vai percorrer por cada vetor do starWarsPessoas um por vez. 
  for(let pessoa of starWarsPessoas) {
    // Vai exibir no console a informação de nome dos vetores.
    console.log(pessoa.name);
  }
}

// Está chamando a função main.
main();