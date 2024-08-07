// We want to make a fortune telling thingy
// takes your name as input
// and outputs your fortune

// Name is longer than 7 characters: "will marry late in life"
// Name is shorter than 5 characters: "will marry within a year."
// name is between 5 and 7 characters (inclusive): "will encounter a once-in-a-lifetime opportunity"
// first letter is 'R': "will be rich"
// Name contains an 'i': "will fall in love this week"

let myName;
myName = "Morganza";
// get the length of the name
let lengthOfName = myName.length;
// if the name is shorter than 5 give marry early fortune
if (lengthOfName < 5) {
    console.log("You will marry soon!");
    
} else if(lengthOfName > 7) {
    console.log(`Marriage is on the far horizon. Start adopting cats!`);
}

let firstCharacter = myName[0];
let secondCharacter = myName[1];

console.log("first letter is " + firstCharacter);
console.log("second letter is " + secondCharacter);

if(firstCharacter === "R") {
    console.log("You'll be Rick James rich!");

} else(secondCharacter === "o") 
    console.log("You'll find luck in a foreign country!");

