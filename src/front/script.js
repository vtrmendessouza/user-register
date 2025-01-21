const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.2.0'},
    body: '{"name":"Larissa Elza Alícia da Rosa","age":"23","cpf":"326.602.450-88","rg":"10.564.746-9","data_nasc":"17/01/2002","sexo":"Feminino","signo":"Capricórnio","mae":"Alícia Maya Carolina","pai":"Anthony Mário Pedro da Rosa","email":"larissa.elza.darosa@flir.com.br","senha":"1OielHjw3a","cep":"72152-016","endereco":"Quadra QNL 19 Bloco F","numero":"941","bairro":"Taguatinga Norte (Taguatinga)","cidade":"Brasília","estado":"DF","telefone_fixo":"(61) 2564-0427","celular":"(61) 99614-3673","altura":"1,80","peso":"57","tipo_sanguineo":"A+","cor":"vermelho"}'
  };//`${}`,
  
  fetch('http://localhost:3000/users', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));