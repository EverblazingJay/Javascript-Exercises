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
let grade = 90;
switch (true) {
  case grade >= 80:
    console.log("A");
    break;
  case grade >= 70 && grade <= 89:
    console.log("B");
    break;
  case grade >= 60 && grade <= 69:
    console.log("C");
    break;
  case grade >= 50 && grade <= 59:
    console.log("B");
    break;
  default:
    console.log("F");
}

//Q2
let month = prompt("Enter the current month");
if (month === "December" || month === "January" || month === "February") {
  console.log("The season is winter");
} else if (month === "March" || month === "April" || month === "May") {
  console.log("The season is Spring");
} else if (month === "June" || month === "July" || month === "August") {
  console.log("The season is summer");
} else {
  console.log("The season is autumn");
}

//Q3
let today = prompt("Enter the day of the week");
if (today === "saturday" || today === "sunday") {
  console.log(`${today} is a weekend`);
} else {
  console.log(`${today} is a working day`);
}

//Exercise level 3
let theMonth = prompt("Enter the month of your choice");
if (
  theMonth === "September" ||
  theMonth === "April" ||
  theMonth === "June" ||
  theMonth === "November"
) {
  console.log(`${theMonth} has 30 days`);
} else if (theMonth === "February") {
  console.log(`${theMonth} has 28 days, and 29 days in a leap year`);
} else {
  console.log(`${theMonth} has 31 days`);
}
