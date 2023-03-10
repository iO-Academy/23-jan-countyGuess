//handles key presses in the guess box
const guessHandler = () => {
    let getInputValue = guessInput.value.toUpperCase()

    if (upperCounties.includes(getInputValue) && !correctAnswers.includes(getInputValue)){
        correctAnswers.push(getInputValue)
        const listItem = document.createElement("li")
        listItem.innerText = getInputValue
        answersContainer.appendChild(listItem)
        guessInput.value = ''
        scoreCount ++
        scoreCounter.innerText = scoreCount
    }
}

// When the user clicks anywhere outside the modal, close it
window.addEventListener('click',(e) => {
    if (e.target == instructionModal) {
        instructionModal.style.display = "none"
    }
})

//function changes values to uppercase
let makeUpper = value => value.toUpperCase()

// Get the modal
let instructionModal = document.getElementById("instructionModal")

// Get the button that opens the modal
let instructions = document.getElementById("instructions")

// Get the <span> element that closes the modal
let instructionModalClose = document.getElementById("instructionModalClose")

// Get the score modal
let scoreModal = document.getElementById("scoreModal")
let finalScore = document.querySelector('#finalScore')
let startGame = document.querySelector("#startGame")
let guessInput = document.querySelector("#guessInput")
let timerContainer = document.querySelector("#timerContainer")

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

// When the user clicks on the button, open the modal
instructions.addEventListener('click',() => {
    instructionModal.style.display = "block"
})

// When the user clicks on <span> (x), close the modal
instructionModalClose.addEventListener('click',() => {
    instructionModal.style.display = "none"
})


startGame.addEventListener("click", () => {
    startGame.style.display = "none"
    document.querySelector('#leaderboardContainer').style.display = "none"
    guessInput.style.display = "block"
    let gameTimer = document.createElement('p')
    gameTimer.innerText = 30
    timerContainer.appendChild(gameTimer)
    const interval = setInterval(() => {
        gameTimer.innerText--
        timerContainer.appendChild(gameTimer)
        if (gameTimer.innerText == 0) {
            clearInterval(interval)
            gameTimer.innerText = ''
            scoreModal.style.display = "block"
            document.querySelector('#guessInput').disabled = true
            document.querySelector('#guessInput').value = ''
            finalScore.innerText = scoreCount
            instructionModal.style.display = "none"
        }
    }, 1000)
})

let scoreCount = 0

let scoreCounter = document.querySelector("#scoreCounter")
scoreCounter.innerText = scoreCount

let restartButton = document.querySelector('#restartButton')

restartButton.addEventListener("click", () => {
    location.reload()
})

let scoreboardButton = document.querySelector('#scoreboardButton')
scoreboardButton.addEventListener('click', () => {
    let nameInput = document.querySelector('#nameInput')
    if (nameInput.value.trim() &&nameInput.value.length <= 50){
        let dataToSend = {name:nameInput.value.replace(/[^\w\s]/gi, ''),score:scoreCount}

        fetch('https://23jancountyscoreboard.dev.io-academy.uk/scores', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            location.reload()
        })
    }
    else {
        alert("There was a problem with your name input, please try again.")
    }
})

let scoreboard = document.querySelector('#leaderboardTableBody')
fetch('https://23jancountyscoreboard.dev.io-academy.uk/scores')
    .then((response) => {
      return response.json()
    }).then((data)=> {
        let scores = data.data
        scores.sort((a, b) => b.score - a.score)
        scores.forEach ((item)=>{
            let row = scoreboard.insertRow()
            row.insertCell(0).innerText=item.name
            row.insertCell(1).innerText=item.score
        })
})

