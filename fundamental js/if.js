a=prompt('amount of sales');
b=prompt('amount of target');

if (a>b){
    let c=a*10;
    document.write(c);
}
  else if (a<b){
    let val=a*b;
    document.write(val);
}
else if (a=b){
    let val1=a*5/b;
    document.write(val1);

}
else if (a>=b){
    let val2=b;
    document.write(val2);
}
else{
    document.write("sorry")
}
