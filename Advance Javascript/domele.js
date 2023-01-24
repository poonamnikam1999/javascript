// Create Element:
let element =document.createElement('li');
console.log(element);

// Add class or id
element.className="list"
element.id='myitem'

// Set Attribute
element.setAttribute('title','mytitle');

// Select element
let ul =document.querySelector('#mylist');
console.log(ul);

// Append Child
ul.appendChild(element);

// fill text into Child we use InnerText OR CreateTextNode
// element.innerText="blue"

let text=document.createTextNode('black');
 element.appendChild(text);


// create new element
let elem2 =document.createElement('h3');

// add text into new element
let elem2text= document.createTextNode('heading tag');

elem2.appendChild(elem2text);

// replace element
element.replaceWith(elem2);

// replace child
let mylist= document.getElementById('mylist');
mylist.replaceChild(element,document.getElementById('myul'));

// remove child
mylist.removeChild(document.getElementById('last'));