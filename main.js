
// Elementos del DOM
const
  $buttons = document.querySelectorAll('button'),
  $body   = document.querySelector('body');
  $main   = document.querySelector('main');


// Asignación de eventos
$buttons.forEach(($button) => {
  $button.addEventListener('click', event => letsGo(event), false);
});

// Funciones
const letsGo = event => {
  $body.classList.remove('win', 'lose', 'draw', '___Piedra', '___Papel', '___Tijera');
  $main.classList.remove('___Piedra', '___Papel', '___Tijera');
  $buttons.forEach($button => $button.disabled = true);
  const optionUser = event.target.textContent;
  play(optionUser);
  setTimeout(() => $buttons.forEach($button => $button.disabled = false), 1000);
}
const play = optionUser => {
  const
    options           = ['Piedra', 'Papel', 'Tijera'],
    optionComputer    = options[Math.floor(Math.random() * 3)],
    result            = getResult(optionUser, optionComputer);
  $body.classList.add(result, `___${optionComputer}`);
  $main.classList.add(`___${optionUser}`);
}
const getResult = (user, pc) => {
  const options = {
    'Piedra'    : () => result = pc === 'Tijera',
    'Papel'     : () => result = pc === 'Piedra',
    'Tijera'    : () => result = pc === 'Papel'
  }
  return user !== pc
    ? options[user]() ? 'win' : 'lose'
    : 'draw';
}
