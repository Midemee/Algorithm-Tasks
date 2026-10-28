function getShortestWord(sentence) {
    const words = sentence.split(" ");
    let shortestWord = words[0];

    for (const word of words) {
        if (word.length < shortestWord.length) {
            shortestWord = word;
        }
    }
    return shortestWord;
}   

function getSquareOfNumbers(numbers) {
    const squareNumbers = new Array(numbers.length);
    for (let index = 0; index < numbers.length; index++) {
        squareNumbers[index] = numbers[index] * numbers[index];
    }
    for (let index = 0; index < squareNumbers.length; index++) {
        for (let inner = index + 1; inner < squareNumbers.length; inner++) {
            if (squareNumbers[index] > squareNumbers[inner]) {
                const temp = squareNumbers[index];
                squareNumbers[index] = squareNumbers[inner];
                squareNumbers[inner] = temp;
            }
        }
    }
    return squareNumbers;
}   

module.exports = { getShortestWord, getSquareOfNumbers };