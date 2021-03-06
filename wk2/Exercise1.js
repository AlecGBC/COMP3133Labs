// 1. Write a function testNum that takes a number as an argument and returns 
//a Promise that tests if the value is less than or greater than the value 10.

const testNum = num => {
    return new Promise((resolve, reject) => {
      if (num > 10) {
        resolve(num + ' is greater than 10');
      } else {
        reject(num + ' is less than 10');
      }
    });
  };
  
  testNum(9)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  testNum(11)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  