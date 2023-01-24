function main(a,b,c){
 return av=(a+b+c)/3;
    
}
let ans=main(35,45,53);
console.log(+ans);


// Define by Expression:store a function inside the variable

let k=function fun(){

    let p=prompt("Enter the principal");
    console.log("Principal:"+p);

    let r=prompt("Enter the rate");
    console.log("Rate:"+r);

    let t=prompt("Enter the duration");
    console.log("Duration:"+t);

    si=p*r*t;
    console.log("Simple Interest"+si);

}
k();

