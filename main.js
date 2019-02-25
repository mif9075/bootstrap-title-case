// Needed to Make sure that everything is loaded.
window.onload = init;


function init() {
    document.querySelector('#input')
        .addEventListener('keyup', handleTyping);
    document.querySelector('#input2')
        .addEventListener('keyup', reverseString);

}


// Function to capitalize first letter.
function handleTyping(event) {
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
    let userInput2 = event2.target.value.toString();
    let answer2 = userInput2.split(' ');

    // Codes
    let i = 0;

while (i < answer2.length) {
    
    answer2[i] = answer2[i].charAt(0).toUpperCase() + answer2[i].slice(1).toLowerCase();
    
    i++;
}

    document.querySelector('#result2').innerText = answer2.join (' ');
}
