const maximum = function (num1, num2) {
  if (num1 > num2) console.log("num1 is greater than num2");
  else if (num2 > num1) console.log("num2 is greater than num1");
  else console.log("Both are equal");
};

maximum(14, 58); //Output : num2 is greater than num1.
maximum(21, 21); //Output : Both are equal.
