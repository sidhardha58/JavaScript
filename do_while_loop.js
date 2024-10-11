let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
// Output : 1 2 3 4 5

//Factorial
let fact = 1;
let num = 5;
let j = 1;
do {
  fact *= j;
  j++;
} while (j <= num);
console.log(fact);
// Output : 120
