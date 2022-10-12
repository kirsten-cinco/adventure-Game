//Your Code here
let firstAnswer = window.prompt("Do you head left or right?")

//User selects left
if (firstAnswer === "left") {
    console.log("You selected left")
    let secondAnswer = window.prompt("Do you go up the ladder or crawl through the tunnel?")
    //User selects up the ladder 
    if (secondAnswer === "up the ladder")
    //User selects crawl through the tunnel
     colsole.log("congrats ur now in heaven. You win!")
    else if (secondAnswer === "crawl through the tunnel")
    //User selects anything else
     console.log("congrats ur now in hell. You win")
    else {
        console.log("Game over loser, ur ded")
    }
}
//User selects right 
else if (firstAnswer === "right")
    console.log("You selected right")
//User selects anything else
else {
    console.log("Game over! Try again")
}