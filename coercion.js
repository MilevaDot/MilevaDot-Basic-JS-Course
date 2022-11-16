// Javascript es un lenguaje débilmente tipado.
4 + "7"; // 47 es un string
4 * "7"; // 28 es un número
2 + true; // 3
false - 3; // -3


// Coerción implícita: 
var a = 4 + "7";
typeof a // string

var b = 4 * "7";
typeof b; // number

// Coerción explícita:
var c = 20;
var d = e + "";
typeof d; // string

var f = String(c);
typeof f; // string

var g = Number(f);
typeof g; // number