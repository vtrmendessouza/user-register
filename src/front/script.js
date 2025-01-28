const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.2.0'},
  body: JSON.stringify({
    nome: user.nome,
    idade: user.idade,
    cpf: user.cpf,
    rg: user.rg,
    data_nasc: user.data_nasc,
    sexo: user.sexo,
    signo: user.signo,
    mae: user.mae,
    pai: user.pai,
    email: user.email,
    senha: user.senha,
    cep: user.cep,
    endereco: user.endereco,
    numero: user.numero,
    bairro: user.bairro,
    cidade: user.cidade,
    estado: user.estado,
    telefone_fixo: user.telefone_fixo,
    celular: user.celular,
    altura: user.altura,
    peso: user.peso,
    tipo_sanguineo: user.tipo_sanguineo,
    cor: user.cor
  })
};

fetch('http://localhost:3000/users', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
