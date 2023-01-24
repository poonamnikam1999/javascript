class Mobike{

    constructor(){
        this.bno;
        this.phno;
        this.name;
        this.days;
        this.charge;
    }
   voidinput(){
      this.bno=prompt('Enter your bike number');
      this.phno=prompt('Enter your phone number');
      this.name=prompt('Enter your name');
      this.days=prompt('Enter the no. of days');
    //  this.charge=prompt('Enter the rental charge');
      }

    voiddisplay(){
        console.log('Bike no. :',this.bno);
        console.log('phone number :',this.phno);
        console.log('Customer Name :',this.name);
        console.log('no. of days :',this.days);
    }

    voidcompute(){
         
        if(this.days<=5){
         this.charge=500*this.days;
         console.log('Rental charge :',this.charge);
        }
        else if(this.days>=5 && this.days<=10){
          this.charge=400*this.days;
          console.log('Rental charge :',this.charge);
        }
        else{
        
            console.log('Rest of the days :200 per days');
        }
        
    }
}
let mob=new Mobike()
mob.voidinput()
mob.voiddisplay()
mob.voidcompute()