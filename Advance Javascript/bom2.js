// ====== Browser Object Model (BOM)   :how to see the html elements in JS .


// alert("I am Alert box")

// let m=confirm("Do you want to delete your account")


// if(m){

//     console.log("you have deleted")
// }

// else{

//     console.log("not delete account ")
    
// }


// ===================================++++++++++++++++++++++++++++++==========================================

// ================= document object model (DOM) ========================================


let site=confirm("Click on ok to visit a website")

if(site){
    console.log("You have sucessfully open site");
    open('https://www.google.com/')
}

else{
    console.log("close the window");
    close()
}


setTimeout(fun , 5000)

function fun(){
   document.write("i am coming by 5 Seconds");
}

console.log(document.forms);

