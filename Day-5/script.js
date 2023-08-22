//Exercise 1

//Q1
const emptyArr = Array();

//Q2
const numberArray = [1, 2, 3, 4, 5, 6, 7];

//Q3
const numberArrayLength = numberArray.length;

//Q4
numberArray[0];
numberArray[3];
const lastNumber = numberArray.length - 1;
console.log(numberArray[lastNumber]);

//Q5
const mixedDataTypes = ["First", 2, true, null, { name: "John" }, undefined];
console.log(mixedDataTypes.length);

//Q6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//Q7
console.log(itCompanies);

//Q8
console.log(itCompanies.length);

//Q9
console.log(itCompanies[0]);
console.log(itCompanies[3]);

const lastCompany = itCompanies.length - 1;
console.log(itCompanies[lastCompany]);

//Q10
console.log(
  itCompanies[0],
  itCompanies[1],
  itCompanies[2],
  itCompanies[3],
  itCompanies[4],
  itCompanies[5],
  itCompanies[6]
);

//Q11
console.log(
  itCompanies[0].toUpperCase(),
  itCompanies[1].toUpperCase(),
  itCompanies[2].toUpperCase(),
  itCompanies[3].toUpperCase(),
  itCompanies[4].toUpperCase(),
  itCompanies[5].toUpperCase(),
  itCompanies[6].toUpperCase()
);

//Q12
const itCompaniesString = itCompanies.join(", ");
console.log(itCompaniesString);

//Q14
const indexArray = itCompanies.indexOf("Google");
if (indexArray != -1) {
  console.log("Google");
} else {
  console.log("Company not found");
}

//Q14
// Will figure it out

//Q15
const sortItCompaniesArray = itCompanies.sort();
console.log(sortItCompaniesArray);

//Q16
const reverseItCompaniesArray = itCompanies.reverse();
console.log(reverseItCompaniesArray);

//Q17
console.log(itCompanies.slice(0, 3));

//Q18
console.log(itCompanies.slice(-3));

//Q19
console.log(itCompanies.slice(3, 4));

//Q20
console.log(itCompanies.shift(0));

//Q21
console.log(itCompanies.splice(2, 2));

//Q22
console.log(itCompanies.pop());

//Q23
console.log(itCompanies.splice());

//Exercise Level 2
//Q2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let newText = text.replace(/[^A-Z a-z 0-9 _]/g, "");
let finalText = newText.split(" ");
let words = [...finalText];
console.log(words);
console.log(words.length);

//Q3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(2, 2, "Green Tea");
console.log(shoppingCart);

//Q4
import { countries } from "./countries.js";
let checkCountry = countries.indexOf("ETHIOPIA");
if (checkCountry != -1) {
  console.log("ETHIOPIA");
} else {
  countries.push("ETHIOPIA");
}
console.log(countries);

//Q5
import { webTechs } from "./web_techs.js";
let checkWebTech = webTechs.indexOf("Sass");
if (checkWebTech != -1) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

//Q6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//Exercise Level 3
//Q1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
const minValue = Math.min(...ages);
const maxValue = Math.max(...ages);
console.log(ages, minValue, maxValue);

//Median Age
let MedianAge = `${(ages[4] + ages[5]) / 2}`;
console.log(MedianAge);

//Find the average age

let averageAge = 0;
const findAverageAGE = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    averageAge += arr[i];
  }
  return averageAge / arr.length;
};
console.log(findAverageAGE(ages));

//Find the range of the ages
const rangeOfAges = maxValue - minValue;
console.log(rangeOfAges);

//Compare the values
let minAverage = minValue - averageAge;
let maxAverage = maxValue - averageAge;
const result = Math.abs(maxAverage - minAverage);
console.log(result);

//Q2
let country = countries[Math.floor(countries.length / 2)];
console.log(country);

//Q3
const middleIndex = Math.ceil(countries.length / 2);
const firstHalf = countries.slice().splice(0, middleIndex);
const secondHalf = countries.slice().splice(-middleIndex);
console.log(countries, firstHalf, secondHalf);
