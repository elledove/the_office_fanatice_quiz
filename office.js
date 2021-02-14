const answerButtons = document.getElementById('answer-buttons');
const question = document.getElementById("question");
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
//The Array.from will turn my HTML collection of buttons into an array that I can iterate over and add the answers
const choices = Array.from(document.getElementsByClassName("answer-btn"));
const playSoundBtn = document.getElementById('sound-btn');
const soundz = document.getElementById('soundz');




playSoundBtn.addEventListener('click',() => {soundz.play()})
// document.addEventListener("DOMContentLoaded", ()=>
// {
//     console.log("Autobots! Lets Ride!!!!!!")

    console.log(document.getElementsByClassName("answer-btn"))

// })

fetch('question.json').then(r => r.json()).then(qz => console.log(qz))

startButton.addEventListener('click', () => {
console.log("Game has begun")
startGame()
})



function startGame() {
   startButton.classList.add("hide");
   questionContainer.classList.remove("hide");


}