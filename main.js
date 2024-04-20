let playerSelection = prompt("introdusca Piedra, Papel o Tijeras")

playerSelection = playerSelection.toUpperCase(playerSelection)


function getCompueterSelection(){
    const selection = ["PIEDRA", "PAPEL", "TIJERAS"]

    const computerSelection = selection[Math.floor(Math.random() * selection.length)]

    return computerSelection
}

const computerSelection = getCompueterSelection()

function playRound(playerSelection, computerSelection) { 
    // console.log(`jugador ${playerSelection} Vs pc ${computerSelection}`)

    if(playerSelection === computerSelection){
        console.log(` tablas ${playerSelection} Vs ${computerSelection}`)
    }
}

playRound(playerSelection, computerSelection)


