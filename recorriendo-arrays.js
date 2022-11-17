var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audífonos", costo: 1700},
];

// Para retornar los objetos que tengan la condición:
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//Para retornar el valor del objeto que se pide:
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})