// let js = "amazing";
// if (js === "amazing") alert("Ok its working");
// console.log(40 + 8 + 23 - 10);

const country = "USA";
const continent = "North America";
let population = 3330000;
console.log(country, continent, population);

const isIsland = 0;
let language = "English";
console.log(isIsland, population, country, language);

console.log("Population of 3290000 splint in half is " + population/2);
console.log(population + 1);

function lessThanFinland(population) {
  if (population < 5531000) {
    return console.log("less populated than Finland")
  }
}
lessThanFinland(population);

function lessThanAverage(population) {
  if (population < 3300000) {
    return console.log("less populated than average")
  } else {
    return console.log("more populated than average")
  }
}
lessThanAverage(population);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
console.log(job1);
console.log(myCurrentJob);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
//
// let firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);


let description = `Portugal is in Europe,
and its 11 million people speak portuguese`

console.log(description);

console.log("Jonas");  //not defined
console.log(23);

let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);



// Mark and John are trying to compare their BMI (Body Mass Index),

// BMI = mass / height **2
//  OR
// mass = height * height

let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

// function totalBMI (weight, height){
//     return (weight / height ** 2).toFixed(2) + "%";
// }
// console.log(totalBMI(markWeight, markHeight)); //CORRECT!!
// console.log(totalBMI(johnWeight, johnHeight)); // CORRECT!!

// template literals
const name = "Jenn";
let age = "34";
let occupation = "unemployed";

const me = `My name is ${name} and I'm ${age},
${occupation}!`
console.log(me);

//conditionals

function oldEnoughToDrive(age) {
  if (age >= 16) {
    return console.log("You are old enough to start driving!");
  } else {
    return console.log("Sorry you're not old enough to start driving!")
  }
}

oldEnoughToDrive(8);
oldEnoughToDrive(15);
oldEnoughToDrive(16);
oldEnoughToDrive(17);


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

const johnBMI = (johnWeight / johnHeight ** 2).toFixed(2) + "%";
const markBMI = (markWeight / markHeight ** 2).toFixed(2) + "%";


function johnAndMarcsBMI (a, b){
  if (markBMI > johnBMI){
    console.log(`Marks BMI (${markBMI}) has a higher BMI!`)
  } else {
    console.log(`John's BMI ${johnBMI} a higher BMI!`)
  }
}
johnAndMarcsBMI();

// TYPE CONVERSION AND TYPE COERCION

// TYPE CONVERSION WHEN YOU WANT TO CONVERT FROM ONE TYPE TO ANOTHER

const inputYear = '1988';
//  changing string to a number
console.log(typeof inputYear);
console.log(typeof(Number(inputYear)));

const stringYear = 1988;
//changing Number to String
console.log(typeof stringYear);
console.log(typeof(String(stringYear)));


// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');


// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// 1. Calculate the average score for each team, using the test data below

function average (a, b, c){
  return(a +b + c) / 3
}

console.log("Dolphins' score average: " + average(96, 108, 89).toFixed(0));
const dolphins = 98;
console.log("Koala's score average: " + average(109, 95, 123).toFixed(0));
const koalas = 109;

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

function theWinnerIs (dolphins, koalas) {
  if (dolphins > koalas) {
    console.log("Dolphins' win!")
  } else {
    (koalas > dolphins)
    console.log("Koala's win!")

  }
}

theWinnerIs();


//SWITCH STATEMENTS


const day = "Tuesday";
switch (day) {
  case 'Monday':
    console.log("Practice JS");
    console.log("Watch Alex");
    break;
  case 'Tuesday':
    console.log("Interview!");
}

if (day === 'monday') {
  console.log("Practice JS");
  console.log("Watch Alex");
} else if (day === 'tuesday') {
  console.log("Interview!");
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}


// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const you = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${you}`);

// The Conditional (Ternary) Operator
const newAge = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = newAge >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (newAge >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${newAge >= 18 ? 'wine 🍷' : 'water 💧'}`);

// Coding Challenge #4

// § Data 1: Test for bill values 275, 40 and 430

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Coding Challenge #4

// § Data 1: Test for bill values 275, 40 and 430

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.


// const bill = 275;
// const bill = 40;
const bill = 430;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


function fruitProcessor(apples, oranges) {
  // return `Juice with ` + apples + ` apples and ` + oranges + ` oranges.`

  // using a template literal (below) is the cleaner way to type it.

  return `Juice with ${apples} apples and ${oranges} oranges. `

}

console.log(fruitProcessor(5, 0));


// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
//     Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
//     Otherwise, no team wins!


// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores  X
// 2. Use the function to calculate the average for both teams                     X
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
//     Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

let calcAverage = ((a, b, c) =>  ((a + b + c) / 3).toFixed(0));



function checkWinner (avgDolphins, avgKoalas) {
  if ((avgDolphins) > (avgKoalas * 2)) { //checking if average is double
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
  } else if ((avgKoalas) > (avgDolphins * 2)) {   //checking if average is double
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
  } else {
    console.log("No winners.")
  }
}

//TEST ONE
let avgDolphins = calcAverage(44, 23, 72);
console.log("Dolphins: " + avgDolphins);
let avgKoalas = calcAverage(54, 54, 49);
console.log("Koalas: " + avgKoalas);

checkWinner(avgDolphins, avgKoalas);

// TEST TWO

avgDolphins = calcAverage(85, 54, 41);
console.log("Dolphins: " + avgDolphins);
avgKoalas = calcAverage(23, 34, 27);
console.log("Koalas: " + avgKoalas);

checkWinner(avgDolphins, avgKoalas);

// ARRAYS

const arrayyys = ['1','2', '3'];

console.log(arrayyys);

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
//   1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44


function tipCalc(bill){
  if (bill > 50 || bill < 300){
    return (bill * .15)
  } else {
    return (bill * .20)
  }
}
console.log(tipCalc(100));

let bills = [125, 555, 44];

let tips = ("tips = " + [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])]);
console.log(tips)

let total = [("the first bill was " +  bills[0] + " the tip was " + [tipCalc(bills[0]), " the second bill was " +  bills[1] + " the tip was " + tipCalc(bills[1]), " and the third bill was " +  bills[2] + " the tip was " + tipCalc(bills[2])])]
console.log(total);

// Activating Strict Mode
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessors(apples, oranges) {
  const juices = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juices;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
 */

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.
//
// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstNames = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
//   / (height * height) (mass in kg and height in meter)
// Your tasks:
//   1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

mark.calcBMI();
john.calcBMI();

console.log("mark " + mark.bmi , "jonh " + john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}

// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// Looping Arrays, Breaking and Continuing
const jo = [
  'Jo',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

console.log(jonas[0])
console.log(jonas[1])
console.log(jonas[4])

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const year = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < year.length; i++) {
  ages.push(2037 - year[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jo.length; i++) {
  if (typeof jo[i] !== 'string') continue;
  console.log(jo[i], typeof jo[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;
  console.log(jonas[i], typeof jonas[i]);
}

// Looping Backwards and Loops in Loops
const jona = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jona.length - 1; i >= 0; i--) {
  console.log(i, jona[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

///////////////////////////////////////
// Coding Challenge #4

// Let's improve Steven's tip calculator even more, this time using loops!
//
//   1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
//
//   TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

