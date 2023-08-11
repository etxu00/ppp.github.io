
// Elementos del DOM
const $buttons = document.querySelectorAll('button');

// Asignación de eventos
$buttons.forEach(($button) => {
  $button.addEventListener('click', event => letsGo(event), false);
});

// Funciones
const letsGo = event => {
  const optionUser = event.target.textContent;
  play(optionUser);
}
const play = optionUser => {
  const
    options           = ['Piedra', 'Papel', 'Tijera'],
    optionComputer    = options[Math.floor(Math.random() * 3)],
    result            = getResult(optionUser, optionComputer);
  alert(`Tu elegiste ${optionUser} y la computadora ${optionComputer}.\n${result}`);
}
const getResult = (user, pc) => {
  const options = {
    'Piedra'    : () => result = pc === 'Tijera' ? 'win' : 'lose',
    'Papel'     : () => result = pc === 'Piedra' ? 'win' : 'lose',
    'Tijera'    : () => result = pc === 'Papel' ? 'win' : 'lose',
    'default'   : () => result = 'draw'
  }
  return (options[user] || options['default'])();
}
