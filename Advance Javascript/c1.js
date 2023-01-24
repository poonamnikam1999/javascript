class bioData{

    constructor(firstName,lastName,dob,email){
        this.firstName =firstName,
        this.lastName=lastName,
        this.dob =dob,
        this.email=email
    }
    showData(){
document.write(`<br>First Name: ${this.firstName} <br> ${this.lastName} <br>${this.dob} <br>${this.email}<br>`);
    }
}

let e1= new bioData("pooja","panchal","10/10/1996","pooja@gmail.com")
e1.showData()

let e2= new bioData("sheetal","bendre","09/10/1996")
e2.showData()
