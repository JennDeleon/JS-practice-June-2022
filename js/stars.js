// BASIC STAR PATTERN

let a = 5; // row column count
let string1 = ""; // empty string

for (let i = 0; i < a; i++) {  //external loop
  for (let j = 0; j < a; j++) { //internal loop
    string1 += "*";
  }
  //create a new line after each row
  string1 += "\n";
}
console.log(string1);



// HOLLOW SQUARE PATTERN
let b = 5; // row column count
let string2 = ""; // empty string

for (let i = 0; i < b; i++) { //external loop
  for (let j = 0; j < b; j++) { //internal loop
    if (i === 0 || i === b - 1){
      string2 += "*"; // adding a star to the start and end of the line
    }
    else {
      if (j === 0 || j === b - 1) {
        string2 += "*";
      } else {
        string2 += " "; // empty center
      }
    }
  }
  string2 += "\n"; // new line after every row
}
console.log(string2)



// RIGHT TRIANGLE PATTERN
// This one requires 3 loops( 1 external, 2 internal)

let c = 5; //row or column
let string3 = ""; //empty string

for (let i = 1; i <= c; i++) { // start var i = 1 and start at same index of c (5)
  for (let j = 0; j < c - i; j++) { // what is c - i doing here?
    string3 += " "; //print spaces
  }
  for (let k = 0; k < i; k++) { //second internal loop printing stars
    string3 += "*";
  }
  string3 += "\n"; // printing new lines
}
console.log(string3)

// LEFT TRIANGLE PATTERN

