//  rest parameter :we can store multiple value in single variable.........................

function fun(...p){
    console.log(p);
}
fun(10,20,30)

// ============= eg 2) ===================

function sam(...name){
 console.log(name)
}
sam("pooja","payal","prajakta","mansi")


// spread operator :we can spread single array into multiple variable ..................................

function fun1(a,b,c,d){
   console.log("Number 1:"+a);
   console.log("Number 2:"+b);
   console.log("Number 3:"+c);
   console.log("Number 4:"+d);
}
let array=[10,20,30,40]
fun1(...array)

