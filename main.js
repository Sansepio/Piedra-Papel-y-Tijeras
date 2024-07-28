//dom
const btn = document.querySelectorAll('button')

//Crear la seleccion del ordenador 
function getCompueterSelection(){
    const selection = ["piedra", "papel", "tijeras"]

    const computerSelection = selection[Math.floor(Math.random() * selection.length)]

    return computerSelection
}
function getPlayerSelection(id) {
    const playerSelection = id

    console.log(typeof playerSelection)

    return playerSelection
}

let player = 0
let pc = 0
let round = 0


const computerSelection = getCompueterSelection()

function playRound(playerSelection, computerSelection) { 
    
    game()
    //Comparar los resulatados para decidir el ganador

    if (round < 6) {
        console.log(`El Jugador Selecciona ${playerSelection}`)
        console.log(`La PC selecciona ${computerSelection}`)

        console.log(`player ${player}`)
            console.log(`pc ${pc}`)

        if(playerSelection === computerSelection){
            console.log("Tablas")
            player ++
            pc ++
        }else if(playerSelection === "piedra"){
            if(computerSelection === "papel") {
                console.log("Pierdes")
                pc ++
            }
            if(computerSelection === "tijeras") {
                console.log("Ganas")
                player ++
            }
        }
        else if(playerSelection === "papel"){
            if(computerSelection === "tijeras") {
                console.log("Pierdes")
                pc ++
            }
            if(computerSelection === "piedra") {
                console.log("Ganas")
                player ++
            }
        }
        else if(playerSelection === "tijeras"){
            if(computerSelection === "piedra") {
                console.log("Pierdes")
                pc ++
            }
            if(computerSelection === "papel") {
                console.log("Ganas")
                player++
            }
        }
    }    

}


function game() {
    round ++
    console.log(`ronda #${round}`)
}



btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const playerSelection = btn.id
        playRound(playerSelection, computerSelection)
    })   
})
