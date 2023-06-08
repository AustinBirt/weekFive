// This below is the first way to export syntax
//with default export javascript likes to see function declarations
// export default function playGuitar(){
//     return "Playing Guitar!"
// }
// //when you're not exporting default like below, then youll can leave function as
// // 
// export function shredding(){
//     return 'Shredding some licks!'
// }

// export const plucking = ()=>{
//     return "Plucking the strings..."
// }


//this is the second export syntax
//ONE WAY TO EXORT
// export default playGuitar
// export{shredding,plucking};



//CLASS
import {add, sub} from "./index.js"
console.log(add(3,3));
console.log(sub(3,3));


