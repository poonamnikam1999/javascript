// sync callback function :

function fun1(call){
        call()
    console.log("Hello i am function one")
}
fun1(function (){
        console.log("Hello i am function two")
    })
// fun1(fun2)

// function fun2(){
//     console.log("Hello i am function two")
// }


function back(happy){
    happy()
    let a=8;
    console.log("value of a =",a+=++a+--a+a--);
}
back(back1)

function back1(){
    let p=3;
    let q=2;
    let r=6;
    let s=p*q+r-q+p;
    console.log("Value of s =",s)
}

// eg 3)

