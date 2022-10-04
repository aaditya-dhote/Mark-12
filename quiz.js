const quizForm = document.querySelector(".forms");
const submitBtn = document.querySelector(".submit-btn");
const outputBox = document.querySelector(".output-box");


const correctAnswer =["90","right angled","right angle triangle","45","no"];

function totalScore(){
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm);
    

for(let value of formResults.values())
{if(value===correctAnswer[index])
    {score=score+1;}
    index= index+1;
}
    outputBox.innerText = "Your score is: "+ score

}

submitBtn.addEventListener("click",totalScore)