function intake(one, two, value) {
  console.log(two(one(value)));
}

function one(x) {
  return x + 8;
}

function two(x) {
  return x * x;
}
