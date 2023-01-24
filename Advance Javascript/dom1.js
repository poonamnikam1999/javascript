
// Selecting Element:
let ul=document.querySelector('ul.list');
console.log(ul);



// create new element:

let elem1 =document.createElement('li');

// append child 
ul.appendChild(elem1);

// remove child
// ul.removeChild(elem1)

let text=document.createTextNode("red");
elem1.appendChild(text);


// =====================================++++++++++++++++++++++++++++++++++++++++=======================================

let ol=document.querySelector('#list-item');
console.log(ol);

let add1=document.createElement('li');

ol.appendChild(add1);

let back=document.createTextNode("White");
add1.appendChild(back);

// =========================================+++++++++++++++++++++++++++++++=============================================

let p=document.querySelector('p.para');
console.log(p);

let pic=document.createElement(p);

p.appendChild(pic);

let big=document.createTextNode("....HONEST IS THE BEST POLICY....");
Pic.appendChild(big);