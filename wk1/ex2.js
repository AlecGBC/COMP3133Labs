// Exercise 2

Compare = (num1, num2, num3) => {

    biggestNum = num1
  
    if(num2 > biggestNum)
    {
        biggestNum = num2;
    }
    else if(num3 > biggestNum)
    {
        biggestNum = num3
    }
    return biggestNum
  
  }
  
  console.log(Compare(1,0,1));
  console.log(Compare(0,-10,-20));
  console.log(Compare(1000,510,440));
  