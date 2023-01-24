// =========================Types of scopes=========================================
// ========================1)function level scope, 2)Global scope, 3)Block level scope, 4)Hoisted scope,
// ========================5)Currying scope, 6)Lexical scope ,7)clouser.....===================================================

// ================4). Hoisted scope : all the declaration move to the top only declaration not assignment=====

fun()
function fun()
{
    console.log("Hii i am hoised scope");
}


// =========================================******************======================================

main(3,4,5)
function main(a,b,c){
  console.log(a+b+c);
}

// ======================================*****************************=================================

fun1()
function fun1(){
    let a=10;
    console.log(+a);
}

// ============================****************************==========================================


console.log(a);
const a=10;

// var====undefined
// let----const=====Cannot access 'a' before initialization
