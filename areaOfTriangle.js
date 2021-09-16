const sides = document.querySelectorAll(".side-input");
const checkAreaBtn = document.querySelector("#check-area-btn");
const outputEl = document.querySelector("#output");


function areaFormula(a, b) {
  const finalArea = 1 / 2 * a * b;
  //    console.log(finalArea)
  return finalArea
}


function calculateAreaOfTriangle() {
  if(Number(sides[0].value)!==0 & Number(sides[1].value)!==0 ){
  const finalArea = areaFormula(Number(sides[0].value), Number(sides[1].value));
  //   console.log(finalArea)
  outputEl.innerText = "The Area of Triangle is " + finalArea;
  outputEl.style.color = "pink"
  outputEl.style.fontSize = "25px";
}else{
  outputEl.innerText = "Plz enter all the fields"
  outputEl.style.color = "red"
  outputEl.style.fontSize = "25px";
}
}

checkAreaBtn.addEventListener("click", calculateAreaOfTriangle)