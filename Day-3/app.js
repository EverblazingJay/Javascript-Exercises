"use strict";
//Exercise Level 1
//Q1
let firstName = "Jonas";
let lastName = "Doe";
let country = "Nigeria";
let city = "Benin City";
let age = 25;
let isMarried = true;
let year = new Date();
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Q2
let ten = "10";
console.log(typeof ten === 10);

//Q3
console.log(parseInt(9.8) === 10);

//Q4
//Truthy Values
let five = 5;
let valid = 4 > 3;
let negative = -5;

//Falsy Values
let empty = null;
let zero = 0;
let noValue;

//Q5
let one = 4 > 3; // true
let two = 4 >= 3; //true
let three = 4 < 3; //false
let four = 4 <= 3; //false
let fives = 4 == 4; //true
let six = 4 === 4; //true
let seven = 4 != 4; //false
let eight = 4 !== 4; //false
let nine = 4 != "4"; //true
let tens = 4 == "4"; //false
let eleven = 4 === "4"; //false

//Q6
let twelve = 4 > 3 && 10 < 12; //true
let thirteen = 4 > 3 && 10 > 12; //false
let fourteen = 4 > 3 || 10 < 12; //true
let fifteen = 4 > 3 || 10 > 12; //true
let sixteen = !(4 > 3); //false
let seventeen = !(4 < 3); //true
let eighteen = !false; //true
let nineteen = !(4 > 3 && 10 < 12); //false
let twenty = !(4 > 3 && 10 > 12); //true
let twentyOne = !(4 === "4"); // true
let twentyTwo = 'There is no "on" in both dragon and python'; //false

//Q7
let yearDay = new Date();
console.log(yearDay.getFullYear());

let month = new Date();
console.log(month.getMonth());

let date = new Date();
console.log(date.getDate());

let day = new Date();
console.log(day.getDay());

let hours = new Date();
console.log(hours.getHours());

let minutes = new Date();
console.log(minutes.getMinutes());

let numOfSeconds = new Date();
console.log(numOfSeconds.getTime());

//Exercise Level 2
//Q1
let base = Number(prompt("Enter base"));
let height = Number(prompt("Enter Height", ""));
let area = 0.5 * base * height;
console.log(area);
