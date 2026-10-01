function saudar(nome) {
  console.log("Olá, " + nome + "!");
}

function processarUsuario(callback) {
  const nome = "Ana";
  callback(nome); // Executa a função passada como argumento
}

processarUsuario(saudar); 