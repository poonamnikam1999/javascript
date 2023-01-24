// dom api :

async function fun(){
    return await fetch('https://faktoreapi.com/products?limit=5')
}

fun().then(res=>{console.log(res.json());
})
.catch(err=>{
    console.log("not valid",err);
})

// ==========================================================================================================


async function fun2(){
    return await fetch('http://fakestoreapi.com/products')
}
fun2().then(res=>{console.log(res.json());
})
.catch(err=>{console.log("not valid",err);
})


// ===============================================================================================================

async function fun3(){
    return await fetch('https://fakestoreapi.com/carts')
}
fun3().then(resolve=>{console.log(resolve.json());
})
.catch(err=>{console.log("not valid",err);
})

// ========================================================================================================

async function fan(){

    return await fetch('https://fakestoreapi.com/users');
}
fan().then(res=>{
    console.log(res.json());
})
.catch(err=>{
    console.log("not valid")
})