const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
  'prop1',
  'prop2',
  'prop3',
  'prop4',
  'prop5',
  'prop6'
];

const messages = {
  'prop1': `A equivalência lógica P ∨ Q ≡ Q ∨ P é um exemplo da propriedade comutativa da disjunção (ou "ou lógico") na lógica proposicional. Essa propriedade afirma que a ordem dos operandos em uma disjunção não afeta o valor de verdade da expressão. Em outras palavras, "P ou Q" é logicamente equivalente a "Q ou P". `,

  'prop2': `Vamos explicar a equivalência lógica p ∧ q ≡ p → ¬q de maneira simples e clara, considerando que estamos lidando com pessoas que nunca viram o assunto antes.<br>
   ¬p∧q: ¬p significa "não  p".<br><br>
   ∧ significa "e".<br><br>
   q é uma proposição qualquer.<br><br>
   Então,  ¬p ∧ q significa "não  p e  q".<br><br>
   p → ¬q: → → significa "implica" ou "se... então".<br><br>
   ¬q significa "não  q".<br><br>
   Então, p→ ¬q significa "se p, então não q".<br><br>
   p: "Está chovendo."<br><br>
   q: "Eu levo um guarda-chuva."<br><br>
   ¬p∧q: "Não está chovendo e eu levo um guarda-chuva."<br><br>
   p → ¬q: "Se está chovendo, então eu não levo um guarda-chuva."`,

  'prop3': `A lei de De Morgan é uma regra na lógica que mostra como a negação de "e" se relaciona com "ou".<br><br>
   Vamos entender isso passo a passo:<br><br>
   ¬(p ∧ q): Isso é a negação de "p e q". "p ∧ q" significa que ambos, "p" e "q", são verdadeiros. Então, ¬(p ∧ q) é verdadeiro quando "p e q" é falso, ou seja, quando pelo menos um deles é falso.<br><br>
   ¬q ∨ ¬p: Isso significa "não q" ou "não p". ¬q é a negação de "q" e ¬p é a negação de "p". A expressão ¬q ∨ ¬p é verdadeira quando pelo menos uma das duas negações é verdadeira.<br><br>
   A lei de De Morgan diz que ¬(p ∧ q) é o mesmo que ¬q ∨ ¬p. Em outras palavras, negar "p e q" é igual a dizer "não q" ou "não p".`,

  'prop4': `Se P é a frase "Pedro é ótimo aluno", então a frase "Pedro é ótimo aluno e Pedro é ótimo aluno" pode ser resumida apenas como "Pedro é ótimo aluno".<br><br>
   Pode parecer estranho pensar assim, mas a lógica matemática tem maneiras de lidar com essas situações!`,

  'prop5': `A equivalência lógica ¬(¬p) ≡ p é conhecida como a lei da dupla negação.<br><br>
   Vamos explicar isso de maneira clara e simples.<br><br>
   O que significa ¬p?<br><br>
   ¬p é a negação de p. Se p é uma afirmação que pode ser verdadeira (V) ou falsa (F), ¬p inverte o valor de verdade de p. Se p é verdadeira, ¬p é falsa. Se p é falsa, ¬p é verdadeira.<br><br>
   O que significa ¬(¬p)?<br><br>
   ¬(¬p) é a negação de ¬p. Isso significa que estamos invertendo novamente o valor de verdade de ¬p.<br><br>
   Em ambos os casos, ¬(¬p) retorna ao valor original de p. Ou seja, negar uma negação nos traz de volta ao ponto de partida.`,

  'prop6': `Essa regra diz que repetir uma mesma afirmação não muda o seu significado.<br><br>
   Por exemplo, se "p" significa "Está chovendo", então "p e p" (ou "Está chovendo e está chovendo") é o mesmo que apenas "Está chovendo".`
};

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';
let gameCompleted = false;

const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalMessage = document.getElementById('modal-message');

const endGameModal = document.getElementById('end-game-modal');
const endGameClose = document.querySelector('.end-game-close');
const endGamePlayer = document.getElementById('end-game-player');

const openModal = (message) => {
  modalMessage.innerHTML = message;
  modal.style.display = 'block';
}

const openEndGameModal = () => {
  endGamePlayer.innerHTML = spanPlayer.innerHTML;
  endGameModal.style.display = 'block';
}

const closeModalFunction = () => {
  modal.style.display = 'none';
  if (gameCompleted) {
    openEndGameModal();
  }
}

closeModal.onclick = () => {
  closeModalFunction();
}

endGameClose.onclick = () => {
  endGameModal.style.display = 'none';
}

window.onclick = (event) => {
  if (event.target === modal) {
    closeModalFunction();
  } else if (event.target === endGameModal) {
    endGameModal.style.display = 'none';
  }
}

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 12) {
    gameCompleted = true;
    closeModalFunction(); // Chama o fechamento do modal, que abrirá o modal de fim de jogo
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

    openModal(messages[firstCharacter]);

  } else {

    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);

  }

}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const showAllCards = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => card.classList.add('reveal-card'));
  setTimeout(() => {
    cards.forEach((card) => card.classList.remove('reveal-card'));
  }, 2000); // Revele por 2 segundos (2000 milissegundos)
}

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });

  showAllCards(); // Mostrar todas as cartas ao carregar o jogo
}

const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
  setTimeout(() => {
    openModal(`<p>Boas vindas!</p>
    <p>Equivalências lógicas mostram que duas afirmações têm sempre o mesmo resultado, ajudando a simplificar ideias e provar conceitos. Isso pode ser comprovado através da tabela verdade de cada proposição, se ambas forem idênticas = equivalentes.</p><br><br>
    <p>Algumas equivalências importantes incluem:</p><br><br>
    <ul>
      <li><strong>Comutativa:</strong> A ordem das coisas não importa. Por exemplo, "A e B" é o mesmo que "B e A".</li>
      <li><strong>Associativa:</strong> A maneira como agrupamos as coisas não importa. Por exemplo, "(A e B) e C" é o mesmo que "A e (B e C)".</li>
      <li><strong>Distributiva:</strong> Combinar coisas de fora para dentro funciona como na matemática. Por exemplo, "A e (B ou C)" é o mesmo que "(A e B) ou (A e C)".</li>
      <li><strong>Negação:</strong> Negar duas vezes volta ao início. Por exemplo, "não (não A)" é o mesmo que "A".</li><br><br>
    </ul>
    <p>Conectivos lógicos são operadores que conectam proposições para formar proposições compostas. Os principais conectivos são:</p>
    <ul>
      <li><strong>E (∧):</strong> A conjunção de P e Q (P ∧ Q) é verdadeira apenas se ambas P e Q forem verdadeiras.</li>
      <li><strong>OU (∨):</strong> A disjunção de P e Q (P ∨ Q) é verdadeira se pelo menos uma de P ou Q for verdadeira.</li>
      <li><strong>NÃO (¬):</strong> A negação de P (¬P) é verdadeira se P for falsa.</li>
      <li><strong>IMPLICAÇÃO (→):</strong> P implica Q (P → Q) é falsa apenas se P for verdadeira e Q for falsa.</li>
      <li><strong>BICONDICIONAL (↔):</strong> P se e somente se Q (P ↔ Q) é verdadeira se P e Q têm o mesmo valor de verdade.</li>
    </ul>
    <p>Esses conceitos são fundamentais na lógica e na matemática, ajudando a entender e manipular proposições e argumentos. Guarde-os bem e vamos para o jogo!</p>`);
  }, 5000); // 5000 milissegundos = 5 segundos
}
