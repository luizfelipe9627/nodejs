// Usado para importar um arquivo.
import fs from 'fs';

// Variável que vai receber o objeto ALUNOS com a lista com todas as informações dos alunos.
let alunos;

// O readFile é usado para ler um arquivo, como seu parâmetro deve ter o diretório dos dados.
// A arrow function recebe dois parâmetros, um que vai ser responsável pelo o erro e o outro que vai ser responsável pelos dados caso não tenha erro.
fs.readFile('./alunos.json', (erro, dados) => {
  // Se der algum erro ele vai executar o bloco de comandos do IF.
  if(erro) {
    // Irá exibir um erro no console.
    console.error(erro);
    // Finaliza o bloco de comando.
    return;
  }

  // O JSON.parse é usado para transformar os dados do JSON em string e como seu parâmetro os dados que vão ser convertidos.
  alunos = JSON.parse(dados);

  // Irá apresentar os dados no console.
  console.log('Alunos', alunos);
});

// Irá retornar UNDEFINED, pois há um callback na função anterior, ou seja enquanto ele pega os dados ele acaba por continuar executando o escopo global.
// console.log('Alunos', alunos);