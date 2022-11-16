var var1 = "piedra"
var var2 = "papel"
var var3 = "tijera"
function game(machine, player) {
    if (machine === player) {
        return resultado = "Empate"
    }
    else if (machine == var1 && player == var2) {
        return resultado = "Ganaste, jugador!"
    }
    else if (machine == var1 && player == var3) {
        return resultado = "Perdiste, ganó la máquina"
    }
    else if (machine == var2 && player == var1) {
        return resultado = "Perdiste, ganó la máquina"
    }
    else if (machine == var2 && player == var3) {
        return resultado = "Ganaste, jugador!"
    }
    else if (machine == var3 && player == var1) {
        return resultado = "Ganaste, jugador!"
    }
    else {
        return resultado = "Perdiste, ganó la máquina"
    }
}
game("piedra","tijera")
