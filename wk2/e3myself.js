
const promi = num => {
return new Promise((resolve, reject) => {

    if(num > 10){
        resolve(num + ' is greater than 10')
    }else{
        reject('reject');
    }


});
};

promi(90)
.then(result => console.log(result))
.catch(error => console.log(error));