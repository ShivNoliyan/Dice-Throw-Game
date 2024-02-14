const player = document.querySelector(".img1")
let c1 = 0;
let c2 = 0;
const count1 = document.querySelector(".count1")
const count2 = document.querySelector(".count2")

player.addEventListener("click", (event) => {
    let playerDice = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName("img1")[0].src = "./images/dice" + playerDice + ".png"

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.getElementsByClassName("img2")[0].src = "./images/dice" + randomNumber2 + ".png"

    if (playerDice > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player Wins!"
        c1++;
        count1.innerText = c1;
    }
    else if (playerDice < randomNumber2){
        document.querySelector("h1").innerHTML = "Computer Wins!🚩"
        c2++;
        count2.innerText = c2;
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!"
    }

})
