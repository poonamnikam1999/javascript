class Empl{
   
    constructor(){
        this.Emp_No;
        this.Name;
        this.Basic;
        this.DA;
        this.HRA;
        this.TA;
        this.PF;
        this.Gross;
    }

    get(){
        this.Emp_No=prompt("Enter the emp no.");

        this.Name=prompt("Enter the employee name");

        this.Basic=parseInt(prompt("Enter the basic salary of employee"));
        
    }

    display(){
        console.log("Employee No. :",this.Emp_No);
        console.log("Employee Name :",this.Name);
        console.log("Basic Salary :",this.Basic);
        // console.log("Gross Salary :",this.Gross);
        // console.log("Provident fund of an employee :",this.PF);
    }
    calc(){
        if(this.Basic>=20000){

            this.PF=this.Basic*8/100;
          console.log("Provident Fund :",this.PF);

          this.gross=this.Basic+(this.Basic*((53+12+10)/100))-this.PF;
          console.log("Gross Salary :",this.gross);

        //     let DA;
        //   this.DA=53/100*this.Basic
        //   console.log("Dearness Allowance :",this.DA);
          
        //   let TA;
        //   this.TA=12/100*this.Basic
        //   console.log("Travelling Allowance :",this.TA);
          
        //   let HRA;
        //   this.HRA=10/100*this.Basic
        //   console.log("House Rent Allowance :",this.HRA);
          
        
          

        //   this.Gross=(parseInt(this.Basic)+parseInt(this.DA)+parseInt(this.TA)+parseInt(this.HRA))-parseInt(this.PF)
        
        }

       else if(this.Basic>=10000 && this.Basic<20000){
        this.PF=7.5/100*this.Basic
        console.log("Provident Fund :",this.PF);

        this.gross=this.Basic+(this.Basic*((45+10+12)/100))-this.PF;
        console.log("Gross Salary :",this.gross);

        // let DA;
        // this.DA=45/100*this.Basic
        // console.log("Dearness Allowance :",this.DA);
        
        // let TA;
        // this.TA=10/100*this.Basic
        // console.log("Travelling Allowance :",this.TA);
        
        // let HRA;
        // this.HRA=12/100*this.Basic
        // console.log("House Rent Allowance :",this.HRA);
        
        // let PF;
        

        // this.Gross=(parseInt(this.Basic)+parseInt(this.DA)+parseInt(this.TA)+parseInt(this.HRA))-parseInt(this.PF)
        // console.log("Gross Salary :",this.Gross);
       }
      
       else if(this.Basic<10000){
        this.PF=7/100*this.Basic
          console.log("Provident Fund :",this.PF);

        this.gross=this.Basic+(this.Basic*((40+8+14)/100))-this.PF;
        console.log("Gross Salary :",this.gross);
        // let DA;
        //   this.DA=40/100*this.Basic
        //   console.log("Dearness Allowance :",this.DA);
          
        //   let TA;
        //   this.TA=8/100*this.Basic
        //   console.log("Travelling Allowance :",this.TA);
          
        //   let HRA;
        //   this.HRA=14/100*this.Basic
        //   console.log("House Rent Allowance :",this.HRA);
          
        //   let PF;
        //   this.PF=7/100*this.Basic
        //   console.log("Provident Fund :",this.PF);

        //   this.Gross=(parseInt(this.Basic)+parseInt(this.DA)+parseInt(this.TA)+parseInt(this.HRA))-parseInt(this.PF)
        //   console.log("Gross Salary :",this.Gross);
       }

       else{
        console.log("Undefine");
       }
    }
}
let emp=new Empl()
emp.get()
emp.display()
emp.calc()