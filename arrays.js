var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas); // Imprime el contenido del array
console.log(frutas.length); // Imprime la longitud del array.
console.log(frutas[0]); // Imprime "Manzana"
console.log(frutas[2]); // Imprime "Cereza"

// Métodos:

var masFrutas = frutas.push("Uvas"); // Agrega "Uvas" al final del array frutas
var ultimate = frutas.pop("Uvas"); // Elimina el último elemento del array frutas
var nuevaLongitud = frutas.unshift("Uvas"); // Agrega "Uvas" al inicio del array frutas
var borrarFruta = frutas.shift("Uvas"); // Elimina el primer elemento del array
var nuevaLongitud = frutas.unshift("Uvas"); // Agrega "Uvas" al inicio del array frutas
var borrarFruta = frutas.shift("Manzana") // Elimina el primer elemento del array.
var posicion = frutas.indexOf("Cereza") // Da el index en el que se encuentra "Cereza".