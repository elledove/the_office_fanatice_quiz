const answerButtons = document.getElementById('answer-buttons');
const question = document.getElementById("question");
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');




// console.log(answerButtons);

// document.addEventListener("DOMContentLoaded", ()=>
// {
//     console.log("Autobots! Lets Ride!!!!!!")
    
    

// })

startButton.addEventListener('click', () => {
console.log("Game has begun")
startGame()
})



function startGame() {
   startButton.classList.add("hide");
   questionContainer.classList.remove("hide");


}