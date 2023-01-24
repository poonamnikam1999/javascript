// Text Modification:
// 1)InnerHTML
// 2)InnerText
//3)TextContent

// let p=document.querySelector('#para')
// p.innerHTML='<h3>Inspiration does exist,but it must find you working.</h3>'
// console.log(p.innerHTML);

// ================================++++++++++++++++++++++++++++++++==================================================

// Events: these are two method to apply events on button
// 1) onclick / ondblclick / onmousemove
// 2) addEventListener

function fav(){
    alert("Hello welcome to the my page")
}


// let btn=document.querySelector('#btn')
// console.log(btn);

// btn.addEventListener('click',sai)

// let body=document.querySelector('body')
// console.log(body);

// function sai(){

//     body.style.backgroundColor='yellow'
// }

let dam=document.querySelector('#dam')
console.log(dam);

dam.addEventListener('click',dd)
let p=document.querySelector('p')
console.log(p);

let h1=document.querySelector('h1')
console.log(h1);


function dd(){
  p.style.color='red'
  p.style.backgroundColor='black'
  h1.style.fontFamily='Lucida calligraphy'
}
// function dd(){
//     h1.style.fontFamily='Lucida calligraphy'
// }



let btnn=document.querySelector('#btnn')
console.log(btnn);

btnn.addEventListener('click',sam)

let body=document.querySelector('body')
console.log(body);

function sam(){
    body.style.backgroundColor='blue'
}