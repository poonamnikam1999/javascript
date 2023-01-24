
class Employee{
    constructor(){
        this.pan;
        this.name;
        this.tax_income;
        this.tax;
    }
    input(){
        this.pan=prompt('Enter your this.pan');
        console.log('personal account number :',this.pan);

        this.name=prompt('Enter your this.name');
        console.log('Name :',this.name);

        this.taxable_income=parseInt(prompt('Enter your this.taxable_income'));
        console.log('Taxable Income :',this.taxable_income);
        

    }
    display(){
        console.log('this.pan,this.name,this.taxable_income,this.tax');
        
    }

    calc(){
        if(this.taxable_income<=100000){
         
            this.tax=0;
            console.log('Tax :',this.tax);
        }
        else if(this.taxable_income>100001 && this.taxable_income<=150000){
          
            this.tax=10/100*(this.taxable_income-100000);
            console.log('Tax :',this.tax);
        }
        else if(this.taxable_income>150001 && this.taxable_income<=250000){
             
            this.tax=5000+20/100*(this.taxable_income-150000);
            console.log('Tax :',this.tax);

        }
        else{
            this.tax=25000+30/100*(this.tax_income-250000);
            console.log(this.tax);
        }
    }
}
let emp=new Employee()
emp.input()
emp.calc()