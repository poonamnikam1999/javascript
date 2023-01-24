// . An electronics shop has announced the following seasonal discounts on the purchase of certain items. 


let name=prompt("Enter the name");
console.log("Name :"+name);
let address=prompt("Enter the address");
console.log("Address :"+address);
let purchase=prompt("Enter the type of purchase");

 if(purchase==="laptop"){
  console.log("purchase selected:laptop");
  laptop();
}
else{
    console.log("purchase selected:desktop");
    desktop();
}

function laptop(){
    let l=prompt("enter the price of laptop");
   
     console.log("price of laptop :"+l);
     
     if(l>0 && l<=2500){
        discount=(0/100)*l;
        console.log("Discount :"+discount);
     }
     else if(l>25000 && l<=57000){
        discount=(5/100)*l;
        console.log("Discount :"+discount);
     }

     else if(l>57001 && l<=100000){
        discount=(7.5/100)*l;
        console.log("Discount :"+discount);
     }
     else 
     {
        discount=(10/10)*l;
        console.log("Discount :"+discount);
     }

     let netAmount=l-discount;
      
    console.log('Net Amount is ' +netAmount);

}



function desktop(){
    let d=prompt("enter the price of desktop");
     console.log("price of desktop :"+d);
     
     if(d>0 && d<=2500){
        discount=(5/100)*d;
        console.log("Discount :"+discount);
     }
     else if(d>25000 && d<=57000){
        discount=(7.5/100)*d;
        console.log("Discount :"+discount);
     }

     else if(d>57001 && d<=100000){
        discount=(10/100)*d;
        console.log("Discount :"+discount);
     }
     else 
     {
        discount=(15/10)*d;
        console.log("Discount :"+discount);
     }

     let netAmount=d-discount;
      
    console.log('Net Amount is ' +netAmount);

}

