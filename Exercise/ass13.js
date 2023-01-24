// . Given below is a hypothetical table showing rates of Income Tax for male citizens below the age of 65 years


let age=prompt("Enter age");
console.log("Age : "+age);
let gender=prompt("Enter gender");
console.log("Address : "+gender);

if (age>=65 || gender==="female"){
    console.log("wrong category");
}
else{
    console.log("selected gender :male");
    male();
}

function male()
{
    let TI=prompt("Enter the taxable income of the person");
    console.log("Taxable Income :"+TI);

   if(TI<16000){
      rate= Nil;
       console.log("rate of income tax :"+rate);

   }
   

   else if(TI>16000 && TI<=500000){
    rate=(TI-160000)*10;
    console.log("rate of income tax :"+rate);
   }

   else if(TI>500000 && TI<=800000){
    rate=[(TI-500000)*20]+34000;
    console.log("rate of income tax :"+rate);
   }

   else if(TI>800000){
    rate=[(TI-800000)*30]+94000;
    console.log("rate of income tax :"+rate);
   }
}
