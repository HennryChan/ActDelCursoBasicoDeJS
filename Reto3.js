var Autos = [];

function Auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

function RegistroAuto(){
    var cantidad = prompt("Ingresa la cantidad de autos");
    for(i=0;i < cantidad; i++){
        var marca = prompt("Ingresa la marca del auto");
        var modelo = prompt("Ingresa el modelo del auto");
        var anio = prompt("Ingresa el año");

        var auto = new Auto( marca, modelo, anio);
        Autos.unshift(auto);
    }
}

RegistroAuto();
console.log(Autos);

