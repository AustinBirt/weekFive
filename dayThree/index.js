var menuLinks = [
    {text: 'about', 
    href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];




  let mainEl=document.querySelector('main')
  mainEl.style.backgroundColor='var(--main-bg)'
  let h1=document.createElement('h1')
  mainEl.append(h1)
  h1.innerText='DOM Manipulation'
  mainEl.classList.add('flex-ctr')
  let topMenuEl=document.querySelector('#topMenu')
  topMenuEl.style.height='100%'
  topMenuEl.style.backgroundColor='var(--top-menu-bg)'
  topMenuEl.classList.add('flex-around');


for(let i=0; i<menuLinks.length;i++){
    let link=menuLinks[i]
    console.log(link);
    let a = document.createElement('a')
    a.setAttribute('href', link.href)
    console.log(a.outerHTML);
    a.innerText=link.text
    console.log(a.innerText);
    topMenuEl.appendChild(a)
}

let links=document.querySelectorAll('a')
for(let link of links){
console.log(link);
}
