//  eg 1) :

class Employee{

    constructor(b){
     this.basic=b

    }

    calc(){
        let da;
        da=25/100*this.basic;
        console.log('Dearness Allowance :',da);
        
       let hra;
       hra=15/100*this.basic;
       console.log('House Rent Allowance :',hra);

       let pf;
       pf=8.33/100*this.basic;
       console.log('Provident Fund :',pf);

       let np;
       np=this.basic+da+hra;
       console.log('Net Pay :',np);

       let gp;
       gp=np-pf;
       console.log('Gross Pay :',gp);
       
    }
}
let el=new Employee(200000);
el.calc()