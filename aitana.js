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
