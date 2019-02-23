window.onload = init;

function init() {
    document.querySelector('#input')
        .addEventListener('keyup', handleTyping);
}
// we want to get the input value
// we want to take the first letter of every word to be capitalized
// any letter after whitespace to be capitalized
// use a loop to find the first letter in a word
// the loop stops when there's no whitespace;
function handleTyping(event) {
    let userInput = event.target.value.toString();
    let answer = userInput.split(' ');

    // Codes
    let i = 0;

while (i < answer.length) {
    
    answer[i] = answer[i].charAt(0).toUpperCase() + answer[i].slice(1).toLowerCase();
    
    i++;
}

    document.querySelector('#result').innerText = answer.join (' ');
}


