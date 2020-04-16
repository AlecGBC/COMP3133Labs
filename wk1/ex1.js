// Exercise 1

Captailize = (sentence) => {


    sentence = sentence.split(" ");
  
    for(i = 0; i < sentence.length; i++)
    {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
    }
  
    return sentence.join(" ");
  
  }
  
  console.log(Captailize("the quick brown fox"))