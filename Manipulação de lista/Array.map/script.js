// Usado para importar algo de outro arquivo.
import {obterPessoas} from "./StarWarsAPI.js";

// O async é usado para quando for trabalhar com promise e await dentro de uma função.
async function main() {
  // O await é usado para esperar retornar uma resposta. Em seguida irá jogar a resposta para a variável constante.
  // Dentro do parâmetro do obterPessoas está a página dos resultados da API que deseja usar.
  const starWarsPessoas = await obterPessoas(2);

  // O map é utilizado para manipular os elementos de uma função e transformar em uma nova lista como resultado. Em outras palavras executa uma função em todos os itens de um array e retorna um novo array após a manipulação.
  // Como parâmetro do map tem as propriedades que ele irá puxar/armazenar.
  const pessoasNomes = starWarsPessoas.map((pessoas) => {
    // Irá retornar todos os names.
    // return pessoas.name;

    // Podemos também trabalhar com mais de uma propriedade, mas como boa prática é necessário definir uma variável para elas.
    // const nome = pessoas.name;
    // const altura = pessoas.height;

    // Irá retornar as infos do nome e da altura como objetos.
    // return {nome, altura};
    
    // Como um jeito mais limpo podemos criar uma constante que recebe as propriedades(que está exatamente como na API) que vai ser puxada e em seguida coloca da onde você quer que ele tire essas informações.  
    const {name, height, gender} = pessoas;

    // Irá retornar as infos do name e da height como objetos. Tem que ser exatamente como está na API. Tem a opção de atribuir como vai ser exibido, ou deixar como na API no caso em inglês.
    return {Nome: name, Altura: height, Gênero: gender};
  });
  // Irá reproduzir a resposta no console.
  console.log(pessoasNomes);
}

// Está chamando a função main.
main();