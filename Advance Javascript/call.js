// _________________call by value_______________________

function fun(a,b){
  console.log(a+b);
}
fun(4,5)


// ___________________call  by reference_______________________

function main(p){
   p.name="neha",
  p.sub="english"
}
let sai={
    name:"poonam",
    sub:"maths",
    result:"pass"
}
main(sai)
console.log(sai)

