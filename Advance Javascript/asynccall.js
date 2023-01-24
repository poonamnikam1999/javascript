// async callback function
// example 1)

function fun1(){

setTimeout(function fun2(){
        console.log("fun2")
    },4000)

    // setTimeout(fun2,3000)
    console.log("fun1")
}
fun1()

// function fun2(){
//     console.log("fun2")
// }


// example 2)

function sam(){

    setTimeout(sai,5000)

    let y=3;
    let z=+y+++y+--y+y--;
    console.log(z);
}
sam()

function sai(){
    console.log("Hello i am async call back function")
}