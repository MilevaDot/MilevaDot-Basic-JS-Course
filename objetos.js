var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto.detalleDelAuto(); // Auto Corola 2020