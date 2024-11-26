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

// function actualizarPalabra(palabra, letra) {
//   let palabraSecreta = 'palabra'
//   for (let i = 0; i < palabra.length; i++) {
//     palabraSecreta += '_'
//   }
//   //console.log(palabraSecreta)

//   for (let i = 0; i < palabra.length; i++) {
//     if (palabra[i] === letra) {
//       palabraSecreta[i] = ('_', letra)
//     }
//   }

//   console.log(palabraSecreta)
// }

//actualizarPalabra('palabra', 'l')

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
let palabraActualizada = console.log(actualizarPalabra('palabra', 'a'))
