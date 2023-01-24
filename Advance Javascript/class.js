class student{
         
      constructor(firstName,middleName,lastName,rollNumber,dob,passingYear){
        this.firstName=firstName,
        this.middleName=middleName,
        this.lastName=lastName,
        this.rollNumber=rollNumber,
        this.dob=dob,
        this.passingYear=passingYear
      }



    info(){
        document.write(`<br>firstName: ${this.firstName} <br>middleName: ${this.middleName} <br>lastName: ${this.lastName} <br>rollNumber: ${this.rollNumber} <br>dob: ${this.dob} <br>passingYear: ${this.passingYear}<br>`);
    }
}

let s1=new student("priya","kiran","patil","1","10/10/1999","2020")
s1.info()

let s2=new student("pooja","kisan","pawar","2","9/3/1999","2020")
s2.info()

let s3=new student("payal","ram","patil","3","4/5/1999","2020")
s3.info()


// =======================================***********************************==================================


class emp{
  
  constructor(firstName,lastName,favColour,qualification,salary){
    this.firstName=firstName,
    this.lastName=lastName,
    this.favColour=favColour,
    this.qualification=qualification,
    this.salary=salary
  }


  data(){
    document.write(`<br> firstName :${this.firstName}<br> lastName :${this.lastName}<br> favColor :${this.favColour}<br> qualification :${this.qualification}<br> salary :${this.salary}<br>`)
  }
}
let e1=new emp("priya","patil","pink","graduation","30000")
e1.data()


// ======================================******************************************==================================

class sam{
  constructor(colorName,fruitName,animalName,state,city){
       this.colorName=colorName,
       this.fruitName=fruitnName
  }

  add(){

  }
}
let r1=sam()
r1.add()