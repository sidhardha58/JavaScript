const a = 9;
const b = 5;
const c = 3;

if (a > b) {
  if (a > c) console.log("A is the Largest");
  else console.log("C is the Largest");
} else if (b > a) {
  if (b > c)
    //Output : A is the Largest
    console.log("B is the Largest");
  else console.log("C is the Largest");
} else console.log("There is no larger number");
