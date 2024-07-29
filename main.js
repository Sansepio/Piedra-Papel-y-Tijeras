//dom
const btn = document.querySelectorAll('button')
const img = document.createElement('img')
const imgPC = document.createElement('img')
const playerBox = document.querySelector('#player')
const pcBox = document.querySelector('#computer')

const table = document.querySelector('#table')
const ronda = document.createElement('h2')
const estado = document.createElement('h1')
const pointsPlayer = document.createElement('span')
const pointsPC = document.createElement('span')
const winner = document.createElement('h1')
const gameOver = document.querySelector('#winner')


let player = 0
let pc = 0
let round = 0

gameOver.append(winner)

table.append(ronda)
table.append(estado)

img.classList.add('img')
imgPC.classList.add('img')

pointsPC.classList.add('points')
pointsPlayer.classList.add('points')


playerBox.append(img)
pcBox.append(imgPC)
playerBox.append(pointsPlayer)
pcBox.append(pointsPC)

//Crear la seleccion del ordenador 
function getCompueterSelection(){
    const selection = ["piedra", "papel", "tijeras"]

    const computerSelection = selection[Math.floor(Math.random() * selection.length)]

    if (computerSelection === 'piedra') {
        imgPC.src = './assets/Pedra.png'
    }

    if (computerSelection === 'papel'){
        imgPC.src = './assets/papel.png'
    }

    if (computerSelection === 'tijeras'){
        imgPC.src = './assets/tijeras.png'
    }

    return computerSelection
}


function getPlayerSelection(id) {
    const playerSelection = id

    console.log(typeof playerSelection)

    return playerSelection
}

function playRound(playerSelection, computerSelection) { 
    game()
    
    if (round == 6) {   
        roundWiner()    
    }

    if (round <= 5) {

        if (playerSelection === 'piedra') {
            img.src = './assets/Pedra.png'
        }
    
        if (playerSelection === 'papel'){
            img.src = './assets/papel.png'
        }
    
        if (playerSelection === 'tijeras'){
            img.src = './assets/tijeras.png'
        }

        pointsPlayer.textContent = `${player}`
        pointsPC.textContent = `${pc}`

        
        //Comparar los resulatados para decidir el ganador
        if(playerSelection === computerSelection){
            estado.textContent = 'Tablas'
            player ++
            pc ++
        }else if(playerSelection === "piedra"){
            if(computerSelection === "papel") {
                estado.textContent = "Pierdes"
                pc ++
            }
            if(computerSelection === "tijeras") {
                estado.textContent = "Ganas"
                player ++
            }
        }
        else if(playerSelection === "papel"){
            if(computerSelection === "tijeras") {
                estado.textContent = "Pierdes"
                pc ++
            }
            if(computerSelection === "piedra") {
                estado.textContent = "Ganas"
                player ++
            }
        }
        else if(playerSelection === "tijeras"){
            if(computerSelection === "piedra") {
                estado.textContent = "Pierdes"
                pc ++
            }
            if(computerSelection === "papel") {
                estado.textContent = "Ganas"
                player++
            }
        }
    }    

}


function game() {
    round ++ 
    ronda.textContent =`Ronda #${round}` 
}

function roundWiner(){
    if (round == 6){
        if(pc>player) return winner.textContent = `Gana el PC`
        if(player>pc) return winner.textContent = `Gana el Jugador`
        round = 0
        player = 0
        pc = 0
        playerSelection = ""
    }
}
 //dom

btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const playerSelection = btn.id
        const computerSelection = getCompueterSelection()
        playRound(playerSelection, computerSelection)
    })   
})
