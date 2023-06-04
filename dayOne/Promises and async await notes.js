// // // const myPromise = new Promise((resolve, reject) => {
// // //     // Perform an asynchronous operation
// // //     if (/* Operation is successful */) {
// // //       resolve(result);
// // //     } else {
// // //       reject(error);
// // //     }
// // //   });



// // // try {

// // //   throw('error')
  
// // //   } catch (err) {
  
// // //     console.log(`Error has occurred!`);
  
// // //   }

// // // 1. Create a Promise to fetch the water
// // let promise = new Promise(function(resolve, reject) {
// //     // Pretend a delay of 2 sec to fetch it!
// //      setTimeout(function() {
// //          // Fetched the water. Let's resolve the promise
// //          resolve('Hurray! Fetched the Water.');
// //      }, 2000);
// //    });
   
// //    // 2. Function to Set up the handler to handle a promise result.
// //    // It is to inform the grandparents when the result is available.
// //    const grandParentsCooking = () => {
// //      // The handler function to handle the resolved promise
// //      promise.then(function(result) {
// //        // Fetched the water. Now grandparents can start the cooking
// //        console.log(`cooking rice with the ${result}`);
// //      });
// //    }
   
// //    // 3. Calling the function to activate the set up.
// //    grandParentsCooking();
   


// //    //CHAINING CALL BACK FUNCTIONS
// // // Create a Promise
// // let getUser = new Promise(function(resolve, reject) {
// //     const user = { 
// //            name: 'John Doe', 
// //            email: 'jdoe@email.com', 
// //            password: 'jdoe.password' 
// //      };
// //    resolve(user);
// // });

// // getUser
// // .then(function(user) {
// //     console.log(`Got user ${user.name}`);
// //     // Return a Promise
// //     return new Promise(function(resolve, reject) {
// //         setTimeout(function() {
// //             // Fetch address of the user based on email
// //             resolve('Bangalore');
// //          }, 1000);
// //     });
// // })
// // .then(function(address) {
// //     console.log(`User address is ${address}`);
// // });

// /*
// STEP BY STEP BREAKDOWN OF WHAT TYPICALLY OCCURES WHEN YOU CREATE AND USE A PROMISE
// 1. Promise Creation: When you create a promise using new Promise(), the executor 
// function provided as an argument is executed immediately. This executor function 
// may contain asynchronous operations.
// 2. State Transition: The promise starts in the pending state. At this point, the 
// executor function may initiate some asynchronous tasks, such as making an HTTP 
// request or reading from a file. These asynchronous tasks are typically handled by 
// callbacks or by returning another promise.
// 3. Event Loop: While the asynchronous operations are running, the JavaScript event 
// loop continues executing the remaining synchronous code after the promise creation. 
// This allows other JavaScript operations to proceed while the asynchronous operations 
// are in progress.
// 4. Promise Settlement: Once the asynchronous operations complete (either successfully 
//     or with an error), the promise's state transitions from pending to either 
//     fulfilled or rejected. This transition happens when the corresponding resolve() 
//     or reject() function is invoked within the asynchronous operation.
// 5. Callback Execution: If there are .then() or .catch() callbacks attached to the 
// promise, they are enqueued in the microtask queue to be executed after the current 
// JavaScript execution context completes.
// 6. Event Loop Execution: When the event loop gets to the microtask queue, it executes 
// the callbacks associated with the settled promise. The fulfillment or rejection 
// value is passed to the corresponding callback, allowing you to handle the result or 
// error appropriately.
// */


// let promise1=new Promise(function(resolve,reject){

//     resolve(10)
// })
// /*None of this is in the right order but pretty much i was testing that you,
// need to put the ++ infront of a vale in order to increment it before its read, otherwise
// it gets incremented after its read. if youo want to increment, then you call its value
// again after, then that fine. if you want to write it once AND increment it, then you
// want to use ++ infront of the value. or you can reassign the value to the value of itself
// plus one.. then call the new variable againwhich will be updated with its value.
// */
// promise1.then(function(result){
//     result=result+1
//     return result
// })
// .then(function(result){
//    coreturn ++result 
// })
// // .then(function(result){
// //     result=result+10;
// //     return result
// // })
// // .then(function(result){
// //     result=result+10
// //     return result
// // })




// /*
// Every promise gives you a .then() handler method. Every rejected promise provides you a .catch() handler.
// You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.
// You can rethrow from the .catch() handler to handle the error later. In this case, the control will go to the next closest .catch() handler.
// Unlike .then() and .catch(), the .finally() handler doesn't process the result value or error. It just passes the result as is to the next handler.
// Calling the .then() handler method multiple times on a single promise is NOT chaining.
// */




// let promise1=new Promise(function(resolve,reject){
//     fetch
//     if(fetch===someting){
//         resolve('something')
//     }
//     else{
//         reject('Couldnt find pizza shop near you')
//     }
// })

// promise1.then(function(result){
//     let location=result;
//     return promise1(function(resolve,reject){
//         fetch
        
//     })
// }, function(error){
//     console.log(error);
// })



// //USING PROMISE .ALL TO RUN THE METHODS BELOW ONCE ALL PROMISES ARE COMPLETE
// const promise1 = new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve('One');
//     }, 1000);
//   });
  
//   const promise2 = new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve('Two');
//     }, 2000);
//   });
  
//   const promise3 = new Promise(function(resolve) {
//     setTimeout(function() {
//       resolve('Three');
//     }, 1500);
//   });
  
//   Promise.all([promise1, promise2, promise3])
//     .then(function(results) {
//       console.log(results);  // Output: ['One', 'Two', 'Three']
//     })
//     .catch(function(error) {
//       console.error(error);
//     });
// //IF ANY OF THESE PROMISES RETURNS REJECTED, THEN ALL OF THE OTHER OOPERATIONS ARE ABORTED


// /* alternatively, you can use Promise.allsettled() to run every promises results when 
// they are complete even if some are rejected
// */

Promise.resolve().then(() => console.log(2));
console.log(1);



//HOW PROMISES ARE HANDLED IN THE MICROTASK Queue
//ALL PROMISES ARE SENT TO THE MICROTASK QUEUE EVEN IF THEY ARE PROCESSED IMMEDIATELY
//You process a promise immediately by calling resolved on the promise Promise.resolved()

//******SYNCHRONOUS CODE PLACED BEFORE ITS RESOLVED WILL BE RUN IMMEDIATELY AND NOT
//GO INTO ANY QUEUE.ANY CODE PLACE AFTER RESOLVED WONT BE RUN AS THE PROMISE EXITS
//ONCE RESOLVED OR REJECT IS REACHED 
// A promise itself is not inherently asynchronous. The asynchronicity of a promise depends on how and when it is resolved.

// When you create a promise using new Promise(), it enters the pending state immediately. If you resolve the promise synchronously within the executor function, without any asynchronous operations or delays, the promise will be fulfilled immediately AND ENTER THE MICROTASK QUE.

// In the case of an empty promise like Promise.resolve(), where no explicit asynchronous or synchronous operations are involved, the promise is considered resolved immediately. However, even though there is no actual asynchronous behavior involved, the resolved promise and its corresponding .then() callbacks are still scheduled in the microtask queue to ensure consistent handling of promises

// The purpose of placing the resolved promise in the microtask queue is to guarantee that the callbacks attached to it are executed in a predictable order and separate from the regular task queue. This allows for proper sequencing and handling of promise resolutions, regardless of whether they are resolved synchronously or asynchronously.

// So, an empty promise like Promise.resolve() may seem trivial in terms of asynchronicity, but it still follows the mechanism of the microtask queue to ensure consistent promise resolution handling within the JavaScript event loop.
//WHEN A PROMISE IS CREATED IT IMMEDIATLEY ENTERS A STATE OF PENDING, IF IT DOES NOT
//RESOLVE OR REJECT IT WILL PROCESS SYNCRHONOUS CODE, IF IT NEVER GETS TO A RESOLVE OR
//REJECT, IT WILL NEVER ENTER A DIFFERENT STATE AND THE ATTACHED THEN,FINALLY, CATHC
//METHODS WILL NOT EXECUTE