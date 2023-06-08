// import playGuitar from "./index2.js"
//or import g, {shredding, plucking} from "./index2.js";
// //you can rename functions on import by using the as keyword
// import {shredding as shred, plucking as fingerPicking} from "./index2.js";
// console.log(playGuitar());
// console.log(shred());
// console.log(fingerPicking());



//another way to import the two functions
// import * as Guitars from "./index2.js";
//you kind of treat the new name you gave the module (Guitars) as an object with those function
///as their methods.

//use dot notation to access the functions in the imported module

//when using a default, the 'default' keyword is the functions name so it must be called
//that way.
// console.log(Guitars.default());
// console.log(Guitars.shredding());
// console.log(Guitars.plucking());



//CLASS
export function add(x,y){
    return x+y
}
export function sub(x,y){
    return x-y
}



//The * is a wild card meaning All››