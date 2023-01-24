//  Event : these are method to apply events on button...
//  1) onclick / ondblclick / onmouseover
// 2) addEventListener


function fun(){
    alert("Welcome to my page")
}

// =================================================================================================================

let sam=document.querySelector('#sam')
console.log(sam);

sam.addEventListener('click',sai)

let body=document.querySelector('body')
console.log(body);

function sai(){
    body.style.backgroundColor='red'
}

// ===============================================================================================================

let btn=document.querySelector('#btn')
console.log(btn);

btn.addEventListener('click',back)

function back(){
    btn.style.a.href='https://www.google.com/'
}