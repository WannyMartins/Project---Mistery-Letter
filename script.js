const inputCartaTexto = document.getElementById('carta-texto');
const pCartaGerada = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];
const spanMudaCor = document.getElementsByTagName('span')

const classAleatória = (classe) => {
  let aleatorio = Math.floor(Math.random() * classe.length);
  aleatorio = classe[aleatorio];
  return aleatorio;
};

const criarCarta = () => {
  pCartaGerada.innerHTML = '';

  if (!inputCartaTexto.value || inputCartaTexto.value === ' ') {
    pCartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const inputSeparada = inputCartaTexto.value.split(' ');
    for (let palavra = 0; palavra < inputSeparada.length; palavra += 1) {
      const span = document.createElement('span');
      span.innerHTML = inputSeparada[palavra];
      inputSeparada[palavra] = span;
      span.classList = [`${classAleatória(estilo)} ${classAleatória(tamanho)} ${classAleatória(rotacao)} ${classAleatória(inclinacao)}`];
      pCartaGerada.appendChild(span);
    }
  }
};

btnCriarCarta.addEventListener('click', criarCarta);
// console.log(classAleatória(estilo))
