const INTENTOS = 0

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

function transformPalabra(palabra) {
  let palabraSecreta = ''
  for (let i = 0; i < palabra.length; i++) {
    palabraSecreta += '_'
  }
  return palabraSecreta
}

transformPalabra(palabra)

function actualizarPalabra(palabra, letra) {
  let palabraSecreta = ''
  for (let i = 0; i < palabra.length; i++) {
    palabraSecreta += '_'
  }
  if (letra in palabra) {
    replace('_', letra)
  }
}

actualizarPalabra('palabra', 'p')
