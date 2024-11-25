const palabra = 'Jerónimo'

//Función que recoja la palabra secreta y la transforme en barras bajas por cada lera que tenga la palabra
export function transformPalabra(palabra) {
  let palabraSecreta = ''
  for (let i = 0; i < palabra.length; i++) {
    palabraSecreta += '_'
  }
  return palabraSecreta
}

console.log(transformPalabra(palabra))

/* function actualizarPalabra(palabra, letra) {
  let palabraSecreta = 'palabra'
  for (let i = 0; i < palabra.length; i++) {
    palabraSecreta += '_'
  }
  //console.log(palabraSecreta)

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      palabraSecreta[i] = letra
    }
  }

  console.log(palabraSecreta)
}

actualizarPalabra('palabra', 'l') */

//función para actualizar los guiones de las palabras por la letra correspondiente+
function actualizarPalabra(palabra, letra) {
  let palabraSecreta = 'palabra'
  for (let i = 0; i < palabra.length; i++) {
    palabraSecreta += '_'
  }
  //console.log(palabraSecreta)

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      palabraSecreta[i] = letra
    }
  }
}
actualizarPalabra('palabra', 'l')
