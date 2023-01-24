// variable : 1) declaration =scope variableName
// let firstName="";
//  2) define/initilization = let firstName="sam";
//  3) scope : i) var - functional scope , ii) let -block level scope , iii) const - block level scope ......

function fun(){
     
    {
        let a=10;
         a=20
        console.log(a);
    }

    {
        const num=3+5;
        console.log(num);
    }

    {
        var x=5;
        
    }

    {
        console.log("value of x :",x+=++x+x+++x--+x--);
    }

}
fun()