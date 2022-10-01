const bases = document.querySelector(".base");
const heights = document.querySelector(".height");
const chkBtn= document.querySelector(".chk-btn");
const outputBox = document.querySelector(".output-box")


function areaFormula(b,h){
const area = 1/2*b*h
return area;
}

function areaOfTriangle(){

const area = areaFormula(Number(bases.value),Number(heights.value));
outputBox.innerText = "Area of triangle is: "+ area;

}

chkBtn.addEventListener("click",areaOfTriangle)