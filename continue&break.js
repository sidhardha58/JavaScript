//Continue
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
// Output : 1 2 3 4 6 7 8 9 10

//Break
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 7) break;
}
// Output : 1 2 3 4 5 6
