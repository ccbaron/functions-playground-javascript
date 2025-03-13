/**
 * Implementa una función que simule el lanzamiento de un dado de 6 caras.
 */

function rollDice() {
    // COMPLETAR
    let result = Math.floor(Math.random() * 6) + 1; 
    return result;
    
    // Devuelve un número entre 1 y 6 porque Math.random() devuelve un número entre 0 y 1, y al multiplicarlo por 6, obtenemos un número entre 0 y 6. Al sumarle 1, obtenemos un número entre 1 y 6.
}

console.log(rollDice()); // Un número entre 1 y 6
console.log(rollDice()); // Un número entre 1 y 6
console.log(rollDice()); // Un número entre 1 y 6