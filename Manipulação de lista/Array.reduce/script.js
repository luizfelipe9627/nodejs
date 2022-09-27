// Usado para importar algo de outro arquivo.
import {obterPessoas} from "./StarWarsAPI.js";

// O async é usado para quando for trabalhar com promise e await dentro de uma função.
async function main() {
  // O await é usado para esperar retornar uma resposta. Em seguida irá jogar a resposta para a variável constante.
  // Dentro do parâmetro do obterPessoas está a página dos resultados da API que deseja usar.
  const starWarsPessoas = await obterPessoas(1);

  // O reduce reduz todos os valores de um array em um único resultado com base na função informada. Utilizado para realizar uma somatória ou mesclar vários arrays em um único.
  // Como seu primeiro parâmetro tem o contador e como o segundo o que está inteirando. E no final tem que ter o valor que vai ser inicializado.
  const alturaTotal = starWarsPessoas.reduce((total, pessoa) => {
    // Irá pegar o acumulador e somar com todos os heights presentes na API.
    // O Number é usado para transformar strings em numbers.
    total += Number(pessoa.height);

    // Irá retornar o total.
    return total;
  }, 0)

  // Irá reproduzir no console a altura total dividido pela quantidade de pessoas para aplicar uma média entre elas.
  console.log('Média de altura:', alturaTotal / starWarsPessoas.length, 'cm');
}

// Está chamando a função main.
main();