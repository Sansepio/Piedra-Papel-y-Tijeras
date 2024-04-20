let playerSelection = prompt("introdusca Piedra, Papel o Tijeras")

playerSelection = playerSelection.toLowerCase(playerSelection)


function getCompueterSelection(){
    const selection = ["PIEDRA🤜", "PAPEL🤚", "TIJERAS✌️"]

    const computerSelection = selection[Math.floor(Math.random() * selection.length)]

    return computerSelection
}

getCompueterSelection()

console.log(`jugador ${playerSelection} Vs pc ${getCompueterSelection()}`)

