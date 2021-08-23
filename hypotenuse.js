const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output")

function calculateSumOfSquare(a, b) {
  const sumOfSquare = a * a + b * b
  // console.log(sumOfSquare)
  return sumOfSquare

}



function calculateHypotenuse() {
  const sumOfSquare = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value))
  const lengthOfHypotenuse = Math.sqrt(sumOfSquare)
  //   console.log(lengthOfHypotenuse)
  outputEl.innerText = "The Length of Hypotenuse is " + lengthOfHypotenuse;
  outputEl.style.color = "pink"
  outputEl.style.fontSize = "25px";
}



hypotenuseBtn.addEventListener("click", calculateHypotenuse)