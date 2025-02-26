async function consultarTodosDados() {
    try {
      const response = await fetch("http://localhost:3000/users");
  
      if (!response.ok || !response.headers.get("Content-Type").includes("application/json")) {
        throw new Error("Erro ao consultar os dados");
      }
  
      const data = await response.json();
  
      if (data.length === 0) {
        alert("Nenhum registro encontrado.");
        return;
      }
  
      preencherTabelaUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      alert("Não foi possível consultar os dados. Tente novamente mais tarde.");
    }
  }
  
  function preencherTabelaUsuarios(usuarios) {
    const tabelaCorpo = document.querySelector("#tabelaUsuarios tbody");
    tabelaCorpo.innerHTML = "";
  
    usuarios.forEach(user => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${user.nome}</td>
        <td>${user.idade}</td>
        <td>${user.cpf}</td>
        <td>${user.rg}</td>
        <td>${user.data_nasc}</td>
        <td>${user.sexo}</td>
        <td>${user.signo}</td>
        <td>${user.mae}</td>
        <td>${user.pai}</td>
        <td>${user.email}</td>
        <td>${user.senha}</td>
        <td>${user.cep}</td>
        <td>${user.endereco}</td>
        <td>${user.numero}</td>
        <td>${user.bairro}</td>
        <td>${user.cidade}</td>
        <td>${user.estado}</td>
        <td>${user.telefone_fixo}</td>
        <td>${user.celular}</td>
        <td>${user.altura}</td>
        <td>${user.peso}</td>
        <td>${user.tipo_sanguineo}</td>
        <td>${user.cor}</td>
       `;
      tabelaCorpo.appendChild(linha);
    });
  
    document.querySelector("#resultadoConsulta").style.display = "block";  // Exibe a tabela
  }
  
  document.querySelector("#consultar").addEventListener("click", consultarTodosDados);
  
  document.querySelector("#voltarMenu").addEventListener("click", function() {
    window.location.href = "../index.html";
  });
