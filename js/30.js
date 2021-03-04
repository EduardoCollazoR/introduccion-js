const usuarioAut = new Promise((resolve, reject) => {
  const auth = false;

  if (auth) {
    resolve("usuario auth"); //el promise se cumple
  } else {
    reject("usuario no auth "); //el promise no se cumple
  }
});

usuarioAut
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

// en los promises existen 3 valores
// pending: no se ha cumplido pero tampoco se ha rechazado
//fulfilled: ya se cumplio
//rejected: se ha reachazado o no se pudo cumplir
