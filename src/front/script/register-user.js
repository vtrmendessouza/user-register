async function fetchAddressFromCep() {
  const cep = document.querySelector("#cep").value.trim();

  if (/^[0-9]+$/.test(cep)) {
      try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          if (!response.ok || !response.headers.get("Content-Type").includes("application/json")) {
              throw new Error("Erro ao buscar o CEP");
          }

          const data = await response.json();
          if (data.erro) {
              alert("CEP não encontrado");
              return;
          }

          preencherCamposEndereco(data);
      } catch (error) {
          console.error("Erro ao buscar o CEP:", error);
          alert("Não foi possível buscar o endereço. Tente novamente mais tarde.");
      }
  } else {
      alert("Digite um CEP válido contendo apenas números");
  }
}

function preencherCamposEndereco(data) {
  document.querySelector("#endereco").value = data.logradouro || "";
  document.querySelector("#bairro").value = data.bairro || "";
  document.querySelector("#cidade").value = data.localidade || "";
  document.querySelector("#estado").value = data.uf || "";
}

document.querySelector("#cep").addEventListener("blur", fetchAddressFromCep);

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

document.querySelector("#voltarMenu").addEventListener("click", function() {
  window.location.href = "../index.html";
});
