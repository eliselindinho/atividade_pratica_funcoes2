let cpfs = ["", "", "", "", ""];

function cpfEValido(cpf) {
  if (cpf.length === 11) {
    return true;
  } else {
    return false;
  }
}

function aplicarMascaraCPF(cpf) {
  let digitos = cpf.split("");
  let mascaraCPF =
    digitos[0] +
    digitos[1] +
    digitos[2] +
    "." +
    digitos[3] +
    digitos[4] +
    digitos[5] +
    "." +
    digitos[6] +
    digitos[7] +
    digitos[8] +
    "-" +
    digitos[9] +
    digitos[10];
  return mascaraCPF;
}

for (let index = 0; index < cpfs.length; index++) {
  let cpfDigitado = prompt("Digite cpf  " + (index + 1));
  if (cpfEValido(cpfDigitado)) {
    let cpfComMascara = aplicarMascaraCPF(cpfDigitado);
    cpfs[index] = cpfComMascara;
    alert("Seu CPF " + cpfComMascara + " é válido.");
  } else {
    alert("CPF inválido");
  }
}
