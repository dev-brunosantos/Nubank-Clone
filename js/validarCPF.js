// FUNÇÃO DE VALIDAÇÃO DE CPF
var form = document.querySelector('.inicio-formulario');
var cpf = document.querySelector('.cpf-dado');
const btnContinuar = document.getElementById('continuar');

const mensagemDeErro = document.getElementById('cpf-invalido');


setInterval(() => {
    validar();
}, 300);

function validar() {

    if(cpf.value.length >=11) {
        btnContinuar.style.backgroundColor = "var(--roxo)"
        
        
        if(cpf.value!="12345678910") {
            mensagemDeErro.textContent = "CPF inválido"
        }
    }
    
    else {
        btnContinuar.style.backgroundColor = "var(--cinza)"
        mensagemDeErro.textContent = ""
    }
}
