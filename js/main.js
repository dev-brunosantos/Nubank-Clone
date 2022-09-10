const praVoce = document.getElementById('paraVoce');
const seuNegocio = document.getElementById('seuNegocio');
const nubank = document.getElementById('oNubank');
const corpo = document.querySelector('.corpo');

var teste = document.querySelector('i.fa-angle-down');



var complemento1 = document.getElementById('menu-para-voce');
var complemento2 = document.getElementById('menu-para-seu-negocio');
var complemento3 = document.getElementById('menu-oNubank');

var complementos = [complemento1, complemento2, complemento3];

praVoce.addEventListener('mouseenter', menuParaVoce);
seuNegocio.addEventListener('mouseenter', menuSeuNegocio);
nubank.addEventListener('mouseenter', menuNubank);

corpo.addEventListener('mouseover', fecharComplementos);

function menuParaVoce() {
    complemento1.classList.add('abrir-menu-complementos');
    complemento2.classList.remove('abrir-negocio');
    complemento3.classList.remove('abrir-o-nubank');
};

function menuSeuNegocio() {
    complemento1.classList.remove('abrir-menu-complementos');
    complemento2.classList.add('abrir-negocio');
    complemento3.classList.remove('abrir-o-nubank');
};

function menuNubank() {
    complemento1.classList.remove('abrir-menu-complementos');
    complemento2.classList.remove('abrir-negocio');
    complemento3.classList.add('abrir-o-nubank');
};

function fecharComplementos() {
    complemento1.classList.remove('abrir-menu-complementos');
    complemento2.classList.remove('abrir-negocio');
    complemento3.classList.remove('abrir-o-nubank');
};
