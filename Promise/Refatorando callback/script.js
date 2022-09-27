// Criado uma função que contém uma promise.
function mensagemGabriel() {
  // Criado um objeto promise com dois parâmetros.
  const promiseMensagemGabriel = new Promise((resolve, reject) => {
    // Irá executar o bloco de comando depois de 0 segundos.
    setTimeout(() => {
      console.log('Bebam água!');
      // Quando ele chegar no resolve ele vai entender como bem sucedido e continuar com o código.
      resolve();
    }, 0);
  });
  // Irá retornar para a promise novamente.
  return promiseMensagemGabriel;
}

function mensagemRafael() {
  console.log('Bora para cima!');
}

// O then vai ser executado depois de resolver/executar a promise mensagemGabriel se estiver resolvido ele executa o parâmetro dentro dele mesmo. 
mensagemGabriel().then(mensagemRafael);
