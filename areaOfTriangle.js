const sides = document.querySelectorAll(".side-input");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputEl = document.querySelector("#output");


function areaFormula(a,b){
   const finalArea = 1/2 *a*b;
//    console.log(finalArea)
return finalArea
}


function calculateAreaOfTriangle(){
  const finalArea = areaFormula(Number(sides[0].value),Number(sides[1].value));
//   console.log(finalArea)
  outputEl.innerText = "The Area of Triangle is " + finalArea;
}

checkAreaBtn.addEventListener("click", calculateAreaOfTriangle)