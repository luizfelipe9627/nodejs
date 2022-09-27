// Está importando o Express de um outro diretório.
import express from "express";

// Variável constante que é responsável por chamar o express.
const app = express();

// Criado uma variável constante responsável por armazenar a porta.
const porta = 3000;

// Criado uma array que está contendo dois objetos como seus filhos.
let usuarios = [
  {
    id: 1,
    nome: 'Lucas Pereira',
    idade: 23,
  },
  {
    id: 2,
    nome: 'Rafaela Brito',
    idade: 18,
  }
];

// Quando o listen "escutar" essa porta vai executar a função criada.
app.listen(porta, () => {
  // Irá apresentar a resposta no console.
  console.log(`Servidor rodando em http://localhost:${porta}`)
});

// Irá obter a resposta, e atribuir no direcionamento definido.
app.get('/', (requisicao, resposta) => {
  // Irá retornar e enviar uma resposta ao usuário.
  return resposta.send('<h1>Trabalhando com servidor express.</h1>');
});

// Irá obter toda a lista de usuários, e atribuir no direcionamento definido.
app.get('/usuarios', (requisicao, resposta) => {
  // Está enviando a lista de usuários para o navegador.
  return resposta.send(usuarios);
});

// Irá obter uma parte da lista de usuários e atribuir no direcionamento definido.
app.get('/usuarios/:usuarioId', (requisicao, resposta) => {
  // O params é um objeto que contém propriedades mapeadas para os “parâmetros” da rota nomeada. Por exemplo, se você tiver a rota / aluno /: id, a propriedade “id” estará disponível como req.params.id.
  const usuarioID = requisicao.params.usuarioID;

  // O find é usado para percorrer cada elemento de algo, nesse caso irá percorrer a lista de usuários até que ele encontre o que foi pedido.
  const usuario = usuarios.find(u => {
    // Irá retornar o ID somente se for igual ao valor presente no userID.
    return (u.id === Number(usuarioID));
  });

  // Está enviando a lista de usuários para o navegador.
  return resposta.send(usuario);
});