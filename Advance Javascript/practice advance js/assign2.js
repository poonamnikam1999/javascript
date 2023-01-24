
class salary{

    constructor(){
        this.name;
        this.address;
        this.subspe;
        this.phone
        this.mSal;
    }

   input (){

        this.name=prompt('Enter your this.name');
        console.log('Name :',this.name);

        this.address=prompt('Enter your this.address');
        console.log('Address :',this.address);

        this.subspe=prompt('Enter your subject specilization');
        console.log('Subject Specilization :',this.subspe);

        this.phone=prompt('Enter your phone number');
        console.log('Phone No. :',this.phone);

        this.mSal=parseInt(prompt('Enter your montly salary'));
        console.log('Montly Salary :',this.mSal);


   }
    
   calc(){

    let aSal;
       aSal=12*this.mSal;
       console.log(aSal);

       if(aSal>175000){
        this.it=5/100*(aSal-175000);
        console.log(this.it);
        
       }
       else{
        this.it=0;
        console.log(this.it);
       }
   }
       
     

}

let s1=new salary
s1.input()
s1.calc()
