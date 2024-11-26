let words = []
let imagenHtml = document.getElementsByTagName('img')[0]
let palabraSecretaHtml = document.getElementById('palabra-secreta')
let palabraSecreta = ''
let palabraOculta = ''
let formularioHtml = document.getElementsByTagName('form')[0]
let intentos = 0

const leerJsonPalabras = async callback => {
  const words = await fetch('./words.json')
  let wordsJson = await words.json()
  return wordsJson
}

const obtenerPalabras = async () => {
  let jsonData = await leerJsonPalabras()
  const words = jsonData.words

  palabraSecreta = words[Math.floor(Math.random() * words.length)].item
  console.log(palabraSecreta)
  transformarPalabra()

  palabraSecretaHtml.innerText = palabraOculta
}

// Inicio del juego
obtenerPalabras()

//Función que recoge la palabra secreta y la transforma en guiones bajos
function transformarPalabra() {
  for (let i = 0; i < palabraSecreta.length; i++) {
    palabraOculta += '_'
  }
}

// Función que comprueba si la letra introducida es correcta
function letraIntroducida(event) {
  event.preventDefault()

  const formChar = document.getElementsByTagName('input')[0].value.toLowerCase()

  if (esSoloLetra(formChar)) {
    console.log('Es una letra válida.')
    // Sustituir los guiones por la letra introducida en la palabra mostrada en pantalla
    // Cambiar el estilo de la tecla en pantalla correspondiente a la letra introducida
    document
      .getElementById(formChar)
      .classList.add(
        palabraSecreta.toLowerCase().includes(formChar)
          ? 'correct'
          : 'incorrect'
      )
  } else {
    console.log('No es una letra válida.')
  }
}

// Comprobar que el input del formulario es sólo una letra
function esSoloLetra(input) {
  const regex = /^[a-zA-Z]$/

  return regex.test(input)
}

// Modificar SRC de la imagen para mostrar la imagen correspondiente al intento actual
function cambiarImagen(intento) {
  imagenHtml.src = './images/Hangman-' + intento + '.png'
}

while (intentos < 8) {
  console.log(intentos)
  cambiarImagen(intentos)
  intentos++
}
