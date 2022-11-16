var miNombre = "Aaron";

function nombre(){
    var miApellido = "Ilizarbe";
    console.log(miNombre + " " + miApellido);
}
nombre();

miNombre // Aaron, porque está en el scope global.

miApellido // Undefined, porque está en el scope local.