// Select Elementa:
// getElementById
// getElementByClassName
// getElementByTagName
// getElementByName
// QuerrySelector
// querySelectorAll

// set Attribute

let mark=15;
if(mark>=35){
    let h1=document.querySelector('#head1')

h1.setAttribute('class',"sam")

console.log(h1);

}

else{
    
        let h1=document.querySelector('#head1')
    
    h1.setAttribute('class',"sai")
    
    console.log(h1);

}

let h2=document.querySelector('h2')
h2.setAttribute('id','head2')
h2.style.backgroundColor='yellow'
console.log(h2);


let a=document.querySelector('#anch')
a.href="pro.html"
console.log(a);


