// Criado uma função que contém um callback.
function mensagemGabriel(callback) {
  // Irá executar o bloco de comando depois de 0 segundos.
  setTimeout(() => {
    console.log('Bebam água!')
    // Responsável por armazenar no parâmetro a função que virá antes por conta do callback no caso a função mensagemRafael.
    callback();
  }, 0);
}

function mensagemRafael() {
  console.log('Bora para cima!');
}

// Está mensagem será exibida por último por questão de ter uma espera(setTimeout), sendo assim executando a próxima função e depois voltando para pegar a resposta.
// mensagemGabriel();

// Está mensagem será exibida primeiro por questão de não ter uma espera.
// mensagemRafael();

// Para fazer que ele seja executado na ordem esperada podemos atribuir no parâmetro callback outra função que será executado depois da função mensagemGabriel.
mensagemGabriel(mensagemRafael);