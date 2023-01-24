// ==============6)Lexical scope : parameterised function : inner fun search variable from bottom to top ===========

function fun1(a){

    return function fun2(b){

        return function fun3(c){

            return function fun4(d){

                console.log(a+b*c-d);
            }
        }
    }
}
fun1(2)(5)(4)(12)

// =========================*****************==========================================

function hero1()
{    
     let x=10;

    return function hero2()
    {
        let y=15;

        return function hero3()
        {
            let z=25;
            console.log(x+y-z);
        }
    }
}
hero1()()()