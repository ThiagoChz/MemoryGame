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
   ¬p∧q: ¬p significa "não  p". ∧ significa "e".  q é uma proposição qualquer. Então,  ¬p ∧ q significa "não  p e  q". p → ¬q: → → significa "implica" ou "se... então". ¬q significa "não  q". Então, p→ ¬q significa "se p, então não q".
   p: "Está chovendo."  q: "Eu levo um guarda-chuva." ¬p∧q: "Não está chovendo e eu levo um guarda-chuva." p → ¬q: "Se está chovendo, então eu não levo um guarda-chuva."`,
  'prop3': 'A equivalência lógica ¬ ( 𝑝 ∧ 𝑞 ) ≡ ¬ 𝑞 ∨ ¬ 𝑝 ¬(p∧q)≡¬q∨¬p é conhecida como a lei de De Morgan. Esta lei é fundamental na lógica proposicional e descreve a relação entre a negação de uma conjunção (e) e a disjunção (ou) das negações. Vamos entender essa equivalência passo a passo. O que significa ¬ ( 𝑝 ∧ 𝑞 ) ¬(p∧q)? 𝑝 ∧ 𝑞 p∧q é uma conjunção que significa "p e q". Esta expressão é verdadeira somente quando tanto 𝑝 p quanto 𝑞 q são verdadeiros. ¬ ( 𝑝 ∧ 𝑞 ) ¬(p∧q) é a negação dessa conjunção. Isso significa que ¬ ( 𝑝 ∧ 𝑞 ) ¬(p∧q) é verdadeiro sempre que 𝑝 ∧ 𝑞 p∧q é falso. Em outras palavras, ¬ ( 𝑝 ∧ 𝑞 ) ¬(p∧q) é verdadeiro quando pelo menos um de 𝑝 p ou 𝑞 q é falso. O que significa ¬ 𝑞 ∨ ¬ 𝑝 ¬q∨¬p? ¬ 𝑞 ¬q é a negação de 𝑞 q. Se 𝑞 q é verdadeiro, ¬ 𝑞 ¬q é falso, e vice-versa. ¬ 𝑝 ¬p é a negação de 𝑝 p. Se 𝑝 p é verdadeiro, ¬ 𝑝 ¬p é falso, e vice-versa. ∨ ∨ significa "ou". A expressão ¬ 𝑞 ∨ ¬ 𝑝 ¬q∨¬p é verdadeira sempre que pelo menos uma das subexpressões ( ¬ 𝑞 ¬q ou ¬ 𝑝 ¬p) é verdadeira.',
  'prop4': "Suponha que P seja a proposição “Pedro é ótimo aluno”. Assim, a proposição composta “Pedro é ótimo aluno e Pedro é ótimo aluno” pode ser resumida em P: Pedro é ótimo aluno. É um pouco (muito!) estranho pensar nesse tipo de construção, mas a lógica matemática possui ferramentas para tratá-las.!",
  'prop5': `A equivalência lógica ¬ ( ¬ 𝑝 ) ≡ 𝑝 ¬(¬p)≡p é uma das leis fundamentais da lógica proposicional, conhecida como a lei da dupla negação. Vamos explicar isso de maneira clara e simples. O que significa ¬ 𝑝 ¬p? ¬ 𝑝 ¬p é a negação de 𝑝 p. Se 𝑝 p é uma proposição que pode ser verdadeira (V) ou falsa (F), ¬ 𝑝 ¬p inverte o valor de verdade de 𝑝 p. Se 𝑝 p é verdadeira, ¬ 𝑝 ¬p é falsa. Se 𝑝 p é falsa, ¬ 𝑝 ¬p é verdadeira. O que significa ¬ ( ¬ 𝑝 ) ¬(¬p)? ¬ ( ¬ 𝑝 ) ¬(¬p) é a negação de ¬ 𝑝 ¬p. Isso significa que estamos invertendo o valor de verdade de ¬ 𝑝 ¬p. Demonstrando a equivalência ¬ ( ¬ 𝑝 ) ≡ 𝑝 ¬(¬p)≡p Vamos ver como essa equivalência funciona com exemplos: Quando 𝑝 p é verdadeira: 𝑝 = 𝑉 p=V ¬ 𝑝 = 𝐹 ¬p=F (negação de verdadeira é falsa) ¬ ( ¬ 𝑝 ) = ¬ 𝐹 = 𝑉 ¬(¬p)=¬F=V (negação de falsa é verdadeira) Quando 𝑝 p é falsa: 𝑝 = 𝐹 p=F ¬ 𝑝 = 𝑉 ¬p=V (negação de falsa é verdadeira) ¬ ( ¬ 𝑝 ) = ¬ 𝑉 = 𝐹 ¬(¬p)=¬V=F (negação de verdadeira é falsa) Em ambos os casos, ¬ ( ¬ 𝑝 ) ¬(¬p) retorna ao valor original de 𝑝 p.`,
  'prop6': 'Essa é uma forma especial da identidade da conjunção. Ela afirma que "p e p" é logicamente equivalente a simplesmente "p". Por exemplo, se 𝑝 p representa "Está chovendo", então a expressão 𝑝 ∧ 𝑝 p∧p significa "Está chovendo e está chovendo", o que é logicamente equivalente a apenas "Está chovendo".'
};

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalMessage = document.getElementById('modal-message');

const openModal = (message) => {
  modalMessage.innerHTML = message;
  modal.style.display = 'block';
}

const closeModalFunction = () => {
  modal.style.display = 'none';
}

closeModal.onclick = () => {
  closeModalFunction();
}

window.onclick = (event) => {
  if (event.target === modal) {
    closeModalFunction();
  }
}

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === characters.length * 2) {
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi de: ${timer.innerHTML}`);
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

    openModal(messages[firstCharacter]);
    checkEndGame();

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
    openModal(`Seja bem vindo! Equivalências lógicas são afirmações na lógica proposicional que mostram que duas proposições compostas têm o mesmo valor de verdade em todas as situações possíveis. Elas são úteis para simplificar expressões lógicas e para provar teoremas. Algumas equivalências importantes incluem:
    <br><br>
    - <b>Comutativa</b>: P ∨ Q ≡ Q ∨ P e P ∧ Q ≡ Q ∧ P<br>
    - <b>Associativa</b>: (P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R) e (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)<br>
    - <b>Distributiva</b>: P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R) e P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)<br>
    - <b>Negação</b>: ¬(¬P) ≡ P e De Morgan ¬(P ∧ Q) ≡ ¬P ∨ ¬Q e ¬(P ∨ Q) ≡ ¬P ∧ ¬Q<br><br>
    Conectivos lógicos são operadores que conectam proposições para formar proposições compostas. Os principais conectivos são:
    <br><br>
    - <b>E (∧)</b>: A conjunção de P e Q (P ∧ Q) é verdadeira apenas se ambas P e Q forem verdadeiras.<br>
    - <b>OU (∨)</b>: A disjunção de P e Q (P ∨ Q) é verdadeira se pelo menos uma de P ou Q for verdadeira.<br>
    - <b>NÃO (¬)</b>: A negação de P (¬P) é verdadeira se P for falsa.<br>
    - <b>IMPLICAÇÃO (→)</b>: P implica Q (P → Q) é falsa apenas se P for verdadeira e Q for falsa.<br>
    - <b>BICONDICIONAL (↔)</b>: P se e somente se Q (P ↔ Q) é verdadeira se P e Q têm o mesmo valor de verdade.<br><br>
    Esses conceitos são fundamentais na lógica e na matemática, ajudando a entender e manipular proposições e argumentos. <br><br>
    Guarde bem esses conceitos, agora vamos para o jogo`);
  }, 5000); // 5000 milissegundos = 5 segundos
}
