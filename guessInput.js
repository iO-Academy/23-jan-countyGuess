//function changes values to uppercase
let makeUpper = (values) => {
    return values.toUpperCase()
}

//handles key presses in the guess box
const guessHandler = () => {
    let guessInputArray = [guessInput.value]
    let upperGuessInput = guessInputArray.map(makeUpper)
//filter function loops through user guesses and compares to counties list. Adds to new array if correct.
    let correctInputArray = (upperGuessInput.filter((answer) => { return upperCounties.includes(answer) }))
//if correctInputArray has a value and is not duplicated, will be added to correctAnswers array
    if (correctInputArray.length !== 0 && !correctAnswers.includes(correctInputArray[0])){
        correctAnswers = correctAnswers.concat(correctInputArray)
        upperGuessInput.forEach((item) => {
            const listItem = document.createElement("li")
            listItem.innerText = item
            answersContainer.appendChild(listItem)
        })
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

//forEach through correctAnswers array put each answer into list in html
// correctAnswers.forEach((item) => {
//     const listItem = document.createElement("li")
//     listItem.innerText = item
//     answersContainer.appendChild(listItem)
// })

