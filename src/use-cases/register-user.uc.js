const UserRepository = require("../repository/user-repository-mysql");
const userRepository = new UserRepository();

class RegisterUserUseCase{
    async execute(data){
        this.validateData(data);
        const id = await userRepository.create(data);
        return id;
    }
    validateData(data){
        // Função para validar nome
        function validarNome(nome) {
            return nome.length >= 3;
        }
        
        // Função para validar idade
        function validarIdade(idade) {
            return idade >= 18 && idade <= 120;
        }
        
        // Função para validar CPF (usando regex simples, para exemplo)
        function validarCPF(cpf) {
            const regexCPF = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/; // Formato: xxx.xxx.xxx-xx
            return regexCPF.test(cpf);
        }
        
        // Função para validar RG (formato básico)
        function validarRG(rg) {
            const regexRG = /^\d{1,2}\.\d{3}\.\d{3}-\d{1}$/; // Formato: xx.xxx.xxx-x
            return regexRG.test(rg);
        }
        
        // Função para validar data de nascimento (formato: dd/mm/aaaa)
        function validarDataNascimento(data_nasc) {
            
            const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d\d$/;
            return regexData.test(data_nasc);
        }
        
        // Função para validar sexo
        function validarSexo(sexo) {
            return sexo === 'M' || sexo === 'F' || sexo === 'Outro';
        }
        
        // Função para validar signo
        function validarSigno(signo) {
            const signosValidos = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'];
            return signosValidos.includes(signo);
        }
        
        // Função para validar nome da mãe
        function validarMae(mae) {
            return mae.length >= 3;
        }
        
        // Função para validar nome do pai
        function validarPai(pai) {
            return pai.length >= 3;
        }
        
        // Função para validar e-mail
        function validarEmail(email) {
            const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return regexEmail.test(email);
        }
        
        // Função para validar senha
        function validarSenha(senha) {
            return senha.length >= 6; // Senha mínima de 6 caracteres
        }
        
        // Função para validar CEP (formato: xxxxx-xxx)
        function validarCEP(cep) {
            const regexCEP = /^\d{5}-\d{3}$/;
            return regexCEP.test(cep);
        }
        
        // Função para validar endereço
        function validarEndereco(endereco) {
            return endereco.length >= 5;
        }
        
        // Função para validar número (apenas números)
        function validarNumero(numero) {
            return !isNaN(numero) && numero > 0;
        }
        
        // Função para validar bairro
        function validarBairro(bairro) {
            return bairro.length >= 3;
        }
        
        // Função para validar cidade
        function validarCidade(cidade) {
            return cidade.length >= 3;
        }
        
        // Função para validar estado
        function validarEstado(estado) {
            const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
            return estados.includes(estado);
        }
        
        // Função para validar telefone fixo
        function validarTelefoneFixo(telefone_fixo) {
            const regexFixo = /\(\d{2}\)\s\d{4}-\d{4}/; // Formato: (xx) xxxx-xxxx
            return regexFixo.test(telefone_fixo);
        }
        
        // Função para validar celular
        function validarCelular(celular) {
            const regexCelular = /\(\d{2}\)\s9\d{4}-\d{4}/; // Formato: (xx) 9xxxx-xxxx
            return regexCelular.test(celular);
        }
        
        // Função para validar altura (em metros)
        function validarAltura(altura) {
            return altura > 0 && altura < 3; // Altura entre 0 e 3 metros
        }
        
        // Função para validar peso (em kg)
        function validarPeso(peso) {
            return peso > 0 && peso < 500; // Peso entre 0 e 500 kg
        }
        
        // Função para validar tipo sanguíneo
        function validarTipoSanguineo(tipo_sanguineo) {
            const tiposValidos = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'O+', 'O-'];
            return tiposValidos.includes(tipo_sanguineo);
        }
        
        // Função para validar cor (valor simples)
        function validarCor(cor) {
            return cor.length >= 3;
        }
        
        // Função para validar todos os campos de uma vez
        function validarFormulario(user) {
            if (!validarNome(user.nome)) {
            alert('Nome inválido');
            return false;
            }
            if (!validarIdade(user.idade)) {
            alert('Idade inválida');
            return false;
            }
            if (!validarCPF(user.cpf)) {
            alert('CPF inválido');
            return false;
            }
            if (!validarRG(user.rg)) {
            alert('RG inválido');
            return false;
            }
            if (!validarDataNascimento(user.data_nasc)) {
            alert('Data de nascimento inválida');
            return false;
            }
            if (!validarSexo(user.sexo)) {
            alert('Sexo inválido');
            return false;
            }
            if (!validarSigno(user.signo)) {
            alert('Signo inválido');
            return false;
            }
            if (!validarMae(user.mae)) {
            alert('Nome da mãe inválido');
            return false;
            }
            if (!validarPai(user.pai)) {
            alert('Nome do pai inválido');
            return false;
            }
            if (!validarEmail(user.email)) {
            alert('Email inválido');
            return false;
            }
            if (!validarSenha(user.senha)) {
            alert('Senha inválida');
            return false;
            }
            if (!validarCEP(user.cep)) {
            alert('CEP inválido');
            return false;
            }
            if (!validarEndereco(user.endereco)) {
            alert('Endereço inválido');
            return false;
            }
            if (!validarNumero(user.numero)) {
            alert('Número inválido');
            return false;
            }
            if (!validarBairro(user.bairro)) {
            alert('Bairro inválido');
            return false;
            }
            if (!validarCidade(user.cidade)) {
            alert('Cidade inválida');
            return false;
            }
            if (!validarEstado(user.estado)) {
            alert('Estado inválido');
            return false;
            }
            if (!validarTelefoneFixo(user.telefone_fixo)) {
            alert('Telefone fixo inválido');
            return false;
            }
            if (!validarCelular(user.celular)) {
            alert('Celular inválido');
            return false;
            }
            if (!validarAltura(user.altura)) {
            alert('Altura inválida');
            return false;
            }
            if (!validarPeso(user.peso)) {
            alert('Peso inválido');
            return false;
            }
            if (!validarTipoSanguineo(user.tipo_sanguineo)) {
            alert('Tipo sanguíneo inválido');
            return false;
            }
            if (!validarCor(user.cor)) {
            alert('Cor inválida');
            return false;
            }
            
            return true; // Se todas as validações passarem
        }
    }
}

module.exports = RegisterUserUseCase;
