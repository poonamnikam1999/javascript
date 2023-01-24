let TI=prompt("Enter the total income");
console.log("Total Income:" +TI);

if(TI>=50000){
    let TDS=(10/100)*TI;
    console.log("Tax Deducted At Source:"+TDS);

    let netsalary=TI-TDS;
    console.log("netsalary:"+netsalary);
}
else{
    console.log("TDS is not applicable for this salary");
}