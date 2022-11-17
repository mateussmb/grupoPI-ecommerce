function funcao() {
  const message = document.getElementById("message");
  message.innerHTML = "CEP validado com sucesso!";
  let x = document.getElementById("input-cep").value;
  try { 
    if(x == "")  throw "O campo está vazio.";
    if(x == "111111111")  throw "Não é um CEP válido.";
    if(x == "222222222")  throw "Não é um CEP válido.";
    if(x == "333333333")  throw "Não é um CEP válido.";
    if(x == "444444444")  throw "Não é um CEP válido.";
    if(x == "555555555")  throw "Não é um CEP válido.";
    if(x == "666666666")  throw "Não é um CEP válido.";
    if(x == "777777777")  throw "Não é um CEP válido.";
    if(x == "888888888")  throw "Não é um CEP válido.";
    if(x == "999999999")  throw "Não é um CEP válido.";
    if(x == "000000000")  throw "Não é um CEP válido.";
    if(isNaN(x)) throw "Somente números aqui.";
    x = Number(x);
  }
  catch(err) {
    message.innerHTML = "Opa! " + err;
  }
}