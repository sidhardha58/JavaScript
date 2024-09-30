let a = 25;
let b = 75;

//Greater than / Less than

console.log(`Is ${a} Greater than ${b}? : `, a > b); // False
console.log(`Is ${a} Less than ${b}? : `, a < b); // True

// Greater than or equal to / Less than or equal to comparisons

console.log(`Is ${a} Greater than or Equal to ${b}? : `, a >= b); // False
console.log(`Is ${a} Less than or Equal to ${b}? : `, a <= b); // True

// Comparing values and types of variables
let num1 = 150; //number
let num2 = 150; //number
let num3 = "150"; //string

// == comparison (checks equality in value only)

console.log("Is num1 equal to num2? ", num1 == num2); // True: Both have the same value
console.log("Is num2 equal to num3? ", num2 == num3); // True: Checks value, but not type

// === comparison (checks equality in both value and type)

console.log(
  "Is num1 equal to num3 in value and in datatype too? ",
  num1 === num3
); // False: Different types (number vs string)
