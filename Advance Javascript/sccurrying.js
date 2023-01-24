// ==============5)Currying scope : higher order function===========

function fun1()
{
    console.log("Hello i am currying scope");

    return function fun2()
    {
        let a=10;
        console.log(a+=++a+a+++a--);

        return function fun3()
        {
            console.log("Hello i am fun3");
        }
    }

}
 fun1()()()

//  let f1=fun1();
//  console.log(f1);

//  let f2=f1();
//  console.log(f2);

//  let f3=f2();
//  console.log(f3);


// ===================================********************====================================

function calculate1(length)
{
    return function calculate2(breadth)
    {
        return function calculate3(height)
        {
                console.log(length*breadth*height)
        }
    }
}
calculate1(12)(10)(20)

