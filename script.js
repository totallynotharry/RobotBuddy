const robotImg = document.getElementById('robotImg');
const statusDiv = document.getElementById('status');
const oilSound = document.getElementById('oilSound');
const playSound = document.getElementById('playSound');
const cleanSound = document.getElementById('cleanSound');

let oilLevel = 100;
let happinessLevel = 100;
let cleanlinessLevel = 100;

// Update pet status
function updateStatus() {
    statusDiv.innerHTML = `
        Oil Level: ${oilLevel}%<br>
        Happiness: ${happinessLevel}%<br>
        Cleanliness: ${cleanlinessLevel}%
    `;
}

// Function to feed the robot
function feedPet() {
    if (oilLevel < 100) {
        oilLevel += 10;
        if (oilLevel > 100) oilLevel = 100;
        updateStatus();
        oilSound.play();
        robotImg.style.transform = 'scale(1.1)';
        setTimeout(() => {
            robotImg.style.transform = 'scale(1)';
        }, 300);
    }
}

// Function to play with the robot
function playWithPet() {
    if (happinessLevel < 100) {
        happinessLevel += 10;
        if (happinessLevel > 100) happinessLevel = 100;
        updateStatus();
        playSound.play();
        robotImg.style.transform = 'rotate(15deg)';
        setTimeout(() => {
            robotImg.style.transform = 'rotate(0deg)';
        }, 500);
    }
}

// Function to clean the robot
function cleanPet() {
    if (cleanlinessLevel < 100) {
        cleanlinessLevel += 10;
        if (cleanlinessLevel > 100) cleanlinessLevel = 100;
        updateStatus();
        cleanSound.play();
        robotImg.style.filter = 'brightness(50%)';
        setTimeout(() => {
            robotImg.style.filter = 'brightness(100%)';
        }, 500);
    }
}

// Initial update of status
updateStatus();
