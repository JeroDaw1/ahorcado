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
  // Crear palabra secreta como un array de guiones bajos
  let palabraSecreta = Array(palabra.length).fill('_')

  // Reemplazar los guiones por la letra correspondiente
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      palabraSecreta[i] = letra // Actualizar la posición correspondiente
    }
  }

  // Convertir el array a string para mostrar el progreso
  return palabraSecreta.join('')
}

// Probar la función
console.log(actualizarPalabra('palabra', 'l'))
