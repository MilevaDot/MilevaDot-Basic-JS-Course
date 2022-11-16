// Condicional if
if (true) {
    console.log("Hola");
}
// imprime Hola

if (false) {
    console.log("Hola")
} else {
    console.log("soy falso")
}
// imprime soy falso

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu primera votación");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
}
else {
    console.log("Aún no puedes votar");
}

// Operador ternario

condition ? true : false;

var numero = 1;
var resultado = numero === 1 ? "Sí, soy un uno" : "No, no soy uno"