// // let body=document.body
// // let div= document.createElement('div')
// // body.append(div)
// // div.innerText='hello'
// // div.innerHTML='<strong>hello world</strong>'
// // let strong=document.createElement('strong')
// // strong.innerText="Hellow Worldw"
// // div.append(strong)
// // let italics=document.createElement('')
// // let newArea=document.createElement('textarea')
// // body.append(newArea)
// // newArea.innerText="hellow world"
// // let newButton=document.createElement('button')
// // body.append(newButton)
// // newButton.style.height='25px'
// // // newButton.style.width='50px'
// // // newButton.textContent='touch'
// // let h1=document.querySelector('h1')
// // console.dir(h1)
// // let pEL=document.querySelector('.cool');
// // console.log(pEL);
// // let li = document.getElementsByTagName('li');
// //The above returns a NODE list as an array that can be iterated over
// // for (let listItems of li){
// //     console.log(listItems.innerText);
// //     //The code was messed up in the practice so i did what i learned earlier to find out
// //     //how to view the content in the tags. So you do that by listItems.innerText
// //     //The innerText is the element object's property name, the text inside is the value
// //     //assigned to that property.
// // }
// let i = document.createElement('i');
// i.innerText='Help me'
// let body = document.querySelector('body')
// body.append(i);
// // console.dir(li)

// let textNode=document.createTextNode('hellooooo')
// // for(let value of li){
// //     console.log(li[0]););
// // }
// let li=document.querySelectorAll('li')
// //Below demoonstrates that the li list items have innerText property. we can access
// //these values by using li.innerText
// for (let value of li){
//     value.style.fontSize='30pt'
// }



//the method below creates a nodeList that i can use 3main for loops on
// let li=document.querySelectorAll('li');
// //below i use for looop to access the list items
// for (let value of li){
//     value.style.fontSize='30pt'
// }

// let parentNode=document.querySelector('#comments')
// let lastChildNode=parentNode.childNodes[0];
// let body=document.querySelector('body')
// let div=document.createElement('div')
// div.innerText='hello'
// parentNode.append(div)
// body.appendChild(div)

// let body=document.querySelector('body')
// let divDad=document.createElement('div')
// body.append(divDad)

// let ol=document.createElement('ol')
// divDad.appendChild(ol)

// let li1=document.createElement('li');
// ol.appendChild(li1)
// li1.innerText='hey'
// let li2=document.createElement('li')
// ol.insertBefore(li2,ol.firstElementChild);
// let li3=document.createElement('li')
// ol.insertBefore(li3, ol.lastElementChild)
// let divMom=document.createElement('div')
// body.append(divMom)
// let ul=document.createElement('ul')
// divMom.append(ul)
// let ulli1=document.createElement('li')
// ul.appendChild(ulli1);
// let ulli2=document.createElement('li')
// let ulli3=document.createElement('li')
// ul.appendChild(ulli2)
// ul.appendChild(ulli3)
// let strong=document.createElement('strong')
// li1.appendChild(strong)
// strong.innerText='hey'


// console.log(li1.firstElementChild);


// let comments=document.querySelector('#comments')
// console.log(comments.firstElementChild.innerText);
// let previousToComments=comments.previousElementSibling;
// //this syntax lets me grab previous siblings and set them to a new variable
// //then use that previous siblings new variable to access its previous sibling and 
// //set that to a new variable as well
// console.log(previousToComments);;
// console.log(previousToComments.previousElementSibling);

// let p=document.querySelector('p')
// p.innerHTML='comments for <strong>today</strong>'
// p.style.color='pink'
// let body=document.querySelector('body')
// let a=document.createElement('a')
// body.appendChild(a)
// a.innerText='Visit Google'
// a.setAttribute('href','https://www.google.com')
// a.classList.toggle('visible')
// console.log(a.outerHTML);

let body=document.querySelector('body')
let div2=document.createElement('div')
body.append(div2)
div2.innerHTML="<strong>hey</strong>"
let darkButton=document.querySelector('#dark')
body.insertBefore(darkButton,body.firstElementChild)
div2.textContent='hello'
div2.style.backgroundColor='red'