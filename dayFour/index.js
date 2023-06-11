//DATA SETS
//The notes below all were base don the original menuLinks list. this is similar except it adds a sublinks array to the end of the menuElements.
let menuLinks = [
	{text: 'about', href: '/about'},
	{text: 'catalog', href: '#', subLinks: [
	  {text: 'all', href: '/catalog/all'},
	  {text: 'top selling', href: '/catalog/top'},
	  {text: 'search', href: '/catalog/search'},
	]},
	{text: 'orders', href: '#' , subLinks: [
	  {text: 'new', href: '/orders/new'},
	  {text: 'pending', href: '/orders/pending'},
	  {text: 'history', href: '/orders/history'},
	]},
	{text: 'account', href: '#', subLinks: [
	  {text: 'profile', href: '/account/profile'},
	  {text: 'sign out', href: '/account/signout'},
	]},
  ];

//CACHING ALL THE DOM ELEMENTS-I was supposed to query selector all the anchors, I decided to go to the ufnction where i create them and push to a new array in a global variable, since query selector all returns an ARRAYLIKE object, i figured might as well give it all frunctionality as a normal array.
let mainEl=document.querySelector('main')
let topMenuEl=document.querySelector('#topMenu')
let subMenuEl=document.querySelector('#subMenu')
let topMenuLinks=[]
let showingSubMenu=false;

//STYLING ALL THE DOM ELEMENTS
mainEl.style.backgroundColor='var(--main-bg)'
topMenuEl.style.height='100%'
topMenuEl.style.backgroundColor='var(--top-menu-bg)'
subMenuEl.style.height='100%'
subMenuEl.style.backgroundColor='var(--sub-menu-bg)'
subMenuEl.style.position='absolute'
subMenuEl.style.top='0'

//VARIOUS CHANGES TO DOM ELEMENTS
mainEl.classList.add('flex-ctr')
mainEl.innerHTML='<h1>Dom Manipulation</h1>'
subMenuEl.classList.add('flex-around')
topMenuEl.classList.add('flex-around')

//FUNCTIONS
//createAnchors takes menuLinks as an argument. inside of it i loop over each of the array elements. when i pass menuLinks, its an array, when i loop over each element, each uses the element itself, whicuh is an object. the for each loop lets me iterate over each element so i can create the exact amount of anchors for the menulinks i need. In the createAnchors, I call 3 functions  that i created. I pass it the menuElement(which is an object) and as i pass it the new anchor created during each iteration. That means there is a total of menu links=equal to the number of anchors. I pass both to other functions to use them
function createAnchors(menuLinks){
	menuLinks.forEach(menuElement=>{
		let topMenuAnchorTag=document.createElement('a')
		topMenuLinks.push(topMenuAnchorTag)

		setAnchorHref(topMenuAnchorTag,menuElement);
		setAnchorContent(topMenuAnchorTag,menuElement);
		appendEachAnchor(topMenuAnchorTag);
	})
}

createAnchors(menuLinks)

//Above I only called the createAnchors function globally because That function calls the other functions i need to have called for me. As mentioned, the first function that passes the value to this is pass menu element, menu element is an object. So i can directly access its properties with dot notation
 function setAnchorHref(topMenuAnchorTag,menuElement){
	topMenuAnchorTag.setAttribute('href',menuElement.href)
	}

function setAnchorContent(topMenuAnchorTag,menuElement){
	topMenuAnchorTag.textContent=menuElement.text
}

function appendEachAnchor(topMenuAnchorTag){
	topMenuEl.appendChild(topMenuAnchorTag)
}
//Question15 function
function buildSubMenu(subLinksArrayClicked){
	subMenuEl.style.top='100%';
	//question 16, double check clears contents of submenuel
	subMenuEl.innerHTML='';
	//question 16, iterates over subLinks array passed, the 'object' refers to each subArray element
	subLinksArrayClicked.forEach(subLinkObject=>{
		let a=document.createElement('a')
		a.setAttribute('href',subLinkObject.href)
		a.innerText=subLinkObject.text
		subMenuEl.appendChild(a)
		//below is my own line of code
		subMenuEl.classList.add('flex-center')
		subMenuEl.style.width='100%'
	})
}

//The prevent default method is a method passed on the event object to ensure it does not run its default action as an element, eg. links click and ubttons click, etc. its one line of code.
topMenuEl.addEventListener('click',function(eventObject){
	eventObject.preventDefault();
	if(eventObject.target.tagName!='A'){
		return
	}

	//question 11 below
	//the function below is properly coded. I tested it by setting the event object target class to active before the function gets to the if statement. It entered teh if statement and console logged when i clicked on one of the elements/
	if(eventObject.target.classList.contains('active')){
		// console.log(eventObject.target.innerText);
		eventObject.target.classList.remove('active');
		showingSubMenu=false;
		subMenuEl.style.top='0%';
		return;
	}

	//question12-each 'link' below is a separate anchor tag becasue topMenuLinks is an array of anchor tags. You can access these individually using a forEach method
	topMenuLinks.forEach(link=>{
		link.classList.remove('active')
	})

	//question13*****/THIS IS CAUSING A BUG, ITS MAKING THE SUB MENU COVER THE TOP MENU WHEN YOU CLICK THE TOP MENU LINK TWO TIMES INA ROW. REMOPVING THIS LINE FIXES THE ISSUE BUT NOT FOR THE ABOUT HEADER. BUG STILL EXISTS WHEN YOU CLICK TOP MENU LINK (THATS NOT ABOUT) THENN CLICK THE ABOUT RIGHT AFTER,
	// eventObject.target.classList.add('active')

	//question14-The problem was, i was given an array of objects. my problem was, i needed the event listener to set showingSubMenu to false, if when i clicked an anchor, it's corresponding menuLink object (i created one anchor for each number of menuLink objects. they didnt necessarily have anything in common exceot i cop;ied their data over to the anchors classes and attributes.). BUT, since i iterated over each menu link object one time, and created one anchor for each (then i created an array out of the anchors) each anchor index corresponded to each menuLinks object. so, i needed to set the index variable to the index of the element i targeted witht he event (the eventObject.target). the way i find the eventObject.target index was using this info [top menu links was an array of the anchor tags. the cllicked element is representede by eventObject.target]. let index=childrenArray.indexOf(clickedElement). OR, let index=topMenuLinks.indexOf(eventObject.target). I got the index of the event target(anchor) with this. remember, each anchor has one corresponding menuLink object so i used an if statement. if (menuLinks[indexvariablefromearlier].subString){code}
	let indexOfElementClicked=topMenuLinks.indexOf(eventObject.target);
	//this line below take the index of the clicked item and uses bracket notation to find the element object itself
	let menuElementObjectClicked=menuLinks[indexOfElementClicked]
	//the line below takes the element object from above and using dot notation accesses the sublinks array
	let subLinksArrayClicked=menuElementObjectClicked.subLinks
	if(subLinksArrayClicked){
		showingSubMenu=true;	
		}
	else{
		//BUG THE CODE BELOW IS MESSING WITH MY ABOUT SECTION
		showingSubMenu=false;
	}

	//question 15
	if(showingSubMenu===true){
		buildSubMenu(subLinksArrayClicked)
	}
	else{
		subMenuEl.style.top='0'
	}
	//CODE TO CATCH QUESTION 20 and problems, all code below
	if(indexOfElementClicked===0){
		mainEl.innerHTML='<h1>' + eventObject.target.innerText + '</h1>'
	}
})


//Question 17
subMenuEl.addEventListener('click', function(eventObject){
	eventObject.preventDefault()
	if(eventObject.target.tagName!='A'){
		return;
	}
	showingSubMenu=false;
	///mypractice line of code here
	subMenuEl.style.top='100%'

	topMenuLinks.forEach(link=>{
		link.classList.remove('active')
	})
	mainEl.innerHTML='<h1>'+ eventObject.target.innerText + "</h1>"
	console.log(eventObject.target.innerText);

})















































//The answer to my problem yesterday #14

// const menuLinks = [
// 	{ text: 'Link 1', href: '#1', property: 'A' },
// 	{ text: 'Link 2', href: '#2', property: 'B' },
// 	{ text: 'Link 3', href: '#3', property: 'A' }
//   ];
  
//   const topMenuEl = document.querySelector('#topMenu');
  
//   for (let i = 0; i < menuLinks.length; i++) {
// 	const link = menuLinks[i];
	
// 	const a = document.createElement('a');
// 	a.setAttribute('href', link.href);
// 	a.textContent = link.text;
	
// 	// Add event listener to each anchor tag
// 	a.addEventListener('click', function(event) {
// 	  event.preventDefault();
	  
// 	  // Check the desired property of the first link element
// 	  const firstLink = menuLinks[0]; *******************
// 	  if (firstLink.property === 'A') {
// 		// Perform action for links with property 'A'
// 		console.log('First link has property A');
// 	  } else {
// 		// Perform default action for other links
// 		console.log('First link does not have property A');
// 	  }
// 	});
	
// 	topMenuEl.appendChild(a);
//   }