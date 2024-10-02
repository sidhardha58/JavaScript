let a = 5;

if (a < 0)
  //False -> Skip if block
  console.log("The number is Negative");
else if (a > 0)
  //True -> exicute else if block
  console.log("The number is Positive"); // Output -> The number is Positive
else console.log("The number is Zero");

let age = 16;
if (age < 18)
  //True -> enters if block
  console.log("Not Eligible to vote"); // Output -> Not Eligible to vote
else console.log("Eligible to vote");
