// Q1
let challenge = "30 Days Of Javascript";

//Q2
console.log(challenge);

//Q3
console.log(challenge.length);

//Q4
console.log(challenge.toUpperCase());

//Q5
console.log(challenge.toLowerCase());

//Q6
console.log(challenge.substring(0, 1));

//Q7
console.log(challenge.substring(3, 21));

//Q8
console.log(challenge.includes("script"));

//Q9
console.log(challenge.split());

//Q10
console.log(challenge.split(" "));

//Q11
let techCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(techCompanies.split(","));

//Q12
console.log(challenge.replace("Javascript", "Python"));

//Q13
console.log(challenge.charAt(15));

//Q14
console.log(challenge.charAt(11));

//Q15
console.log(challenge.indexOf("a"));

//Q16
console.log(challenge.lastIndexOf("a"));

//Q17
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

//Q18
console.log(sentence.lastIndexOf("because"));

//Q19
console.log(sentence.search("because"));

//Q20
console.log(challenge.trim(""));

//Q21
console.log(challenge.startsWith("30"));

//Q22
console.log(challenge.endsWith("Javascript"));

//Q23
let regExMatch = /a/gi;
console.log(challenge.match(regExMatch));

//Q24
let newString = "30 Days Of";
console.log(newString.concat(" Javascript"));

//Q25
console.log(challenge.repeat(2));

//Level 2
//Q1
let quote =
  "The quote 'there is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to 'help' one another.";
console.log(quote);

//Q2
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

//Q3
let str = "10";
console.log(str === 10);
let trueStr = Number(str);
console.log(trueStr === 10);

//Q4
let num = parseFloat(9.8);
console.log(num === 10);
let trueNum = Math.round(num);
console.log(trueNum === 10);

//Q5
let python = "Python";
let jargon = "Jargon";
console.log(python.includes("on"));
console.log(jargon.includes("on"));

//Q6
let statement = "I hope this course is not full of jargon";
console.log(statement.includes("jargon"));

//Q7
let randomNumber = Math.trunc(Math.random() * 100);
console.log(randomNumber);

//Q8
let randomFifty = Math.trunc(Math.random() * 50) + 50;
console.log(randomFifty);

//Q9
let random255 = Math.trunc(Math.random() * 255);
console.log(random255);

//Q10
let string = "Javascript";
console.log(Math.random() * string.length);

//Q11
console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

//Q12
let subStr =
  "You cannot end a sentence with because because because is a conjunction";
console.log(subStr.substring(30, 54));

//LEVEL 3
//Q1
let love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let regExLove = /love/gi;
let newLove = love.match(regExLove);
console.log(newLove.length);

//Q2
let because =
  "You cannot end a sentence with because because because is a conjunction";
let regExBecause = /because/gi;
let newBecause = because.match(regExBecause);
console.log(newBecause.length);

//Q3
const senten =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let newSenten = senten.replace(/\W/g, "");
console.log(newSenten);
//Q4
let text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let regExText = /\d+/g;
let earn = text.match(regExText);
let first = Number(earn[0]);
let second = Number(earn[1]);
let third = Number(earn[2]);
const income = first + second + third;
console.log(income);
