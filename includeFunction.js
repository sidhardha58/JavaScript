const check = (str, char) => {
  if (str.includes(char)) return true;
  else return false;
};
console.log(check("AB de villiers", "de"));
//Output : True
