

function fun(firstName,lastName){
this.firstName=firstName,
this.lastName=lastName


}


let e1=new fun("pooja","panchal")
console.log(e1.firstName,e1.lastName);


// ======================******************** New binding ********************===================================

function sam(firstName,middleName,lastName,){

    this.firstName=firstName,
    this.middleName=middleName,
    this.lastName=lastName
}
let p22=new sam("Poonam","Manoj","Nikam")
console.log(p22.firstName,p22.middleName,p22.lastName);

