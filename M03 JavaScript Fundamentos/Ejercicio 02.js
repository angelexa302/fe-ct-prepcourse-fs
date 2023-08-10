/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(nombre) {
console.log(nombre);
return nombre;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
return x + y;
}
suma (3, 5) 
function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
return x - y;
}
resta(5, 3)

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
return x / y;
}
divide(10, 5)
function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
return x * y;
}
multiplica(4, 2);
function obtenerResto(x, y) {
return x % y;
}
obtenerResto(1);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
