let tc=prompt("enter the total cost");
document.write('total cost is :' +tc);


if(tc<=2000){

    let d=(5/100)*tc;
    document.write("Discount is: "+d);
    let ap;
    ap=tc-d;
    document.write("Amount with Discount is :"+ap);


}
else if(tc>=2001 && tc<=5000){

    let d=(25/100)*tc;
    document.write("Discount is: "+d);
    let ap;
    ap=tc-d;
    document.write("Amount with Discount is :"+ap);

}

else if(tc>=5001 && tc<=10000){
let d=(35/100)*tc;
document.write("Discount is: "+d);
let ap;
    ap=tc-d;
    document.write("Amount with Discount is :"+ap);
}

else{
let d=(50/100)*tc;
document.write("Discount is: "+d);
let ap;
    ap=tc-d;
    document.write("Amount with Discount is :"+ap);
}



