// Variables globales
let words = []
let imagenHtml = document.getElementsByTagName('img')[0]
let palabraSecretaHtml = document.getElementById('palabra-secreta')
let palabraSecreta = ''
let palabraOculta = ''
let formularioHtml = document.getElementsByTagName('form')[0]
let intentos = 0
let letrasUsadas = []

//Función que obtiene los datos del archivo JSON
const leerJsonPalabras = async () => {
  const words = await fetch('./words.json')
  let wordsJson = await words.json()
  return wordsJson
}

//Función que obtiene las palabras del archivo JSON
const obtenerPalabras = async () => {
  let jsonData = await leerJsonPalabras()
  const words = jsonData.words

  palabraSecreta = words[Math.floor(Math.random() * words.length)].item

  console.log('PALABRA SECRETA:', palabraSecreta)
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

  if (letrasUsadas.includes(formChar)) return

  if (esSoloLetra(formChar)) {
    // Sustituir los guiones por la letra introducida en la palabra mostrada en pantalla
    actualizarPalabra(palabraSecretaHtml.textContent, formChar, palabraSecreta)

    // Añadir la letra introducida a la lista de letras usadas
    letrasUsadas.push(formChar)

    // Cambiar el estilo de la tecla en pantalla correspondiente a la letra introducida
    document
      .getElementById(formChar)
      .classList.add(
        palabraSecreta.toLowerCase().includes(formChar)
          ? 'correct'
          : 'incorrect'
      )

    palabraSecreta.toLowerCase().includes(formChar) ? null : intentos++
    cambiarImagen(intentos)

    if (
      palabraSecretaHtml.textContent.toLowerCase() ===
      palabraSecreta.toLowerCase()
    ) {
      // Mostrar elemento de victoria
      document.getElementsByClassName('win')[0].style.display = 'block'

      // Ocultar formulario con el Tag Name
      document.getElementsByTagName('form')[0].style.display = 'none'
    }

    if (intentos >= 8) {
      // Mostrar elemento de derrota
      document.getElementsByClassName('lose')[0].style.display = 'block'

      // Ocultar formulario con el Tag Name
      document.getElementsByTagName('form')[0].style.display = 'none'
    }
  } else {
    console.log('No es una letra válida.') // Mostrar mensaje en la consola
  }
}

//Función para actualizar la palabra en el HTML
function actualizarPalabra(palabraConGuiones, letra, palabraSecreta) {
  // Convertir palabraConGuiones a array
  let palabraConGuionesArray = palabraConGuiones.split('')

  // Reemplazar guiones por la letra correspondiente si es correcta
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (palabraSecreta[i].toLowerCase() === letra.toLowerCase()) {
      palabraConGuionesArray[i] = letra // Actualizar la posición correspondiente
    }
  }

  // Convertir array de nuevo a un string
  palabraConGuiones = palabraConGuionesArray.join('')

  // Actualizar HTML con el nuevo texto
  document.getElementById('palabra-secreta').textContent =
    palabraConGuiones.toUpperCase()
}

// Comprobar que el input del formulario es sólo una letra
function esSoloLetra(input) {
  const regex = /^[A-Za-zÑñ]+$/

  return regex.test(input)
}

// Modificar SRC de la imagen para mostrar la imagen correspondiente al intento actual
function cambiarImagen(intento) {
  imagenHtml.src = './images/Hangman-' + intento + '.png'
}
