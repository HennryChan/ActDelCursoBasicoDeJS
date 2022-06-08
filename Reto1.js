var ronda1 = "Tijera";
var ronda2 = "Piedra";
var ronda3 = "Tijera";

function Juego1(resp){
    if(resp === ronda1){
        console.log("Felicidades ganaste la ronda");
    }else{
        console.log("Game Over");
    }
}

function Juego2(resp){
    if(resp === ronda2){
        console.log("Felicidades ganaste la ronda");
    }else{
        console.log("Game Over");
    }
}

function Juego3(resp){
    if(resp === ronda3){
        console.log("Felicidades ganaste la ronda");
    }else{
        console.log("Game Over");
    }
}

Juego1("Tijera");
Juego2("Piedra");
Juego3("Papel");
