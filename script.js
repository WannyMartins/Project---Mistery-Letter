const inputCartaTexto = document.getElementById('carta-texto');
const pCartaGerada = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');
const est = ['newspaper', 'magazine1', 'magazine2'];
const tam = ['medium', 'big', 'reallybig'];
const rot = ['rotateleft', 'rotateright'];
const incli = ['skewleft', 'skewright'];

const claAle = (classe) => {
  let aleatorio = Math.floor(Math.random() * classe.length);
  aleatorio = classe[aleatorio];
  return aleatorio;
};

// tive ajuda do Raphael Martins pra mudar estilo da plavra ao clicar

const mudaEstilo = (event) => {
  const palavraSelecionada = event.target;
  let mudaClasse = `${claAle(est)} ${claAle(tam)} ${claAle(rot)} ${claAle(incli)}`;
  while (palavraSelecionada.className === mudaClasse) {
    mudaClasse = `${claAle(est)} ${claAle(tam)} ${claAle(rot)} ${claAle(incli)}`;
  }
  palavraSelecionada.className = mudaClasse;
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
      span.classList = `${claAle(est)} ${claAle(tam)} ${claAle(rot)} ${claAle(incli)}`;
      span.addEventListener('click', mudaEstilo);
      pCartaGerada.appendChild(span);
    }
  }
};

const criarCartaKeypress = (e) => {
  if (e.key === 'Enter') criarCarta();
};

btnCriarCarta.addEventListener('click', criarCarta);
inputCartaTexto.addEventListener('keypress', criarCartaKeypress);

// console.log(classAleatória(estilo))
