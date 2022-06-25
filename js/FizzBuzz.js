// "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

function getFizzBuzz(startingNum) {
    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        return "FIZZ BUZZ"
    } else if (startingNum % 3 === 0) {
        console.log("fizz")
    } else if (startingNum % 5 === 0) {
        console.log("buzz")
    } else {
        return "thats not a good fizz"
    }
}

getFizzBuzz(3);
getFizzBuzz(5);
console.log(getFizzBuzz(15));
console.log(getFizzBuzz(4));
console.log(getFizzBuzz('k'));



let str = '';
function count() {
  for (let i = 0; i < 10; i++) {
    str = str + i;
  }
}
console.log(str);
// expected output: "012345678"


let stars = 10;
let string = "";
for (let i = 1; i <= stars; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
