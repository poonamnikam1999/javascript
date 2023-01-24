// simple function, parameterized function, return function...................................

// function fun(a,b){
//   return a*b;
// }
// let ans=fun(4,7);
// console.log(+ans);

function fun(y)
{
  return  y+=++y + y-- + --y; 

}
let ans=fun(8);
console.log(+ans);