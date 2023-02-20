const guessHandler = () => {
    console.log(guessInput.value)
}
let guessInput = document.querySelector("#guessInput")
guessInput.addEventListener('keyup', guessHandler)
