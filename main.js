let playerSelection = prompt("introdusca Piedra, Papel o Tijeras")

playerSelection = playerSelection.toUpperCase(playerSelection)


function getCompueterSelection(){
    const selection = ["PIEDRA", "PAPEL", "TIJERAS"]

    const computerSelection = selection[Math.floor(Math.random() * selection.length)]

    return computerSelection
}

piedra='PIEDRA'
papel = 'PAPEL'
tijeras = 'TIJERAS'

const computerSelection = getCompueterSelection()

function playRound(playerSelection, computerSelection) { 
    // console.log(`jugador ${playerSelection} Vs pc ${computerSelection}`)

    if(playerSelection === computerSelection){
        console.log("Tablas")
    }else if(playerSelection===piedra){
        if(computerSelection===papel) return console.log("Pierdes")
        if(computerSelection===tijeras) return console.log("Ganas")
    }
    else if(playerSelection===papel){
        if(computerSelection===tijeras) return console.log("Pierdes")
        if(computerSelection===piedra) return console.log("Ganas")
    }
    else if(playerSelection===tijeras){
        if(computerSelection===piedra) return console.log("Pierdes")
        if(computerSelection===papel) return console.log("Ganas")
    }

}

playRound(playerSelection, computerSelection)


