const answerButtons = document.getElementById('answer-buttons');
const question = document.getElementById("question");
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
//The Array.from will turn my HTML collection of buttons into an array that I can iterate over and add the answers
const choices = Array.from(document.getElementsByClassName("answer-btn"));
const playSoundBtn = document.getElementById('sound-btn');
const soundz = document.getElementById('soundz');
//Created an empty array to add the key value pair for questions and answers from fetch request
let questions = [];




playSoundBtn.addEventListener('click',() => {
    soundz.play()
   
    
    })
// document.addEventListener("DOMContentLoaded", ()=>
// {
//     console.log("Autobots! Lets Ride!!!!!!")

    console.log(document.getElementsByClassName("answer-btn"))

// })

fetch('question.json').then(r => r.json())
.then(qz => {
    console.log(qz)
    questions = qz.map( q => {
        const formatq = {
            question: q.question
        } ;

        const answerChoices =[...q.incorrect]
        formatq.answer = Math.floor(Math.random()*3) + 1;
        answerChoices.splice(formatq.answer -1, 0,q.correct)

        answerChoices.forEach((choice,index) => {
            formatq["choice" + (index+1)] = choice;
        })

        return formatq;
    })
}
    
    )

startButton.addEventListener('click', () => {
console.log("Game has begun")
startGame()
})



function startGame() {
   startButton.classList.add("hide");
   questionContainer.classList.remove("hide");


}