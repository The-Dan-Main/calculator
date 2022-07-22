"strict use"

let result = []
let outputLine = document.getElementById("outputLine")
let resultDisplay = document.getElementById("resultDisplay")

let enter = document.getElementById("enter")
enter.addEventListener("click", () => {
    // console.log("Enter wurde geklickt")
    
    let currentResult = result.join("")
    // console.log("Result: ",currentResult)
    outputLine.innerText = currentResult
    resultDisplay.innerText = eval(currentResult)

})
let deleteEl = document.getElementById("del")
deleteEl.addEventListener("click", () => {
    result.pop()
    let currentResult = result.join("")
    outputLine.innerText = currentResult
})

let clear = document.getElementById("clear")
clear.addEventListener("click", () => {
    // console.log("Clear wurde geklickt")
    outputLine.innerText = ""
    resultDisplay.innerText = ""
    result = []
    
})

let numbers = document.querySelectorAll(".numbers")
for (const number of numbers) {
    number.addEventListener("click", (event) => {
        // console.log(event)   
        result.push(event.target.innerText)
        let currentResult = result.join("")
        // console.log("Result: ",currentResult)
        outputLine.innerText = currentResult
})}

let operators = document.querySelectorAll(".operator")
for (const operator of operators) {
    operator.addEventListener("click", (event) => {
        // console.log(event)   
        result.push(event.target.innerText)
        let currentResult = result.join("")
        // console.log("Result: ",currentResult)
        outputLine.innerText = currentResult
})}
