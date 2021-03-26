const inputEmail = document.querySelector('#user-email-phone');
const btnEnviar = document.querySelector('#button-login');

function alertEmail() {
  alert(inputEmail.value);
}

btnEnviar.addEventListener('click', alertEmail);

// 18°
const getButton = document.getElementById('facebook-register');

function save() {
  const getPai = document.querySelector('.right-content');
  const getFilho2 = document.querySelector('.formContato');
  getPai.removeChild(getFilho2);
  // adicionando
  const addDiv = document.createElement('div');
  const storage = sessionStorage.getItem('teste1');
  const storage2 = sessionStorage.getItem('teste2');
  addDiv.className = 'teste5';
  getPai.appendChild(addDiv);
  const getDiv5 = document.querySelector('.teste5');
  getDiv5.innerHTML = storage + storage2;
}

function camposInvalidos() {
  const getFilho = document.querySelector('.formContato').children;
  const getCamposInvalidos = document.getElementById('camposInvalidos');
  for (let i = 1; i < getFilho.length; i += 1) {
    if (getFilho[i].value === '') {
      getCamposInvalidos.innerHTML = 'Campos inválidos';
    }
  }
  getButton.addEventListener('click', save);
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
    const teste = (`Olá, ${getName.value} ${getLastName.value}
    ${getEmail.value} ${getData.value} `);
    sessionStorage.setItem('teste1', teste);
  }
});
getButton.addEventListener('click', () => {
  for (let index = 0; index < getSexChildren.length; index += 1) {
    if (getSexChildren[index].checked === true) {
      sessionStorage.setItem('teste2', getSexChildren[index].value);
    }
  }
});
