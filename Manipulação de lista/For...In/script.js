// Usado para importar algo de outro arquivo.
import {obterPessoas} from "./StarWarsAPI.js";

// O async é usado para quando for trabalhar com promise e await dentro de uma função.
async function main() {
  // O await é usado para esperar retornar uma resposta. Em seguida irá jogar a resposta para a variável constante.
  // Dentro do parâmetro do obterPessoas está a página dos resultados da API que deseja usar.
  const starWarsPessoas = await obterPessoas(2);

  // Foi declarado uma variável chamada pessoa que vai armazenar cada propriedade do primeiro vetor do starWarsPessoas.
  for(let pessoa in starWarsPessoas[0]) {
    // Irá reproduzir as propriedades no console.
    console.log(pessoa);
    // Podemos também pegar os valores ao invés das propriedades.
    console.log(starWarsPessoas[0] [pessoa]);
  }
}

// Está chamando a função main.
main();