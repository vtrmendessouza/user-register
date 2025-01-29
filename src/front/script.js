document.querySelector("#send").addEventListener("click", () => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.2.0'},
    body: JSON.stringify({
      nome: document.querySelector("#nome").value,
      idade: document.querySelector("#idade").value,
      cpf: document.querySelector("#cpf").value,
      rg: document.querySelector("#rg").value,
      data_nasc: document.querySelector("#data_nasc").value,
      sexo: document.querySelector("#sexo").value,
      signo: document.querySelector("#signo").value,
      mae: document.querySelector("#mae").value,
      pai: document.querySelector("#pai").value,
      email: document.querySelector("#email").value,
      senha: document.querySelector("#senha").value,
      cep: document.querySelector("#cep").value,
      endereco: document.querySelector("#endereco").value,
      numero: document.querySelector("#numero").value,
      bairro: document.querySelector("#bairro").value,
      cidade: document.querySelector("#cidade").value,
      estado: document.querySelector("#estado").value,
      telefone_fixo: document.querySelector("#telefone_fixo").value,
      celular: document.querySelector("#celular").value,
      altura: document.querySelector("#altura").value,
      peso: document.querySelector("#peso").value,
      tipo_sanguineo: document.querySelector("#tipo_sanguineo").value,
      cor: document.querySelector("#cor").value
    })
  };
  
  fetch('http://localhost:3000/users', options)
    .then(response => response.json())
    .then(response => alert(response.id))
    .catch(err => alert(err));
    
});
