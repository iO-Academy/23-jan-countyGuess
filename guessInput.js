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
        scoreCount ++
        scoreCounter.innerText = scoreCount
        guessInput.value = ''

    }
}

let guessInput = document.querySelector("#guessInput")
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
let scoreCount = 0

let scoreCounter = document.querySelector("#scoreCounter")
scoreCounter.innerText = scoreCount
