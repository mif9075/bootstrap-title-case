// Needed to Make sure that everything is loaded.
window.onload = init;

function init() {
    document.querySelector('#input')
        .addEventListener('keyup', capitalizeTyping);
    document.querySelector('#input2')
        .addEventListener('keyup', reverseString);
    document.querySelector('#input3')
        .addEventListener('keyup', capitalize2String);

}

// Function to capitalize first letter.
function capitalizeTyping(event) {
    let userInput = event.target.value.toString();
    let answer = userInput.split(' ');

//     // Codes
    let i = 0;
    while (i < answer.length) {
    answer[i] = answer[i].charAt(0).toUpperCase() + answer[i].slice(1).toLowerCase();
    i++;
}
    document.querySelector('#result').innerText = answer.join (' ');
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
    document.querySelector('#result2').innerText = newString;
}

// Function to capitalize first letter without join or split.
function capitalize2String(event3) {
    let userInput3 = event3.target.value.toString();
    let answer3 = userInput3.split(' ');

//     // Codes
    let i = 0;
    while (i < answer3.length) {
    answer3[i] = answer3[i].charAt(0).toUpperCase() + answer3[i].slice(1).toLowerCase();
    i++;
}
    document.querySelector('#result3').innerText = answer3.join (' ');
}