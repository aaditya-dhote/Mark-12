const a=document.querySelector(".side1");
const b=document.querySelector(".side2");
const checkBtn=document.querySelector("#chkBtn");
const result=document.querySelector("#outputBox");

function giveHypotenuse(x,y){
    const hypoSquare = x*x + y*y ;
    const hypo = Math.sqrt(hypoSquare);
    return hypo;
}




function hypotenuse(){
const hypo = giveHypotenuse(Number(a.value),Number(b.value));
result.innerText=("Hypotenuse is: " + hypo);
}



chkBtn.addEventListener("click",hypotenuse

)