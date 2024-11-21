let words = []

// Cargar archivo JSON con las palabras del juego y guardarlo en una variable
export function leerJsonPalabras() {
  fetch('./words.json')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      words = data.words
      console.log(seleccionarPalabraAleatoria())
      return seleccionarPalabraAleatoria()
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
