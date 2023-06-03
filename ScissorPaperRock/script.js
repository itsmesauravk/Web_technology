let dispEL =document.getElementsByClassName("disp")

player1 = Math.floor(Math.random()*3 +1)
console.log(player1)

function suffel() {
    console.log(player1)
    if (player1 == 1){
        dispEL.innertext ="Rock"
    } else if (player1 == 2) {
        dispEL.innertext = "Paper"
    } else {
        dispEL.innertext = "Scissor"
    }

}
