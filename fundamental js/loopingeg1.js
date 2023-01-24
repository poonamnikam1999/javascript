

let s=prompt("Enter the sales name");
console.log("sales name:"+s);
let p=prompt("Enter the price");
console.log("price:"+p);




//   if(s!="scrap"){
//      console.log("sales name is not identified");
//  }

//  else{
//     console.log("sales name:scrap");
//     scrap();
// }

// function scrap(){
    if(p>=30000  && s=="scrap"){
   let TCS=(10/100)*p;
    console.log("Tax Collected At Source:"+TCS);

    let netsales=p-TCS;
    console.log("netsales:"+netsales);
}

else{
    TCS=(20/100)*p;
    console.log("Tax Collected At Source:"+TCS);
}
// }
