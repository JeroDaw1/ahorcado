# El ahorcado

## Tarea para Jero - Integración y Gestión del Juego

1. Estructura general del proyecto: Crear la estructura básica del proyecto web (directorios, HTML, CSS y JS).
2. Carga del archivo JSON y selección de la palabra secreta:
   1. Descargar el archivo JSON desde el directorio raíz.
   2. Cargar el contenido del archivo JSON en un array.
   3. Implementar la lógica para elegir aleatoriamente la palabra secreta de ese array.
3. Control de errores en la entrada del usuario:
   1. Asegurar que el input solo reciba una letra (y no un número o una cadena mayor de un carácter).
   2. Implementar la validación para que no importe si se introduce una letra en mayúsculas o minúsculas.
4. Lógica de finalización del juego:
   1. Implementar la lógica de fin del juego, ya sea porque se han agotado los intentos o porque se ha adivinado la palabra completa.
   2. Mostrar el mensaje adecuado al final del juego ("...a quien has Ayudado" o "...que tengo aquí colgado").
5. Integración de la imagen dinámica del ahorcado:
   1. Cambiar la imagen de Hangman conforme se avanza en los intentos fallidos (de Hangman-0.png hasta Hangman-8.png).

## Tarea para Aitana - Interfaz de Usuario (UI) y Estilos CSS

1. Diseño del layout básico del juego:
   1. Crear la interfaz de usuario usando HTML.
   2. Mostrar el título "El Abogado..." en la cabecera.
   3. Mostrar la palabra secreta en forma de guiones al principio del juego.
   4. Crear el cuadro de texto (input) para ingresar las letras y el botón "Comprobar Letra".
   5. Mostrar las imágenes del juego que cambian dinámicamente.
2. Estilos CSS:
   1. Aplicar un diseño atractivo utilizando Bootstrap 5 (si lo consideran oportuno).
   2. Asegurar que la interfaz sea limpia y funcional, con una buena disposición de los elementos en pantalla (palabra secreta, letras adivinadas, intentos restantes y las imágenes).
   3. Personalizar la apariencia de los inputs y botones para que se integren bien visualmente.
3. Estilos para el encabezado y los mensajes de fin del juego:
   1. Definir los estilos para los mensajes de fin del juego ("...a quien has Ayudado" y "...que tengo aquí colgado").

## Tarea para Daniel - Funcionalidad JavaScript y Lógica del Juego

1. Mostrar la palabra secreta oculta con guiones:
   1. Al principio, mostrar la palabra secreta en forma de guiones, con el número de guiones correspondiente a la longitud de la palabra.
2. Manejo del input y lógica de comprobación de letras:
   1. Implementar la función que reciba la letra introducida por el usuario.
   2. Comparar la letra con la palabra secreta, actualizando la palabra visible con los guiones descubiertos.
   3. Si la letra está presente, actualizar correctamente los guiones. Si no lo está, cambiar la imagen del ahorcado.
3. Gestión de los intentos restantes:
   1. Mantener un contador de los intentos restantes.
   2. Al alcanzar los 8 intentos, terminar el juego y mostrar el mensaje de derrota.
4. Actualizar dinámicamente la interfaz según las acciones del usuario:
   1. Actualizar la palabra secreta (con los guiones reemplazados por letras) en la pantalla.
   2. Asegurar que solo se pueda ingresar una letra y no números o cadenas de más de un carácter.
   3. Hacer que el botón “Comprobar Letra” ejecute la acción correspondiente.
