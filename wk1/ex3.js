// Exercise 3

firstThree = (word) => {
  
    newWord = word
  
    if(word.length > 3)
    {
        last3 = word.substr(word.length - 3)
        first3 = word.substr(0, word.length - 3)
  
        var newWord = last3 + first3
    }
    return newWord
  }
  
  console.log(firstThree("Python"));
  console.log(firstThree("JavaScript"));
  console.log(firstThree("Hi"));