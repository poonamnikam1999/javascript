// let a=10;
// console.log(a);

// let fruit=[]
// console.log(fruit);

// let emp={

// }
// console.log(emp);

let obj1={

    name:"pooja",
    rollNo:1
    }
    
    let obj2={
        __proto__:obj1,
    
    lastName:"panchal",
    fun: function(){console.log(this.rollNo, this.name, this.lastName,this.sub, this.marks)}
    
    }
    
 let obj3={
    __proto__:obj2,
    sub:"Maths",
    marks:65
 }

 obj3.fun();