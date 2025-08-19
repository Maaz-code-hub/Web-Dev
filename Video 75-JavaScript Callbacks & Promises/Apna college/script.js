// Asynchronous nature of JS
// console.log("one")
// console.log("Two")
// console.log("Three")
// setTimeout(() => {
//     console.log("Hii")
// }, 3000);
// console.log("Four")
// setTimeout(() => {
//     console.log("Hello")
// }, 3000);
// console.log("Five")

// Callback
// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumcallback) {
//   sumcallback(a, b);
// }
// calculator(5, 3, sum);
// calculator(5, 1, (a, b) => {
//   console.log(a + b);
// });

// function getdata(dataID, getnextData) {
//   setTimeout(() => {
//     console.log("data", dataID);
//     if (getnextData) {
//       getnextData();
//     }
//   }, 2000);
// }

// Callback Hell
// console.log("Getting Data 1....");
// getdata(1, () => {
//   console.log("Getting Data 2....");
//   getdata(2, () => {
//     console.log("Getting Data 3....");
//     getdata(3);
//   });
// });
// getdata(2)
// getdata(3)

// Promises
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise")
//     // resolve("Success");
//     reject("Some error occured");
// });

// function getdata(dataID, getnextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataID);
//             resolve("Sucess")
//             if (getnextData) {
//                 getnextData();
//             }
//         }, 5000);
//     })
// }

// console for above
// let finalVal = getdata(123) // --> did by user
// undefined
// finalVal                  // --> did by user
// Promise {<pending>}
// [[Prototype]]
// :
// Promise                   // --> did by user
// [[PromiseState]]
// :
// "fulfilled"
// [[PromiseResult]]
// :
// "Sucess"
// script.js:71 data 123
// finalVal
// Promise {<fulfilled>: 'Sucess'}
// [[Prototype]]
// :
// Promise
// [[PromiseState]]
// :
// "fulfilled"
// [[PromiseResult]]
// :
// "Sucess"

// Promise .then and .catch
// const getpromise = () =>{
//     return new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     // resolve("Success");
//     reject("Network error occured");
// });
// }
// let promise = getpromise();
// promise.then((res) => {
//     console.log("Promise fulfilled", res)
// })
// promise.catch((err) => {                  // remove 'promise.' in this line for no red error in console
//     console.log("Rejected!", err)
// })

// Promise Chain
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 1");
//       resolve("Success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data 2");
//       resolve("Success");
//     }, 4000);
//   });
// }
// console.log("Fetching data1......");
// asyncFunc1().then((res) => {
//   console.log("Fetching data2......");
//   asyncFunc2().then((res) => {
//   });
// });

// converting the calback hell prob to promise chain

// function getdata(dataID) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataID);
//       resolve("Success");
//     }, 2000);
//   });
// }

// console.log("Fetching data1......");
// getdata(1)
//   .then((res) => {
//     console.log("Fetching data2......");
//     return getdata(2);
//   })
//   .then((res) => {
//     console.log("Fetching data3......");
//     return getdata(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });


// Async-await
// async-->Always returns promice

function api(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
console.log("Weather data")
    resolve(200)
    },2000)
    
  })
}

async function getweatherdata() {
  await api()     //1st call
  await api()     //2nd call

}

async function hello(){
  console.log("Hello")
}

//converting the callback hell in async await 

function getdata(dataID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataID);
      resolve("Success");
    }, 2000);
  });
}

async function getalldata() {
  console.log("Getting data 1")
  await getdata(1)
  console.log("Getting data 2")
  await getdata(2)
  console.log("Getting data 3")
  await getdata(3)
  console.log("Getting data 4")
  await getdata(4)
  console.log("Getting data 5")
  await getdata(5)
  
}




// IIFE (Immediately Invoked function expression) version dont need to call
(async function () {
  console.log("Getting data 1")
  await getdata(1)
  console.log("Getting data 2")
  await getdata(2)
  console.log("Getting data 3")
  await getdata(3)
  console.log("Getting data 4")
  await getdata(4)
  console.log("Getting data 5")
  await getdata(5)
  
})()