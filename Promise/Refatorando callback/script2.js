// Usado para importar um arquivo.
import fs from 'fs';

// Serve para transformar a função de callback em promise.
import { promisify } from 'util';

// Criado uma variável que contém um promisify que transforma seu parâmetro em uma promise.
let readFilePromise = promisify(fs.readFile);

// Variável que vai receber o objeto ALUNOS com a lista com todas as informações dos alunos.
let alunos;

// O readFile é usado para ler um arquivo, como seu parâmetro deve ter o diretório dos dados.
// O then vai ser executado depois de resolver/executar a promise mensagemGabriel se estiver resolvido ele executa o parâmetro dentro dele mesmo. 
readFilePromise('./alunos.json').then((dados) => {
  // O JSON.parse é usado para transformar os dados do JSON em string e como seu parâmetro os dados que vão ser convertidos.
  alunos = JSON.parse(dados);
  
  // Irá apresentar os dados no console.
  console.log('alunos:', alunos);
}).catch((error) => {
  // Quando der erro em algo ele vai retornar uma mensagem de erro.
  console.log(error);
})