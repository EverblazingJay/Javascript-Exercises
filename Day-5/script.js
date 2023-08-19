//Exercise 1
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
