const inputs1 = document.querySelector(".angleInput1");
const inputs2 = document.querySelector(".angleInput2");
const inputs3 = document.querySelector(".angleInput3");
const btn = document.querySelector(".checkBtn");
const  outputBox = document.querySelector(".output");



function totalAngles(angle1,angle2,angle3){
const sumOfAngles = angle1 + angle2 + angle3;
return sumOfAngles;
}

function isItTriangle(){
    const sumOfAngles = totalAngles(Number(inputs1.value),Number(inputs2.value),Number(inputs3.value),);
    if(sumOfAngles===180){
        outputBox.innerText="They form a triangle";
    }
    else{outputBox.innerText="Nay! they don't form a triangle"};
}

btn.addEventListener("click",isItTriangle)