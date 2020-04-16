function multiply(input) {
  let output = [];
  let current = 1;
  
  for (i = 0; i < input.length; i++){
      if (input[i] % 2 == 0){
          current = input[i];
      }
      else {
          output.push(input[i] * current);
      }
  }
  return output;
}

module.exports = multiply;