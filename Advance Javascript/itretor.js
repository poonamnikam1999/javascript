//  iterator/iterable : (array , map ,weak) ==============================

let color=["red","blue","purple","black","pink"]

// console.log(abc);

for(let e of color){
console.log(e);

}

// ================================+++++++++++++++++++++++++++=========================================

// let imp={
  
// }
// console.log(i);it is not a iterable =======================================
// for(let i of imp){
//     console.log(i);
// }



// for -------------

for(a=10; a<=20; a=a*2)
{
 
    console.log("sam" +a)
}
// ===========================================+++++++++++++++++++++++============================================

for (b=30; b<=50; b=++b)
{
    console.log("sai :",b)
}

// =======================================++++ while loop ++++============================================

c=10;

while(c<=20)
{
    console.log("value of c is" +c);

    c+=2;
}

// =========================================+++++++++++++++++++++++++++++========================================

d=20;

while(d<=50){

    console.log("value of d :",d);

    d+=5;
}

// ===========================++++++++++++ do while +++++++++++++===================================================

d=30;
do
{

    console.log("d="+d);
    d+=4;
}
while(d<=50);

// ======================================+++++++++++++++++++++++++++++===============================================

p=20;
do{
    console.log("value of p :",p);

    p+=8;
}
while(p<=60);

// ================ for of :iterables :which object follows iterable protocol that data type we called iterable.

let obj={

    [Symbol.iterator]:function(){

        count=0;


        let sai={
            next:function()
            {
                count++;

                if(count==1){
                    return{value:"priya",done:false}
                }

                else if(count==2){
                    return{value:"payal",done:false}
                }

                else if(count==3){
                    return{value:"priyanka",done:false}
                }

                else if(count==4){
                    return{value:"pratiksha",done:false}
                }

                else{
                    return{value:"undefined",done:true}
                }           
            }
          
        }
         return sai;
    }

    
    }
    for(let o of obj){
        console.log(o);
    }

    // ===============================================++++++++++++++++++++++++++++==================================

    let sam={

        [Symbol.iterator]:function(){
             
            count=1;

            let sai={
                next:function(){
                    count++;

                    if(count==1){
                        return{value:"apple",done:false}
                    }

                    else if(count==2){
                        return{value:"watermelon",done:false}
                    }

                    else if(count==3){
                        return{value:"pineapple",done:false}
                    }

                    else if(count==4){
                        return{value:"cherry",done:false}
                    }

                    else if(count==5){
                        return{value:"banana",done:false}
                    }

                    else{
                        return{value:"none",done:true}
                    }

                }
            }
            return sai;
        }
    }
    for(let s of sam){
        console.log(s);
    }

    // ======================================+++++++++++++++++++++=============================================

    let fun={

        [Symbol.iterator]:function(){

            item=0;

            let back={
                next:function(){
                    item++;

                    if(item==1){
                        return{value:"pune",done:false}
                    }

                    else if(item==2){
                        return{value:"satara",done:false}
                    }

                    else if(item==3){
                        return{value:"nagpur",done:false}
                    }

                    else if(item==4){
                        return{value:"mumbai",done:false}
                    }

                    else if(item==5){
                        return{value:"goa",done:false}
                    }

                    else{
                        return{value:"undefine",done:true}
                    }


                }
            }
            return back;
        }
    }
    for(let f of fun){
        console.log(f);
    }

    // ================================+++++++++++++++++++++++++++============================================

    const ram={

        [Symbol.iterator]:function(){

            mark=0;

            const back={

                next:function(){
                 mark++;

                 if(mark==1){
                   return{value:"parrot",done:false}
                 }

                 else if(mark==2){
                    return{value:"camel",done:false}
                  }

                  else if(mark==3){
                    return{value:"lion",done:false}
                  }

                  else if(mark==4){
                    return{value:"deer",done:false}
                  }

                  else if(mark==5){
                    return{value:"tiger",done:false}
                  }

                  else if(mark==6){
                    return{value:"peacock",done:false}
                  }

                  else{
                    return{value:"undefine",done:true}
                  }

                }
            }
            return back;
        }
    }
    for(const r of ram){
        console.log(r);
    }