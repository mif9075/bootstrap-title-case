// Needed to Make sure that everything is loaded.
window.onload = init;

function init() {
    document.querySelector('#capInput')
        .addEventListener('keyup', capitalizeTyping);
    document.querySelector('#reverseInput')
        .addEventListener('keyup', reverseString);
    document.querySelector('#capInput2')
        .addEventListener('keyup', capitalize2String);
    document.querySelector('#emojiInput')
        .addEventListener('keyup', emojiString);
    
}

// Function to capitalize first letter.
function capitalizeTyping(event) {
    let userInput = event.target.value;
    let answer = userInput.split(' ');

//     // Codes
    let i = 0;
    while (i < answer.length) {
    answer[i] = answer[i].charAt(0).toUpperCase() + answer[i].slice(1).toLowerCase();
    i++;
}
    document.querySelector('#capResult').innerText = answer.join (' ');
}

//Function to Reverse Strings.
function reverseString(event2) {
    let userInput2 = event2.target.value;
    let answer2 = userInput2;
    
    // Codes
    let newString = '';
    for (let i = answer2.length -1; i >=0; i--){
        newString += answer2[i];
    }
    document.querySelector('#reverseResult').innerText = newString;
}

// Function to capitalize first letter without join or split.
function capitalize2String(event3) {
    let userInput3 = event3.target.value;
    let answer3 = userInput3;

//     // Codes
    let i = 0;
    answer3 = answer3.toLowerCase();
    mainAnswer = ' ';

    while (i < answer3.length) {
        if (i === 0) {
            mainAnswer += answer3[i].toUpperCase();
        }
        else if (answer3[i-1] === ' ') 
        {
            mainAnswer += answer3[i].toUpperCase();
        }
        else {
            mainAnswer += answer3[i];
        }
    i++;
    }
    document.querySelector('#capResult2').innerText = mainAnswer;
}

// Function for Emoji.
function emojiString(event4) {
    let userInput4 = event4.target.value;
    let answer4 = userInput4;

//     // Codes
    
    
    document.querySelector('#emojiResult').innerText = answer4;
}