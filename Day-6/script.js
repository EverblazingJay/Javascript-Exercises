//Exercise Level 1
//Q1
//Using For-Loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//Using A While Loop
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

//Using A Do-While-Loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 10);

//Q2
for (let m = 10; m >= 0; m--) {
  console.log(m);
}

//Using A While Loop
let p = 10;
while (p >= 0) {
  console.log(p);
  p--;
}

//Using A Do-While-Loop
let o = 10;
do {
  console.log(o);
  o--;
} while (o >= 0);

//Q3
let n = 5;
for (let i = 0; i < n; i++) {
  console.log(i);
}

//Q4
let nSymbol = 7;
let sum = "";
for (let i = 0; i < nSymbol; i++) {
  sum += "#";
  console.log(sum);
}

//Q5
let qFive = 10;
for (let i = 0; i <= qFive; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

//Q6
let qSix = 10;
for (let i = 0; i <= qSix; i++) {
  console.log(`${i ** 1} ${i ** 2} ${i ** 3}`);
}

//Q7
let qSeven = 100;
for (let i = 0; i < qSeven; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//Q8
let qEight = 100;
for (let i = 0; i < qEight; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//Q9
let qNine = 100;
let prime;
for (let i = 2; i < qNine; i++) {
  if (qNine % i === 0) {
    console.log(i);
  }
}

//Q10
const qTen = 100;
let sumTotal = 0;
for (let i = 0; i <= qTen; i++) {
  sumTotal += i;
}
console.log(sumTotal);

//Q11
const qEleven = 100;
let sumOddNumbers = 0;
let sumEvenNumbers = 0;
for (let i = 0; i <= qEleven; i++) {
  if (i % 2 === 0) {
    sumOddNumbers += i;
  } else {
    sumEvenNumbers += i;
  }
}
console.log(sumOddNumbers, sumEvenNumbers);

//Q12
let arr = Array();
arr.push(sumEvenNumbers);
arr.push(sumOddNumbers);
console.log(arr);

//Q13
let newArray = Array(5).fill(7);
console.log(newArray);

//Q14
const uniqueArr = new Array(5)
  .fill(0)
  .map(() => Math.floor(Math.random() * 20));
console.log(uniqueArr);

//Q15
const randomCharacter = Math.random().toString(36).substring(2);
console.log(randomCharacter);

//Level 2
//Q1
const smallRandomCharacter = Math.random().toString(36).substring(2);
console.log(randomCharacter);

const moreRandomCharacter = [...Array(30)]
  .map(() => Math.random().toString(36)[2])
  .join("");

console.log(moreRandomCharacter);

//Q2
let result = "";
let hexChar = "0123456789abcdef";
for (let i = 0; i < 6; i++) {
  result += hexChar.charAt(Math.floor(Math.random() * hexChar.length));
}
console.log(`#${result}`);

//Q3
let r = Math.floor(Math.random() * 255) + 1;
let g = Math.floor(Math.random() * 255) + 1;
let b = Math.floor(Math.random() * 255) + 1;
console.log(r, g, b);

//Q4
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

let countriesUpper = [];
for (let i = 0; i < countries.length; i++) {
  countriesUpper = countries[i].toLocaleUpperCase();
  console.log(countriesUpper);
}

//Q5
let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
  countriesLength = countries[i].length;
  console.log(countriesLength);
}

//Q6
let countriesArray = [];
for (let i = 0; i < countries.length; i++) {
  countriesArray = [
    countries[i],
    countries[i].slice(0, 3),
    countries[i].length,
  ];
  console.log(countriesArray);
}

//Q7

let regEx = /land/gi;
let countriesLand = [];
for (let i = 0; i < countries.length; i++) {
  countriesLand = countries[i].match(regEx);
  if (countriesLand) {
    console.log(countries[i]);
  } else {
    console.log(countries[i]);
  }
}

//Q8
let endRegEx = /ia$/gi;
let countriesEnd = [];
for (let i = 0; i < countries.length; i++) {
  countriesEnd = countries[i].match(endRegEx);
  if (countriesEnd) {
    console.log(countries[i]);
  } else {
    console.log(countries[i]);
  }
}

//Q9
let longestWord = countries[0].length;
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestWord) {
    longestWord = countries[i];
    console.log(longestWord);
  }
}

//Q10
let fiveCha = "";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    fiveCha = countries[i];
    console.log(fiveCha);
  }
}

//Q11
let longestWord2 = webTechs[0].length;
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > longestWord2) {
    longestWord2 = webTechs[i];
    console.log(longestWord2);
  }
}

//Q12
let pack = [];
for (let i = 0; i < webTechs.length; i++) {
  pack = [webTechs[i], webTechs[i].length];
  console.log(pack);
}

//Q13
let str = "";
for (let i = 0; i < mernStack.length; i++) {
  str = mernStack[i][0].toLocaleUpperCase();
  console.log(str);
}

//Q14
for (const webTech of webTechs) {
  console.log(webTech);
}

//Q14
const fruitArray = ["banana", "orange", "mango", "lemon"];
for (let i = fruitArray.length; i != 0; i--) {
  console.log(fruitArray[i]);
}

//Q16
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
let half = [];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    half = fullStack[i][j];
    console.log(half);
  }
}

//Level 3
//Q1
let copyCountries = [...countries];
console.log(copyCountries);

//Q2
const sortedCountries = copyCountries.sort();
console.log(sortedCountries);

//Q3
const sortedWebtech = webTechs.sort();
const sortedMernstack = mernStack.sort();
console.log(sortedWebtech, sortedMernstack);

//Q4
// let conRegEx = /land/gi;
// let newContriesArray = [];
// console.log(conRegEx.test(countries));
// for (let i = 0; i < countries.length; i++) {
//   let result = countries[i].includes("land");
// }

//Q5
let longestCha = countries[0].length;
let reArr = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCha) {
    reArr.push(countries[i]);
    console.log(reArr);
  }
}

//Q6
let landArray = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    landArray.push(countries[i]);
  }
}
console.log(landArray);

//Q7
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length <= 4) {
    console.log(countries[i]);
  } else {
    console.log(countries);
  }
}

//Q8

//Q9
let reCountries = countries.reverse();
let ree = String(reCountries).toUpperCase().split(",");
console.log(ree);
