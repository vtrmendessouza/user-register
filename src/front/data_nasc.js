// Função para converter a data do formato DD/MM/YYYY para YYYY-MM-DD
function converterData(data) {
    const partes = data.split('/'); // Divide a data em partes [dia, mês, ano]
    return `${partes[2]}-${partes[1]}-${partes[0]}`;  // Retorna no formato YYYY-MM-DD
}

// Supondo que o valor da data seja '04/01/1946' no formato DD/MM/YYYY
const dataNasc = '04/01/1946'; // Exemplo de valor obtido do formulário
const dataConvertida = converterData(dataNasc); // A data convertida será '1946-01-04'

// Agora você pode enviar a data convertida para o banco de dados no formato correto
