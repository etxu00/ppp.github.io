
// ::::::::::: Elementos del DOM ::::::::::: 
const
  $buttons = document.querySelectorAll('button'),
  $body   = document.querySelector('body');
  $main   = document.querySelector('main');

//  ::::::::::: Asignación de eventos a la UI:::::::::::
$buttons.forEach($button => $button.addEventListener('click', event => letsGo(event), false));

//  ::::::::::: Funciones ::::::::::: 
/**
 * Función principal del juego
 * @param {Event} event
 * @returns {Promise}
 * @description
 * Obtiene la opción del usuario y ejecuta la función play
 * para determinar la opción de la computadora y el resultado del juego
 * @see play
 * @see getResult
 * @see disabledButtons
 * @see enabledButtons
 * @see resetLayout
 * @see letsGo
 * @see getResult
 */
const letsGo = event => {
  const optionUser = event.target.textContent;
  resetLayout();
  disabledButtons();
  play(optionUser);
  enabledButtons();
}
/**
 * Evita las pulsoaciones compulsivas de los usuarios y mejora la visualización de la selección
 * de la computadora
 * @returns {Promise}
 */
const disabledButtons = async () => $buttons.forEach($button => $button.disabled = true);
/**
 * Habilita los botones para que el usuario pueda jugar de nuevo
 * @returns {Promise}
 * @description
 * Espera 1 segundo para habilitar los botones, para persmitir que se ejecute la animación
 */
const enabledButtons = () => {
  setTimeout(() => $buttons.forEach($button => $button.disabled = false), 1000);
};
/**
 * Funcion asincrona para elimanar las cleses css del juego anterior
 * se requiere el asincronismo para que se ejecute la animación de forma correcta
 * de lo contrario se ejecutaria al mismo tiempo que la animación de la transisión
 * y no permirtira visualizar la animación de los iconos
 * @returns {Promise}
 * @description
 * Elimina las clases de resultado del juego anterior
 */
const resetLayout = async () => {
  $body.classList.remove('win', 'lose', 'draw', '___Piedra', '___Papel', '___Tijera');
  $main.classList.remove('___Piedra', '___Papel', '___Tijera');
}
/**
 * Determina la opción de la computadora y el resultado del juego.
 * @param {string} optionUser 
 * @returns {Promise}
 */
const play = async optionUser => {
  const
    options           = ['Piedra', 'Papel', 'Tijera'],
    optionComputer    = options[Math.floor(Math.random() * 3)],
    result            = getResult(optionUser, optionComputer);
  $body.classList.add(result, `___${optionComputer}`);
  $main.classList.add(`___${optionUser}`);
}
/**
 * Determina el resultado del juego para el usuario
 * @param {string} user
 * @param {string} pc
 * @returns {string} win | lose | draw
 * @description
 * Piedra gana a Tijera |
 * Papel gana a Piedra |
 * Tijera gana a Papel
 */
const getResult = async (user, pc) => {
  const options = {
    'Piedra'    : () => pc === 'Tijera',
    'Papel'     : () => pc === 'Piedra',
    'Tijera'    : () => pc === 'Papel'
  }
  return user !== pc
    ? options[user]() ? 'win' : 'lose'
    : 'draw';
}
