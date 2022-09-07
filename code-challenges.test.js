// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("code", ()=>{
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", ()=>{
        expect(code(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(code(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(code(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})


// b) Create the function that makes the test pass.

//Pseudo Code
//Create a function named code
// function takes in a string
//create a variable to put new string into
//create logic that pushes numbers instead of strings when the number is equal to A, E, I, or O.
//use a for loop to iterate over the string to find if it has those letters
//push it onto new string along with whatever else was in the word

const code = (string) => {
    let newString = ""
    for(let i = 0; i < string.length; i++) {
        if(string[i] === 'a') {
            newString[i]("4")
        } 
        else if(string[i] === 'e') {
            newString[i]("3") 
            }
        else if(string[i] === 'e') {
            newString[i]("3")
    }
        else if(string[i] === 'i') {
            newString[i]("1")
}
        else if(string[i] === 'i') {
            newString[i]("1")
        }
    }
    return newString
}

// code(secretCodeWord1)
// code(secretCodeWord2)
// code(secretCodeWord3)

//I'm getting the error that newString is not a function. I feel like doing backend data stuff for a week has eroded my javscript skills :(. I will try to keep working on this problem later but for now that is my blocker. 

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


describe("arrayFromLetter", ()=>{
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", ()=>{
        expect(arrayFromLetter(letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(arrayFromLetter(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// b) Create the function that makes the test pass.

//Pseudo Code
//create a function named arrayFromLetter
//takes in an array of words
//use .filter higher order function to iterate over the array and find out if it contains the letter 
//if it does, filter those into an array and return the filtered array.



const arrayFromLetter = (array, letter) => {
    return letterArray = array.filter((value) => {
        return value.toLowerCase.includes(letter)
    })
}

arrayFromLetter(letterA)
arrayFromLetter(letterE)

//I'm now getting the same error, that .filter is not a function. I know i ran into this problem before, and knew how to fix it, but I can't remember the steps to take here. I've always had problems with getting higher order functions to work, so I need to work on them more. 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

describe("fullHouse", ()=>{
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", ()=>{
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

//Pseudo code
//Create a function named fullhouse
//takes in an array
//use a for loop
//iterate over the array to find out if the value is the same across the first three indexes
//do the same to find out if the value is the same across the last two
//do that for every possible combination of 5
//returns a boolean value

const fullHouse = (array) => {
    let newHand = []
 for(let i = 0; i < newHand.length; i++) {
    if (array[i] === array[i-1] && array[i] === array[i +1])
    return newHand.push(array)
    else if (array[i] === array[i-2] && array[i] === array[i +2])
 } return newHand.push(array)
}

// I tried to work through this one as if it was an interview question. I don't think id' have gotten the job. My blocker is that I don't know how to do this without having a million combinations that I'd have to code for. I feel like I can do everything separately, but when I put them all together my mind goes blank. I need to go back to javascript and work on some more practice problems, I got too soft doing backend lol. 