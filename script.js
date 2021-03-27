const inputEmail = document.querySelector('#user-email-phone');
const btnEnviar = document.querySelector('#button-login');
const nome = sessionStorage.getItem('nome');
const sobrenome = sessionStorage.getItem('sobrenome');
const email = sessionStorage.getItem('email');
const data = sessionStorage.getItem('data');
const genero = sessionStorage.getItem('genero');
const h1 = document.createElement('h1');
const h3 = document.createElement('h3');
const p = document.createElement('p');
const p2 = document.createElement('p');

function alertEmail() {
  alert(inputEmail.value);
}

btnEnviar.addEventListener('click', alertEmail);

// 18°
const getButton = document.getElementById('facebook-register');

function insertOnForm() {
  const getPai = document.querySelector('.right-content');
  const getFilho2 = document.querySelector('.formContato');
  getPai.removeChild(getFilho2);
  const addDiv = document.createElement('div');
  addDiv.className = 'teste5';
  getPai.appendChild(addDiv);
  const getDiv5 = document.querySelector('.teste5');
  getDiv5.appendChild(h1).innerHTML = `Olá, ${nome} ${sobrenome}`;
  getDiv5.appendChild(h3).innerHTML = `${email}`;
  getDiv5.appendChild(p).innerHTML = `${data}`;
  getDiv5.appendChild(p2).innerHTML = `${genero}`;
}
const getFormPai = document.querySelector('.formContato');
const getFormFilho = getFormPai.getElementsByTagName('input');
function camposInvalidos() {
  const getCamposInvalidos = document.getElementById('camposInvalidos');
  for (let i = 0; i < getFormFilho.length; i += 1) {
    if (getFormFilho[i].value === '') {
      getCamposInvalidos.innerText = 'Campos inválidos';
      getFormFilho[i].addEventListener('keydown', () => {
        getCamposInvalidos.innerText = '';
      });
      break;
    }
  }
  if (getCamposInvalidos.innerText !== 'Campos inválidos') {
    document.addEventListener('submit', insertOnForm);
  }
}

getButton.addEventListener('click', camposInvalidos);
// 19
const genderOptional = document.createElement('input');
genderOptional.name = 'gender-custom';
genderOptional.placeholder = 'Gênero (opcional)';
genderOptional.id = 'gender-optional';
genderOptional.className = 'selected';
const getDivFlexForm = document.querySelector('.flex-form2');
const customRadio = document.querySelector('#personalizado');
const femaleRadio = document.querySelector('#feminino');
const maleRadio = document.querySelector('#masculino');

customRadio.addEventListener('click', () => {
  getDivFlexForm.appendChild(genderOptional);
});

femaleRadio.addEventListener('click', () => {
  const elemento = document.querySelector('.selected');
  if (elemento) {
    elemento.parentNode.removeChild(elemento);
  }
});

maleRadio.addEventListener('click', () => {
  const elemento2 = document.querySelector('.selected');
  if (elemento2) {
    elemento2.parentNode.removeChild(elemento2);
  }
});
// 20°
// capturar informação
const getName = document.getElementById('firstname');
const getLastName = document.getElementById('lastname');
const getEmail = document.getElementById('phone_email');
const getData = document.getElementById('birthdate');
// const getForm = document.getElementsByClassName(' ');
const getSex = document.querySelector('.genders');
const getSexChildren = getSex.children;

getButton.addEventListener('click', () => {
  if (getName.value && getLastName.value && getEmail.value && getData.value) {
    const nome2 = getName.value;
    const sobrenome2 = getLastName.value;
    const email2 = getEmail.value;
    const data2 = getData.value;
    sessionStorage.setItem('nome', nome2);
    sessionStorage.setItem('sobrenome', sobrenome2);
    sessionStorage.setItem('email', email2);
    sessionStorage.setItem('data', data2);
  }
});
getButton.addEventListener('click', () => {
  for (let index = 0; index < getSexChildren.length; index += 1) {
    if (getSexChildren[index].checked === true) {
      sessionStorage.setItem('genero', getSexChildren[index].value);
    }
  }
});
