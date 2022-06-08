
function Game(resp){
    switch(resp){
        case "Tijeras":
            console.log("Felicidades has gando el juego");
            break;
        case "Papel":
            console.log("Felicidades has ganado el juego");
            break
        default:
            console.log("Game Over");
    }
}

Game("Papel");