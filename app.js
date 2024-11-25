let words = []
let imagenHtml = document.getElementsByTagName('img')[0]
let palabraSecretaHtml = document.getElementById('palabra-secreta')
let formularioHtml = document.getElementsByTagName('form')[0]
let intentos = 0

// Cargar archivo JSON con las palabras del juego y guardarlo en una variable
function leerJsonPalabras() {
  fetch('./words.json')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      words = data.words
      const palabraSecreta = seleccionarPalabraAleatoria()
      palabraSecretaHtml.innerText = transformarPalabra(palabraSecreta)
      console.log(palabraSecreta)
    })
    .catch(error => {
      console.error(error)
    })
}

// Seleccionar una palabra aleatoria del array de palabras
function seleccionarPalabraAleatoria() {
  let palabraSecreta = words[Math.floor(Math.random() * words.length)].item

  return palabraSecreta
}

// Función que comprueba si la letra introducida es correcta
function letraIntroducida(event) {
  event.preventDefault()

  const formChar = document.getElementsByTagName('input')[0].value

  // Comprobar que la letra introducida es una letra y ningún otro caracter
  if (formChar.length < 1 || formChar.length > 1) {
    console.log('No es una letra')
    return
  } else {
    console.log('wiii')
  }

  // if (palabraSecreta.toUpperCase().includes(formChar.toUpperCase())) {
  //   console.log(true)
  // } else {
  //   console.log(false)
  // }
}

// Modificar SRC de la imagen para mostrar la imagen correspondiente al intento actual
function cambiarImagen(intento) {
  imagenHtml.src = './images/Hangman-' + intento + '.png'
}

//Función que recoja la palabra secreta y la transforme en '_'
function transformarPalabra(palabra) {
  let palabraSecreta = ''
  for (let i = 0; i < palabra.length; i++) {
    palabraSecreta += '_'
  }
  return palabraSecreta
}

// Iniciar juego
leerJsonPalabras()

while (intentos < 8) {
  console.log(intentos)
  cambiarImagen(intentos)
  intentos++
}
