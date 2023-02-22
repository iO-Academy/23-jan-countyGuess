//function changes values to uppercase
let makeUpper = (values) => {
    return values.toUpperCase()
}

//handles key presses in the guess box
const guessHandler = () => {
    let getInputValue = guessInput.value.toUpperCase()

    if (upperCounties.includes(getInputValue) && !correctAnswers.includes(getInputValue)){
        correctAnswers.push(getInputValue)
        const listItem = document.createElement("li")
        listItem.innerText = getInputValue
        answersContainer.appendChild(listItem)
        guessInput.value = ''
    }
}

let startGame = document.querySelector("#startGame")
let guessInput = document.querySelector("#guessInput")
let timerContainer = document.querySelector("#timerContainer")

startGame.addEventListener("click", () => {
    startGame.style.display = "none";
    guessInput.style.display = "block";
    let gameTimer = document.createElement('p')
    gameTimer.innerText = 30
    timerContainer.appendChild(gameTimer)
    const interval = setInterval(() => {
        gameTimer.innerText--
        timerContainer.appendChild(gameTimer)
        if (gameTimer.innerText == 0) {
            clearInterval(interval)
            gameTimer.innerText = ''
        }
    }, 1000)
})


guessInput.addEventListener('keyup', guessHandler)


let counties = [
    'Bedfordshire',
    'Berkshire',
    'Bristol',
    'Buckinghamshire',
    'Cambridgeshire',
    'Cheshire',
    'City of London',
    'Cornwall',
    'Cumbria',
    'Derbyshire',
    'Devon',
    'Dorset',
    'County Durham',
    'East Riding of Yorkshire',
    'East Sussex',
    'Essex',
    'Gloucestershire',
    'Greater London',
    'Greater Manchester',
    'Hampshire',
    'Herefordshire',
    'Hertfordshire',
    'Isle of Wight',
    'Kent',
    'Lancashire',
    'Leicestershire',
    'Lincolnshire',
    'Merseyside',
    'Norfolk',
    'North Yorkshire',
    'Northamptonshire',
    'Northumberland',
    'Nottinghamshire',
    'Oxfordshire',
    'Rutland',
    'Shropshire',
    'Somerset',
    'South Yorkshire',
    'Staffordshire',
    'Suffolk',
    'Surrey',
    'Tyne and Wear',
    'Warwickshire',
    'West Midlands',
    'West Sussex',
    'West Yorkshire',
    'Wiltshire',
    'Worcestershire'
]

let upperCounties = counties.map(makeUpper)
let correctAnswers = []

let answersContainer = document.querySelector("#answersContainer")


