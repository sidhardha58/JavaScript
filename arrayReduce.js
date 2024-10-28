my_arr = [1, 2, 3, 4, 5, 6];
const intial = 0;
const total = my_arr.reduce((acc, curr) => acc + curr, intial);
console.log(total);
