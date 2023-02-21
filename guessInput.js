const guessHandler = () => {
    console.log(guessInput.value)
}
let guessInput = document.querySelector("#guessInput")
guessInput.addEventListener('keyup', guessHandler)

let answersContainer = document.querySelector("#answersContainer")

//forEach through correctAnswers array put each answer into list in html
correctAnswers.forEach((item) => {
    const listItem = document.createElement("li")
    listItem.innerText = item
    answersContainer.appendChild(listItem)
})