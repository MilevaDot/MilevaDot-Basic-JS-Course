var marca = [
    "Abarth", "Alfa Romeo", "Aston Martin", "Audi", "Bentley",
    "BMW", "Cadillac", "Caterham", "Chevrolet", "Citroen",
    "Dacia", "Ferrari", "Fiat", "Ford", "Honda", "Infiniti",
    "Isuzu", "Iveco", "Jaguar"
]

var modelo = ["C-Max", "Fiesta", "Focus", "Mondeo", "Ka",
    "S-MA", "B-MAX", "Grand C-Max", "Tourneo Custom", "Kuga",
    "Galaxy", "Grand Tourneo Connect", "Tourneo Connect",
    "EcoSport", "Tourneo Courier", "Mustang", "Transit Connect",
    "Edge", "Ka+"
]

var anio = ["1988", "1989", "1978", "1989", "1928", "1989",
    "1968", "1989", "1888", "1989", "1288", "1989", "1938",
    "1989", "1988", "1999", "1983", "1989", "1918"
]

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for (i = 0; i < 20; i++) {
    var autoNuevo = new auto(marca[i], modelo[i], anio[i]);
    console.log(autoNuevo)
}
