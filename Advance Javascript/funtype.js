//____________________________________________ simple function______________________________________________________

function fun(){
    console.log("Hello i am simple function");
}
fun();

// ________________________________________parameterised function______________________________________________

function main(y){
   let z=y+=++y + y-- + --y;
   console.log("value of z:",z);
}
main(8);

// ____________________________call back function_______________________________________________________

function add(a,b,c){
   console.log("Addition is:",a+b+c);
}
function sub(a,b,c){
    console.log("substraction is:",a-b-c);
 }
 function mul(a,b,c){
    console.log("multiplication is:",a*b*c);
 }
 function div(a,b,c){
    console.log("divide is:",a/b/c);
 }
//  calculator
 function cal(num1,num2,num3,mycalxy){

    mycalxy(num1,num2,num3);
 }
 cal(5,4,6,add)


