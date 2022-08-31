// This is an in-line comment.
/* This is a
multi-line comment */

var myName;
var a;
a = 7;
var b; 
b = a;

var a = 9;

var myFirstName = "Maxim";
var myLastName = "Mikhaylov";

// Only change code below this line
var a;
a = 5;
var b;
b = 10;
var c;
c = "I am a"
// Only change code above this line
a = a + 1;
b = b + 5;
c = c + " String!";

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

const sum = 10 + 10;

const difference = 45 - 33;

//const product = 8 * 10;

//const quotient = 66 / 33;

let myVar = 87;
// Only change code below this line
myVar++;

//let myVar = 11;
// Only change code below this line
myVar--;

const ourDecimal = 5.7;
const myDecimal = 5.7;
// Only change code below this line

const product = 2.0 * 2.5;

const quotient = 4.4 / 2.0; // Change this line

const remainder = 11 % 3;

/*
let a = 3;
let b = 17;
let c = 12;
// Only change code below this line
a += 12;
b += 9;
c += 7; */

/* 
let a = 11;
let b = 9;
let c = 3;
// Only change code below this line
a -= 6;
b -= 15;
c -= 1; */

/*
let a = 5;
let b = 12;
let c = 4.6;
// Only change code below this line
a *= 5;
b *= b;
c *= 10; */

/*
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; */

//const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

//const myStr = "This is the start." + " This is the end.";

//let myStr = "This is the first sentence.";
myStr += " This is the second sentence.";

const myName = "Maxim";
const myStr = "My name is" + myName + "and I am well!";

const someAdjective = "good";
//let myStr = "Learning to code is ";
myStr += someAdjective;

// Setup
let lastNameLength = 0;
//const lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;

// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

// Setup
//let myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

// Setup
//const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

// Setup
//const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// Setup
//const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length- 2]; // Change this line

// Only change code below this line
//const myArray = ["number", 1];

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
var wordBlanks = "My "+ myAdjective +" and dumb " + myNoun +" has "+ myVerb +" very "+ myAdverb +" into the street. ";; // Change this line
// Only change code above this line

//const myArray = [["Bulls",23],["White Sox",45]];

//const myArray = [50, 60, 70];
myArray[0]; 
const myData = myArray[0];

// Setup
//const myArray = [18, 64, 99];
myArray[0] = 45;
// Only change code below this line

//const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
//];
//const myData = myArray[2][1];

// Setup
//const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
// Only change code below this line

// Setup
//const myArray = [["John", 23], ["cat", 2]];
//const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);
console.log(myArray);
// Only change code below this line

// Setup
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();
// Only change code below this line

// Setup
//const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
// Only change code below this line

const myList = [["dog", 1], ["cat", 2], ["word", 3], ["door", 4], ["beat", 5]];

function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

function functionWithArgs(a, b) {
  console.log(a + b)
}

functionWithArgs(1,2);
functionWithArgs(7,9);


function minusSeven(num) {

  return num - 7;
  
  }
  
  // Only change code below this line
  
  function timesFive(number) {
  
  return number * 5;
  
  }
  
  var ans = timesFive(5);
  
  ans = timesFive(2);
  
  ans = timesFive(0);
  
  console.log(timesFive(5));
  
  console.log(timesFive(2));
  
  console.log(timesFive(0));
  
  console.log(minusSeven(10));

function fun1() {
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

 /*
// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
*/