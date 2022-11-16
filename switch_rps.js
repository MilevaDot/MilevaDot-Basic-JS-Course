var var1 = "piedra"
var var2 = "papel"
var var3 = "tijera"

function game(machine, player) {
    switch (true) {
        case machine==player:
            return "Empate";
        case machine == var1 && player == var2:
            return "Ganaste, jugador";
        case machine == var1 && player == var3:
            return "Perdiste, ganó la máquina"
        case machine == var2 && player == var1:
            return "Perdiste, ganó la máquina"
        case machine == var2 && player == var3:
            return "Ganaste, jugador"
        case machine == var3 && player == var1:
            return "Ganaste, jugador"
        case machine == var3 && player == var2:
            return "Perdiste, ganó la máquina"
        }
    }
game("piedra","piedra")