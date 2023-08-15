"use strict";
//Exercise Level One
//Q1
let age = prompt("Enter age");
if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You are left with ${18 - age}years to drive`);
}

//Q2
let myAge = 19;
let yourAge = Number(prompt("Enter your age"));

if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge}years older than you`);
} else {
  console.log(`You are ${yourAge - myAge}years older than me`);
}

//Q3
let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

//Using the tenary operator
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

//Q4
let figure = Number(prompt("Enter a number"));
if (figure % 2 === 0) {
  console.log("It is an even number");
} else {
  console.log("It is an odd number");
}

//Exercise Level 2
//Q1
