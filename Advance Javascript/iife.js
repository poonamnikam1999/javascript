//  __________________________________IIFE:immidate invoked function expression___________________________

(  function menu(){

    console.log("hi i am immidate invoked function expression");
  
  }()
  
  )


//   ( function sam(){

//    let a=7;
//    b=a+=a++ + ++a + --a + a--;
//    console.log("value of b:",b);

//   }()

//   )


//   __________________________________ higher order function_________________________________________________________

// eg.1)
function main(){
    console.log("Hiiii i am higher order function");

    return function main1(){
        console.log("hii my name is main1");
    }
}
main()()

// eg.2)
function fun(){
    console.log("Hello");

    return function sam(){
         let y=8;
        y+=++y + y-- + --y; 
        console.log("value of y:",y);
    }
    
}
fun()()