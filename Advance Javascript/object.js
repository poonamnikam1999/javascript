// object : 1) this keyword :a) implicit binding:means automatically binding............

// ===== `==backtick
 
let opt={
    name:"pooja",
    main: function fun3(){console.log(`my name is ${this.name}`);}
}
opt.main()

// == eg. 2)

let sub={
    subject:"maths",
    // rollNumber:12,
    // marks:70,
    // result:"passed"
   atm: function fun6(){console.log(`subject name is ${this.subject}`);}
}
sub.atm()


// ===================== b)explicit binding :manual binding ===========================

let emp={
    name:"sam",
    fun: function sai(){console.log(`my name is ${this.name}`)}
}
emp.fun()
// implicit

let k={
    name:"priya"
}

let a=function fun1(){
    console.log("i am implicit binding",this.name);

}
a.call(emp)
// explicit
