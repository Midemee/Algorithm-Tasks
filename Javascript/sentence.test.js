const {getShortestWord, getSquareOfNumbers} = require("./sentence")

test("test that sentence returns shortest word", ()=>{
    const sentence = "Why is the world so wicked";
    const expected = "is";
    const actual = getShortestWord(sentence);
    expect(actual).toBe(expected)
})


test("test to get first shortest word when two words has same length", ()=>{
    expect(getShortestWord("The world is so wicked")).toBe("is")
})

test("test that array of numbers returns sorted squared numbers", ()=>{
    const numbers = [5, 3, 2, 1, 4];
    const expected = [1, 4, 9, 16, 25];
    const actual = getSquareOfNumbers(numbers);
    expect(actual).toEqual(expected)
})    

test("test that array of numbers returns sorted squared numbers with negative numbers", ()=>{
    const numbers = [5, 3, -2, 1, 4];
    const expected = [1, 4, 9, 16, 25];
    const actual = getSquareOfNumbers(numbers);
    expect(actual).toEqual(expected)
})          