/**
 * Contesta a todas las preguntas. En este ejercicio no tienes que codificar nada.
 */

function isPositive(num) {
  return num > 0;
}

/**
 * 1. ¿Que nombre tiene esta función?: isPositive
 * 2. ¿Que deberíamos escribir para ejecutar esta función?: isPositive(5) 
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean?: Un boolean
 * 4. El código de abajo usa la función isPositve. ¿La usa adecuadamente? ¿Por qué? ¿Qué debería cambiar?: No, porque el número que se le pasa es 4, que es positivo. Debería cambiar los mensajes de los console.log.
 */

let x = 4;
if (isPositive(x)) {
  console.log("El número es positivo");
} else {
  console.log("El número es negativo");
}

//let resultado = isPositive(1);
//console.log(resultado)