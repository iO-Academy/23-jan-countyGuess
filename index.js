
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


