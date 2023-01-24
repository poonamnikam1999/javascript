let uname=prompt("Enter name");
console.log("Name : "+uname);
let address=prompt("Enter address");
console.log("Address : "+address);
let purchase=prompt("Enter type of Device");

if(purchase === 'l' ||  purchase ==='L'){
    console.log("Device Selected : Laptop");
    laptop();
}
else{
    console.log("Device Selected : Desktop");
    desktop();
}
function laptop(){
    let l=prompt("Enter price of laptop :");
    l=parseInt(l);
    console.log("Original Price : "+l)

    if(l>=0 && l<2500){
        discount=(0/100)*l;
        console.log("Discount Applicable :"+discount);
    }
    
    
    else if(l>=25001 && l<57000){
        discount=(2/100)*l;
        console.log("Discount Applicable :"+discount);
    }
    
    else if(l>=57001 && l<100000){
        discount=(7.5/100)*l;
        console.log("Discount Applicable :"+discount);
    }
    
    else
    {
        discount=(10/100)*l;
        console.log("Discount Applicable :"+discount);
    
        
    }
    let netAmount=l-discount;
      
    console.log('Net Amount is ' +netAmount);
}

function desktop(){
    let d=prompt("enter price of desktop :");
    console.log("Original Price : "+d)

    if(d>=0 && d<2500){
        discount=(5/100)*d;
        console.log("Discount Applicable :"+discount);
    }
    
    
    else if(d>=25001 && d<57000){
        discount=(7.5/100)*d;
        console.log("Discount Applicable :"+discount);
    }
    
    else if(d>=57001 && d<100000){
        discount=(10/100)*d;
        console.log("Discount Applicable :"+discount);
    }
    
    else
    {
        discount=(15/100)*d;
        console.log("Discount Applicable :"+discount);
    
        
    }
    let netAmount=d-discount;      
    console.log('Net Amount is ' +netAmount);
}