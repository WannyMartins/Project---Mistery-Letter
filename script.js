const inputCartaTexto = document.getElementById('carta-texto');
const pCartaGerada = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

const classAleatória = (classe) => {
  let aleatorio = Math.floor(Math.random() * classe.length);
  aleatorio = classe[aleatorio];
  return aleatorio;
};

const aleEstilo = classAleatória(estilo);
const aleTamanho = classAleatória(tamanho);
const alerotacao = classAleatória(rotacao);
const aleinclinacao = classAleatória(inclinacao);

const criarCarta = () => {
  const inputSeparada = inputCartaTexto.value.split(' ');

  if (!inputSeparada || inputSeparada === ' ') {
    return alert('Por favor, digite o conteúdo da carta');
  }

  for (let palavra = 0; palavra < inputSeparada.length; palavra += 1) {
    const span = document.createElement('span');
    span.innerHTML = inputSeparada[palavra];
    inputSeparada[palavra] = span;
    span
      .classList = [`${aleEstilo} ${aleTamanho} ${alerotacao} ${aleinclinacao}`];
    pCartaGerada.appendChild(span);
  }
};
btnCriarCarta.addEventListener('click', criarCarta);

// console.log(classAleatória(estilo))
