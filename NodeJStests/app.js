/*
 typically in JS you can write if else this way, 
 if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
} 

but we will use shortHAND
to run this install NODE JS first , Open Terminal and RUN node filename.js
*/

const age = 72;
// simple conditional if else
age < 15 ? console.log("You are underage") : console.log("You are a READY");

// multiple conditional if elses inside eachother
age > 50 //if age > 50 enter the >70 condition. Else go straight to last statement ( you are bellow 30)
  ? age > 70
    ? console.log("You are getting really old above 70 ") // only if >70
    : console.log("You are Not so so old yet between 50-70") //this if >50 but <70
  : console.log("You are bellow 50"); //this line only works if we are < 50

// you want to take input from user create an HTML file. remember to link it to JS file
function getUserName() {
  var nameField = document.getElementById("nameField").value; //notice we want value
  var result = document.getElementById("result");

  if (nameField.length < 3) {
    result.textContent = "Username must contain at least 3 characters";
    alert("Username must contain at least 3 characters");
  } else {
    result.textContent = "Your username is: " + nameField;
    alert(nameField);
  }
}

// how to convert something to String ? you add + "", use typeof
const number1 = 20;
console.log(number1);
console.log(typeof number1);
number2 = number1 + ""; // we have a string now
console.log(typeof number2);

// filling arrays
const users = Array(5);
console.log("this is users array No fill", users);
var users2 = Array(5).fill("Something");
console.log("this is users 2 array with fill", users2);

//more array stuff
const users3 = ["Ed", "john", "Unemployed", "Ok", "Ok", "Ok", "Why Not"];
console.log(users3);
//we want to show unique items no duplicates ? use NEW SET function, it only creates unique values no dups
const unique = Array.from(new Set(users3));
console.log("Shows no duplicates", unique);

var Today = new Date();
console.log(Today);
let hourNow = Today.getHours();
console.log(hourNow);
var greeting;

if (hourNow > 18) {
  greeting = "good evening";
} else if (hourNow > 12) {
  greeting = "good afternoon";
} else if (hourNow > 0) {
  greeting = "good morning";
} else {
  greeting = "welcome";
}
document.write("<h3>" + greeting + "</h3>");
