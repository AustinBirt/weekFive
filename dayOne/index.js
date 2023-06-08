// function delayedSum(n1,n2){
//     let promise1=new Promise(function(resolve,reject){
//         console.log('Calculating Your Results...');
//         setTimeout(function(){
//            if(typeof n1==='number'&& typeof n2==='number'){
//             resolve(n1+n2)
//            }
//            else{
//             reject(new Error('Invalid arguments. Numbers expected.'))
//            }
//         },5000)
//     })
//     return promise1.then((result)=>{console.log(result)})
// .catch(function(error){
//    if (error instanceof Error && error.message === 'Custom Error'){
//     console.log('Custom error occured');
//    }
//    else{
//     console.log('Unknown error occured');
//    }
// })
// }






// delayedSum(5,5)
// console.log('This should show up second');


<script>
let button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function() {
//set up ajax engine
//Step 1. set up our ajax object
let xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readystate);

//Configure our XHR object
xhr.open('GET', './message.txt', true);
console.log('Opened', xhr.readystate);
})

</script>