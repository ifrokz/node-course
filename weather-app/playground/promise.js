const asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            }else{
                reject('Arguments must be numbers.');
            }
        }, 1500);
    });
};   

asyncAdd(5,7)
    .then((res)=>{
        console.log('Result: ', res);
        return asyncAdd(res, '33');
    },(errorMessage) => {
        console.log(errorMessage);
    })
    .then((res) => {
        console.log(res);
    }, (errorMessage) => {
        console.log(errorMessage);
    });

// const somePromise = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve('Hey. It worked!');
//         reject('Unable to fulfill promise');
//         resolve('Hey. It worked!');
//     },2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Success: ', errorMessage);
// });

// Las promesas previenen ademas la doble llamada a un callback, 
// o la llamada al error a la vez que el resultado.