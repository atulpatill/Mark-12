const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswer = ["90°","right angled"]

function calculateScore(){
     let score =0;
     let i=0;
     const formResults = new FormData(quizForm);
     for(let value of formResults.values()){
         if(value === correctAnswer[i]){
             score = score + 1;
         }
         i = i+1;
     }
    //  console.log(score)
    outputEl.innerText ="Your final score is " + score;
}


submitAnswerBtn.addEventListener("click", calculateScore)