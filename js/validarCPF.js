// FUNÇÃO DE VALIDAÇÃO DE CPF
var form = document.querySelector('.inicio-formulario');
var cpf = document.querySelector('.cpf-dado');
const btnContinuar = document.getElementById('continuar');


setInterval(() => {
    validar();
}, 300);

function validar() {
    if(cpf.value.length >=11) {
        btnContinuar.style.backgroundColor = "var(--roxo)"
    }
    
    else {
        btnContinuar.style.backgroundColor = "var(--cinza)"
    }
}
