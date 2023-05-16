
//Método Validação de CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,''); // Remove caracteres que não são números
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false; // Verifica se o CPF tem 11 dígitos e não é uma sequência repetida de números
  
    // Calcula os dígitos verificadores do CPF
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = soma % 11;
    let dv1 = resto < 2 ? 0 : 11 - resto;
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    let dv2 = resto < 2 ? 0 : 11 - resto;
  
    // Verifica se os dígitos verificadores do CPF são iguais aos calculados
    return cpf.charAt(9) == dv1 && cpf.charAt(10) == dv2;
}


//Método para válidação de email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar endereços de e-mail
    return re.test(email);
  }

//Método para válidar CEP
function validarCEP(cep) {
  const re = /^\d{5}-?\d{3}$/; // Expressão regular para validar CEP
  return re.test(cep);
}

module.exports = {
    validarCPF,
    validarEmail,
    validarCEP
}