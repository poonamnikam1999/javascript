
// Text Modification:
// 1)InnerHTML
// 2)InnerText
//3)TextContent

// Events: these are two method to apply events on button
// 1) onclick
// 2) addEventListener

// let p= document.querySelector('#para')

// p.innerHTML="<h1>this is heading         <span>This is Span Tag</span>       </h1>"
// console.log(p.textContent);



function fun(){
alert("Welcome");
}

let btn=document.querySelector('#btn')

console.log(btn);

btn.addEventListener('click',sam)

let body=document.querySelector('body')

console.log(body);
function sam(){

    body.style.backgroundColor='red'
}