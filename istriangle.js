const inputs = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const outputEl = document.querySelector("#istriangle")

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3
    // console.log(sumOfAngles)
    return sumOfAngles
}


function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value))
    if (Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value)) {
        if (sumOfAngles === 180) {
            outputEl.innerText = "Yeah! The angles form Triangle🍕"
        } else {
            outputEl.innerText = "Ohh! The angles don't form Triangle😮"
        }
    } else {
        outputEl.innerText = "Ohh No! Plz enter all the fields!!!"
    }
}


isTriangleBtn.addEventListener("click", isTriangle)