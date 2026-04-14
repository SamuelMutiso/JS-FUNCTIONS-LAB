// function 1: calculatting tax
function calculateTax(amount) {
    return amount * 0.1;
}

// function 2: Converting to upper case
function convertToUpperCase (text) {
    return text.toUpperCase();
}

// function 3: finding the maximum value
function findMaximum (num1, num2) {
    if (num1 > num2) {
    return num1;
    } else {return num2;
}
}

// function 4: creating function isPalindrome
function isPalindrome(word) {
    const hardFall = 
word.toLowerCase(); 
    const reversedWord = 
hardFall.split('').reverse().join('');
    return hardFall === reversedWord;

}

