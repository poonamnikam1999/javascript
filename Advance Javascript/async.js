// Asynchronous:If the first function takes more time to exicute then second function will overtake and 
// exicute by the help of Asynchronous method.

function fun1(){
    console.log("Hello i am fun1")
}

    


function fun3(){
    console.log("Hello i am fun3")
}
fun1()
setInterval(
     ()=>{
        for (i=10;i<300;i++){
            console.log(+i);
        }  }  ,5000)

fun3()