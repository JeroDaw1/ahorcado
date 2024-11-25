let INTENTOS = 0

function terminarJuego() {
  if (INTENTOS == 8) {
    console.log('... que tengo aquí colgado')
  }
}

function letraIntroducida(letra, palabra) {
  console.log(letra)
  for (letra in palabra) {
    palabra.replaceAll()
  }
}

// function transformPalabra(palabra) {
//   let palabraSecreta = ''
//   for (let i = 0; i < palabra.length; i++) {
//     palabraSecreta += '_'
//   }
//   return palabraSecreta
// }

// transformPalabra(palabra)

function actualizarPalabra(palabra, letra) {
  let palabraSecreta = 'palabra'
  for (let i = 0; i < palabra.length; i++) {
    palabraSecreta += '_'
  }
  //console.log(palabraSecreta)

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      palabraSecreta[i].replaceAll('_', letra)
    }
  }

  console.log(palabraSecreta)
}

actualizarPalabra('palabra', 'l')
