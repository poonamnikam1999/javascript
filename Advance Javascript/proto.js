// prototype :it is a property which is used in object,arry and function which is provided by JS Engine.


// let a=20;
// console.log(a);

// let array=[]
// console.log(array);

// let obj={

// }
// console.log(obj);


// prototype inheritance :we can pass one object property to another object  =================================
//it is indicates that: __proto__:objetName



let emp1={
    firstName:"priya",
    lastName:"patil",
    rollNo:1
}

let emp2={

    __proto__:emp1,
    sub:"maths",
    marks:70,
    result:"pass",

    fun: function(){console.log(this.rollNo,this.firstName,this.lastName,this.class,this.sub,this.marks,this.result)}
}
// emp2.fun()

let emp3={

    __proto__:emp2,

    class:"12th"
}
emp3.fun()