let a = 58;
let b = 14;
let c = 12;
let d = 20;

// Logical AND
let isvalid = b > a && d > c;
console.log(isvalid); // false

// Logical OR
isvalid = b > a || d > c;
console.log(isvalid); // true

// Logical NOT
isvalid = !isvalid;
console.log(isvalid); // false
