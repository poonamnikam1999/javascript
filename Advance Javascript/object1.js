// =========== c) new binding : new keyword create empty object. ===================

function fun(name,salary,email){
    this.name,
    this.salary,
    this.email

}
let array=["priya","50000","priya123@gmail.com"]
let a= new fun()

console.log(a);


// ================================*********************************=======================

function fun7(firstName,lastName){
    this.firstName=firstName,
    this.lastName=lastName
    
    
    }
    let obj=["pooja","panchal"]
    // console.log(this.firstName,this.lastName);
    let n=new fun7()

    


// ============== d) default :by default this s global object..==============================

function fun3(){
    console.log(this)
}
fun3()