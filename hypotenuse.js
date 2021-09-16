const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output")

function calculateSumOfSquare(a, b) {
  const sumOfSquare = a * a + b * b
  // console.log(sumOfSquare)
  return sumOfSquare

}



function calculateHypotenuse() {
  if(Number(sides[0].value) !==0 & Number(sides[1].value) !==0){
  const sumOfSquare = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value))
  const lengthOfHypotenuse = Math.sqrt(sumOfSquare)
  //   console.log(lengthOfHypotenuse)
  outputEl.innerText = "The Length of Hypotenuse is " + lengthOfHypotenuse.toFixed(2);
  outputEl.style.color = "pink"
  outputEl.style.fontSize = "25px";
}else{
  outputEl.innerText = "Plz enter all fields"
  outputEl.style.color = "red"
  outputEl.style.fontSize = "25px";
}
}



hypotenuseBtn.addEventListener("click", calculateHypotenuse)