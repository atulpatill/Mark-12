const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputEl = document.querySelector("#output");

const correctAnswer = ["90°","right angled","one right angle", "12, 16, 20", "Equilateral triangle", "100", "30"]

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
    outputEl.style.color ="pink"
             outputEl.style.fontSize ="25px";
}


submitAnswerBtn.addEventListener("click", calculateScore)