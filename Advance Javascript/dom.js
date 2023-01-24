// Select Element:
// getElementById
// getElementByClassName
// getElementByTagName
// getElementByName
// QuerrySelector
// querySelectorAll



let mark=50;
if(mark>=35){
    let h1=document.querySelector('#header1')

h1.setAttribute('class',"back")

console.log(h1);

}

else{
    
    let h1=document.querySelector('#header1')

h1.setAttribute('class',"fun")

console.log(h1);

}



let marks=25;
if(marks>=35){
    let h2=document.querySelector('#header2')

h2.setAttribute('class',"sam")

console.log(h2);

}

else{
    
    let h2=document.querySelector('#header2')

h2.setAttribute('class',"sai")

console.log(h2);

}


// let h2=document.querySelector('h2')
// h2.setAttribute('id','head2')
// h2.style.backgroundColor='yellow'
// console.log(h2);



let a=document.querySelector('#fun')
a.href="pro.html"
console.log(a);

// let li=document.querySelector('#list')
// li.type='A'
// console.log(li);

// ======================================++++++++++++++++++++++++++++++++++++++=====================================

let li=document.querySelector('#un')
li.type="circle"
console.log(li);

let amount=2000;
if (amount>=1500){
    let p=document.querySelector('#ram')
    p.setAttribute('class',"para")
    console.log(p);
}
else{
    let p=document.querySelector('#ram')
    p.setAttribute('class',"para1")
    console.log(p);
}
