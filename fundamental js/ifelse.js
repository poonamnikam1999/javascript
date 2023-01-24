sales=4500;
target=4000;

if (sales>target){

    let amt= sales*0.10;
    console.log(amt);
}

else if (sales<target){
    let amt1=sales*0.5;
    console.log(amt1);
}
 else if (sales>=target){
    let val=sales+500;
    console.log(val);
}

else if (sales=target){
    console.log("target completed")
}


else {
   console.log("sorry you are not allowed")
}




// conversion=implicit/explicit
let name="5";
let num=5;

// console.log(name*num)

//  let mult=(parseInt(name)+num);
//  console.log(mult);

let mult=Number(name)+num;
console.log(mult);

// let value=name===num;
// console.log(value);

