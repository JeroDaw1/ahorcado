let words = []
let imagenHtml = document.getElementsByTagName('img')[0]
let palabraSecretaHtml = document.getElementById('palabra-secreta')
let formularioHtml = document.getElementsByTagName('form')[0]
let intentos = 0

// Cargar archivo JSON con las palabras del juego y guardarlo en una variable
export function leerJsonPalabras() {
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
export function seleccionarPalabraAleatoria() {
  let palabraSecreta = words[Math.floor(Math.random() * words.length)].item
  return palabraSecreta
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

function letraIntroducida(letra) {
  console.log(letra)
}

// Iniciar juego
leerJsonPalabras()

while (intentos < 8) {
  console.log(intentos)
  cambiarImagen(intentos)
  intentos++
}
