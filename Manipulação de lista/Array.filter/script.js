// Usado para importar algo de outro arquivo.
import {obterPessoas} from "./StarWarsAPI.js";

// O async é usado para quando for trabalhar com promise e await dentro de uma função.
async function main() {
  // O await é usado para esperar retornar uma resposta. Em seguida irá jogar a resposta para a variável constante.
  // Dentro do parâmetro do obterPessoas está a página dos resultados da API que deseja usar.
  const starWarsPessoas = await obterPessoas(1);

  const pessoasFiltradas = starWarsPessoas
    // O filter aplica uma condição em todos os itens do array e aqueles que se enquadrarem na condição serão retornados e adicionados ao novo array de saída.
    // Nesse caso irá retornar todas as pessoas que tiverem o gênero exatamente igual a 'male', no caso masculino.
    .filter(pessoa => {
      // Ele só vai retornar se tiver(true) algum elemento, caso ele não(false) encontre irá retornar "[]"
      // return (pessoa.gender === 'female');
      
      // Podemos filtrar também por altura, nesse caso irá retornar somente o que tiver a altura maior que 200.
      return (pessoa.height > 200);
    })

    // O map está manipulando as propriedades da função para retornar uma nova lista que mostrará apenas o que queremos saber.
    .map((pessoa) => {
      return {Nome: pessoa.name, Gênero: pessoa.gender, Altura: pessoa.height}
    });

  // Irá reproduzir a resposta no console.
  console.log(pessoasFiltradas);
}

// Está chamando a função main.
main();