
// Get the modal
let instructionModal = document.getElementById("instructionModal");

// Get the button that opens the modal
let instructions = document.getElementById("instructions");

// Get the <span> element that closes the modal
let instructionModalClose = document.getElementById("instructionModalClose");

// When the user clicks on the button, open the modal
instructions.addEventListener('click',() =>{
    instructionModal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
instructionModalClose.addEventListener('click',() =>{
    instructionModal.style.display = "none";
  })

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click',(e) => {
    if (e.target == instructionModal) {
        instructionModal.style.display = "none";
    }
})


// Get the score modal
let scoreModal = document.getElementById("scoreModal")
let scoreModalClose = document.querySelector('#scoreModalClose')
let image = document.querySelector('img')
let finalScore = document.querySelector('#finalScore')


// Temporary event listener until merging with timer function.When the user clicks on the image, open the modal
image.addEventListener('click',() =>{
    scoreModal.style.display = "block";
    document.querySelector('#guessInput').disabled = true
    document.querySelector('#guessInput').value = ''
    finalScore.innerText = scoreCount
})

// When the user clicks on <span> (x), close the modal
scoreModalClose.addEventListener('click',() =>{
    scoreModal.style.display = "none";
})

//hard coded final score until merged
let scoreCount = 10




